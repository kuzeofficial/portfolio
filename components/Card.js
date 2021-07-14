
function Card(props) {
    return (
        <div className="grid  place-items-center  font-mono m-4 pt-10">
            <div className="bg-white  h-80 w-64 rounded-md shadow-xl dark:shadow- rounded-xl">
                <div className="flex justify-center items-center leading-none">
                    <img className="h-40 w-56 rounded-md shadow-2xl mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700" src={props.image} />
                </div>
                <div className="p-3">
                    <p className="block mb-1 font-semibold dark:text-black">{props.title}</p>
                    <p className="text-xs tracking-tighter text-gray-600">{props.description}</p>
                </div>
                <div className="flex justify-between items-center p-2">
                    <img src="/images/logo2.webp" alt="avatar"  className="rounded-full h-7"/>
                    <div className="flex">
                        <button href={props.code} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded">
                            Code
                        </button>
                        <button href={props.live} className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-2 ml-2 border border-red-500 hover:border-transparent rounded">
                            Live
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
