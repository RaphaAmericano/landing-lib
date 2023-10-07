import { ButtonHTMLAttributes } from "react"
import styled from "styled-components"
import ButtonProps from "./Button.props"

const ButtonStyle = styled.button.attrs((attrs) => {
    console.log(attrs)
    // return {
    //     ...attrs,
    //     className: ["inline-block py-2 px-4 text-black font-bold no-underline", attrs.className] 
    // }
    return attrs
    // return {...attrs, className: "inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" }
})
<ButtonProps>`` 

export default ButtonStyle;