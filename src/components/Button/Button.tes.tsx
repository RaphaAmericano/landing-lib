
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';

import { composeStories } from '@storybook/react';
import * as stories from './Button.stories';

const { Active, Primary } = composeStories(stories);
test('Validates form', () => {
  render(<Primary />);

  const buttonElement = screen.getByRole('button', {
    name: 'Submit',
  });

  fireEvent.click(buttonElement);

  const isFormValid = screen.getByLabelText('invalid-form');
  expect(isFormValid).not.toBeInTheDocument();
});

describe("Button Test", () => {
    test("should be true", () => {
        const num = 1;
        expect(num).toBe(1)
    })
})