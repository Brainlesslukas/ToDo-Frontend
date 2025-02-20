const { defineConfig } = require('@vue/cli-service');
const dotenv = require('dotenv');

dotenv.config({ path: './stack.env' });

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8081
  }
});
