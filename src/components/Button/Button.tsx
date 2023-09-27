import React from "react"

export interface ButtonProps {
    label: string
}

const Button = ({ label }: ButtonProps ) => {
    return <button 
        className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
    >{label}</button>
}

export default Button;