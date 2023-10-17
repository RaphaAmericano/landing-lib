import { render, screen } from "@testing-library/react"
import { composeStories } from "@storybook/react"
import * as stories from "./Paragraph.stories"

const { ParagraphBasic   } = composeStories(stories)

test("renders primary heaudn with default values", () => {
    console.log(ParagraphBasic)
    // render(<Primary />)
    const headingElement = screen.getByRole("p")

    expect(headingElement).not.toBeNull()    
})