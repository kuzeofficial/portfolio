import Head from 'next/head';
import {useRouter} from 'next/router';
import {useState, useEffect} from 'react';
import {useTheme} from 'next-themes';
import NextLink from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faLaptopCode, faUser, faFileAlt, faHome } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

import Footer from '@/components/Footer';

export default function Container(props){
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme, setTheme} = useTheme()

    useEffect(() => setMounted(true), [])

    const {children, ...customMeta} = props 
    const router = useRouter()
    const meta = {
        title: 'Cristian Fonseca - Developer',
        description: `Front-end developer, I love Javascript and Python.`,
        image:'https://cristianfonseca.com/images/logo.jpg',
        type:'website',
        ...customMeta
    }

    return (
        <div className="bg-white dark:bg-black">
            <Head>
                <title>{meta.title}</title>
                <meta name="robots" content="follow, index"/>
                <meta content={meta.description} name="description"/>
                <meta property="og:url" content={`https://cristianfonseca.com${router.asPath}`} />
                <link rel="canonical" href={`https://cristianfonseca.com${router.asPath}`} />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Cristian Fonseca" />
                <meta property="og:description" content={meta.description}/>
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image}/>
                <meta name="twitter:site" content="@cristian_devk"/>
            </Head>
            <nav className="flex items-center justify-between w-full max-w-4xl  p-8 pt-4 pb-4  mx-auto my-0 text-gray-900 bg-white sticky-nav md:my-8 dark:bg-black bg-opacity-70 dark:text-gray-100">
                <a href="#skip" className="skip-nav">
                    Skip to Content
                </a>
                <button
                    aria-label="Toggle Dark Mode"
                    type="button"
                    className="w-10 h-10 p-3 bg-gray-200 rounded dark:bg-gray-800"
                    onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                >
                    {mounted && (
                        <svg 
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            stroke="currentColor"
                            className="w-4 h-4 text-gray-800 dark:text-gray-200"
                        >
                            {resolvedTheme === 'dark' ? (
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                              />
                            ) : (
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                              />
                            )}
                        </svg>
                    )}
                </button>
                <div>
                    <NextLink href="/">
                        <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">
                            <FontAwesomeIcon icon={faHome} className="dark:text-yellow-300 text-grey-900 mr-1"></FontAwesomeIcon>
                            Home
                        </a>
                    </NextLink>
                    <NextLink href="/resume">
                        <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">
                            <FontAwesomeIcon icon={faFileAlt} className="dark:text-yellow-300 text-grey-900 mr-1"></FontAwesomeIcon>
                            Resume
                        </a>
                    </NextLink>
                    <NextLink href="/about">
                        <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">
                        <FontAwesomeIcon icon={faUser} className="dark:text-yellow-300 mr-1"></FontAwesomeIcon>
                            About
                        </a>
                    </NextLink>
                    <NextLink href="/portfolio">
                        <a className="p-1 text-gray-900 sm:p-4 dark:text-gray-100">
                        <FontAwesomeIcon icon={faLaptopCode} className="dark:text-yellow-300 mr-1"></FontAwesomeIcon>
                            Portfolio
                        </a>
                    </NextLink>
                </div>
            </nav>
            
            <main
                id="skip"
                className="flex flex-col justify-center px-8 bg-white dark:bg-black"
            >
                {children}
                <Footer />
            </main>
        </div>
    )
}