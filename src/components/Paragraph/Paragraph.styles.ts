import styled from "styled-components"
import clsx from "clsx"
import type { ParagraphStyleProps } from "./Paragraph.props"

const  ParagraphStyle = styled.p.attrs((attrs) => ({
    className: clsx(`leading-normal text-2xl mb-8`, attrs.className)
}))<ParagraphStyleProps>``

export default ParagraphStyle;