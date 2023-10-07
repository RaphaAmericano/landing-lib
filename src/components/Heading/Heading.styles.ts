import styled from "styled-components"
import HeadingProps from "./Heading.props"
type HeadingTag = "h1" | "h2" | "h3" | "h4"| "h5" | "h6"
// interface StyledHeadingProps {
//     as: HeadingTag;
// }
// function HeadingComponent<T extends StyledHeadingProps>({ as } : T ){
//    const StyledComponent = styled[as]
//    return StyledComponent
// }

const HeadingStyle = styled.h1.attrs((attrs) => {
    return attrs
})<HeadingProps>``

export default HeadingStyle;