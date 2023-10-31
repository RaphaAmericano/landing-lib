import type { Meta, StoryObj } from "@storybook/react"
import ContentBlock from "./ContentBlock"
import { within } from "@testing-library/react"
import { expect } from "@storybook/jest"

const meta: Meta<typeof ContentBlock> = {
    title: "ContentBlock",
    component: ContentBlock
}
type Story = StoryObj<typeof ContentBlock>

export const Basic:Story = {
    args: {
        children: "Teste component"
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)
        const primaryDiv = canvas.getByRole("div")
        await expect(primaryDiv).toBeInTheDocument()
    },
    parameters: {
        jest: "ContentBlock.test.tsx"
    }
}

export default meta;