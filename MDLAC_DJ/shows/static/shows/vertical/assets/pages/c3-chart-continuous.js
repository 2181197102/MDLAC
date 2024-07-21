var chartDom = document.getElementById('continuous-example');
var myChart_continuous = echarts.init(chartDom);
var option_continuous;

var data_continuous = [
  {
    name: '美的',
    children: [
      {
        name: '评论大于5000',
        value: 2690,
        children: [
          {
            name: '价格大于5000',
            value: 1050,
            children: [{
              name: '好评数',
              value: 800
            }]
          },
          {
            name: '价格大于5000',
            value: 1640
          }
        ]
      }
    ]
  },
  {
    name: '格力',
    children:  [
      {
        name: '评论大于5000',
        value: 1700,
        children: [
          {
            name: '价格大于5000',
            value: 1190
          }
        ]
      }
    ]
  },
  {
    name: '海尔',
    children: [
      {
        name: '评论大于5000',
        value: 1113,
        children: [
          {
            name: '价格大于5000',
            value: 328
          }
        ]
      }
    ]
  },
  {
    name: '小米',
    children: [
      {
        name: '评论大于5000',
        value: 1158,
        children: [
          {
            name: '价格大于5000'
          },
          {
            name: '五星好评率',
            value: 1038,
            children:[
              {
                name:"好评数",
                value:700
              }
            ]

          }
        ]
      },
    ]
  }

];
option_continuous = {
  visualMap: {
    type: 'continuous',
    min: 0,
    max: 2690, // 修改为数据中的最大值
    inRange: {
      color: ['#2F93C8', '#AEC48F', '#FFDB5C', '#F98862']
    }
  },
  series: {
    type: 'sunburst',
    data: data_continuous,
    radius: [0, '85%'],
    label: {
      rotate: 'radial'
    }
  }
};

option_continuous && myChart_continuous.setOption(option_continuous);
