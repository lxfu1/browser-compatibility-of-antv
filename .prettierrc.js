/*
 * @Descripttion: 小哥哥开始写代码了
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2021-02-23 13:43:34
 * @LastEditTime: 2021-02-23 13:46:24
 */
"use strict";
/** @format */
module.exports = {
  singleQuote: true,
  trailingComma: "all",
  printWidth: 100,
  proseWrap: "never",
  endOfLine: "lf",
  overrides: [
    {
      files: ".prettierrc",
      options: {
        parser: "json",
      },
    },
    {
      files: "document.ejs",
      options: {
        parser: "html",
      },
    },
  ],
};
