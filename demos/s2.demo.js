/*
 * @Descripttion: S2 测试脚本
 * @Date: 2021-11-02 15:39:12
 */
function createS2Charts() {
  var s2DataConfig = {
    fields: {
      rows: ['province', 'city'],
      columns: ['type'],
      values: ['price'],
    },
    meta: [
      {
        field: 'province',
        name: '省份',
      },
      {
        field: 'city',
        name: '城市',
      },
      {
        field: 'type',
        name: '商品类别',
      },
      {
        field: 'price',
        name: '价格',
      },
    ],
    data: s2Data,
  };

  var s2options = {
    width: 600,
    height: 300,
  };
  var s2 = new S2.PivotSheet(createContainer(), s2DataConfig, s2options);

  s2.render();
}
