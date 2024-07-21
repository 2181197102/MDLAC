function generateDates(startDate, endDate) {
    let dates = [];
    let currentDate = new Date(startDate);
    let end = new Date(endDate);

    while (currentDate <= end) {
        let year = currentDate.getFullYear();
        let month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // 保证月份两位数
        dates.push(`${year}-${month}`); // 以YYYY-MM格式保存日期
        currentDate.setMonth(currentDate.getMonth() + 1); // 按月递增
    }

    return dates;
}

// 生成日期数据
const categories = generateDates('2023-01-01', '2024-07-01');

// 静态数据示例
const staticData = [721,567,987,1298,3933,5615,4689,2067,925,960,1567,1199,1692,1876,2858,4958,7542,14254,8211]; // 用实际数据替换
const staticGrowthRates = [-18.25396825, -21.3592233, 74.07407407, 31.50962513, 203.0046225, 42.76633613, -16.49154052, -55.91810621, -55.24915336, 3.783783784, 63.22916667, -23.48436503, 41.117598, 10.87470449, 52.34541578, 73.47795661, 52.11778943, 88.99496155, -42.39511716]; // 用实际数据替换
// 仅显示前 8 个月的数据
const initialDisplayCount = 8;
const displayCategories = categories.slice(0, initialDisplayCount);
const displayData = staticData.slice(0, initialDisplayCount);
const data2 = staticGrowthRates.slice(0, initialDisplayCount);

// 计算柱状图数据的增长率（示例）
function calculateGrowthRate(data) {
    let growthRates = [];
    for (let i = 1; i < data.length; i++) {
        let growthRate = ((data[i] - data[i - 1]) / data[i - 1]) * 100;
        growthRates.push(parseFloat(growthRate.toFixed(2)));
    }
    growthRates.unshift(0); // 第一个数据点的增长率设为0
    return growthRates;
}

const option_3 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#283b56'
            }
        }
    },
    legend: {},
    toolbox: {
        show: true,
        feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
        }
    },
    dataZoom: {
        show: false,
        start: 0,
        end: 100
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: true,
            data: displayCategories
        }
    ],
    yAxis: [
        {
            type: 'value',
            scale: true,
            name: 'Sales',
            max: 15000,
            min: 0,
            boundaryGap: [0.2, 0.2]
        },
        {
            type: 'value',
            scale: true,
            name: 'Growth Rate (%)',
            max: 200,
            min: -100,
            boundaryGap: [0.2, 0.2]
        }
    ],
    series: [
        {
            name: 'Sales Bar',
            type: 'bar',
            data: displayData
        },
        {
            name: 'Growth Rate',
            type: 'line',
            yAxisIndex: 1,
            data: data2
        }
    ]
};

// 绘制图表
const myChart_3 = echarts.init(document.getElementById('bar-example'));
myChart_3.setOption(option_3);

// 定时更新数据（可以根据需求调整）
let index = initialDisplayCount - 1; // 从最后一个初始数据点开始
setInterval(function () {
    index++;
    if (index >= categories.length) {
        index = 0; // 回到起始位置
    }

    // 获取新数据（静态数据示例）
    let newDate = categories[index];
    let newValue = staticData[index % staticData.length]; // 使用静态数据
    let newGrowthRate = staticGrowthRates[index % staticGrowthRates.length]; // 使用静态增长率

    // 更新柱状图数据
    displayData.shift();
    displayData.push(newValue);

    // 更新增长率
    data2.shift();
    data2.push(newGrowthRate);

    // 更新横坐标和纵坐标数据
    displayCategories.shift();
    displayCategories.push(newDate);

    myChart_3.setOption({
        xAxis: [
            {
                data: displayCategories
            }
        ],
        series: [
            {
                data: displayData
            },
            {
                data: data2
            }
        ]
    });

}, 3000);
