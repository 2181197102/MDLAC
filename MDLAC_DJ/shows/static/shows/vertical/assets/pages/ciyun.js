
document.addEventListener('DOMContentLoaded', function () {
    var chartDom = document.getElementById('wordcloud_1');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
    title: {
        text: '商品名称热点分析词云',
        link: 'https://www.baidu.com/s?wd=' + encodeURIComponent('ECharts'),
        x: 'center',
        textStyle: {
            fontSize: 23
        }

    },
    backgroundColor: '#F7F7F7',
    tooltip: {
        show: true
    },
    toolbox: {
        feature: {
            saveAsImage: {
                iconStyle: {
                    normal: {
                        color: '#FFFFFF'
                    }
                }
            }
        }
    },
    series: [{
        name: '热点分析',
        type: 'wordCloud',
        //size: ['9%', '99%'],
        sizeRange: [6, 66],
        //textRotation: [0, 45, 90, -45],
        rotationRange: [-45, 90],
        //shape: 'circle',
        textPadding: 0,
        autoSize: {
            enable: true,
            minSize: 6
        },
        textStyle: {
            normal: {
                color: function() {
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },
        data: [{
            name: "Jayfee",
            value: 666
        }, {
            name: "Nancy",
            value: 520
        }]
    }]
};


var JosnList = [];
if (brand === '格力') {
    JosnList.push(
        {'name': '能效', 'value': 8121},
        {'name': '格力', 'value': 6211},
        {'name': '一级', 'value': 5769},
        {'name': '冷暖', 'value': 5128},
        {'name': 'GREE', 'value': 4962},
        {'name': '变频', 'value': 4909},
        {'name': '挂机', 'value': 3152},
        {'name': '1.5', 'value': 2660},
        {'name': '清洁', 'value': 2363},
        {'name': '柜机', 'value': 2313},
        {'name': '卧室', 'value': 2026},
        {'name': '壁挂', 'value': 1966},
        {'name': '智能', 'value': 1880},
        {'name': '壁挂式', 'value': 1833},
        {'name': '客厅', 'value': 1581},
        {'name': '三级', 'value': 1519},
        {'name': '家用', 'value': 1410},
        {'name': '立式', 'value': 1375},
        {'name': 'KFR', 'value': 1237},
        {'name': '云锦', 'value': 1070},
        {'name': '除湿', 'value': 1013},
        {'name': 'WIFI', 'value': 896},
        {'name': '高温', 'value': 871},
        {'name': '节能', 'value': 825},
        {'name': 'WiFi', 'value': 769},
        {'name': '云佳', 'value': 756},
        {'name': '适用', 'value': 623},
        {'name': '自洁', 'value': 610},
        {'name': '格力空调', 'value': 594},
        {'name': '大风', 'value': 590},
        {'name': '安装', 'value': 579},
        {'name': '圆柱', 'value': 578},
        {'name': '独立', 'value': 570},
        {'name': '匹新', 'value': 488},
        {'name': '官方', 'value': 471},
        {'name': '三代', 'value': 433},
        {'name': '智控', 'value': 430},
        {'name': '20', 'value': 430},
        {'name': '净菌', 'value': 425},
        {'name': '立柜', 'value': 404},
        {'name': '移动', 'value': 402},
        {'name': '雪白', 'value': 376},
        {'name': '中央', 'value': 376},
        {'name': '30', 'value': 373},
        {'name': '中央空调', 'value': 367},
        {'name': '15', 'value': 364},
        {'name': '35GW', 'value': 357},
        {'name': '72LW', 'value': 353},
        {'name': '直售', 'value': 352},
        {'name': '一体', 'value': 350},
        {'name': '冷酷', 'value': 343},
        {'name': '云逸', 'value': 343},
        {'name': '一体机', 'value': 339},
        {'name': '一拖', 'value': 334},
        {'name': 'B1', 'value': 325},
        {'name': '56', 'value': 325},
        {'name': '送风', 'value': 324},
        {'name': '商用', 'value': 323},
        {'name': '10', 'value': 318},
        {'name': '冷静', 'value': 307},
        {'name': '防直', 'value': 300},
        {'name': '新风', 'value': 300},
        {'name': '40', 'value': 295},
        {'name': '外机', 'value': 293},
        {'name': '二代', 'value': 281},
        {'name': '两用', 'value': 279},
        {'name': '26GW', 'value': 273},
        {'name': '一价', 'value': 255},
        {'name': '国标', 'value': 251},
        {'name': 'FNhAa', 'value': 240},
        {'name': '套装', 'value': 238},
        {'name': '控制', 'value': 238},
        {'name': '生态', 'value': 232},
        {'name': '省电', 'value': 232},
        {'name': '小家', 'value': 229},
        {'name': '超级', 'value': 224},
        {'name': '除菌', 'value': 222},
        {'name': '厨房', 'value': 220},
        {'name': '企业', 'value': 219},
        {'name': '冷静王', 'value': 218},
        {'name': '快速', 'value': 217},
        {'name': '同款', 'value': 215},
        {'name': '系列', 'value': 214},
        {'name': '单冷', 'value': 213},
        {'name': '风管', 'value': 213},
        {'name': '便携', 'value': 211},
        {'name': '珊瑚', 'value': 205},
        {'name': '线下', 'value': 204},
        {'name': '50LW', 'value': 203},
        {'name': '制冷', 'value': 188},
        {'name': '机房', 'value': 184},
        {'name': '清凉', 'value': 182},
        {'name': '升级', 'value': 181},
        {'name': '王者', 'value': 180},
        {'name': '定频', 'value': 180},
        {'name': '全包', 'value': 180},
        {'name': '云恬', 'value': 178},
        {'name': '拆洗', 'value': 176},
        {'name': '二级', 'value': 176},
        {'name': '时光', 'value': 176});
}
// else if (brand === '美的') {
//
//     }
    else{
        JosnList.push([])
    }

option.series[0].data = JosnList;


 myChart.setOption(option);
 myChart.on('click', function (params) {
                //alert((params.name));
                // window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
                //在当前页面跳转
                window.location.href = 'http://127.0.0.1:8000/index';
                // window.open('http://127.0.0.1:8000/index');

            });
});