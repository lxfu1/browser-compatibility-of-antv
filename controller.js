/*
 * @Descripttion: 测试线图、点图、柱图
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2021-02-23 13:57:12
 * @LastEditTime: 2021-02-24 13:21:00
 */
window.onload = function () {
  var currentTab = 'g2plot';
  var createMaps = {
    g2plot: createG2PlotCharts,
    g2: createG2Charts
  }
  // 防止个插件冲突
  function removeScripts() { 
    $('.dynamic-scripts').remove();
  }
  // 清空内容
  function clear(content) {
    $('#line').html(content);
    $('#bar').html(content);
    $('#point').html(content);
  }
  function createScripts(chart) { 
    removeScripts();
    // 动态创建 script
    var script = document.createElement('script');
    script.src = chartUrlMaps[chart];
    script.className = 'dynamic-scripts';
    script.onload = function () {
      clear('');
      createMaps[currentTab]();
    }
    document.getElementsByTagName('body')[0].appendChild(script);
  }

  $('.chart-tab').click(function (e) {
    if (e.target.innerText === currentTab) { 
      return;
    }
    $('.chart-tab span').removeClass('active');
    $(e.target).addClass('active');
    currentTab = e.target.innerText;
    clear('<div class="loading">加载中...</div>');
    createScripts(currentTab);
  })

  createScripts(currentTab);
}