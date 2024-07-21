var chartDom = document.getElementById('index_line');
var myChart = echarts.init(chartDom);
var option;

option = {
  title: {
    text: '爬虫时间线'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['商品数目', '品牌数目', '评论数目']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['7/14', '7/15', '7/16', '7/17', '7/18', '7/19', '7/20']
  },
  yAxis: {
    type: 'value',
    min: 0,  // 设置最小值
    max: 1000000 // 设置最大值
  },
  series: [
    {
      name: '商品数目',
      type: 'line',
      // stack: 'Total',
      data: [574, 2036, 8930, 18620, 36108, 50652, 50652]
    },
    {
      name: '品牌数目',
      type: 'line',
      // stack: 'Total',
      data: [10, 18, 37, 59, 141, 344, 344]
    },
    {
      name: '评论数目',
      type: 'line',
      // stack: 'Total',
      data: [0, 0, 2048, 56431, 104563, 320484, 1000000]
    },
  ]
};

option && myChart.setOption(option);
