/**
 * @jest-environment jsdom
 */

import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/react'
import * as stories from './Paragraph.stories'

const { ParagraphBasic, ParagraphSmall } = composeStories(stories)

describe("Navbar test", () => {
    test("should render", async () => {
        render(<ParagraphBasic /> )
        // await screen.findByRole("nav")
        // const headingElement = screen.getByRole('nav')
        expect(screen.findByRole("p")).toBeTruthy()
    })
})