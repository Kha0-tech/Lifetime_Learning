/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js"],

  transform: {
    "^.+\\.tsx?$": "ts-jest", // ✅ Fixed regex to match `.ts` & `.tsx` files correctly
  },
};
