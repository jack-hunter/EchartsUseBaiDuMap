import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  headScripts: [
    `https://api.map.baidu.com/api?v=3.0&ak=t927xu6ua7mTffdCuvurabv1EKwn8geW`,
  ],
});
