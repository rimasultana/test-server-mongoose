import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [".node_modules/*", "dist/*"],
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser }, rules: {
      eqeqeq: "off",
      "no-unused-vars": "error",
      "prefer-const": ["warn"],
      // "no-console": "warn",
      "no-undef": 'error'
    }
  },
  {
    files: ["**/*.js"], languageOptions: {
      sourceType: "script", globals: {
        process: "readonly",
        require: "readonly",
        port: "readonly",
      },
    },
  },
  tseslint.configs.recommended,
]);
