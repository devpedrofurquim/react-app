// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { TextDecoder, TextEncoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

module.exports = {
    // preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFiles: ['<rootDir>/setup.jest.js'],
    globals: {
      Uint8Array: Uint8Array,
    },
    transformIgnorePatterns: [`/node_modules/(?!${module})`],
    transform: {
      '^.+.[tj]sx?$': [
        'babel-jest',
      ],
    },
  };