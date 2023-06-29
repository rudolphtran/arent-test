module.exports = {
	roots: ['<rootDir>/src'],
	transform: {
	  '^.+\\.tsx?$': 'ts-jest',
	},
	testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	setupFiles: ['reflect-metadata'],
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
	testEnvironment: 'jest-environment-jsdom',
};