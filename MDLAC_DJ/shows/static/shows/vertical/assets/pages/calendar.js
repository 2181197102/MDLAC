
document.addEventListener('DOMContentLoaded', function () {
    var myChart = echarts3.init(document.getElementById('wordcloud_1'));
    var keywords = [{"name":"男神","value":2.64},
                {"name":"好身材","value":4.03},
                {"name":"校草","value":24.95},
                {"name":"酷","value":4.04},
                {"name":"时尚","value":5.27},
                {"name":"阳光活力","value":5.80},
                {"name":"初恋","value":3.09},
                {"name":"英俊潇洒","value":24.71},
                {"name":"霸气","value":6.33},
                {"name":"腼腆","value":2.55},
                {"name":"蠢萌","value":3.88},
                {"name":"青春","value":8.04},
                {"name":"网红","value":5.87},
                {"name":"萌","value":6.97},
                {"name":"认真","value":2.53},
                {"name":"古典","value":2.49},
                {"name":"温柔","value":3.91},
                {"name":"有个性","value":3.25},
                {"name":"可爱","value":9.93},
                {"name":"幽默诙谐","value":3.65}]
    var option = {
               series: [{
                   type: 'wordCloud',
                   sizeRange: [15, 80],
                   rotationRange: [0, 0],
                   rotationStep: 45,
                   gridSize: 8,
                   shape: 'pentagon',
                   width: '100%',
                   height: '100%',
                   textStyle: {
                       normal: {
                           color: function () {
                               return 'rgb(' + [
                                   Math.round(Math.random() * 160),
                                   Math.round(Math.random() * 160),
                                   Math.round(Math.random() * 160)
                               ].join(',') + ')';
                           }
                       }
                   },
                   data: keywords
               }]
           };
   // 使用刚指定的配置项和数据显示图表。
   myChart.setOption(option);
   window.addEventListener("resize", function() {
       myChart.resize();
   });
});