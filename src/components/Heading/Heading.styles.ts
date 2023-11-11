import styled from "styled-components"
import clsx from "clsx"
import type { HeadingStyleProps, HeadingTag } from "./Heading.props"

function HeadingStyle(tag: HeadingTag){
    return styled[tag].attrs((attrs) => ({
            className: clsx(attrs.className, `font-bold leading-tight`)
        }))<HeadingStyleProps>``
}

export default HeadingStyle;