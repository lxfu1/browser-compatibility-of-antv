/*
 * @Descripttion: 测试线图、点图、柱图
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2021-02-23 13:57:12
 * @LastEditTime: 2021-02-26 11:25:34
 */
window.onload = function () {
  var currentTab = 'g2plot';
  // 防止个插件冲突
  function removeScripts() {
    $('.dynamic-scripts').remove();
  }
  // 清空内容
  function clear(content) {
    $('.container').html(content);
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
    };
    document.getElementsByTagName('body')[0].appendChild(script);
  }

  $('.chart-tab').click(function (e) {
    if (e.target.innerText === currentTab) {
      return;
    }
    $('.container').html('<div class="loading">加载中...</div>');
    $('.chart-tab span').removeClass('active');
    $(e.target).addClass('active');
    currentTab = e.target.innerText;
    createScripts(currentTab);
  });

  createScripts(currentTab);
};
