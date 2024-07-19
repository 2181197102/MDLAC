// 在 window.onload 中初始化 ECharts 图表
window.onload = function() {
  // 获取包含日历热力图的 DOM 元素
  var chartDom = document.getElementById('calendar');
  // 初始化 ECharts 实例
  var myChart = echarts.init(chartDom);

  // 模拟数据
  var categoryData = [];
  var barData = [];
  var dataCount = 100;
  var startDate = +new Date(2017, 6, 1);

  for (var i = 0; i < dataCount; i++) {
    var date = startDate + i * 3600 * 24 * 1000;
    categoryData.push(echarts.time.format(date, 'yyyy-MM-dd'));
    var val = Math.random() * 1000;
    barData.push(val.toFixed(2));
  }

  // 自定义渲染函数
  function renderItem(params, api) {
    var xValue = api.value(0);
    var yValue = api.value(1);
    var point = api.coord([xValue, yValue]);

    var date = categoryData[xValue];
    var fullDate = echarts.time.format(date, 'MM/dd');
    if (echarts.time.format(new Date(), 'MM/dd') === fullDate) {
      fullDate += '\n今天';
    }

    return {
      type: 'group',
      children: [{
        type: 'rect',
        shape: {
          x: point[0] - 10,
          y: params.coordSys.y + params.coordSys.height,
          width: 20,
          height: 40
        },
        style: {
          text: {
            text: fullDate,
            fill: '#ddd',
            stroke: '#ccc',
            lineWidth: 1
          }
        }
      }]
    };
  }

  // 设置图表的配置项和数据（option）
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['bar']
    },
    dataZoom: [{
      type: 'slider',
      showDetail: false,
      end: 20
    }, {
      type: 'inside',
      end: 20
    }],
    grid: {
      bottom: 150
    },
    xAxis: {
      data: categoryData,
      axisLabel: { show: false },
      axisTick: { show: false },
      axisLine: { show: false }
    },
    yAxis: {},
    series: [{
      type: 'bar',
      name: 'bar',
      data: barData,
      itemStyle: {
        color: '#77bef7'
      }
    }, {
      type: 'custom',
      renderItem: renderItem,
      data: barData,
      z: 100
    }]
  };

  // 使用设置好的 option 渲染图表
  myChart.setOption(option);
};
