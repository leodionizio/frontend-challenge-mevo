module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/src/__mocks__/fileMock.ts",
    "^@ark-ui/react/(.*)$": [
      "<rootDir>/node_modules/@ark-ui/react/dist/components/$1/index.cjs",
      "<rootDir>/node_modules/@ark-ui/react/dist/components/$1.cjs",
      "<rootDir>/node_modules/@ark-ui/react/dist/providers/$1/index.cjs",
      "<rootDir>/node_modules/@ark-ui/react/dist/providers/$1.cjs",
    ],
    "^components(.*)$": "<rootDir>/src/components$1",
    "^contexts(.*)$": "<rootDir>/src/contexts$1",
    "^hooks(.*)$": "<rootDir>/src/hooks$1",
    "^modules(.*)$": "<rootDir>/src/modules$1",
    "^types(.*)$": "<rootDir>/src/types$1",
    "^utils(.*)$": "<rootDir>/src/utils$1",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!@ark-ui|@chakra-ui)/"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],
};
