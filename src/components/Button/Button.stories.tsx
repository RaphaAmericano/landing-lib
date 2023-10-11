import type { Meta, StoryObj } from "@storybook/react"
import Button from "./Button"
import { within } from "@testing-library/react"
import { expect } from "@storybook/jest"

const meta: Meta<typeof Button> = {
    title:"Button",
    component: Button,
}
type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        children: "Primary",
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const primaryButton = canvas.getByRole("button")
        await expect(primaryButton).toBeInTheDocument()
    }
}

export const Secondary: Story = {
    args: {
        ...Primary.args, 
        children: "Secondary",
        className: "inline-block py-2 px-4 text-blue font-bold no-underline"
    }
}

export const Active: Story = {
    args: {
        ...Primary.args, 
        children: "Secondary"
    }
}

export const Rounded: Story = {
    args: {
        ...Primary.args, 
        children: "Secondary"
    }
}

export default meta;