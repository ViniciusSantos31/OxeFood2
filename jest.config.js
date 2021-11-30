module.exports = {
  testPathIgnorePatterns: ["/node_modules/"],
  setupFiles: ["<rootDir>/src/tests/setupTests.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
  },
  testEnvironment: "jsdom",
  testMatch: [".(spec|test).[tj]s?(x)"],
};
