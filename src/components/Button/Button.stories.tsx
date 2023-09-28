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
        label: "Primary",
        className: "inline-block py-2 px-4 text-black font-bold no-underline"
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
        label: "Secondary"
    }
}

export const Active: Story = {
    args: {
        ...Primary.args, 
        label: "Secondary"
    }
}

export const Rounded: Story = {
    args: {
        ...Primary.args, 
        label: "Secondary"
    }
}

export default meta;