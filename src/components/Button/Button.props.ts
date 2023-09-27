import { ButtonHTMLAttributes } from "react"
export default interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    className?: string;
}