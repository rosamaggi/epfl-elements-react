import type { Preview } from "@storybook/react";
import '../src/stories/assets/elements-dist-frontend/css/elements.css';
import '../src/stories/assets/elements-dist-frontend/css/vendors.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
