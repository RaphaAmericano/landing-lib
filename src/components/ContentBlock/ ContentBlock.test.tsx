/**
 * @jest-environment jsdom
 */

import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/react'
import * as stories from './ContentBlock.stories'

const { Basic } = composeStories(stories)

describe("ContentBlock test", () => {
    test("should render", () => {
        render(<Basic /> )
        const divElement = screen.getByRole('div')

        expect(divElement.textContent).toEqual(Basic.args!.children)
    })
})