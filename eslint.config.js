import globals from "globals"
import js from "@eslint/js"
import ts from 'typescript-eslint'

// {
//     "plugins": [
//         "@typescript-eslint"
//     ],
//     "extends": [
//         "eslint:recommended",
//         "plugin:@typescript-eslint/recommended"
//     ],
//     "parser": "@typescript-eslint/parser",
//     "rules": {
//         "semi": [
//             "error", "never"
//         ]
//     }
// }

export default ts.config(
    js.configs.recommended,
    ...ts.configs.recommended,
    {
        languageOptions: {
            globals: globals.node,
        },
    },
)
