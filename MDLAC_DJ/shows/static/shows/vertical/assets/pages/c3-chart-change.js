var chartDom = document.getElementById('change-example');
var myChart_change = echarts.init(chartDom);
var option_change;

const updateFrequency = 2000;
const dimension = 1; // Adjust dimension based on your data
const countryColors = {
  Australia: '#00008b',
  Canada: '#009dff',
  China: '#ffde00',
  Cuba: '#002a8f',
  Finland: '#003580',
  France: '#9f29ed',
  Germany: '#000',
  Iceland: '#003897',
  India: '#f93',
  Japan: '#87bc00',
  'North Korea': '#024fa2',
  'South Korea': '#000',
  'New Zealand': '#00247d',
  Norway: '#55ef2b',
  Poland: '#14dc82',
  Russia: '#ad1ed5',
  Turkey: '#e3bf0a',
  'United Kingdom': '#00247d',
  'United States': '#b22234'
};

// Static data with more entries
const data_change =  [
  ['Country', 'Value', 'AnotherValue', 'CountryName', 'Year'],
  ['Australia', 25, 150, 'Australia', 2000],
  ['Canada', 30, 200, 'Canada', 2000],
  ['China', 50, 300, 'China', 2000],
  ['Cuba', 20, 100, 'Cuba', 2000],
  ['Finland', 15, 80, 'Finland', 2000],
  ['France', 28, 160, 'France', 2000],
  ['Germany', 32, 180, 'Germany', 2000],
  ['Iceland', 10, 50, 'Iceland', 2000],
  ['India', 35, 220, 'India', 2000],
  ['Japan', 40, 250, 'Japan', 2000],
  ['North Korea', 18, 90, 'North Korea', 2000],
  ['South Korea', 22, 120, 'South Korea', 2000],
  ['New Zealand', 12, 60, 'New Zealand', 2000],
  ['Norway', 24, 140, 'Norway', 2000],
  ['Poland', 29, 170, 'Poland', 2000],
  ['Russia', 33, 190, 'Russia', 2000],
  ['Turkey', 27, 150, 'Turkey', 2000],
  ['United Kingdom', 31, 200, 'United Kingdom', 2000],
  ['United States', 45, 300, 'United States', 2000],
  ['Australia', 26, 155, 'Australia', 2001],
  ['Canada', 31, 210, 'Canada', 2001],
  ['China', 52, 310, 'China', 2001],
  ['Cuba', 22, 105, 'Cuba', 2001],
  ['Finland', 16, 85, 'Finland', 2001],
  ['France', 30, 165, 'France', 2001],
  ['Germany', 34, 185, 'Germany', 2001],
  ['Iceland', 11, 55, 'Iceland', 2001],
  ['India', 37, 230, 'India', 2001],
  ['Japan', 42, 260, 'Japan', 2001],
  ['North Korea', 19, 95, 'North Korea', 2001],
  ['South Korea', 23, 125, 'South Korea', 2001],
  ['New Zealand', 13, 65, 'New Zealand', 2001],
  ['Norway', 25, 145, 'Norway', 2001],
  ['Poland', 30, 175, 'Poland', 2001],
  ['Russia', 35, 200, 'Russia', 2001],
  ['Turkey', 28, 155, 'Turkey', 2001],
  ['United Kingdom', 32, 205, 'United Kingdom', 2001],
  ['United States', 46, 310, 'United States', 2001],
  ['Australia', 27, 160, 'Australia', 2002],
  ['Canada', 32, 220, 'Canada', 2002],
  ['China', 54, 320, 'China', 2002],
  ['Cuba', 24, 110, 'Cuba', 2002],
  ['Finland', 17, 90, 'Finland', 2002],
  ['France', 32, 170, 'France', 2002],
  ['Germany', 36, 190, 'Germany', 2002],
  ['Iceland', 12, 60, 'Iceland', 2002],
  ['India', 38, 240, 'India', 2002],
  ['Japan', 43, 270, 'Japan', 2002],
  ['North Korea', 20, 100, 'North Korea', 2002],
  ['South Korea', 24, 130, 'South Korea', 2002],
  ['New Zealand', 14, 70, 'New Zealand', 2002],
  ['Norway', 27, 150, 'Norway', 2002],
  ['Poland', 32, 180, 'Poland', 2002],
  ['Russia', 37, 210, 'Russia', 2002],
  ['Turkey', 30, 160, 'Turkey', 2002],
  ['United Kingdom', 34, 220, 'United Kingdom', 2002],
  ['United States', 48, 320, 'United States', 2002]
  // Add more static data as needed
];

// Static years
const years = [2000, 2001, 2002]; // Add more years if needed

function getFlag(countryName) {
  const flags = {
    Australia: '🇦🇺',
    Canada: '🇨🇦',
    China: '🇨🇳',
    Cuba: '🇨🇺',
    Finland: '🇫🇮',
    France: '🇫🇷',
    Germany: '🇩🇪',
    Iceland: '🇮🇸',
    India: '🇮🇳',
    Japan: '🇯🇵',
    'North Korea': '🇰🇵',
    'South Korea': '🇰🇷',
    'New Zealand': '🇳🇿',
    Norway: '🇳🇴',
    Poland: '🇵🇱',
    Russia: '🇷🇺',
    Turkey: '🇹🇷',
    'United Kingdom': '🇬🇧',
    'United States': '🇺🇸'
  };
  return flags[countryName] || '';
}

let startIndex = 0; // Start from the first year
let startYear = years[startIndex];
option_change = {
  grid: {
    top: 10,
    bottom: 30,
    left: 150,
    right: 80
  },
  xAxis: {
    max: 'dataMax',
    axisLabel: {
      formatter: function (n) {
        return Math.round(n) + '';
      }
    }
  },
  dataset: {
    source: data_change.filter(function (d) {
      return d[4] === startYear;
    })
  },
  yAxis: {
    type: 'category',
    inverse: true,
    max: 10,
    axisLabel: {
      show: true,
      fontSize: 14,
      formatter: function (value) {
        return value + '{flag|' + getFlag(value) + '}';
      },
      rich: {
        flag: {
          fontSize: 25,
          padding: 5
        }
      }
    },
    animationDuration: 300,
    animationDurationUpdate: 300
  },
  series: [
    {
      realtimeSort: true,
      seriesLayoutBy: 'column',
      type: 'bar',
      itemStyle: {
        color: function (param) {
          return countryColors[param.value[3]] || '#5470c6';
        }
      },
      encode: {
        x: dimension,
        y: 3
      },
      label: {
        show: true,
        precision: 1,
        position: 'right',
        valueAnimation: true,
        fontFamily: 'monospace'
      }
    }
  ],
  // Disable init animation.
  animationDuration: 0,
  animationDurationUpdate: updateFrequency,
  animationEasing: 'linear',
  animationEasingUpdate: 'linear',
  graphic: {
    elements: [
      {
        type: 'text',
        right: 160,
        bottom: 60,
        style: {
          text: startYear,
          font: 'bolder 80px monospace',
          fill: 'rgba(100, 100, 100, 0.25)'
        },
        z: 100
      }
    ]
  }
};

myChart_change.setOption(option_change);

function updateYear(year) {
  let source = data_change.filter(function (d) {
    return d[4] === year;
  });
  option_change.dataset.source = source;
  option_change.graphic.elements[0].style.text = year;
  myChart_change.setOption(option_change);
}

for (let i = startIndex; i < years.length - 1; ++i) {
  (function (i) {
    setTimeout(function () {
      updateYear(years[i + 1]);
    }, (i - startIndex) * updateFrequency);
  })(i);
}
