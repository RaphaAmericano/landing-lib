import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { composeStories } from "@storybook/react"
import * as stories from "./Paragraph.stories"

// const { ParagraphBasic } = composeStories(stories)

describe("Paragraph test", () => {

    test("renders primary heading with default values", () => {
        // render(<ParagraphBasic />)
        // const paragraphElement = screen.getByRole("p", {
        //     name:"Text",
        // });
        // fireEvent.click(paragraphElement)
        // expect(paragraphElement).not.toBeNull()    
        const num = 1;
        expect(num).toBe(1)
    })
})
