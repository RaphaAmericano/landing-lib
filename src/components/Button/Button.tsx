import React from "react"

export interface ButtonProps {
    label: string
}

const Button = ({ label }: ButtonProps ) => {
    return <button 
        className="inline-flex items-center rounded-md bg-red px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
    >{label}</button>
}

export default Button;