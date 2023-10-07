import type { Meta, StoryObj } from "@storybook/react"
import Heading from "./Heading"
import { within } from "@testing-library/react"
import { expect } from "@storybook/jest"

const meta: Meta<typeof Heading> = {
    title:"Heading",
    component: Heading,
}
type Story = StoryObj<typeof Heading>

export const Heading1: Story = {
    args: {
        // label: "Primary",
        // className: "inline-block py-2 px-4 text-black font-bold no-underline"
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const primaryHeading = canvas.getByRole("h1")
        await expect(primaryHeading).toBeInTheDocument()
    }
}

export default meta;