import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginReactNative from "eslint-plugin-react-native";
import { defineConfig } from "eslint/config";
export default defineConfig([
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    ignores: [
      "metro.config.cjs",
      "babel.config.js",
      "app.config.js",
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 2021,
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: pluginReact,
      "react-native": pluginReactNative,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
    },
  },
  {
    files: ["metro.config.cjs", "babel.config.js", "app.config.js"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "script",
      },
    },
  },
]);
