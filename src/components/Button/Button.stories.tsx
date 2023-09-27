import type { Meta, StoryObj } from "@storybook/react"
import Button from "./Button"

const meta: Meta<typeof Button> = {
    title:"Button",
    component: Button,
}
type Story = StoryObj<typeof Button>

export const Primary: Story = {
    args: {
        label: "Primary",
        className: "inline-block py-2 px-4 text-black font-bold no-underline"
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