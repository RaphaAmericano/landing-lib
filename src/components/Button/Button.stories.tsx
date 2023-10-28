import type { Meta, StoryObj } from "@storybook/react"
import Button from "./Button"
import { within } from "@testing-library/react"
import { expect } from "@storybook/jest"


const meta: Meta<typeof Button> = {
    title:"Button",
    component: Button
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
    },
    parameters: {
        jest: "Button.test.tsx"
    }
}

export const Active: Story = {
    args: {
        ...Primary.args, 
        children: "Secondary",
        className: "inline-block py-2 px-4 text-black font-bold no-underline"
    }
}

export const Rounded: Story = {
    args: {
        ...Primary.args, 
        children: "Secondary",
        className:"mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75"
    }
}

export const Filled: Story = {
    args: {
        ...Primary.args, 
        children: "Filled",
        className:"mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg"
    }
}

export default meta;