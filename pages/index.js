import Link from 'next/link';
import Container from '@/components/Container'
import Typewriter from 'typewriter-effect';
import Contact from '@/components/Contact'
export default function Home() {
    return (
        <Container>
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <div className="flex flex-col  grid grid-cols-1  pb-16 sm:grid-cols-2">
                    <div className="flex flex-col space-y-4">
                        <div className="w-6/12 sm:w-6/12 px-3 ">
                            <img src="/images/logo.webp" alt="..." className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" />
                        </div>
                    </div>
                    <div className="flex flex-row space-y-4 text-yellow-300">
                    <Typewriter 
                        onInit={(typewriter) => {
                            typewriter.typeString('Javascript💛 Python💚  React⚛️ Next🔺 TailwindCSS💨 Bootstrap🅱️')
                            .pauseFor(2500)
                            .start();
                        }}
                        />
                    </div>
                </div>               
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-6 text-black dark:text-white">
                Hey, I’m Cristian Fonseca
                </h1>
                <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
               
Hello, welcome to my personal website, my name is Cristian and I am a cuban web developer with more than 4 years of experience, if you are interested in hiring me 
                –&nbsp;
                <Link href="/contact">
                    <a>contact me</a>
                </Link>
                {" while you're here or "}
                <Link href="/about">
                    <a className="text-green-200">learn more about me.</a>
                </Link>
                </h2>
                <button className="bg-yellow-200 dark:text-dark hover:bg-yellow-400 text-gray-700 font-semibold py-2 px-4   rounded shadow ring-4 ring-yellow-500 ring-opacity-50">
                    Contact
                </button>
                <Contact/>
            </div>
        </Container>
    )
}