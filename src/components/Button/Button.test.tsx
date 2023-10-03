import { render, screen } from "@testing-library/react"
import { composeStories } from "@storybook/react"
import * as stories from "./Button.stories"

const { Primary } = composeStories(stories)

test("renders primary button with default values", () => {
    console.log(Primary)
    // render(<Primary />)
    const buttonElement = screen.getByRole("button")

    expect(buttonElement).not.toBeNull()    
})