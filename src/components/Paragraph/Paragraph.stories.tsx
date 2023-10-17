import type { Meta, StoryObj } from "@storybook/react"
import Paragraph from "./Paragraph"
import { within } from "@testing-library/react"
import { expect } from "@storybook/jest"

const meta: Meta<typeof Paragraph> = {
    title:"Paragraph",
    component: Paragraph,
}
type Story = StoryObj<typeof Paragraph>

export const ParagraphBasic: Story = {
    args: {
        children: "lorem ipsum",
        className:""
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const primaryHeading = canvas.getByRole("p")
        await expect(primaryHeading).toBeInTheDocument()
    }
}

export default meta;