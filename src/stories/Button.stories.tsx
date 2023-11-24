import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import featherIcons from "./assets/elements-dist-frontend/icons/feather-sprite.svg";
import React from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render() {
    return <Button>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref={`${featherIcons}#save`} />
      </svg>
      <span style={{ marginLeft: '5px' }}>Label</span>
    </Button>
  }
};

export const Secondary: Story = {
  args: {
    primary: false,
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};
