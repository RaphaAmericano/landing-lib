/**
 * @jest-environment jsdom
 */

import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import * as stories from './Button.stories';

const { Active, Primary } = composeStories(stories);

describe("Button Test", () => {
  test('Validates form', () => {
      render(<Primary />);
      const buttonElement = screen.getByRole('button', {
        name: 'Primary',
      });
      
      
      // fireEvent.click(buttonElement);
      const childrenText = screen.getByText("Primary") 
      // const isFormValid = screen.getByLabelText('invalid-form');
      // expect(childrenText).not.toBeInTheDocument();
    });

    test("shoud children be text = 'Primary'", () => {
      const rendered = render(<Primary />);
      const { container } = rendered;
      expect(container.textContent).toEqual("Primary")
    } )

    test("shoud children be text", () => {
      render(<Primary />);
      const buttonElement = screen.getByRole('button');
      console.log(buttonElement)
      expect(buttonElement.textContent).toEqual(Primary.args!.children)
    } )

})