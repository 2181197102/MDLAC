// import * as echarts from 'echarts';

var chartDom = document.getElementById('index_circle');
var myChart = echarts.init(chartDom);
var option;

option = {
  tooltip: {
    trigger: 'item'
  },
  // legend: {
  //   top: '0%',
  //   right: '0%' // 设置图例在右上角
  // },
  series: [
    {
      name: '品牌分布',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 4390, name: '格力（GREE）' },
        { value: 2534, name: '美的（Midea）' },
        { value: 2446, name: '海尔（Haier）' },
        { value: 2156, name: '海信（Hisense）'},
        { value: 2043, name: '奥克斯（AUX）' },
        { value: 1935, name: '小米（MI）' },
        { value: 1831, name: '志高（CHIGO）' },
        { value: 1102, name: '荣事（Royalstar）' },
          // { value: , name: '其他' },
      ]
    }
  ]
};

option && myChart.setOption(option);
