        var chartDom_2 = document.getElementById('area-example');
        var myChart_2 = echarts.init(chartDom_2);
        var option_2;

        option_2 = {
          color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
          title: {
            text: '省份销量渐变堆叠面积图',
            top: '1%' // 相对于图表容器顶部的距离
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              label: {
                backgroundColor: '#6a7985'
              }
            }
          },
          legend: {
            data: ['广东', '山东', '江苏', '河北', '河南'],
            right: '5%', // 将图例移动到图表的右侧
            top: '10%' // 距离图表容器顶部 5% 的位置
            //orient: 'vertical'
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          grid: {
            left: '1%',
            right: '1%',
            top: '25%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              boundaryGap: false,
              data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }
          ],
          yAxis: [
            {
              type: 'value'
            }
          ],
          series: [
            {
              name: '广东',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(128, 255, 165)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(1, 191, 236)'
                  }
                ])
              },
              emphasis: {
                focus: 'series'
              },
              data: [2770,1788,6978,15848, 20589,35946,24928,4524,2886,1968,2954,2611]
            },
            {
              name: '山东',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(0, 221, 255)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(77, 119, 255)'
                  }
                ])
              },
              emphasis: {
                focus: 'series'
              },
              data: [1396,1233,3591,8099,9687,16629,9089,1492,573,731,1642,1124]
            },
            {
              name: '江苏',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(55, 162, 255)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(116, 21, 219)'
                  }
                ])
              },
              emphasis: {
                focus: 'series'
              },
              data: [1647,1443,2833,5945,8073,14883,10522,1511,721,857,1331,1651]
            },
            {
              name: '河北',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(255, 0, 135)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(135, 0, 157)'
                  }
                ])
              },
              emphasis: {
                focus: 'series'
              },
              data: [510,706,2242,5873,7435,13688,7530,1085,446,486,1077,800]
            },
            {
              name: '河南',
              type: 'line',
              stack: 'Total',
              smooth: true,
              lineStyle: {
                width: 0
              },
              showSymbol: false,
              label: {
                show: true,
                position: 'top'
              },
              areaStyle: {
                opacity: 0.8,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: 'rgb(255, 191, 0)'
                  },
                  {
                    offset: 1,
                    color: 'rgb(224, 62, 76)'
                  }
                ])
              },
              emphasis: {
                focus: 'series'
              },
              data: [1107,739,1997,3759,6897,10719,6303,1088,379,428,1129,1005]
            }
          ]
        };

        option_2 && myChart_2.setOption(option_2);