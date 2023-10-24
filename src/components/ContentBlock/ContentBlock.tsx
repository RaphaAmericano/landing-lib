import React from "react"
import ContentBlockStyle from "./ContentBlock.styles"
import ContentBlockProps from "./ContentBlock.props";

const ContentBlock = (props: ContentBlockProps) => {
    const { children, ...restProps } = props;
    return <ContentBlockStyle {...restProps}>{children}</ContentBlockStyle>
}

export default ContentBlock;