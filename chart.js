/*
 * @Descripttion: 测试线图、点图、柱图
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2021-02-23 13:57:12
 * @LastEditTime: 2021-02-23 23:44:51
 */
window.onload = function () {
  var urlMaps = {
    g2: 'https://unpkg.com/@antv/g2@latest/dist/g2.min.js',
    g2plot: 'https://unpkg.com/@antv/g2plot@latest/dist/g2plot.min.js',
  };
  var search = location.href.split('?')[1];
  var chartType = 'g2plot';
  if (search) {
    chartType = search.split('=')[1]; // 不考虑多余参数
  }

  // 动态创建 script
  var script = document.createElement('script');
  script.src = urlMaps[chartType];
  script.onload = function () { 
    if (chartType === 'g2') { 
      document.getElementById('content').innerText = 'G2';
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


    if (chartType === 'g2plot') { 
      document.getElementById('content').innerText = 'G2Plot';
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

    script = null; // 垃圾回收
  }
  document.getElementsByTagName('head')[0].appendChild(script);
}