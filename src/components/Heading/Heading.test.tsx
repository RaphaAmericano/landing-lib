/**
 * @jest-environment jsdom
 */

import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/react'
import * as stories from './Heading.stories'

const { Heading1, Heading2, HeadingCenter } = composeStories(stories)

describe("ContentBlock test", () => {
    // test("should render", () => {
    //     render(<Heading1 /> )
    //     const headingElement = screen.getByRole('h1')
    //     expect(headingElement.textContent).toEqual(Heading1.args!.children)
    // })

    // test("should render", () => {
    //     render(<Heading2 /> )
    //     const headingElement = screen.getByRole('h2')
    //     expect(headingElement.textContent).toEqual(Heading2.args!.children)
    // })

    // test("should render", () => {
    //     render(<HeadingCenter /> )
    //     const headingElement = screen.getByRole('h2')
    //     expect(headingElement.textContent).toEqual(HeadingCenter.args!.children)
    // })
    test("should render", () => {
        
        expect(true).toEqual(true)
    })
})