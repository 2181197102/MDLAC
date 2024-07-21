// logo.js
document.addEventListener('DOMContentLoaded', function () {
  var chartDom = document.getElementById('mylogo');
  var myChart = echarts.init(chartDom);
  var option;

  option = {
    graphic: {
      elements: [
        {
          type: 'text',
          left: 'center',
          top: 'center',
          style: {
            text: 'MDLAC',
            fontSize: 80,
            fontWeight: 'bold',
            lineDash: [0, 200],
            lineDashOffset: 0,
            fill: 'transparent',
            stroke: '#000',
            lineWidth: 1
          },
          // 动画配置
          keyframeAnimation: {
            duration: 8000,
            loop: false,
            keyframes: [
              {
                percent: 0.7,
                style: {
                  fill: 'transparent',
                  lineDashOffset: 200,
                  lineDash: [200, 0]
                }
              },
              {
                percent: 0.8,
                style: {
                  fill: 'transparent'
                }
              },
              {
                percent: 1,
                style: {
                  fill: "rgb(89,133,238)"
                }
              }
            ]
          }
        }
      ]
    }
  };

  myChart.setOption(option); // 应用配置到图表中
});
