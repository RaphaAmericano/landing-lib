import styled from "styled-components"
import type { ParagraphStyleProps } from "./Paragraph.props"

const  ParagraphStyle = styled.p.attrs((attrs) => ({
    className: `my-4 text-5xl font-bold leading-tight ${attrs.className}`
}))<ParagraphStyleProps>``

export default ParagraphStyle;