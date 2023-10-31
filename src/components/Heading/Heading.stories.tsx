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
        children: "h1 exemplo",
        tag: "h1",
        className:""
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const primaryHeading = canvas.getByRole("h1")
        await expect(primaryHeading).toBeInTheDocument()
    }
}

export const Heading2: Story = {
    args: {
        ...Heading1.args,
        children: "h2 exemplo",
        tag: "h2",
        className:"text-3xl"
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const primaryHeading = canvas.getByRole("h2")
        await expect(primaryHeading).toBeInTheDocument()
    },
    parameters: {
        jest: "Heading.test.tsx"
    }
}

export const HeadingCenter: Story = {
    args: {
        children: "Title",
        className: "w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800",
        tag: "h2"
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const primaryHeading = canvas.getByRole("h2")
        await expect(primaryHeading).toBeInTheDocument()
    }
}

export default meta;