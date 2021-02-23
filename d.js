/*
 * @Descripttion: 测试线图、点图、柱图
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2021-02-23 13:57:12
 * @LastEditTime: 2021-02-23 14:32:55
 */
window.onload = function () { 
  var data = [
    { type: '未知', value: 654, percent: 0.02 },
    { type: '17 岁以下', value: 654, percent: 0.02 },
    { type: '18-24 岁', value: 4400, percent: 0.2 },
    { type: '25-29 岁', value: 5300, percent: 0.24 },
    { type: '30-39 岁', value: 6200, percent: 0.28 },
    { type: '40-49 岁', value: 3300, percent: 0.14 },
    { type: '50 岁以上', value: 1500, percent: 0.06 },
  ];
  var line = new G2.Chart({
    container: 'line',
    autoFit: true,
    height: 500,
    padding: [50, 20, 50, 20],
  });
  line.data(data);
  line.line().position('type*value');
  line.render();

  var bar = new G2.Chart({
    container: 'bar',
    autoFit: true,
    height: 500,
    padding: [50, 20, 50, 20],
  });
  bar.data(data);
  bar.interval().position('type*value');
  bar.render();

  var point = new G2.Chart({
    container: 'point',
    autoFit: true,
    height: 500,
    padding: [50, 20, 50, 20],
  });
  point.data(data);
  point.point().position('type*value');
  point.render();
}