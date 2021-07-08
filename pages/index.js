import Link from 'next/link';
import Container from '@/components/Container'
export default function Home() {
    return (
        <Container>
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <div class="w-6/12 sm:w-4/12 px-1">
                    <img src="/images/logo2.png" alt="..." class="shadow-lg rounded-full max-w-full h-auto align-middle border-none" />
                </div>
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-6 text-black dark:text-white">
                Hey, I’m Cristian Fonseca
                </h1>
                <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
                Hello, welcome to my personal website, here you will find many things about web development and about my career, if you are interested in hiring me, do not hesitate to 
                –&nbsp;
                <Link href="/contact">
                    <a>contact me</a>
                </Link>
                {" while you're here or "}
                <Link href="/about">
                    <a className="text-green-200">learn more about me.</a>
                </Link>
                </h2>
                <button className="bg-yellow-200 dark:text-dark hover:bg-yellow-400 text-gray-700 font-semibold py-2 px-4  border border-gray-500 rounded shadow">
                    Contact
                </button>
            </div>
        </Container>
    )
}
