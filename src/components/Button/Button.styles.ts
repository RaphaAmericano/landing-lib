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
})
<ButtonProps>`` 

export default ButtonStyle;