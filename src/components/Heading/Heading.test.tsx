import { render, screen } from "@testing-library/react"
import { composeStories } from "@storybook/react"
import * as stories from "./Heading.stories"

const { Heading1 } = composeStories(stories)

test("renders primary heaudn with default values", () => {
    console.log(Heading1)
    // render(<Primary />)
    const headingElement = screen.getByRole("h1")

    expect(headingElement).not.toBeNull()    
})