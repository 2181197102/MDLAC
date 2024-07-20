var chartDom = document.getElementById('boxblot-example');
var myChart_4 = echarts.init(chartDom);
var option_4;

// 直接定义静态数据
var _rawData = [
  {"Country": "USA", "Year": 2000, "Income": 40000},
  {"Country": "Canada", "Year": 2000, "Income": 35000},
  {"Country": "Germany", "Year": 2000, "Income": 32000},
  {"Country": "France", "Year": 2000, "Income": 30000},
  {"Country": "Japan", "Year": 2000, "Income": 42000},
  {"Country": "China", "Year": 2000, "Income": 20000},
  {"Country": "India", "Year": 2000, "Income": 15000},
  {"Country": "Russia", "Year": 2000, "Income": 25000},
  {"Country": "Brazil", "Year": 2000, "Income": 18000},
  {"Country": "South Africa", "Year": 2000, "Income": 16000},
  {"Country": "USA", "Year": 2001, "Income": 40500},
  {"Country": "Canada", "Year": 2001, "Income": 35500},
  {"Country": "Germany", "Year": 2001, "Income": 32500},
  {"Country": "France", "Year": 2001, "Income": 30500},
  {"Country": "Japan", "Year": 2001, "Income": 42500},
  {"Country": "China", "Year": 2001, "Income": 20500},
  {"Country": "India", "Year": 2001, "Income": 15500},
  {"Country": "Russia", "Year": 2001, "Income": 25500},
  {"Country": "Brazil", "Year": 2001, "Income": 18500},
  {"Country": "South Africa", "Year": 2001, "Income": 16500},
  // 添加更多数据...
  {"Country": "UK", "Year": 2024, "Income": 50000},
  {"Country": "Australia", "Year": 2024, "Income": 48000},
  {"Country": "Mexico", "Year": 2024, "Income": 30000},
  {"Country": "Italy", "Year": 2024, "Income": 46000},
  {"Country": "Spain", "Year": 2024, "Income": 45000},
  {"Country": "Korea", "Year": 2024, "Income": 35000}
];

function run(_rawData) {
  echarts.registerTransform(ecSimpleTransform.aggregate);
  option_4 = {
    dataset: [
      {
        id: 'raw',
        source: _rawData
      },
      {
        id: 'since_year',
        fromDatasetId: 'raw',
        transform: [
          {
            type: 'filter',
            config: {
              dimension: 'Year',
              gte: 1950
            }
          }
        ]
      },
      {
        id: 'income_aggregate',
        fromDatasetId: 'since_year',
        transform: [
          {
            type: 'ecSimpleTransform:aggregate',
            config: {
              resultDimensions: [
                { name: 'min', from: 'Income', method: 'min' },
                { name: 'Q1', from: 'Income', method: 'Q1' },
                { name: 'median', from: 'Income', method: 'median' },
                { name: 'Q3', from: 'Income', method: 'Q3' },
                { name: 'max', from: 'Income', method: 'max' },
                { name: 'Country', from: 'Country' }
              ],
              groupBy: 'Country'
            }
          },
          {
            type: 'sort',
            config: {
              dimension: 'Q3',
              order: 'asc'
            }
          }
        ]
      }
    ],
    title: {
      text: 'Income since 1950'
    },
    tooltip: {
      trigger: 'axis',
      confine: true
    },
    xAxis: {
      name: 'Income',
      nameLocation: 'middle',
      nameGap: 30,
      scale: true
    },
    yAxis: {
      type: 'category'
    },
    grid: {
      bottom: 100
    },
    legend: {
      selected: { detail: false }
    },
    dataZoom: [
      {
        type: 'inside'
      },
      {
        type: 'slider',
        height: 20
      }
    ],
    series: [
      {
        name: 'boxplot',
        type: 'boxplot',
        datasetId: 'income_aggregate',
        itemStyle: {
          color: '#ffffff'
        },
        encode: {
          x: ['min', 'Q1', 'median', 'Q3', 'max'],
          y: 'Country',
          itemName: ['Country'],
          tooltip: ['min', 'Q1', 'median', 'Q3', 'max']
        }
      },
      {
        name: 'detail',
        type: 'scatter',
        datasetId: 'since_year',
        symbolSize: 6,
        tooltip: {
          trigger: 'item'
        },
        label: {
          show: true,
          position: 'top',
          align: 'left',
          verticalAlign: 'middle',
          rotate: 90,
          fontSize: 12
        },
        itemStyle: {
          color: '#1d6918'
        },
        encode: {
          x: 'Income',
          y: 'Country',
          label: 'Year',
          itemName: 'Year',
          tooltip: ['Country', 'Year', 'Income']
        }
      }
    ]
  };
  myChart_4.setOption(option_4);
}

run(_rawData);

option_4 && myChart_4.setOption(option_4);
