
document.addEventListener('DOMContentLoaded', function () {
    var chartDom = document.getElementById('wordcloud_2');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
    title: {
        text: '商品评论热点分析词云',
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
if (brand === '格力'){
    JosnList.push();
}
else if(brand === '美的'){
    JosnList.push();
}
else if(brand === '海尔'){
    JosnList.push();
}
else if(brand === '海信'){
    JosnList.push();
}
else if(brand === '奥克斯'){
    JosnList.push();
}
else if(brand === '小米'){
    JosnList.push();
}
else if(brand === '志高'){
    JosnList.push();
}
else if(brand === '荣事达'){
    JosnList.push(
    {"name": "服务态度", "value": 3028},
    {"name": "物美价廉", "value": 1408},
    {"name": "物超所值", "value": 839},
    {"name": "外观设计", "value": 637},
    {"name": "送货上门", "value": 632},
    {"name": "售后服务", "value": 568},
    {"name": "产品质量", "value": 549},
    {"name": "价格便宜", "value": 547},
    {"name": "物有所值", "value": 501},
    {"name": "一段时间", "value": 436},
    {"name": "商品质量", "value": 355},
    {"name": "服务质量", "value": 328},
    {"name": "完全一致", "value": 323},
    {"name": "服务周到", "value": 308},
    {"name": "安装简单", "value": 272},
    {"name": "比较满意", "value": 250},
    {"name": "美观大方", "value": 241},
    {"name": "有问必答", "value": 239},
    {"name": "一如既往", "value": 239},
    {"name": "强烈推荐", "value": 232},
    {"name": "认真负责", "value": 229},
    {"name": "以旧换新", "value": 223},
    {"name": "价廉物美", "value": 181},
    {"name": "服务到位", "value": 179},
    {"name": "冷暖空调", "value": 172},
    {"name": "完好无损", "value": 171},
    {"name": "迫不及待", "value": 167},
    {"name": "高空作业", "value": 165},
    {"name": "生意兴隆", "value": 161},
    {"name": "使用方便", "value": 155},
    {"name": "总的来说", "value": 154},
    {"name": "功能齐全", "value": 146},
    {"name": "价格合理", "value": 127},
    {"name": "热情周到", "value": 126},
    {"name": "方便快捷", "value": 121},
    {"name": "nice", "value": 116},
    {"name": "物流配送", "value": 110},
    {"name": "国产品牌", "value": 108},
    {"name": "爱不释手", "value": 105},
    {"name": "ldquo", "value": 103},
    {"name": "非常感谢", "value": 102},
    {"name": "工作人员", "value": 100},
    {"name": "节能产品", "value": 94},
    {"name": "出乎意料", "value": 93},
    {"name": "非常适合", "value": 91},
    {"name": "rdquo", "value": 88},
    {"name": "完全符合", "value": 86},
    {"name": "昨天下午", "value": 82},
    {"name": "安装时间", "value": 81},
    {"name": "再也不会", "value": 80},
    {"name": "联系电话", "value": 78},
    {"name": "非常简单", "value": 72},
    {"name": "好几分钟", "value": 68},
    {"name": "炎炎夏日", "value": 68},
    {"name": "热情服务", "value": 68},
    {"name": "绰绰有余", "value": 66},
    {"name": "值得注意", "value": 66},
    {"name": "省电挺省", "value": 66},
    {"name": "货比三家", "value": 63},
    {"name": "今天上午", "value": 63},
    {"name": "相对来说", "value": 63},
    {"name": "高性价比", "value": 61},
    {"name": "十几分钟", "value": 58},
    {"name": "nbsp", "value": 57},
    {"name": "小巧玲珑", "value": 56},
    {"name": "功能强大", "value": 55},
    {"name": "认真细致", "value": 55},
    {"name": "解决问题", "value": 52},
    {"name": "一模一样", "value": 52},
    {"name": "美中不足", "value": 51},
    {"name": "个人感觉", "value": 50},
    {"name": "后顾之忧", "value": 50},
    {"name": "一线品牌", "value": 50},
    {"name": "bull", "value": 50},
    {"name": "质量上乘", "value": 48},
    {"name": "一目了然", "value": 48},
    {"name": "比来比去", "value": 47},
    {"name": "今年夏天", "value": 46},
    {"name": "Verygood", "value": 46},
    {"name": "安装工人", "value": 45},
    {"name": "十多分钟", "value": 45},
    {"name": "知冷知热", "value": 44},
    {"name": "其他费用", "value": 43},
    {"name": "十分满意", "value": 43},
    {"name": "毫不犹豫", "value": 43},
    {"name": "及时处理", "value": 42},
    {"name": "总而言之", "value": 41},
    {"name": "货真价实", "value": 40},
    {"name": "干干净净", "value": 40},
    {"name": "知名品牌", "value": 40},
    {"name": "踏踏实实", "value": 40},
    {"name": "额外收费", "value": 39},
    {"name": "不怎么样", "value": 37},
    {"name": "前段时间", "value": 37},
    {"name": "产品包装", "value": 36},
    {"name": "陆陆续续", "value": 36},
    {"name": "前前后后", "value": 35},
    {"name": "服务满意", "value": 35},
    {"name": "乱七八糟", "value": 35});
}
else
    JosnList.push();

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