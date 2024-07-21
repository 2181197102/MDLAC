var chartDom = document.getElementById('boxblot-example');
var myChart_4 = echarts.init(chartDom);
var option_4;

// 直接定义静态数据
var _rawData = [
    {
        "brand": "\u4e91\u7c73",
        "Sales": 1899.0,
        "Comments": 29000
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 1299.0,
        "Comments": 27000
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3299.0,
        "Comments": 2000
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4599.0,
        "Comments": 2000
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2099.0,
        "Comments": 22000
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2099.0,
        "Comments": 27000
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3899.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 36300.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 4770.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 3810.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 9150.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 5750.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 2680.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 2430.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 1499.0,
        "Comments": 11000
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 7799.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 3499.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 3299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 1699.0,
        "Comments": 18000
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3999.0,
        "Comments": 2000
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 1399.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 1599.0,
        "Comments": 5000
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 2500.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 4099.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 7800.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 2500.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 2600.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 1600.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 3500.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 2200.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 2200.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 1600.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 2200.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 8999.0,
        "Comments": 0
    },
    {
        "brand": "\u7c73\u5bb6",
        "Sales": 2099.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2599.0,
        "Comments": 28000
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 5000.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 3300.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 3600.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 4099.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 6200.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 5000.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 3300.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 8200.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3999.0,
        "Comments": 0
    },
    {
        "brand": "\u7c73\u5bb6",
        "Sales": 6999.0,
        "Comments": 0
    },
    {
        "brand": "\u7c73\u5bb6",
        "Sales": 4299.0,
        "Comments": 0
    },
    {
        "brand": "\u7c73\u5bb6",
        "Sales": 1999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5999.0,
        "Comments": 0
    },
    {
        "brand": "\u7c73\u5bb6",
        "Sales": 2399.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 21100.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 31700.0,
        "Comments": 0
    },
    {
        "brand": "\u7c73\u5bb6",
        "Sales": 10598.0,
        "Comments": 0
    },
    {
        "brand": "\u7c73\u5bb6",
        "Sales": 8499.0,
        "Comments": 0
    },
    {
        "brand": "\u7c73\u5bb6",
        "Sales": 2699.0,
        "Comments": 0
    },
    {
        "brand": "\u7c73\u5bb6",
        "Sales": 7499.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 6999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5799.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5799.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 7800.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2099.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2099.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 1499.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7599.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5799.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 1499.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2099.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2099.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4298.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2399.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2299.0,
        "Comments": 0
    },
    {
        "brand": "\u5e1d\u5c0a\u7f8e",
        "Sales": 7380.0,
        "Comments": 0
    },
    {
        "brand": "\u5e1d\u5c0a\u7f8e",
        "Sales": 7980.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 8898.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 12597.0,
        "Comments": 0
    },
    {
        "brand": "\u7f8e\u5c14\u51ef\u7279",
        "Sales": 12430.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 16296.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 8898.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 12597.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2199.0,
        "Comments": 0
    },
    {
        "brand": "\u5e1d\u5c0a\u7f8e",
        "Sales": 2680.0,
        "Comments": 0
    },
    {
        "brand": "\u5e1d\u5c0a\u7f8e",
        "Sales": 2880.0,
        "Comments": 0
    },
    {
        "brand": "\u5e1d\u5c0a\u7f8e",
        "Sales": 3080.0,
        "Comments": 0
    },
    {
        "brand": "\u5e1d\u5c0a\u7f8e",
        "Sales": 3280.0,
        "Comments": 0
    },
    {
        "brand": "\u5e1d\u5c0a\u7f8e",
        "Sales": 3780.0,
        "Comments": 0
    },
    {
        "brand": "\u5e1d\u5c0a\u7f8e",
        "Sales": 3880.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3099.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3499.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3898.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4898.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3299.0,
        "Comments": 0
    },
    {
        "brand": "\u5e1d\u5c0a\u7f8e",
        "Sales": 8380.0,
        "Comments": 5000
    },
    {
        "brand": "\u5e1d\u5c0a\u7f8e",
        "Sales": 8080.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 1499.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3099.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4199.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 1999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2199.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5599.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7998.0,
        "Comments": 1000
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 8898.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 12597.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7298.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 9397.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 11496.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2099.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2099.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 12597.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 16296.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7998.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 10797.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 11697.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 1499.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3799.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4899.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3799.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4699.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 10797.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 11496.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7598.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 10397.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 13197.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2999.0,
        "Comments": 0
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 3880.0,
        "Comments": 1000
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2799.0,
        "Comments": 0
    },
    {
        "brand": "AIRPLUS",
        "Sales": 2599.0,
        "Comments": 2000
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 6952.4,
        "Comments": 0
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 6364.4,
        "Comments": 0
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 3868.0,
        "Comments": 1000
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 3668.0,
        "Comments": 1000
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 3208.64,
        "Comments": 1000
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 3012.64,
        "Comments": 1000
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 3868.0,
        "Comments": 0
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 3668.0,
        "Comments": 0
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 3680.0,
        "Comments": 1000
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2099.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2099.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4298.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 18195.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5799.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3897.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4898.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3599.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4499.0,
        "Comments": 0
    },
    {
        "brand": "\u5e1d\u5c0a\u7f8e",
        "Sales": 10498.0,
        "Comments": 0
    },
    {
        "brand": "AIRPLUS",
        "Sales": 2499.0,
        "Comments": 0
    },
    {
        "brand": "AIRPLUS",
        "Sales": 2599.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 6999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 6999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 6698.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3999.0,
        "Comments": 0
    },
    {
        "brand": "\u7f8e\u5c14\u51ef\u7279",
        "Sales": 8330.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3969.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e09\u83f1\u91cd\u5de5",
        "Sales": 500.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 6999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 6999.0,
        "Comments": 0
    },
    {
        "brand": "\u7f8e\u5c14\u51ef\u7279",
        "Sales": 7130.0,
        "Comments": 0
    },
    {
        "brand": "AIRPLUS",
        "Sales": 2899.0,
        "Comments": 2000
    },
    {
        "brand": "\u7f8e\u5c14\u51ef\u7279",
        "Sales": 8280.0,
        "Comments": 0
    },
    {
        "brand": "\u7f8e\u5c14\u51ef\u7279",
        "Sales": 8280.0,
        "Comments": 0
    },
    {
        "brand": "\u8bfa\u5361\u6c0f",
        "Sales": 1899.0,
        "Comments": 0
    },
    {
        "brand": "\u8bfa\u5361\u6c0f",
        "Sales": 1999.0,
        "Comments": 0
    },
    {
        "brand": "\u8bfa\u5361\u6c0f",
        "Sales": 2599.0,
        "Comments": 0
    },
    {
        "brand": "\u8bfa\u5361\u6c0f",
        "Sales": 3299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 8598.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 11596.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 18999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 9598.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 13597.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 17096.0,
        "Comments": 0
    },
    {
        "brand": "\u79fb\u4eab",
        "Sales": 1258.0,
        "Comments": 0
    },
    {
        "brand": "\u79fb\u4eab",
        "Sales": 1378.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3198.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5399.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2159.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2199.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3799.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4799.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 1499.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 6999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3599.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4499.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3299.0,
        "Comments": 0
    },
    {
        "brand": "\u7f8e\u5c14\u51ef\u7279",
        "Sales": 8330.0,
        "Comments": 0
    },
    {
        "brand": "\u7f8e\u5c14\u51ef\u7279",
        "Sales": 8330.0,
        "Comments": 0
    },
    {
        "brand": "\u7f8e\u5c14\u51ef\u7279",
        "Sales": 14980.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 12499.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3299.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 4080.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 4300.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 3300.0,
        "Comments": 0
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 8680.0,
        "Comments": 0
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 3380.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 6999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 11897.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 14496.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 6999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 10797.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7499.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 1599.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 6999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3899.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4899.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2399.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7499.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3799.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4799.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 13997.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5799.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 12096.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 9797.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 9697.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7798.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 9398.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 13197.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 16996.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 8398.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 13996.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 12197.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 18795.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 12197.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 9398.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 13197.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7698.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 8598.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 11597.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 11497.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 12397.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 6498.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7498.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 8397.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 9397.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 10296.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 11296.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 11097.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 1699.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 1899.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5799.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2199.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2199.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 6999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3099.0,
        "Comments": 0
    },
    {
        "brand": "AIRPLUS",
        "Sales": 2599.0,
        "Comments": 0
    },
    {
        "brand": "AIRPLUS",
        "Sales": 2999.0,
        "Comments": 0
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 7180.0,
        "Comments": 0
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 6680.0,
        "Comments": 0
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 7540.4,
        "Comments": 0
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 7480.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3099.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3199.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 20500.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 3500.0,
        "Comments": 0
    },
    {
        "brand": "AIRPLUS",
        "Sales": 6999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 22999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 26999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 28999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 31999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 33999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 22999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 26999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 31999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 33999.0,
        "Comments": 0
    },
    {
        "brand": "\u79fb\u4eab",
        "Sales": 1148.0,
        "Comments": 0
    },
    {
        "brand": "\u79fb\u4eab",
        "Sales": 1562.4,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 12999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3099.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5799.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 13597.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 11997.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 13597.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 16296.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 9898.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7499.0,
        "Comments": 0
    },
    {
        "brand": "AIRPLUS",
        "Sales": 2599.0,
        "Comments": 0
    },
    {
        "brand": "AIRPLUS",
        "Sales": 2899.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3439.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 1599.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5759.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 6399.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7499.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3999.0,
        "Comments": 0
    },
    {
        "brand": "AIRPLUS",
        "Sales": 6999.0,
        "Comments": 0
    },
    {
        "brand": "iCongo",
        "Sales": 9980.0,
        "Comments": 0
    },
    {
        "brand": "iCongo",
        "Sales": 13380.0,
        "Comments": 0
    },
    {
        "brand": "iCongo",
        "Sales": 10980.0,
        "Comments": 0
    },
    {
        "brand": "iCongo",
        "Sales": 12599.0,
        "Comments": 0
    },
    {
        "brand": "iCongo",
        "Sales": 13999.0,
        "Comments": 0
    },
    {
        "brand": "iCongo",
        "Sales": 14580.0,
        "Comments": 0
    },
    {
        "brand": "iCongo",
        "Sales": 15480.0,
        "Comments": 0
    },
    {
        "brand": "iCongo",
        "Sales": 17480.0,
        "Comments": 0
    },
    {
        "brand": "iCongo",
        "Sales": 21480.0,
        "Comments": 0
    },
    {
        "brand": "iCongo",
        "Sales": 17580.0,
        "Comments": 0
    },
    {
        "brand": "iCongo",
        "Sales": 19480.0,
        "Comments": 0
    },
    {
        "brand": "iCongo",
        "Sales": 24780.0,
        "Comments": 0
    },
    {
        "brand": "iCongo",
        "Sales": 23880.0,
        "Comments": 0
    },
    {
        "brand": "iCongo",
        "Sales": 2799.0,
        "Comments": 0
    },
    {
        "brand": "iCongo",
        "Sales": 3499.0,
        "Comments": 0
    },
    {
        "brand": "iCongo",
        "Sales": 4599.0,
        "Comments": 0
    },
    {
        "brand": "iCongo",
        "Sales": 4599.0,
        "Comments": 0
    },
    {
        "brand": "iCongo",
        "Sales": 8280.0,
        "Comments": 0
    },
    {
        "brand": "iCongo",
        "Sales": 6498.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 2399.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 7198.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 2399.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 1799.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 2199.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 9999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 9999.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 9397.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 9597.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 8999.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 1949.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 1799.0,
        "Comments": 0
    },
    {
        "brand": "AIRPLUS",
        "Sales": 2899.0,
        "Comments": 0
    },
    {
        "brand": "AIRPLUS",
        "Sales": 6999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3329.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 9999.0,
        "Comments": 1000
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 11697.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 3333.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 5000.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 1399.0,
        "Comments": 0
    },
    {
        "brand": "\u53cc\u5e7c",
        "Sales": 500.0,
        "Comments": 0
    },
    {
        "brand": "\u53cc\u5e7c",
        "Sales": 500.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2099.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5109.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7749.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3399.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2239.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7499.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4979.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4649.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3529.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3199.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7749.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 1549.0,
        "Comments": 0
    },
    {
        "brand": "AIRPLUS",
        "Sales": 2899.0,
        "Comments": 0
    },
    {
        "brand": "AIRPLUS",
        "Sales": 6999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 8309.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4419.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7499.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5799.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3099.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 2399.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4419.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 8009.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4419.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 16996.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 17196.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3299.0,
        "Comments": 0
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 8324.4,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 10668.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 10668.0,
        "Comments": 0
    },
    {
        "brand": "\u79fb\u4eab",
        "Sales": 948.0,
        "Comments": 0
    },
    {
        "brand": "\u79fb\u4eab",
        "Sales": 1279.0,
        "Comments": 0
    },
    {
        "brand": "\u79fb\u4eab",
        "Sales": 2699.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 9540.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 12779.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 6999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 10668.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 13578.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 10668.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 14247.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 17666.0,
        "Comments": 0
    },
    {
        "brand": "AIRPLUS",
        "Sales": 2849.0,
        "Comments": 0
    },
    {
        "brand": "HISENSE",
        "Sales": 7688.0,
        "Comments": 0
    },
    {
        "brand": "\u79fb\u4eab",
        "Sales": 2822.4,
        "Comments": 0
    },
    {
        "brand": "\u79fb\u4eab",
        "Sales": 2599.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 1399.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 2399.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 6798.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 8597.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 8797.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 10396.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 10796.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 11596.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 11996.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 2299.0,
        "Comments": 0
    },
    {
        "brand": "HISENSE",
        "Sales": 7688.0,
        "Comments": 0
    },
    {
        "brand": "HISENSE",
        "Sales": 8688.0,
        "Comments": 0
    },
    {
        "brand": "\u7f8e\u5c14\u51ef\u7279",
        "Sales": 8280.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 2700.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 3700.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 5050.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 4450.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 7900.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 12750.0,
        "Comments": 0
    },
    {
        "brand": "HISENSE",
        "Sales": 5750.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e09\u83f1\u91cd\u5de5",
        "Sales": 4199.0,
        "Comments": 0
    },
    {
        "brand": "\u4e09\u83f1\u91cd\u5de5",
        "Sales": 3999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e09\u83f1\u91cd\u5de5",
        "Sales": 3399.0,
        "Comments": 0
    },
    {
        "brand": "\u4e09\u83f1\u91cd\u5de5",
        "Sales": 3199.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2799.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2999.0,
        "Comments": 0
    },
    {
        "brand": "AIRPLUS",
        "Sales": 2699.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 9798.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 11597.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 15396.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 8999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7998.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 10597.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 13196.0,
        "Comments": 0
    },
    {
        "brand": "\u7c73\u5bb6",
        "Sales": 2399.0,
        "Comments": 0
    },
    {
        "brand": "\u7c73\u5bb6",
        "Sales": 2699.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 5898.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 8097.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 10296.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 5498.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 7297.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 9096.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 20.0,
        "Comments": 0
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 3280.0,
        "Comments": 0
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 7680.0,
        "Comments": 0
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 3080.0,
        "Comments": 0
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 3480.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3699.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2599.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 1850.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2799.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7798.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 10397.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 12996.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 3333.0,
        "Comments": 0
    },
    {
        "brand": "\u79fb\u4eab",
        "Sales": 998.0,
        "Comments": 0
    },
    {
        "brand": "\u79fb\u4eab",
        "Sales": 1379.0,
        "Comments": 0
    },
    {
        "brand": "\u79fb\u4eab",
        "Sales": 2379.0,
        "Comments": 0
    },
    {
        "brand": "\u79fb\u4eab",
        "Sales": 2279.0,
        "Comments": 0
    },
    {
        "brand": "\u79fb\u4eab",
        "Sales": 899.0,
        "Comments": 0
    },
    {
        "brand": "\u79fb\u4eab",
        "Sales": 1280.0,
        "Comments": 0
    },
    {
        "brand": "\u79fb\u4eab",
        "Sales": 5339.0,
        "Comments": 0
    },
    {
        "brand": "\u79fb\u4eab",
        "Sales": 5239.0,
        "Comments": 0
    },
    {
        "brand": "\u79fb\u4eab",
        "Sales": 2020.0,
        "Comments": 0
    },
    {
        "brand": "\u8bfa\u5361\u6c0f",
        "Sales": 6559.0,
        "Comments": 0
    },
    {
        "brand": "\u8bfa\u5361\u6c0f",
        "Sales": 7559.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2799.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3299.0,
        "Comments": 0
    },
    {
        "brand": "\u7c73\u5bb6",
        "Sales": 4518.0,
        "Comments": 0
    },
    {
        "brand": "\u7c73\u5bb6",
        "Sales": 4518.0,
        "Comments": 0
    },
    {
        "brand": "\u7c73\u5bb6",
        "Sales": 6248.0,
        "Comments": 0
    },
    {
        "brand": "\u7c73\u5bb6",
        "Sales": 5418.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5799.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5799.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 1850.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5799.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2959.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5799.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2599.0,
        "Comments": 0
    },
    {
        "brand": "\u7c73\u5bb6",
        "Sales": 2399.0,
        "Comments": 0
    },
    {
        "brand": "\u7c73\u5bb6",
        "Sales": 2699.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2869.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 580.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2869.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2969.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 6429.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2899.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2899.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 1599.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4299.0,
        "Comments": 0
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 8128.4,
        "Comments": 0
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 2680.0,
        "Comments": 1000
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 2880.0,
        "Comments": 0
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 3680.0,
        "Comments": 1000
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 3680.0,
        "Comments": 1000
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 3480.0,
        "Comments": 1000
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 3280.0,
        "Comments": 0
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 3080.0,
        "Comments": 1000
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 2880.0,
        "Comments": 1000
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 2680.0,
        "Comments": 1000
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 8324.4,
        "Comments": 1000
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 7540.4,
        "Comments": 1000
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 7148.4,
        "Comments": 1000
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 6560.4,
        "Comments": 1000
    },
    {
        "brand": "HISENSE",
        "Sales": 940.0,
        "Comments": 0
    },
    {
        "brand": "HISENSE",
        "Sales": 1450.0,
        "Comments": 0
    },
    {
        "brand": "HISENSE",
        "Sales": 1569.0,
        "Comments": 0
    },
    {
        "brand": "HISENSE",
        "Sales": 2080.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2869.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 1699.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3599.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2899.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4499.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2969.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7399.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7899.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2869.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4299.0,
        "Comments": 0
    },
    {
        "brand": "\u79fb\u4eab",
        "Sales": 2350.0,
        "Comments": 0
    },
    {
        "brand": "\u79fb\u4eab",
        "Sales": 7280.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7499.0,
        "Comments": 0
    },
    {
        "brand": "HISENSE",
        "Sales": 930.0,
        "Comments": 0
    },
    {
        "brand": "HISENSE",
        "Sales": 1450.0,
        "Comments": 0
    },
    {
        "brand": "HISENSE",
        "Sales": 1550.0,
        "Comments": 0
    },
    {
        "brand": "HISENSE",
        "Sales": 2050.0,
        "Comments": 0
    },
    {
        "brand": "\u53cc\u5e7c",
        "Sales": 1878.0,
        "Comments": 0
    },
    {
        "brand": "\u53cc\u5e7c",
        "Sales": 698.0,
        "Comments": 0
    },
    {
        "brand": "\u53cc\u5e7c",
        "Sales": 778.0,
        "Comments": 0
    },
    {
        "brand": "\u53cc\u5e7c",
        "Sales": 898.0,
        "Comments": 0
    },
    {
        "brand": "\u53cc\u5e7c",
        "Sales": 1038.0,
        "Comments": 0
    },
    {
        "brand": "\u53cc\u5e7c",
        "Sales": 1698.0,
        "Comments": 0
    },
    {
        "brand": "\u53cc\u5e7c",
        "Sales": 1438.0,
        "Comments": 0
    },
    {
        "brand": "\u53cc\u5e7c",
        "Sales": 2398.0,
        "Comments": 0
    },
    {
        "brand": "\u53cc\u5e7c",
        "Sales": 778.0,
        "Comments": 0
    },
    {
        "brand": "\u53cc\u5e7c",
        "Sales": 898.0,
        "Comments": 0
    },
    {
        "brand": "\u53cc\u5e7c",
        "Sales": 1398.0,
        "Comments": 0
    },
    {
        "brand": "\u53cc\u5e7c",
        "Sales": 3998.0,
        "Comments": 0
    },
    {
        "brand": "\u53cc\u5e7c",
        "Sales": 500.0,
        "Comments": 0
    },
    {
        "brand": "\u53cc\u5e7c",
        "Sales": 500.0,
        "Comments": 0
    },
    {
        "brand": "\u53cc\u5e7c",
        "Sales": 818.0,
        "Comments": 0
    },
    {
        "brand": "\u53cc\u5e7c",
        "Sales": 798.0,
        "Comments": 0
    },
    {
        "brand": "\u53cc\u5e7c",
        "Sales": 978.0,
        "Comments": 0
    },
    {
        "brand": "\u53cc\u5e7c",
        "Sales": 1278.0,
        "Comments": 0
    },
    {
        "brand": "\u53cc\u5e7c",
        "Sales": 2638.0,
        "Comments": 0
    },
    {
        "brand": "\u53cc\u5e7c",
        "Sales": 2838.0,
        "Comments": 0
    },
    {
        "brand": "\u53cc\u5e7c",
        "Sales": 1238.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5999.0,
        "Comments": 0
    },
    {
        "brand": "\u590f\u5ddd\u5c9b",
        "Sales": 3080.0,
        "Comments": 1000
    },
    {
        "brand": "AIRPLUS",
        "Sales": 2599.0,
        "Comments": 2000
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3799.0,
        "Comments": 0
    },
    {
        "brand": "AIRPLUS",
        "Sales": 2899.0,
        "Comments": 2000
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5999.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 4799.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3299.0,
        "Comments": 0
    },
    {
        "brand": "HISENSE",
        "Sales": 1150.0,
        "Comments": 0
    },
    {
        "brand": "\u79fb\u4eab",
        "Sales": 2020.0,
        "Comments": 0
    },
    {
        "brand": "\u53cc\u5e7c",
        "Sales": 1318.0,
        "Comments": 0
    },
    {
        "brand": "\u53cc\u5e7c",
        "Sales": 858.0,
        "Comments": 0
    },
    {
        "brand": "\u53cc\u5e7c",
        "Sales": 4800.0,
        "Comments": 0
    },
    {
        "brand": "\u53cc\u5e7c",
        "Sales": 5198.0,
        "Comments": 0
    },
    {
        "brand": "\u8bfa\u5361\u6c0f",
        "Sales": 7959.0,
        "Comments": 0
    },
    {
        "brand": "HISENSE",
        "Sales": 1459.0,
        "Comments": 0
    },
    {
        "brand": "HISENSE",
        "Sales": 1599.0,
        "Comments": 0
    },
    {
        "brand": "HISENSE",
        "Sales": 2099.0,
        "Comments": 0
    },
    {
        "brand": "HISENSE",
        "Sales": 1459.0,
        "Comments": 0
    },
    {
        "brand": "HISENSE",
        "Sales": 1599.0,
        "Comments": 0
    },
    {
        "brand": "HISENSE",
        "Sales": 2099.0,
        "Comments": 0
    },
    {
        "brand": "\u7ebd\u745e\u5fb7",
        "Sales": 2399.0,
        "Comments": 0
    },
    {
        "brand": "\u7ebd\u745e\u5fb7",
        "Sales": 5199.0,
        "Comments": 0
    },
    {
        "brand": "\u7ebd\u745e\u5fb7",
        "Sales": 1999.0,
        "Comments": 0
    },
    {
        "brand": "\u7ebd\u745e\u5fb7",
        "Sales": 5999.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 2350.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 2050.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 2650.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 3050.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 3750.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 3450.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 3250.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 3450.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 4450.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 5750.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 6250.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 20250.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 6749.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 2799.0,
        "Comments": 0
    },
    {
        "brand": "\u79fb\u4eab",
        "Sales": 4730.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 10597.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 12596.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 3349.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 10397.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 3349.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 3149.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 12996.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 3349.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 3349.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 2699.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 2949.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 2799.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 11796.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 9597.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 7798.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 11396.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 9797.0,
        "Comments": 0
    },
    {
        "brand": "\u79fb\u4eab",
        "Sales": 7960.0,
        "Comments": 0
    },
    {
        "brand": "\u79fb\u4eab",
        "Sales": 3890.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 2499.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3299.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 2799.0,
        "Comments": 0
    },
    {
        "brand": "HISENSE",
        "Sales": 880.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2309.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 5499.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 1899.0,
        "Comments": 0
    },
    {
        "brand": "\u79fb\u4eab",
        "Sales": 2350.0,
        "Comments": 0
    },
    {
        "brand": "\u7ebd\u745e\u5fb7",
        "Sales": 12800.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 2799.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 2699.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 2949.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 3349.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 3349.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 7798.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 9597.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 9797.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 11396.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 11796.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 2799.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 2799.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 2949.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 3349.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 3349.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 7798.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 9597.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 9797.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 11396.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 11796.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 2799.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 3149.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 3349.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 3349.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 8198.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 12996.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 2499.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 8198.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 10997.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 13796.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 9098.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 12797.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 16496.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7698.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 9797.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 11896.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 9298.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 12997.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 8198.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7698.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 9797.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 11896.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 8398.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 9298.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 8198.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 9298.0,
        "Comments": 0
    },
    {
        "brand": "\u79fb\u4eab",
        "Sales": 659.0,
        "Comments": 0
    },
    {
        "brand": "\u79fb\u4eab",
        "Sales": 645.82,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 2399.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 2399.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 1999.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 2449.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 1999.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 10580.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 8262.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 6662.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 9972.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 8629.0,
        "Comments": 0
    },
    {
        "brand": "AIRPLUS",
        "Sales": 2599.0,
        "Comments": 0
    },
    {
        "brand": "AIRPLUS",
        "Sales": 2699.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4499.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 5333.0,
        "Comments": 0
    },
    {
        "brand": "\u7ebd\u745e\u5fb7",
        "Sales": 6199.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3479.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 8499.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2999.0,
        "Comments": 0
    },
    {
        "brand": "\u8bfa\u5361\u6c0f",
        "Sales": 2899.0,
        "Comments": 0
    },
    {
        "brand": "\u8bfa\u5361\u6c0f",
        "Sales": 2999.0,
        "Comments": 0
    },
    {
        "brand": "\u7c73\u5bb6",
        "Sales": 6137.22,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 6429.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 1399.0,
        "Comments": 0
    },
    {
        "brand": "\u7c73\u5bb6",
        "Sales": 2099.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2799.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 7299.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 4599.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 6999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2599.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2599.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3999.0,
        "Comments": 0
    },
    {
        "brand": "\u7c73\u5bb6",
        "Sales": 7299.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 2799.0,
        "Comments": 0
    },
    {
        "brand": "AIRPLUS",
        "Sales": 1959.02,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2599.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 1699.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 5333.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 6749.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 15999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 18999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 8999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 6599.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 2650.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 3050.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 3750.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5099.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2519.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3439.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3539.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2599.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 2999.0,
        "Comments": 0
    },
    {
        "brand": "\u7ebd\u745e\u5fb7",
        "Sales": 3700.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 3499.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 1999.0,
        "Comments": 0
    },
    {
        "brand": "MEIPONT",
        "Sales": 1760.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 4230.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 2050.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 2350.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 4250.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 8250.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 5750.0,
        "Comments": 0
    },
    {
        "brand": "\u7c73\u5bb6",
        "Sales": 2999.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 3650.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 3050.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 3250.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 2900.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 3300.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 6200.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 13000.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 2500.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 5000.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 8200.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 2200.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 2500.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5799.0,
        "Comments": 0
    },
    {
        "brand": "\u5e1d\u5c0a\u7f8e",
        "Sales": 1980.0,
        "Comments": 0
    },
    {
        "brand": "\u5e1d\u5c0a\u7f8e",
        "Sales": 2480.0,
        "Comments": 0
    },
    {
        "brand": "\u5e1d\u5c0a\u7f8e",
        "Sales": 2880.0,
        "Comments": 0
    },
    {
        "brand": "\u5e1d\u5c0a\u7f8e",
        "Sales": 3180.0,
        "Comments": 0
    },
    {
        "brand": "\u5e1d\u5c0a\u7f8e",
        "Sales": 3680.0,
        "Comments": 0
    },
    {
        "brand": "\u5e1d\u5c0a\u7f8e",
        "Sales": 3880.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 150.0,
        "Comments": 0
    },
    {
        "brand": "\u7f8e\u5c14\u51ef\u7279",
        "Sales": 8330.0,
        "Comments": 0
    },
    {
        "brand": "\u7f8e\u5c14\u51ef\u7279",
        "Sales": 12430.0,
        "Comments": 0
    },
    {
        "brand": "\u51ac\u590f",
        "Sales": 4080.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5999.0,
        "Comments": 0
    },
    {
        "brand": "\u4e91\u7c73",
        "Sales": 5999.0,
        "Comments": 1000
    }
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
        id: 'sales_aggregate',
        fromDatasetId: 'raw',
        transform: [
          {
            type: 'ecSimpleTransform:aggregate',
            config: {
              resultDimensions: [
                { name: 'min', from: 'Sales', method: 'min' },
                { name: 'Q1', from: 'Sales', method: 'Q1' },
                { name: 'median', from: 'Sales', method: 'median' },
                { name: 'Q3', from: 'Sales', method: 'Q3' },
                { name: 'max', from: 'Sales', method: 'max' },
                { name: 'brand', from: 'brand' }
              ],
              groupBy: 'brand'
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
      text: 'Sales Distribution by Brand'
    },
    tooltip: {
      trigger: 'axis',
      confine: true
    },
    xAxis: {
      name: 'Sales',
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
        datasetId: 'sales_aggregate',
        itemStyle: {
          color: '#ffffff'
        },
        encode: {
          x: ['min', 'Q1', 'median', 'Q3', 'max'],
          y: 'brand',
          itemName: ['brand'],
          tooltip: ['min', 'Q1', 'median', 'Q3', 'max']
        }
      },
      {
        name: 'detail',
        type: 'scatter',
        datasetId: 'raw',
        symbolSize: 6,
        tooltip: {
          trigger: 'item'
        },
        label: {
          show: false
        },
        itemStyle: {
          color: '#1d6918'
        },
        encode: {
          x: 'Sales',
          y: 'brand',
          tooltip: ['brand', 'Sales', 'Comments']
        }
      }
    ]
  };
  myChart_4.setOption(option_4);
}

run(_rawData);

option_4 && myChart_4.setOption(option_4);
