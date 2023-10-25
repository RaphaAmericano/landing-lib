import styled from "styled-components"
import clsx from "clsx"
import ContentBlockProps from "./ContentBlock.props"
const ContentBlockStyle = styled.div.attrs((attrs) => ({
    className: clsx(attrs.className, `flex flex-wrap`)
}))<ContentBlockProps>``;

export default ContentBlockStyle;