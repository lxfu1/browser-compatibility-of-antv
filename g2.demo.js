/*
 * @Descripttion: G2 测试脚本
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2021-02-23 13:57:12
 * @LastEditTime: 2021-02-24 11:17:46
 */
function createG2Charts() { 
  // 折线图
  var line = new G2.Chart({
    container: 'line',
    autoFit: true,
    height: 500,
    padding: [50],
  });
  line.data(data);
  line.line().position('type*value');
  line.render();

  // 条形图
  var bar = new G2.Chart({
    container: 'bar',
    autoFit: true,
    padding: [50],
  });
  bar.data(groupData);
  bar.scale('月均降雨量', {
    nice: true,
  });
  bar.tooltip({
    showMarkers: false,
    shared: true,
  });
  bar
    .interval()
    .position('月份*月均降雨量')
    .color('name')
    .adjust([
      {
        type: 'dodge',
        marginRatio: 0,
      },
    ]);
  bar.interaction('active-region');
  bar.render();

  // 散点图
  var point = new G2.Chart({
    container: 'point',
    autoFit: true,
    padding: [50],
  });
  point.data(pointData);
  point.point().position('x*y');
  point.render(); 
}