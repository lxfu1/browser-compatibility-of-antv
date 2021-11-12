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

- /config/config.js 内新配置资源地址

- /index.html 新增测试 tab ，并引入对应 x.demo.js, xxx 和 config.js 保持一致

```html
<div class="chart-tab">
  <span class="g2plot">g2plot</span>
  <span class="g2">g2</span>
  <span class="s2">s2</span>
  <span class="xxx">xxx</span>
</div>
<script type="text/javascript" src="./demos/x.demo.js"></script>
```

- 本地测试直接启动即可，线上测试走 PR 然后访问 https://lxfu1.github.io/browser-compatibility-of-antv/  , 可以通过 tab 参数指定选中 tab, eg: ?tab=g2
