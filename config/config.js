/*
 * @Descripttion: 小哥哥开始写代码了
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2021-02-24 13:19:30
 * @LastEditTime: 2021-02-26 11:26:07
 */
var chartUrlMaps = {
  g2plot: 'https://unpkg.com/@antv/g2plot@latest/dist/g2plot.min.js',
  g2: 'https://unpkg.com/@antv/g2@latest/dist/g2.min.js',
};

var createMaps = {
  g2plot: createG2PlotCharts, // 对应 demo 里面的方法名
  g2: createG2Charts,
};
