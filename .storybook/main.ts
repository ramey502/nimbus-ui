import path from 'path';
import { defineConfig, mergeConfig } from 'vite';

export default {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chromatic-com/storybook'
  ],

  viteFinal: async (config) => {
    return mergeConfig(
      config,
      defineConfig({
        resolve: {
          alias: {
            '@': path.resolve(__dirname, '../src'),
          },
        },
      }),
    );
  },

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
