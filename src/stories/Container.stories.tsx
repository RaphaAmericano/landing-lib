import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Container from "../components/Container";
import ContentBlock from "../components/ContentBlock";
import Heading from "../components/Heading";
import { within } from "@testing-library/react";
import { expect } from "@storybook/jest";
import Paragraph from "../components/Paragraph";

const meta: Meta<typeof Container> = {
  title: "pages/Container",
  component: Container,
};
type Story = StoryObj<typeof Container>;

export const Basic: Story = {
  args: {
    className:"max-w-5xl mx-auto m-8",
    children: (
      <>
        <ContentBlock>
          <div className="w-5/6 sm:w-1/2 p6">
            <Heading tag="h3">Lorem Ipsum</Heading>
            <Paragraph className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
              ipsum eu nunc commodo posuere et sit amet ligula.
            </Paragraph>
          </div>
        </ContentBlock>
        <ContentBlock>
          <div className="w-full sm:w-1/2 p-6">
            <img src="https://placehold.co/464x265" />
          </div>
        </ContentBlock>
      </>
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const primaryDiv = canvas.getByRole("div");
    await expect(primaryDiv).toBeInTheDocument();
  },
  decorators:[
    (Story) => (
      <section className="bg-white border-b py-8">
        <Story />
      </section>
    )
  ]
};

export const Reverse: Story = {
  ...Basic,
  args: {
    className: "flex-col-reverse sm:flex-row",
    children: (
      <>
        <div className="w-5/6 sm:w-1/2 p6">
          <Heading tag="h3">Lorem Ipsum</Heading>
          <Paragraph className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
            ipsum eu nunc commodo posuere et sit amet ligula.
          </Paragraph>
        </div>
        <div className="w-full sm:w-1/2 p-6">
          <img src="https://placehold.co/464x265/orange/white" />
        </div>
      </>
    ),
  },
};

export default meta;
