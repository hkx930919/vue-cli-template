module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["airbnb-base", "plugin:vue/essential", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2020,
    ecmaFeatures: {
      legacyDecorators: true // 支持装饰器
    }
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    eqeqeq: 1,
    "import/no-unresolved": [
      2,
      {
        ignore: ["^@/"] // @ 是设置的路径别名
      }
    ]
  }
};
