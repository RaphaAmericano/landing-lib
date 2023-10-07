import React from "react"
import HeadingProps from "./Heading.props"
import HeadingStyle from "./Heading.styles"

const Heading = (props: HeadingProps ) => {
    const { text, ...restProps } = props 
    return <HeadingStyle {...restProps}>{text}</HeadingStyle>
}

export default Heading