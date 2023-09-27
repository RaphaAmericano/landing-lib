import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import ButtonStyle from "./Button.styles"
import ButtonProps from "./Button.props"

const Button = (props: ButtonProps, ref:ForwardedRef<HTMLButtonElement> ) => {
    return <ButtonStyle ref={ref} {...props} />
}

export default forwardRef(Button);