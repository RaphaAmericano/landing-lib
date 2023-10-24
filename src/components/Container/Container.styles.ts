import styled from "styled-components"
import ContainerProps from "./Container.props"
const ContainerStyle = styled.div.attrs((attrs) => ({
    className: attrs.className ? `container ${attrs.className}` : `container` 
}))<ContainerProps>``

export default ContainerStyle;