/*
 * @Author: LYM
 * @Date: 2022-05-14 09:49:15
 * @LastEditors: LYM
 * @LastEditTime: 2022-05-16 15:13:00
 * @Description: Please set Description
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  // 以下时我们自定义的规则
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'bug', // 此项特别针对bug号，用于向测试反馈bug列表的bug修改情况
        'feat', // 新功能（feature）
        'fix', // 修补bug
        'docs', // 文档（documentation）
        'style', // 格式（不影响代码运行的变动）
        'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
        'test', // 增加测试
        'chore', // 构建过程或辅助工具的变动、其他修改, 比如改变构建流程、或者增加依赖库、工具等
        'revert', // feat(pencil): add ‘graphiteWidth’ option (撤销之前的commit)
        'merge', // 合并分支， 例如： merge（前端页面）： feature-xxxx修改线程地址
        'perf', // 优化相关，比如提升性能、体验
        'ci', // 持续集成修改
        'upgrade', // 第三方库升级
        'reformat', // 代码格式化
        'del', // 删除功能
        'config', // 配置文件修改
      ],
    ],
  },
}
