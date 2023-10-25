import styled from "styled-components"
import clsx from "clsx"
import ContainerProps from "./Container.props"
const ContainerStyle = styled.div.attrs((attrs) => ({
    className: clsx(`container`, attrs.className  )  
}))<ContainerProps>``

export default ContainerStyle;