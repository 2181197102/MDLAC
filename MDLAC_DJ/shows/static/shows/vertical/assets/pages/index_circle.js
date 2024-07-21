// import * as echarts from 'echarts';
document.addEventListener('DOMContentLoaded', function () {

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
          { value: 5872, name: '格力' },
          { value: 2737, name: '美的' },
          { value: 3278, name: '海尔' },
          { value: 2350, name: '海信'},
          { value: 2536, name: '奥克斯' },
          { value: 2588, name: '小米' },
          { value: 2236, name: '志高' },
          { value: 1593, name: '荣事达' },
            // { value: , name: '其他' },
        ]
      }
    ]
  };

  myChart.setOption(option);
  myChart.on('click', function (params) {
                  // alert((params.name));
                  // window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
                  //在当前页面跳转
                  window.location.href = 'http://127.0.0.1:8000/shows/calendar/' + encodeURIComponent(params.name);
                  // window.open('http://127.0.0.1:8000/index');

              });
  });