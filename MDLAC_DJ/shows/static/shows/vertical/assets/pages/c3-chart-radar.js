var chartDom = document.getElementById('radar-example');
var myChart_radar = echarts.init(chartDom);
var option_radar;

// 数据
var data_radar = [
  {
    "value": [
      2182.960288808664,
      4.64891304347826,
      3104.3076923076924,
      1.78752107925801,
      44.84375
    ],
    "name": "TCL"
  },

  {
    "value": [
      1582.0353982300885,
      4.21752380952381,
      2250.192307692308,
      2.2363636363636363,
      46.86075949367088
    ],
    "name": "三星"
  },
  {
    "value": [
      1326.3939393939395,
      4.526363636363636,
      1768.4615384615386,
      1.8235294117647056,
      45.38636363636363
    ],
    "name": "三菱"
  },
  {
    "value": [
      1428.0172413793102,
      5.0,
      1509.2307692307693,
      3.6072874493927127,
      46.15217391304348
    ],
    "name": "东宝"
  },
  {
    "value": [
      1772.909090909091,
      4.583333333333333,
      2297.3529411764707,
      1.5723684210526316,
      48.34782608695652
    ],
    "name": "东芝"
  },
  {
    "value": [
      1826.299295774648,
      4.652238805970149,
      1977.6119402985075,
      1.2790697674418603,
      47.71559633027523
    ],
    "name": "云米"
  },
  {
    "value": [
      1216.566265060241,
      4.4575,
      1859.428571428572,
      4.011764705882353,
      44.61290322580645
    ],
    "name": "先科"
  },
  {
    "value": [
      1268.612121212121,
      4.22111111111111,
      1611.025641025641,
      2.494117647058824,
      48.9
    ],
    "name": "先锋"
  },
  {
    "value": [
      3278.757894736842,
      4.680588235294118,
      2497.555555555556,
      2.0186915887850465,
      50.21052631578947
    ],
    "name": "创维"
  },
  {
    "value": [
      1250.34214002642,
      4.7609933774834445,
      1896.820512820513,
      1.510703363914373,
      44.76733780760626
    ],
    "name": "华凌"
  },
  {
    "value": [
      1264.5945945945946,
      4.942500000000001,
      1927.619047619048,
      1.0,
      42.96491228070175
    ],
    "name": "卡萨帝"
  },
  {
    "value": [
      3146.5263157894738,
      4.373157894736842,
      2765.6521739130435,
      1.841836734693877,
      44.85915492957746
    ],
    "name": "大金"
  },
  {
    "value": [
      1572.5004351610096,
      4.45917808219178,
      2204.6521739130435,
      1.7966485507246377,
      46.91612903225806
    ],
    "name": "奥克斯"
  },
  {
    "value": [
      1306.470588235294,
      4.758823529411765,
      1434.6666666666667,
      1.8529411764705883,
      48.4375
    ],
    "name": "富士通"
  },
  {
    "value": [
      1365.4066726780884,
      4.837899999999999,
      1717.4779411764705,
      1.4153259949195598,
      47.95145631067961
    ],
    "name": "小米"
  },
  {
    "value": [
      1444.9315068493152,
      4.407272727272726,
      1166.0,
      2.4526315789473685,
      44.333333333333336
    ],
    "name": "康佳"
  },
  {
    "value": [
      1906.996363636364,
      5.43254347826087,
      2536.902485659656,
      2.1862857142857144,
      49.64624505928854
    ],
    "name": "志高"
  },
  {
    "value": [
      1526.7641509433963,
      4.394782608695652,
      1912.551020408164,
      1.9466019417475728,
      48.0625
    ],
    "name": "扬子"
  },
  {
    "value": [
      1512.3877551020407,
      3.981,
      1765.909090909091,
      3.088607594936709,
      46.18604651162791
    ],
    "name": "新科"
  },
  {
    "value": [
      1162.013440860215,
      4.226981132075472,
      1318.984,
      3.5,
      41.727722772277225
    ],
    "name": "新飞"
  },
  {
    "value": [
      2791.620689655173,
      4.51811320754717,
      1813.923076923077,
      1.6515151515151516,
      48.89473684210526
    ],
    "name": "日立"
  },
  {
    "value": [
      1401.107142857143,
      3.9666666666666672,
      1922.5,
      2.838709677419355,
      104.15789473684212
    ],
    "name": "春兰"
  },
  {
    "value": [
      1426.8039215686274,
      4.248184357541899,
      1607.857142857143,
      1.6509090909090909,
      46.78333333333333
    ],
    "name": "松下"
  },
  {
    "value": [
      1719.6786570743404,
      6.705114813147231,
      2186.877513711152,
      1.579859587538394,
      47.31124673060157
    ],
    "name": "格力"
  },
  {
    "value": [
      1742.333065810594,
      4.808395324123273,
      2473.773134328358,
      1.409850881156801,
      49.77653631284916
    ],
    "name": "海信"
  },
  {
    "value": [
      1911.7567164179104,
      4.811011419249591,
      3866.658901830283,
      1.3621896880967537,
      47.96078431372549
    ],
    "name": "海尔"
  },
  {
    "value": [
      1377.7727272727273,
      4.275333333333332,
      1335.4545454545455,
      2.9683794466403164,
      47.2
    ],
    "name": "澳柯玛"
  },
  {
    "value": [
      1522.5153846153846,
      5.053999999999999,
      913.3333333333334,
      1.3877551020408163,
      49.083333333333336
    ],
    "name": "米家"
  },
  {
    "value": [
      1784.292817679558,
      4.80501014198783,
      2500.7249508840864,
      1.4231782265144863,
      46.90295358649789
    ],
    "name": "美的"
  },
  {
    "value": [
      901.1973684210526,
      5.11,
      1328.3333333333333,
      1.0246913580246917,
      47.15217391304348
    ],
    "name": "美邦"
  },
  {
    "value": [
      1150.5207624234172,
      3.5627906976744184,
      1446.3445378151262,
      3.571175950486295,
      44.1648854961832
    ],
    "name": "荣事达"
  },
  {
    "value": [
      1684.1752577319587,
      4.516431535269709,
      1470.1666666666667,
      1.7430167597765365,
      45.23809523809524
    ],
    "name": "长虹"
  },
  {
    "value": [
      1905.2755102040817,
      4.679337349397591,
      3008.970588235294,
      1.5395189003436427,
      46.61764705882353
    ],
    "name": "飞利浦"
  }
];

// 动态计算每个指标的最大值
var maxValues = [0, 0, 0, 0, 0];
data_radar.forEach(item => {
  item.value.forEach((val, index) => {
    if (val > maxValues[index]) {
      maxValues[index] = val;
    }
  });
});

// 配置雷达图的顶点最大值
var option_radar = {

  tooltip: {
    trigger: 'item'
  },
  legend: {
    type: 'scroll',
    bottom: 10,
    data: data_radar.map(item => item.name)
  },
  visualMap: {
    top: '45%',
    right: 5,
    color: ['red', 'yellow'],
    calculable: true
  },
  radar: {
    indicator: [
      { text: '制冷功率', max: maxValues[0] },
      { text: '舒适性能', max: maxValues[1] },
      { text: '制热功率', max: maxValues[2] },
      { text: '空调能效', max: maxValues[3] },
      { text: '最高噪音', max: maxValues[4] }
    ]
  },
  series: [
    {
      type: 'radar',
      symbol: 'none',
      lineStyle: {
        width: 1
      },
      emphasis: {
        areaStyle: {
          color: 'rgba(0,250,0,0.3)'
        }
      },
      data: data_radar
    }
  ]
};

option_radar && myChart_radar.setOption(option_radar);
