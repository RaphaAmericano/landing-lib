/**
 * @jest-environment jsdom
 */

import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import * as stories from './Container.stories';

const { Primary } = composeStories(stories)

describe("Container tests", () => {
    test("should be a html div element", () => {
        const rendered = render(<Primary />)
        const { container } = rendered;
        expect(container.textContent).toEqual("Primary")
    })
})