import React, { useEffect, useState } from 'react'

const Categories = ({ categories }) => {
    const [selected, setselected] = useState("")
    const [joke, setjoke] = useState("")

    const fetchjoke = async () => {
        const fetchdata = await fetch(`https://api.chucknorris.io/jokes/random?category=${selected}`)
        const jsondata = await fetchdata.json()
        const jokes = jsondata.value
        setjoke(jokes);
    }
    useEffect(() => {
        fetchjoke()
    }, [selected,])

    return (
        <>
            <div className="grid grid-cols-4  bg-blue-600 text-white text-lg   gap-x-3 gap-y-6 ">
                {categories.map((categorie, index) => (
                    <div
                        key={index}
                        className={`bg-gray-500 text-center m-3 rounded-md hover:bg-green-700   capitalize text-white text-lg  cursor-pointer ${selected === categorie && "bg-green-700"} p-3`}
                        onClick={() => {
                            setselected(categorie)

                        }}>{categorie}</div>

                ))}
            </div>
            {selected && <div className=" ">
                <h1 className="text-center text-xl text-white font-bold">Selected Categories :<span className="text-red-400"> {selected} </span></h1>
                <div className="w-fit border border-black m-auto mt-6 shadow-xl">
                    <p className="text-center font-semibold text-blue-400  text-lg m-5">{joke}</p>

                    <button className="px-4 py-2 bg-blue-700  my-2 mx-3 cursor-pointer  rounded-md " onClick={() => { fetchjoke() }}>next joke</button>
                </div>

            </div>}


        </>
    )
}

export default Categories