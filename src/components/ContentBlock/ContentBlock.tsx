import React from "react"
import ContentBlockStyle from "./ContentBlock.styles"

const ContentBlock = (props: any) => {
    const { children } = props;
    return <ContentBlockStyle>{children}</ContentBlockStyle>
}

export default ContentBlock;