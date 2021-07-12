module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  refs: {
    'design-system': {
      title: 'My design system',
      //👇 The url provided by Chromatic when it was deployed
      url: 'https://60e8287561fef20049e02f25-tookjytzdx.chromatic.com',
    },
  },
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
};
