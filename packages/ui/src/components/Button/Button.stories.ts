import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    style: "solid",
    text: "Button",
  },
  parameters: {
    pseudo: {
      default: true,
    },
  },
};

export const Outline: Story = {
  args: {
    style: "outline",
    text: "Button",
  },
  parameters: {
    pseudo: {
      default: true,
    },
  },
};
