/*
 * @Descripttion: G2Plot 测试脚本
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2021-02-23 13:57:12
 * @LastEditTime: 2021-02-24 11:40:52
 */
function createG2PlotCharts() { 
  // 折线图
  var linePlot = new G2Plot.Line('line', {
    data: data,
    xField: 'type',
    yField: 'value',
    padding: [50],
  });
  linePlot.render();

  // 条形图
  var barPlot = new G2Plot.Column('bar', {
    data: groupData,
    isGroup: true,
    xField: '月份',
    yField: '月均降雨量',
    seriesField: 'name',
    label: {
      position: 'middle', // 'top', 'middle', 'bottom'
      layout: [
        // 柱形图数据标签位置自动调整
        { type: 'interval-adjust-position' },
        // 数据标签防遮挡
        { type: 'interval-hide-overlap' },
        // 数据标签文颜色自动调整
        { type: 'adjust-color' },
      ],
    },
    padding: [50],
  });
  barPlot.render();

  // 散点图
  var scatterPlot = new G2Plot.Scatter('point', {
    data: pointData,
    xField: 'x',
    yField: 'y',
    size: 5,
    pointStyle: {
      stroke: '#777777',
      lineWidth: 1,
      fill: '#5B8FF9',
    },
    regressionLine: {
      type: 'quad', // linear, exp, loess, log, poly, pow, quad
    },
  });
  scatterPlot.render();
}