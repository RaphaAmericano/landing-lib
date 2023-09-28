import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"
import ButtonStyle from "./Button.styles"
import ButtonProps from "./Button.props"

const Button = (props: ButtonProps, ref:ForwardedRef<HTMLButtonElement> ) => {
    const { children, ...restProps } = props;
    return <ButtonStyle ref={ref} {...restProps}>{children}</ButtonStyle>
}

export default forwardRef(Button);