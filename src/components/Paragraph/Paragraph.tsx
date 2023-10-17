import React from "react"
import ParagraphStyle from "./Paragraph.styles"
import ParagraphProps from "./Paragraph.props";

const Paragraph = (props: ParagraphProps ) => {
    const { children, ...restProps } = props;
    return <ParagraphStyle {...restProps}>{children}</ParagraphStyle>
}

export default Paragraph