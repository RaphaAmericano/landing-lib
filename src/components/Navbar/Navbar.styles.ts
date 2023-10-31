import styled from "styled-components"
import clsx from "clsx"
import NavbarProps from "./Navbar.props"
const NavbarStyle = styled.nav.attrs((attrs) => ({
    className: clsx(`nav`, attrs.className  )  
}))<NavbarProps>``

export default NavbarStyle;