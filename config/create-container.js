/*
 * @version: 0.0.1
 * @Author: fujin
 * @Date: 2021-02-26 10:41:22
 * @LastEditTime: 2021-02-26 10:43:56
 */
function createContainer() {
  var container = document.createElement('div');
  container.className = 'box';
  $('.container').append(container);
  return container;
}
