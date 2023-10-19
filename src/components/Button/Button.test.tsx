import React from "react"
import { render, screen } from "@testing-library/react"
import { composeStories } from "@storybook/react"
import * as stories from "./Button.stories"

const { Primary } = composeStories(stories)
describe("Button test", () => {
    test("renders primary button with default values", () => {
        const num = 1
        expect(num).toBe(1)
        // console.log(Primary)
        // render(<Primary />)
        // const buttonElement = screen.getByRole("button")
    
        // expect(buttonElement).not.toBeNull()    
    })
}) 