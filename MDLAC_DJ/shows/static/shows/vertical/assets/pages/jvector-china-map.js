var dom = document.getElementById('chinatransformmap');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});
var app = {};
var ROOT_PATH = 'https://geo.datav.aliyun.com/';
var option;

myChart.showLoading();
$.get(ROOT_PATH + '/areas_v3/bound/100000_full.json', function (usaJson) {
myChart.hideLoading();
console.log(usaJson)
echarts.registerMap('USA', usaJson, {
  Alaska: {
    // 把阿拉斯加移到美国主大陆左下方
    left: -131,
    top: 25,
    width: 15
  },
  Hawaii: {
    left: -110,
    top: 28,
    width: 5
  },
  'Puerto Rico': {
    // 波多黎各
    left: -76,
    top: 26,
    width: 2
  }
});
var data = [
  {name: '北京市', value: 482202},
  {name: '天津市', value: 731449},
  {name: '河北省', value: 6553255},
  {name: '山西省', value: 2949131},
  {name: '辽宁省', value: 38041430},
  {name: '吉林省', value: 5187582},
  {name: '黑龙江省', value: 3590347},
  {name: '上海市', value: 917092},
  {name: '江苏省', value: 632323},
  {name: '浙江省', value: 19317568},
  {name: '安徽省', value: 9919945},
  {name: '福建省', value: 1392313},
  {name: '江西省', value: 1595728},
  {name: '山东省', value: 12875255},
  {name: '河南省', value: 6537334},
  {name: '湖北省', value: 3074186},
  {name: '湖南省', value: 2885905},
  {name: '广东省', value: 4380415},
  {name: '广西壮族自治区', value: 4601893},
  {name: '海南省', value: 1329192},
  {name: '重庆市', value: 5884563},
  {name: '四川省', value: 6646144},
  {name: '贵州省', value: 9883360},
  {name: '云南省', value: 5379139},
  {name: '西藏自治区', value: 2984926},
  {name: '陕西省', value: 6021988},
  {name: '甘肃省', value: 1005141},
  {name: '青海省', value: 1855525},
  {name: '宁夏回族自治区', value: 2758931},
  {name: '新疆维吾尔自治区', value: 1320718},
  {name: '台湾省', value: 8864590},
  {name: '香港特别行政区', value: 2085538},
  {name: '澳门特别行政区', value: 19570261},
  {name: '内蒙古自治区', value: 9752073},
];
data.sort(function (a, b) {
  return a.value - b.value;
});
const mapOption = {
  visualMap: {
    left: 'right',
    min: 500000,
    max: 38000000,
    inRange: {
      // prettier-ignore
      color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
    },
    text: ['High', 'Low'],
    calculable: true
  },
  series: [
    {
      id: 'population',
      type: 'map',
      roam: true,
      map: 'USA',
      animationDurationUpdate: 1000,
      universalTransition: true,
      data: data
    }
  ]
};
const barOption = {
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    axisLabel: {
      rotate: 30
    },
    data: data.map(function (item) {
      return item.name;
    })
  },
  animationDurationUpdate: 1000,
  series: {
    type: 'bar',
    id: 'population',
    data: data.map(function (item) {
      return item.value;
    }),
    universalTransition: true
  }
};
let currentOption = mapOption;

  function switchChartOption() {
    currentOption = currentOption === mapOption ? barOption : mapOption;
    myChart.setOption(currentOption, true);
  }

  myChart.on('click', function () {
    switchChartOption();
  });

  myChart.setOption(mapOption);

  window.addEventListener('resize', function () {
    myChart.resize();
  });
});
