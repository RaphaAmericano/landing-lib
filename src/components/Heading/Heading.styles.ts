import styled from "styled-components"
import type { HeadingStyleProps, HeadingTag } from "./Heading.props"

function HeadingStyle(tag: HeadingTag){
    return styled[tag].attrs((attrs) => ({
            className: attrs.className ? `my-4 text-5xl font-bold leading-tight ${attrs.className}` : `my-4 text-5xl font-bold leading-tight`
        }))<HeadingStyleProps>``
}

export default HeadingStyle;