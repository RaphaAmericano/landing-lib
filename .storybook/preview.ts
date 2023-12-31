import type { Preview } from "@storybook/react";
import "../src/tailwind.css";

import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { createGlobalStyle } from 'styled-components';
import { withTests } from "@storybook/addon-jest"
import results from "../.jest-test-results.json"

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles
    }),
    withTests({ results })
  ],
};

export default preview;
