import Image from 'next/image'

function Card(props) {
    return (
        <div className="min-h-screen grid  place-items-center  font-mono mr-4">
            <div className="bg-white  h-80 w-64 rounded-md shadow-xl dark:shadow- rounded-xl">
                <div className="flex justify-center items-center leading-none">
                    <Image className="h-40 w-56 rounded-md shadow-2xl mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700" src={props.image} />
                </div>
                <div className="p-3">
                    <p className="block mb-1 font-semibold dark:text-black">{props.title}</p>
                    <p className="text-xs tracking-tighter text-gray-600">{props.description}</p>
                </div>
                <div className="flex justify-between items-center p-2">
                    <Image src="/images/logo2.jpg" alt="avatar"  className="rounded-full h-7"/>
                </div>
            </div>
        </div>
    )
}

export default Card
