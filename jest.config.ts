import type { Config } from '@jest/types';

export function ConfigBase(): Config.InitialOptions {
  return {
    clearMocks: true,
    moduleDirectories: ['node_modules', 'src'],
    moduleFileExtensions: ['js', 'json', 'ts'],
    moduleNameMapper: {
      '^src/(.*)$': '<rootDir>/src/$1',
    },
    rootDir: '..',
    testEnvironment: 'node',
    transform: {
      '^.+\\.(t|j)s$': 'ts-jest',
    },
    collectCoverageFrom: ['src/**/*.(t|j)s'],
    coveragePathIgnorePatterns: ['\\.spec\\.ts$'],
    coverageDirectory: './coverage',
    testRegex: ['\\.spec\\.ts$'],
  };
}

const config = ConfigBase();
export default config;
