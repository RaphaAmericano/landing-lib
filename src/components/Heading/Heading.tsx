import React from "react"
import HeadingProps from "./Heading.props"
import HeadingStyle from "./Heading.styles"

const Heading = (props: HeadingProps ) => {
    const { tag, children, ...restProps } = props;
    const HeadingComponent = HeadingStyle(tag); 
    return <HeadingComponent {...restProps}>{children}</HeadingComponent>
}

export default Heading