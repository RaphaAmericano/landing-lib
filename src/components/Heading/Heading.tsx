import React from "react"
import HeadingProps from "./Heading.props"
import HeadingStyle from "./Heading.styles"

const Heading = (props: HeadingProps ) => {
    const { text, ...restProps } = props; 
    return <h1 {...restProps}>{text}</h1>
}

export default Heading