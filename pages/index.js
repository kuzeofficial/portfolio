import Link from 'next/link';
import Container from '@/components/Container'
export default function Home() {
    return (
        <Container>
            <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
                Hey, I’m Cristian Fonseca
                </h1>
                <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
                I'm a developer, writer, and creator. I work as the Head of Developer
                Relations at Vercel. You’ve found my personal slice of the internet
                –&nbsp;
                <Link href="/guestbook">
                    <a>sign my guestbook</a>
                </Link>
                {" while you're here or "}
                <Link href="/about">
                    <a>learn more about me.</a>
                </Link>
                </h2>
                <button className="bg-yellow-200 dark:text-dark hover:bg-yellow-400 text-gray-700 font-semibold py-2 px-4  border border-gray-500 rounded shadow">
                    Contact
                </button>
            </div>
        </Container>
    )
}
