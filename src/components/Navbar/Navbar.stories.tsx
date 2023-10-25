import type { Meta, StoryObj } from "@storybook/react"
import Navbar from "./Navbar"
import { within } from "@testing-library/react"
import { expect } from "@storybook/jest"

const meta: Meta<typeof Navbar> = {
    title:"Navbar",
    component: Navbar
}
type Story = StoryObj<typeof Navbar>

export const Primary: Story = {
    args: {
        children: "Primary",
        className: "bg-blue"
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const primaryNavbar = canvas.getByRole("section")
        await expect(primaryNavbar).toBeInTheDocument()
    },
    // parameters: {
    //     jest: "Navbar.test.ts"
    // }
}

export default meta;