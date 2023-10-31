/**
 * @jest-environment jsdom
 */

import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/react'
import * as stories from './Button.stories'

const { Active, Primary, Click } = composeStories(stories)

describe("Button Test", () => {
  test('Validates form', () => {
      render(<Primary />)
      const buttonElement = screen.getByRole('button', {
        name: 'Primary',
      })
      
      
      // fireEvent.click(buttonElement);
      const childrenText = screen.getByText("Primary") 
      // const isFormValid = screen.getByLabelText('invalid-form');
      // expect(childrenText).not.toBeInTheDocument();
    });

    test("should children be text = 'Primary'", () => {
      const rendered = render(<Primary />)
      const { container } = rendered
      expect(container.textContent).toEqual("Primary")
    } )

    test("should children be text", () => {
      render(<Primary />)
      const buttonElement = screen.getByRole('button')
      expect(buttonElement.textContent).toEqual(Primary.args!.children)
    } )
})