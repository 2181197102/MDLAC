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
          { value: 4390, name: '格力' },
          { value: 2534, name: '美的' },
          { value: 2446, name: '海尔' },
          { value: 2156, name: '海信'},
          { value: 2043, name: '奥克斯' },
          { value: 1935, name: '小米' },
          { value: 1831, name: '志高' },
          { value: 1102, name: '荣事' },
            // { value: , name: '其他' },
        ]
      }
    ]
  };

  myChart.setOption(option);
  myChart.on('click', function (params) {
                  alert((params.name));
                  // window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
                  //在当前页面跳转
                  window.location.href = 'http://127.0.0.1:8000/shows/calendar/' + encodeURIComponent(params.name);
                  // window.open('http://127.0.0.1:8000/index');

              });
  });