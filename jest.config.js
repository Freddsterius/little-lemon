module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleFileExtensions: ["js", "jsx"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(png|jpg|jpeg|gif|svg|eot|otf|ttf|woff|woff2|mp4|webm)$":
      "<rootDir>/__mocks__/fileMock.js",
    "^react-router-dom$": "<rootDir>/__mocks__/react-router-dom.js",
  },
};
