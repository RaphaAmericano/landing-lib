import { HTMLProps, ReactNode } from "react"

export default interface ContainerProps extends HTMLProps<HTMLDivElement> {
    children:  ReactNode
}
