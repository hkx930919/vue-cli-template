module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    scripts: {
      serve: "vue-cli-service serve",
      build: "vue-cli-service build --report",
      lint: "vue-cli-service lint",
      prettier: "prettier --write src/**/*.{js,vue}"
    },
    // 命令
    scripts: {
      serve: "vue-cli-service serve",
      build: "vue-cli-service build",
      lint: "vue-cli-service lint"
    },
    dependencies: {
      "core-js": "^3.6.4",
      axios: "^0.19.2",
      "element-ui": "^2.13.2",
      lodash: "^4.17.20",
      moment: "^2.25.3",
      vue: "^2.6.10",
      "vue-router": "^3.1.3",
      vuex: "^3.1.2"
    },
    devDependencies: {
      "@babel/plugin-proposal-decorators": "^7.12.1",
      "@babel/plugin-proposal-nullish-coalescing-operator": "^7.10.4",
      "@babel/plugin-proposal-optional-chaining": "^7.11.0",
      "@vue/cli-plugin-babel": "^4.5.4",
      "@vue/cli-plugin-eslint": "~4.4.0",
      "@vue/cli-service": "^4.1.0",
      "@vue/eslint-config-prettier": "^6.0.0",
      "babel-eslint": "^10.1.0",
      "babel-plugin-component": "^1.1.1",
      // eslint: "7.2.0",
      "eslint-config-airbnb-base": "14.2.0",
      "eslint-plugin-import": "2.21.2",
      "eslint-plugin-prettier": "^3.1.3",
      "eslint-plugin-vue": "^6.2.2",
      fibers: ">= 3.1.0",
      prettier: "^1.19.1",
      // "less-loader": "^7.0.2",
      less: "^3.12.2",
      "terser-webpack-plugin": "^3.0.2",
      "vue-template-compiler": "^2.6.10",
      "webpack-bundle-analyzer": "^3.6.1"
    }
  });
  // 删除 vue-cli3 默认目录
  api.render(files => {
    console.log("================");
    console.log(Object.keys(files));
    console.log("================");
    Object.keys(files)
      .filter(path => path.startsWith("src/") || path.startsWith("public/"))
      .forEach(path => delete files[path]);
    console.log("----------------");
    console.log(Object.keys(files));
    console.log("----------------");
  });

  // 复制template模版
  api.render("./template");
};
