import React from "react"
import NavbarStyle from "./Navbar.styles"
import NavbarProps from "./Navbar.props"

const Navbar = (props: NavbarProps ) => {
    const { children, ...restProps } = props;
    return <NavbarStyle {...restProps}>{children}</NavbarStyle>
}

export default Navbar;