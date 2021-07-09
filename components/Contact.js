import React, {useState, useEffect} from 'react'

export default function Contact() {
    return (
        <div className=" max-w-6xl  py-20 px-12 lg:px-24  mb-24">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-6 text-black dark:text-white text-center">Contact </h1>
            <form>
                <div className="rounded pt-6 pb-8 mb-4 flex flex-col">
                    <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                            <label htmlFor="name" className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                                Name
                            </label>
                            <input id="name" type="text" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" placeholder="Miguel Hernandez" />
                        </div>
                        <div className="md:w-1/2 px-3">
                            <label htmlFor="email" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Email Address</label>
                            <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="email" type="email" placeholder="miguel@devhern.com" />
                            <div>
                                <span className="text-red-500 text-xs italic">
                                    Please Fill out this field
                                </span>
                            </div>
                        </div>
                        </div>
                        <div className="-mx-3 md:flex mb-6">
                        <div className="md:w-full px-3">
                            <label htmlFor="description" className="uppercase tracking-wide text-black text-xs font-bold mb-2">Description Proposal</label>
                            <textarea id="description" className="w-full bg-gray-200 text-black  border-gray-200 rounded py-3 px-4 mb-3 resize-none border rounded-md" />
                        </div>
                    </div>
                    <button className="bg-yellow-200 dark:text-dark hover:bg-yellow-400 text-gray-700 font-semibold py-2 px-4  ring-4 ring-yellow-500 ring-opacity-50 rounded shadow">
                        Send
                    </button>
                </div>
            </form>
        </div>
    )
}
