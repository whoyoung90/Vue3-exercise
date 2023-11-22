/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: "2022",
    sourceType: "module",
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  env: {
    "vue/setup-compiler-macros": true,
  },
  rules: {
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": "off",
    "vue/multi-word-component-names": "off",
    "vue/comment-directive": "off",
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        // trailingComma: "all",
        printWidth: 80,
        bracketSpacing: true,
        // arrowParens: "avoid",
        endOfLine: "auto", // 한줄 추가
      },
    ],
  },
};
