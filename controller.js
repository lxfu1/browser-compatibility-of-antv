/*
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2021-02-23 13:57:12
 * @LastEditTime: 2021-02-26 11:34:17
 */
window.onload = function () {
  var currentTab = 'g2plot';
  // 防止个插件冲突
  function removeScripts() {
    $('.dynamic-scripts').remove();
  }
  function removeStyle() {
    $('.dynamic-style').remove();
  }
  // 清空内容
  function clear(content) {
    $('.container').html(content);
  }
  clear('<div class="loading">加载中...</div>');
  // 动态创建 script
  function createScripts(chart) {
    removeScripts();
    var script = document.createElement('script');
    script.src = jsUrlMap[chart];
    script.className = 'dynamic-scripts';
    script.onload = function () {
      clear('');
      createMaps[currentTab]();
    };
    document.getElementsByTagName('body')[0].appendChild(script);
  }
  // 动态创建 style
  function createStyle(chart) {
    removeStyle();
    if (cssUrlMap[chart]) {
      var style = document.createElement('link');
      style.className = 'dynamic-style';
      style.href = cssUrlMap[chart];
      style.rel = 'stylesheet';
      style.type = 'text/css';
      document.getElementsByTagName('HEAD').item(0).appendChild(style);
    }
  }

  $('.chart-tab').click(function (e) {
    if (e.target.innerText === currentTab) {
      return;
    }
    clear('<div class="loading">加载中...</div>');
    $('.chart-tab span').removeClass('active');
    $(e.target).addClass('active');
    currentTab = e.target.innerText;
    createScripts(currentTab);
    createStyle(currentTab);
  });

  createScripts(currentTab);
  createStyle(currentTab);
};
