const vue = require('@vitejs/plugin-vue');

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    // Ensure Vue plugin is present for handling .vue files from workspace packages
    const hasVuePlugin = config.plugins?.some(
      plugin => plugin && plugin.name === 'vite:vue'
    );

    return {
      ...config,
      plugins: hasVuePlugin ? config.plugins : [...(config.plugins || []), vue()],
      css: {
        postcss: {
          plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
          ],
        },
      },
    };
  },
};

export default config;