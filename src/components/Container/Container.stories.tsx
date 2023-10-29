import type { Meta, StoryObj } from "@storybook/react"
import Container from "./Container"
import { within } from "@testing-library/react"
import { expect } from "@storybook/jest"

const meta: Meta<typeof Container> = {
    title:"Container",
    component: Container
}
type Story = StoryObj<typeof Container>

export const Primary: Story = {
    args: {
        children: "Primary",
        className: "bg-blue"
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const primaryContainer = canvas.getByRole("div")
        await expect(primaryContainer).toBeInTheDocument()
    },
    parameters: {
        jest: "Container.test.tsx"
    }
}

export default meta;