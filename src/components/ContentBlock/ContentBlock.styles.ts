import styled from "styled-components"
import ContentBlockProps from "./ContentBlock.props";
const ContentBlockStyle = styled.div.attrs((attrs) => ({
    className: "flex flex-wrap"
}))<ContentBlockProps>``;

export default ContentBlockStyle;