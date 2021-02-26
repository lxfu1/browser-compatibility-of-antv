<!--
 * @Descripttion: 小哥哥开始写代码了
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2021-02-23 13:35:04
 * @LastEditTime: 2021-02-26 10:33:52
-->

# g2-browser-test

Browser Compatibility Testing

## 启动

```ts
  // Python 2.x
  npm run py2

  // Python 3.x
  npm run py3
```

## 测试步骤

- /demos 里面新增测试脚本

- /config/map.js 内新配置测试地址

- /index.html 新增测试 tab , xxx 和 map.js 保持一致

```html
<div class="chart-tab">
  <span class="active">g2plot</span>
  <span>g2</span>
  <span>xxx</span>
</div>
```

- 本地测试直接启动即可，线上测试走 PR 然后访问 https://lxfu1.github.io/browser-compatibility-of-antv/
