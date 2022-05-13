/*
 * @Author: LYM
 * @Date: 2022-05-12 08:53:30
 * @LastEditors: LYM
 * @LastEditTime: 2022-05-13 08:23:26
 * @Description: Please set Description
 */
module.exports = {
  // 使用 2 个空格缩进
  tabWidth: 2,
  jsxSingleQuote: true,
  jsxBracketSameLine: true,
  // 一行最多 100 字符
  printWidth: 100,
  // 使用单引号代替双引号
  singleQuote: true,
  // 行尾不需要有分号
  semi: false,
  // 不使用 tab 缩进，而使用空格
  useTabs: false,
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // 末尾不使用逗号
  // trailingComma: 'all',
  // 大括号内的首尾需要空格 { foo: bar }
  bracketSpacing: true,
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: 'always',
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: 'css',
  // 换行符使用 lf
  endOfLine: 'auto',
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 200,
      },
    },
  ],
}
