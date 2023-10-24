import React from "react"
import ContainerStyle from "./Container.styles"
import ContainerProps from "./Container.props"

const Container = (props: ContainerProps ) => {
    const { children, ...restProps } = props;
    return <ContainerStyle {...restProps}>{children}</ContainerStyle>
}

export default Container;