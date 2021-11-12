// 静态资源地址 js
var jsUrlMap = {
  g2plot: 'https://unpkg.com/@antv/g2plot@latest/dist/g2plot.min.js',
  g2: 'https://unpkg.com/@antv/g2@latest/dist/g2.min.js',
  s2: 'https://unpkg.com/@antv/s2@latest/dist/s2.min.js',
};

// 静态资源地址 css
var cssUrlMap = {
  s2: 'https://unpkg.com/@antv/s2@latest/dist/s2.min.css',
};

var createMaps = {
  g2plot: createG2PlotCharts, // 对应 demo 里面的方法名
  g2: createG2Charts,
  s2: createS2Charts,
};
