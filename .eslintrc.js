module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "semi": [0, "always"], // 以分号结尾
    "comma-dangle": [2, "always-multiline"], // 对象数组字段，多余两行的需要以逗号结尾
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
