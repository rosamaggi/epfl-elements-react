import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';
import featherIcons from "../assets/elements-dist-frontend/icons/feather-sprite.svg";
import React from "react";
import {render} from "react-dom";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Molecules/Button',
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
  args: {
    primary: true,
    children: [
      <svg key="icon" className="icon" aria-hidden="true">
        <use xlinkHref={`${featherIcons}#save`} />
      </svg>,
      <span key="label" style={{ marginLeft: '5px' }}>Primary</span>,
    ]
  }
};

export const Secondary: Story = {
  args: {
    primary: false,
    children: [
      <svg key="icon" className="icon" aria-hidden="true">
        <use xlinkHref={`${featherIcons}#save`} />
      </svg>,
      <span key="label" style={{ marginLeft: '5px' }}>Secondary</span>,
    ]
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    children: [
      <svg key="icon" className="icon" aria-hidden="true">
        <use xlinkHref={`${featherIcons}#save`} />
      </svg>,
      <span key="label" style={{ marginLeft: '5px' }}>Large</span>,
    ]
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: [
      <svg key="icon" className="icon" aria-hidden="true">
        <use xlinkHref={`${featherIcons}#save`} />
      </svg>,
      <span key="label" style={{ marginLeft: '5px' }}>Small</span>,
    ]
  },
};

export const Icon: Story = {
  args: {
    size: 'icon',
    iconName: '#save'
  },
};
