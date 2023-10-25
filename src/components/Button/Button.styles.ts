import styled from "styled-components"
import clsx from "clsx"
import ButtonProps from "./Button.props"
const ButtonStyle = styled.button.attrs((attrs) => ({
  className: clsx(`inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4`, attrs.className )
}))<ButtonProps>``;

export default ButtonStyle;