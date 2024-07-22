var chartDom = document.getElementById('boxblot-example');
var myChart_4 = echarts.init(chartDom);
var option_4;

// 直接定义静态数据
var _rawData = [
    {
        "brand": "TCL",
        "Sales": 1799.0
    },
    {
        "brand": "TCL",
        "Sales": 10999.0
    },
    {
        "brand": "TCL",
        "Sales": 4399.0
    },
    {
        "brand": "TCL",
        "Sales": 4399.0
    },
    {
        "brand": "TCL",
        "Sales": 2399.0
    },
    {
        "brand": "TCL",
        "Sales": 7599.0
    },
    {
        "brand": "TCL",
        "Sales": 7449.0
    },
    {
        "brand": "TCL",
        "Sales": 5499.0
    },
    {
        "brand": "TCL",
        "Sales": 1709.0
    },
    {
        "brand": "TCL",
        "Sales": 7849.0
    },
    {
        "brand": "TCL",
        "Sales": 1630.0
    },
    {
        "brand": "TCL",
        "Sales": 2399.0
    },
    {
        "brand": "TCL",
        "Sales": 2659.0
    },
    {
        "brand": "TCL",
        "Sales": 1829.0
    },
    {
        "brand": "TCL",
        "Sales": 18899.0
    },
    {
        "brand": "TCL",
        "Sales": 1699.0
    },
    {
        "brand": "TCL",
        "Sales": 1699.0
    },
    {
        "brand": "TCL",
        "Sales": 1799.0
    },
    {
        "brand": "TCL",
        "Sales": 2299.0
    },
    {
        "brand": "TCL",
        "Sales": 3199.0
    },
    {
        "brand": "TCL",
        "Sales": 2199.0
    },
    {
        "brand": "TCL",
        "Sales": 4469.0
    },
    {
        "brand": "TCL",
        "Sales": 1459.0
    },
    {
        "brand": "TCL",
        "Sales": 1459.0
    },
    {
        "brand": "TCL",
        "Sales": 4499.0
    },
    {
        "brand": "TCL",
        "Sales": 5999.0
    },
    {
        "brand": "TCL",
        "Sales": 5299.0
    },
    {
        "brand": "TCL",
        "Sales": 1699.0
    },
    {
        "brand": "TCL",
        "Sales": 2399.0
    },
    {
        "brand": "TCL",
        "Sales": 2399.0
    },
    {
        "brand": "TCL",
        "Sales": 2879.0
    },
    {
        "brand": "TCL",
        "Sales": 3999.0
    },
    {
        "brand": "TCL",
        "Sales": 8749.0
    },
    {
        "brand": "TCL",
        "Sales": 6199.0
    },
    {
        "brand": "TCL",
        "Sales": 3699.0
    },
    {
        "brand": "TCL",
        "Sales": 5099.0
    },
    {
        "brand": "TCL",
        "Sales": 6899.0
    },
    {
        "brand": "TCL",
        "Sales": 2401.0
    },
    {
        "brand": "TCL",
        "Sales": 2659.0
    },
    {
        "brand": "TCL",
        "Sales": 19999.0
    },
    {
        "brand": "TCL",
        "Sales": 5999.0
    },
    {
        "brand": "TCL",
        "Sales": 5999.0
    },
    {
        "brand": "TCL",
        "Sales": 7999.0
    },
    {
        "brand": "TCL",
        "Sales": 1459.0
    },
    {
        "brand": "TCL",
        "Sales": 1799.0
    },
    {
        "brand": "TCL",
        "Sales": 10999.0
    },
    {
        "brand": "TCL",
        "Sales": 2899.0
    },
    {
        "brand": "TCL",
        "Sales": 1799.0
    },
    {
        "brand": "TCL",
        "Sales": 4299.0
    },
    {
        "brand": "TCL",
        "Sales": 3698.0
    },
    {
        "brand": "TCL",
        "Sales": 14799.0
    },
    {
        "brand": "TCL",
        "Sales": 2499.0
    },
    {
        "brand": "TCL",
        "Sales": 18949.0
    },
    {
        "brand": "TCL",
        "Sales": 2899.0
    },
    {
        "brand": "TCL",
        "Sales": 2499.0
    },
    {
        "brand": "TCL",
        "Sales": 16199.0
    },
    {
        "brand": "TCL",
        "Sales": 1499.0
    },
    {
        "brand": "TCL",
        "Sales": 1669.0
    },
    {
        "brand": "TCL",
        "Sales": 8337.0
    },
    {
        "brand": "TCL",
        "Sales": 6899.0
    },
    {
        "brand": "TCL",
        "Sales": 2659.0
    },
    {
        "brand": "TCL",
        "Sales": 3294.0
    },
    {
        "brand": "TCL",
        "Sales": 12394.0
    },
    {
        "brand": "TCL",
        "Sales": 13599.0
    },
    {
        "brand": "TCL",
        "Sales": 6599.0
    },
    {
        "brand": "TCL",
        "Sales": 14799.0
    },
    {
        "brand": "TCL",
        "Sales": 5999.0
    },
    {
        "brand": "TCL",
        "Sales": 17899.0
    },
    {
        "brand": "TCL",
        "Sales": 3669.0
    },
    {
        "brand": "TCL",
        "Sales": 2499.0
    },
    {
        "brand": "TCL",
        "Sales": 2299.0
    },
    {
        "brand": "TCL",
        "Sales": 15899.0
    },
    {
        "brand": "TCL",
        "Sales": 1899.0
    },
    {
        "brand": "TCL",
        "Sales": 3699.0
    },
    {
        "brand": "TCL",
        "Sales": 3599.0
    },
    {
        "brand": "TCL",
        "Sales": 4699.0
    },
    {
        "brand": "TCL",
        "Sales": 2799.0
    },
    {
        "brand": "TCL",
        "Sales": 2699.0
    },
    {
        "brand": "TCL",
        "Sales": 3599.0
    },
    {
        "brand": "TCL",
        "Sales": 5999.0
    },
    {
        "brand": "TCL",
        "Sales": 1799.0
    },
    {
        "brand": "TCL",
        "Sales": 3099.0
    },
    {
        "brand": "TCL",
        "Sales": 2659.0
    },
    {
        "brand": "TCL",
        "Sales": 2649.0
    },
    {
        "brand": "TCL",
        "Sales": 3649.0
    },
    {
        "brand": "TCL",
        "Sales": 2659.0
    },
    {
        "brand": "TCL",
        "Sales": 1799.0
    },
    {
        "brand": "TCL",
        "Sales": 1709.0
    },
    {
        "brand": "TCL",
        "Sales": 3199.0
    },
    {
        "brand": "TCL",
        "Sales": 6699.0
    },
    {
        "brand": "TCL",
        "Sales": 6898.0
    },
    {
        "brand": "TCL",
        "Sales": 4299.0
    },
    {
        "brand": "TCL",
        "Sales": 4999.0
    },
    {
        "brand": "TCL",
        "Sales": 13299.0
    },
    {
        "brand": "TCL",
        "Sales": 18099.0
    },
    {
        "brand": "TCL",
        "Sales": 5999.0
    },
    {
        "brand": "TCL",
        "Sales": 17899.0
    },
    {
        "brand": "TCL",
        "Sales": 2899.0
    },
    {
        "brand": "TCL",
        "Sales": 2879.0
    },
    {
        "brand": "TCL",
        "Sales": 1899.0
    },
    {
        "brand": "TCL",
        "Sales": 4399.0
    },
    {
        "brand": "TCL",
        "Sales": 2779.0
    },
    {
        "brand": "TCL",
        "Sales": 2396.0
    },
    {
        "brand": "TCL",
        "Sales": 2999.0
    },
    {
        "brand": "TCL",
        "Sales": 4299.0
    },
    {
        "brand": "TCL",
        "Sales": 15799.0
    },
    {
        "brand": "TCL",
        "Sales": 2889.0
    },
    {
        "brand": "TCL",
        "Sales": 7369.0
    },
    {
        "brand": "TCL",
        "Sales": 3499.0
    },
    {
        "brand": "TCL",
        "Sales": 4599.0
    },
    {
        "brand": "TCL",
        "Sales": 2659.0
    },
    {
        "brand": "TCL",
        "Sales": 2199.0
    },
    {
        "brand": "TCL",
        "Sales": 6899.0
    },
    {
        "brand": "TCL",
        "Sales": 1459.0
    },
    {
        "brand": "TCL",
        "Sales": 2899.0
    },
    {
        "brand": "TCL",
        "Sales": 4299.0
    },
    {
        "brand": "TCL",
        "Sales": 4259.0
    },
    {
        "brand": "TCL",
        "Sales": 1499.0
    },
    {
        "brand": "TCL",
        "Sales": 2659.0
    },
    {
        "brand": "TCL",
        "Sales": 2649.0
    },
    {
        "brand": "TCL",
        "Sales": 4199.0
    },
    {
        "brand": "TCL",
        "Sales": 2499.0
    },
    {
        "brand": "TCL",
        "Sales": 1669.0
    },
    {
        "brand": "TCL",
        "Sales": 5399.0
    },
    {
        "brand": "TCL",
        "Sales": 7997.0
    },
    {
        "brand": "TCL",
        "Sales": 3694.0
    },
    {
        "brand": "TCL",
        "Sales": 1719.0
    },
    {
        "brand": "TCL",
        "Sales": 6899.0
    },
    {
        "brand": "TCL",
        "Sales": 7499.0
    },
    {
        "brand": "TCL",
        "Sales": 1949.0
    },
    {
        "brand": "TCL",
        "Sales": 2669.0
    },
    {
        "brand": "TCL",
        "Sales": 1999.0
    },
    {
        "brand": "TCL",
        "Sales": 2899.0
    },
    {
        "brand": "TCL",
        "Sales": 3699.0
    },
    {
        "brand": "TCL",
        "Sales": 1849.0
    },
    {
        "brand": "TCL",
        "Sales": 3199.0
    },
    {
        "brand": "TCL",
        "Sales": 3350.0
    },
    {
        "brand": "TCL",
        "Sales": 2099.0
    },
    {
        "brand": "TCL",
        "Sales": 6399.0
    },
    {
        "brand": "TCL",
        "Sales": 15799.0
    },
    {
        "brand": "TCL",
        "Sales": 6599.0
    },
    {
        "brand": "TCL",
        "Sales": 3299.0
    },
    {
        "brand": "TCL",
        "Sales": 3999.0
    },
    {
        "brand": "TCL",
        "Sales": 1799.0
    },
    {
        "brand": "TCL",
        "Sales": 3999.0
    },
    {
        "brand": "TCL",
        "Sales": 4699.0
    },
    {
        "brand": "TCL",
        "Sales": 3870.02
    },
    {
        "brand": "TCL",
        "Sales": 1799.0
    },
    {
        "brand": "TCL",
        "Sales": 3659.0
    },
    {
        "brand": "TCL",
        "Sales": 1899.0
    },
    {
        "brand": "TCL",
        "Sales": 15799.0
    },
    {
        "brand": "TCL",
        "Sales": 1999.0
    },
    {
        "brand": "TCL",
        "Sales": 3659.0
    },
    {
        "brand": "TCL",
        "Sales": 3599.0
    },
    {
        "brand": "TCL",
        "Sales": 13599.0
    },
    {
        "brand": "TCL",
        "Sales": 1447.0
    },
    {
        "brand": "TCL",
        "Sales": 2399.0
    },
    {
        "brand": "TCL",
        "Sales": 2999.0
    },
    {
        "brand": "TCL",
        "Sales": 7299.0
    },
    {
        "brand": "TCL",
        "Sales": 1699.0
    },
    {
        "brand": "TCL",
        "Sales": 1499.0
    },
    {
        "brand": "TCL",
        "Sales": 1999.0
    },
    {
        "brand": "TCL",
        "Sales": 5498.0
    },
    {
        "brand": "TCL",
        "Sales": 1849.0
    },
    {
        "brand": "TCL",
        "Sales": 1699.0
    },
    {
        "brand": "TCL",
        "Sales": 2649.0
    },
    {
        "brand": "TCL",
        "Sales": 1459.0
    },
    {
        "brand": "TCL",
        "Sales": 4299.0
    },
    {
        "brand": "TCL",
        "Sales": 19999.0
    },
    {
        "brand": "TCL",
        "Sales": 19999.0
    },
    {
        "brand": "TCL",
        "Sales": 5599.0
    },
    {
        "brand": "TCL",
        "Sales": 1749.0
    },
    {
        "brand": "TCL",
        "Sales": 1799.0
    },
    {
        "brand": "TCL",
        "Sales": 3099.0
    },
    {
        "brand": "TCL",
        "Sales": 4069.0
    },
    {
        "brand": "TCL",
        "Sales": 17899.0
    },
    {
        "brand": "TCL",
        "Sales": 1799.0
    },
    {
        "brand": "TCL",
        "Sales": 9049.0
    },
    {
        "brand": "TCL",
        "Sales": 7649.0
    },
    {
        "brand": "TCL",
        "Sales": 1699.0
    },
    {
        "brand": "TCL",
        "Sales": 3659.0
    },
    {
        "brand": "TCL",
        "Sales": 3599.0
    },
    {
        "brand": "TCL",
        "Sales": 2879.0
    },
    {
        "brand": "TCL",
        "Sales": 3399.0
    },
    {
        "brand": "TCL",
        "Sales": 4399.0
    },
    {
        "brand": "TCL",
        "Sales": 4899.0
    },
    {
        "brand": "TCL",
        "Sales": 2649.0
    },
    {
        "brand": "TCL",
        "Sales": 1699.0
    },
    {
        "brand": "TCL",
        "Sales": 3499.0
    },
    {
        "brand": "TCL",
        "Sales": 3599.0
    },
    {
        "brand": "TCL",
        "Sales": 3989.0
    },
    {
        "brand": "TCL",
        "Sales": 1699.0
    },
    {
        "brand": "TCL",
        "Sales": 1789.0
    },
    {
        "brand": "TCL",
        "Sales": 1899.0
    },
    {
        "brand": "TCL",
        "Sales": 1709.0
    },
    {
        "brand": "TCL",
        "Sales": 2499.0
    },
    {
        "brand": "TCL",
        "Sales": 5999.0
    },
    {
        "brand": "TCL",
        "Sales": 14949.0
    },
    {
        "brand": "TCL",
        "Sales": 2799.0
    },
    {
        "brand": "TCL",
        "Sales": 7399.0
    },
    {
        "brand": "TCL",
        "Sales": 3999.0
    },
    {
        "brand": "TCL",
        "Sales": 3799.0
    },
    {
        "brand": "TCL",
        "Sales": 4899.0
    },
    {
        "brand": "TCL",
        "Sales": 3649.0
    },
    {
        "brand": "TCL",
        "Sales": 13299.0
    },
    {
        "brand": "TCL",
        "Sales": 2849.0
    },
    {
        "brand": "TCL",
        "Sales": 4599.0
    },
    {
        "brand": "TCL",
        "Sales": 4199.0
    },
    {
        "brand": "TCL",
        "Sales": 2999.0
    },
    {
        "brand": "TCL",
        "Sales": 2999.0
    },
    {
        "brand": "TCL",
        "Sales": 4599.0
    },
    {
        "brand": "TCL",
        "Sales": 1459.0
    },
    {
        "brand": "TCL",
        "Sales": 5599.0
    },
    {
        "brand": "TCL",
        "Sales": 6399.0
    },
    {
        "brand": "TCL",
        "Sales": 6399.0
    },
    {
        "brand": "TCL",
        "Sales": 7499.0
    },
    {
        "brand": "TCL",
        "Sales": 2099.0
    },
    {
        "brand": "TCL",
        "Sales": 6698.0
    },
    {
        "brand": "TCL",
        "Sales": 1799.0
    },
    {
        "brand": "TCL",
        "Sales": 1799.0
    },
    {
        "brand": "TCL",
        "Sales": 1899.0
    },
    {
        "brand": "TCL",
        "Sales": 2399.0
    },
    {
        "brand": "TCL",
        "Sales": 2399.0
    },
    {
        "brand": "TCL",
        "Sales": 1799.0
    },
    {
        "brand": "TCL",
        "Sales": 1479.0
    },
    {
        "brand": "TCL",
        "Sales": 3799.0
    },
    {
        "brand": "TCL",
        "Sales": 2759.0
    },
    {
        "brand": "TCL",
        "Sales": 4199.0
    },
    {
        "brand": "TCL",
        "Sales": 1799.0
    },
    {
        "brand": "TCL",
        "Sales": 4699.0
    },
    {
        "brand": "TCL",
        "Sales": 1999.0
    },
    {
        "brand": "TCL",
        "Sales": 1599.0
    },
    {
        "brand": "TCL",
        "Sales": 3899.0
    },
    {
        "brand": "TCL",
        "Sales": 4999.0
    },
    {
        "brand": "TCL",
        "Sales": 1649.0
    },
    {
        "brand": "TCL",
        "Sales": 3599.0
    },
    {
        "brand": "TCL",
        "Sales": 1699.0
    },
    {
        "brand": "TCL",
        "Sales": 2999.0
    },
    {
        "brand": "TCL",
        "Sales": 2499.0
    },
    {
        "brand": "TCL",
        "Sales": 2499.0
    },
    {
        "brand": "TCL",
        "Sales": 1749.0
    },
    {
        "brand": "TCL",
        "Sales": 2649.0
    },
    {
        "brand": "TCL",
        "Sales": 3599.0
    },
    {
        "brand": "TCL",
        "Sales": 1669.0
    },
    {
        "brand": "TCL",
        "Sales": 5999.0
    },
    {
        "brand": "TCL",
        "Sales": 1899.0
    },
    {
        "brand": "TCL",
        "Sales": 14799.0
    },
    {
        "brand": "TCL",
        "Sales": 10999.0
    },
    {
        "brand": "TCL",
        "Sales": 9369.0
    },
    {
        "brand": "TCL",
        "Sales": 5999.0
    },
    {
        "brand": "TCL",
        "Sales": 5649.0
    },
    {
        "brand": "TCL",
        "Sales": 2949.0
    },
    {
        "brand": "TCL",
        "Sales": 1499.0
    },
    {
        "brand": "TCL",
        "Sales": 5099.0
    },
    {
        "brand": "TCL",
        "Sales": 4399.0
    },
    {
        "brand": "TCL",
        "Sales": 8999.0
    },
    {
        "brand": "TCL",
        "Sales": 6299.0
    },
    {
        "brand": "TCL",
        "Sales": 6499.0
    },
    {
        "brand": "TCL",
        "Sales": 3599.0
    },
    {
        "brand": "TCL",
        "Sales": 1599.0
    },
    {
        "brand": "TCL",
        "Sales": 4848.0
    },
    {
        "brand": "TCL",
        "Sales": 7499.0
    },
    {
        "brand": "TCL",
        "Sales": 1499.0
    },
    {
        "brand": "TCL",
        "Sales": 3999.0
    },
    {
        "brand": "TCL",
        "Sales": 5799.0
    },
    {
        "brand": "TCL",
        "Sales": 1799.0
    },
    {
        "brand": "TCL",
        "Sales": 13999.0
    },
    {
        "brand": "TCL",
        "Sales": 7002.0
    },
    {
        "brand": "TCL",
        "Sales": 5002.0
    },
    {
        "brand": "TCL",
        "Sales": 7499.0
    },
    {
        "brand": "TCL",
        "Sales": 1999.0
    },
    {
        "brand": "TCL",
        "Sales": 14949.0
    },
    {
        "brand": "TCL",
        "Sales": 1699.0
    },
    {
        "brand": "TCL",
        "Sales": 6099.0
    },
    {
        "brand": "TCL",
        "Sales": 1799.0
    },
    {
        "brand": "TCL",
        "Sales": 9049.0
    },
    {
        "brand": "TCL",
        "Sales": 17899.0
    },
    {
        "brand": "TCL",
        "Sales": 5099.0
    },
    {
        "brand": "TCL",
        "Sales": 13799.0
    },
    {
        "brand": "TCL",
        "Sales": 1789.0
    },
    {
        "brand": "TCL",
        "Sales": 1399.0
    },
    {
        "brand": "TCL",
        "Sales": 5299.0
    },
    {
        "brand": "TCL",
        "Sales": 1799.0
    },
    {
        "brand": "TCL",
        "Sales": 3999.0
    },
    {
        "brand": "TCL",
        "Sales": 1699.0
    },
    {
        "brand": "TCL",
        "Sales": 1899.0
    },
    {
        "brand": "TCL",
        "Sales": 1789.0
    },
    {
        "brand": "TCL",
        "Sales": 1459.0
    },
    {
        "brand": "TCL",
        "Sales": 3699.0
    },
    {
        "brand": "TCL",
        "Sales": 1799.0
    },
    {
        "brand": "TCL",
        "Sales": 4399.0
    },
    {
        "brand": "TCL",
        "Sales": 4199.0
    },
    {
        "brand": "TCL",
        "Sales": 4599.0
    },
    {
        "brand": "TCL",
        "Sales": 1788.0
    },
    {
        "brand": "TCL",
        "Sales": 3399.0
    },
    {
        "brand": "TCL",
        "Sales": 1699.0
    },
    {
        "brand": "TCL",
        "Sales": 16999.0
    },
    {
        "brand": "TCL",
        "Sales": 4699.0
    },
    {
        "brand": "TCL",
        "Sales": 1459.0
    },
    {
        "brand": "TCL",
        "Sales": 3999.0
    },
    {
        "brand": "三菱",
        "Sales": 4490.0
    },
    {
        "brand": "三菱",
        "Sales": 8999.0
    },
    {
        "brand": "三菱",
        "Sales": 1300.0
    },
    {
        "brand": "三菱",
        "Sales": 11699.0
    },
    {
        "brand": "三菱",
        "Sales": 17600.0
    },
    {
        "brand": "三菱",
        "Sales": 10250.0
    },
    {
        "brand": "三菱",
        "Sales": 14999.0
    },
    {
        "brand": "三菱",
        "Sales": 9999.0
    },
    {
        "brand": "三菱",
        "Sales": 5299.0
    },
    {
        "brand": "三菱",
        "Sales": 3199.0
    },
    {
        "brand": "三菱",
        "Sales": 6599.0
    },
    {
        "brand": "三菱",
        "Sales": 4268.0
    },
    {
        "brand": "三菱",
        "Sales": 18990.0
    },
    {
        "brand": "三菱",
        "Sales": 4599.0
    },
    {
        "brand": "三菱",
        "Sales": 4499.0
    },
    {
        "brand": "三菱",
        "Sales": 4199.0
    },
    {
        "brand": "三菱",
        "Sales": 5799.0
    },
    {
        "brand": "三菱",
        "Sales": 19499.0
    },
    {
        "brand": "三菱",
        "Sales": 9899.0
    },
    {
        "brand": "三菱",
        "Sales": 5699.0
    },
    {
        "brand": "三菱",
        "Sales": 1618.0
    },
    {
        "brand": "三菱",
        "Sales": 1968.0
    },
    {
        "brand": "三菱",
        "Sales": 17100.0
    },
    {
        "brand": "三菱",
        "Sales": 8700.0
    },
    {
        "brand": "三菱",
        "Sales": 4199.0
    },
    {
        "brand": "三菱",
        "Sales": 3199.0
    },
    {
        "brand": "三菱",
        "Sales": 11280.0
    },
    {
        "brand": "三菱",
        "Sales": 4438.0
    },
    {
        "brand": "三菱",
        "Sales": 1439.0
    },
    {
        "brand": "三菱",
        "Sales": 16497.0
    },
    {
        "brand": "三菱",
        "Sales": 14990.0
    },
    {
        "brand": "三菱",
        "Sales": 4738.0
    },
    {
        "brand": "三菱",
        "Sales": 11000.0
    },
    {
        "brand": "三菱",
        "Sales": 2299.0
    },
    {
        "brand": "三菱",
        "Sales": 3399.0
    },
    {
        "brand": "三菱",
        "Sales": 19998.0
    },
    {
        "brand": "三菱",
        "Sales": 1688.0
    },
    {
        "brand": "三菱",
        "Sales": 2138.0
    },
    {
        "brand": "三菱",
        "Sales": 1558.0
    },
    {
        "brand": "三菱",
        "Sales": 5699.0
    },
    {
        "brand": "三菱",
        "Sales": 8899.0
    },
    {
        "brand": "三菱",
        "Sales": 8500.0
    },
    {
        "brand": "三菱",
        "Sales": 3199.0
    },
    {
        "brand": "三菱",
        "Sales": 4099.0
    },
    {
        "brand": "三菱",
        "Sales": 10700.0
    },
    {
        "brand": "三菱",
        "Sales": 16297.0
    },
    {
        "brand": "三菱",
        "Sales": 1880.0
    },
    {
        "brand": "三菱",
        "Sales": 15999.0
    },
    {
        "brand": "三菱",
        "Sales": 4880.0
    },
    {
        "brand": "三菱",
        "Sales": 1999.0
    },
    {
        "brand": "三菱",
        "Sales": 1670.0
    },
    {
        "brand": "三菱",
        "Sales": 11999.0
    },
    {
        "brand": "三菱",
        "Sales": 2138.0
    },
    {
        "brand": "三菱",
        "Sales": 10999.0
    },
    {
        "brand": "三菱",
        "Sales": 14899.0
    },
    {
        "brand": "三菱",
        "Sales": 3999.0
    },
    {
        "brand": "三菱",
        "Sales": 10999.0
    },
    {
        "brand": "三菱",
        "Sales": 7000.0
    },
    {
        "brand": "三菱",
        "Sales": 3288.0
    },
    {
        "brand": "三菱",
        "Sales": 11999.0
    },
    {
        "brand": "三菱",
        "Sales": 9999.0
    },
    {
        "brand": "三菱",
        "Sales": 1469.0
    },
    {
        "brand": "三菱",
        "Sales": 10999.0
    },
    {
        "brand": "三菱",
        "Sales": 3399.0
    },
    {
        "brand": "三菱",
        "Sales": 1999.0
    },
    {
        "brand": "三菱",
        "Sales": 4599.0
    },
    {
        "brand": "三菱",
        "Sales": 12200.0
    },
    {
        "brand": "三菱",
        "Sales": 8999.0
    },
    {
        "brand": "三菱",
        "Sales": 10880.0
    },
    {
        "brand": "三菱",
        "Sales": 4500.0
    },
    {
        "brand": "三菱",
        "Sales": 3799.0
    },
    {
        "brand": "三菱",
        "Sales": 7900.0
    },
    {
        "brand": "三菱",
        "Sales": 1310.0
    },
    {
        "brand": "三菱",
        "Sales": 17999.0
    },
    {
        "brand": "三菱",
        "Sales": 3099.0
    },
    {
        "brand": "三菱",
        "Sales": 3999.0
    },
    {
        "brand": "三菱",
        "Sales": 3999.0
    },
    {
        "brand": "三菱",
        "Sales": 1105.0
    },
    {
        "brand": "三菱",
        "Sales": 5899.0
    },
    {
        "brand": "三菱",
        "Sales": 4599.0
    },
    {
        "brand": "三菱",
        "Sales": 8799.0
    },
    {
        "brand": "三菱",
        "Sales": 4299.0
    },
    {
        "brand": "三菱",
        "Sales": 6899.0
    },
    {
        "brand": "三菱",
        "Sales": 10999.0
    },
    {
        "brand": "三菱",
        "Sales": 4199.0
    },
    {
        "brand": "三菱",
        "Sales": 4299.0
    },
    {
        "brand": "三菱",
        "Sales": 15999.0
    },
    {
        "brand": "三菱",
        "Sales": 3199.0
    },
    {
        "brand": "三菱",
        "Sales": 4299.0
    },
    {
        "brand": "三菱",
        "Sales": 1419.0
    },
    {
        "brand": "三菱",
        "Sales": 11700.0
    },
    {
        "brand": "三菱",
        "Sales": 3299.0
    },
    {
        "brand": "三菱",
        "Sales": 1169.0
    },
    {
        "brand": "三菱",
        "Sales": 5799.0
    },
    {
        "brand": "三菱",
        "Sales": 3828.0
    },
    {
        "brand": "三菱",
        "Sales": 1390.0
    },
    {
        "brand": "三菱",
        "Sales": 4399.0
    },
    {
        "brand": "三菱",
        "Sales": 10999.0
    },
    {
        "brand": "三菱",
        "Sales": 14800.0
    },
    {
        "brand": "三菱",
        "Sales": 4990.0
    },
    {
        "brand": "三菱",
        "Sales": 4428.0
    },
    {
        "brand": "三菱",
        "Sales": 6569.0
    },
    {
        "brand": "三菱",
        "Sales": 6699.0
    },
    {
        "brand": "三菱",
        "Sales": 1808.0
    },
    {
        "brand": "三菱",
        "Sales": 1818.0
    },
    {
        "brand": "三菱",
        "Sales": 4199.0
    },
    {
        "brand": "三菱",
        "Sales": 4199.0
    },
    {
        "brand": "三菱",
        "Sales": 7299.0
    },
    {
        "brand": "三菱",
        "Sales": 15999.0
    },
    {
        "brand": "三菱",
        "Sales": 5899.0
    },
    {
        "brand": "三菱",
        "Sales": 19340.0
    },
    {
        "brand": "三菱",
        "Sales": 8090.0
    },
    {
        "brand": "三菱",
        "Sales": 8890.0
    },
    {
        "brand": "三菱",
        "Sales": 1750.0
    },
    {
        "brand": "三菱",
        "Sales": 19296.0
    },
    {
        "brand": "三菱",
        "Sales": 2988.0
    },
    {
        "brand": "三菱",
        "Sales": 5299.0
    },
    {
        "brand": "三菱",
        "Sales": 4190.0
    },
    {
        "brand": "三菱",
        "Sales": 8899.0
    },
    {
        "brand": "三菱",
        "Sales": 10000.0
    },
    {
        "brand": "三菱",
        "Sales": 1179.0
    },
    {
        "brand": "三菱",
        "Sales": 18080.0
    },
    {
        "brand": "三菱",
        "Sales": 16500.0
    },
    {
        "brand": "三菱",
        "Sales": 3120.0
    },
    {
        "brand": "三菱",
        "Sales": 2047.0
    },
    {
        "brand": "三菱",
        "Sales": 4299.0
    },
    {
        "brand": "三菱",
        "Sales": 4999.0
    },
    {
        "brand": "三菱",
        "Sales": 9199.0
    },
    {
        "brand": "三菱",
        "Sales": 3799.0
    },
    {
        "brand": "三菱",
        "Sales": 8090.0
    },
    {
        "brand": "三菱",
        "Sales": 6899.0
    },
    {
        "brand": "三菱",
        "Sales": 3199.0
    },
    {
        "brand": "三菱",
        "Sales": 3799.0
    },
    {
        "brand": "三菱",
        "Sales": 3748.0
    },
    {
        "brand": "三菱",
        "Sales": 15298.0
    },
    {
        "brand": "三菱",
        "Sales": 4199.0
    },
    {
        "brand": "三菱",
        "Sales": 8599.0
    },
    {
        "brand": "三菱",
        "Sales": 15999.0
    },
    {
        "brand": "三菱",
        "Sales": 6290.0
    },
    {
        "brand": "三菱",
        "Sales": 3399.0
    },
    {
        "brand": "三菱",
        "Sales": 7299.0
    },
    {
        "brand": "三菱",
        "Sales": 4399.0
    },
    {
        "brand": "三菱",
        "Sales": 5399.0
    },
    {
        "brand": "三菱",
        "Sales": 1469.0
    },
    {
        "brand": "三菱",
        "Sales": 12999.0
    },
    {
        "brand": "三菱",
        "Sales": 5399.0
    },
    {
        "brand": "三菱",
        "Sales": 5299.0
    },
    {
        "brand": "三菱",
        "Sales": 8199.0
    },
    {
        "brand": "三菱",
        "Sales": 3999.0
    },
    {
        "brand": "三菱",
        "Sales": 8999.0
    },
    {
        "brand": "三菱",
        "Sales": 7299.0
    },
    {
        "brand": "三菱",
        "Sales": 1460.0
    },
    {
        "brand": "三菱",
        "Sales": 9999.0
    },
    {
        "brand": "三菱",
        "Sales": 5899.0
    },
    {
        "brand": "三菱",
        "Sales": 7289.0
    },
    {
        "brand": "三菱",
        "Sales": 16100.0
    },
    {
        "brand": "三菱",
        "Sales": 19000.0
    },
    {
        "brand": "三菱",
        "Sales": 1239.0
    },
    {
        "brand": "三菱",
        "Sales": 5299.0
    },
    {
        "brand": "三菱",
        "Sales": 9999.0
    },
    {
        "brand": "三菱",
        "Sales": 13999.0
    },
    {
        "brand": "三菱",
        "Sales": 3999.0
    },
    {
        "brand": "三菱",
        "Sales": 10699.0
    },
    {
        "brand": "三菱",
        "Sales": 1549.0
    },
    {
        "brand": "三菱",
        "Sales": 5299.0
    },
    {
        "brand": "三菱",
        "Sales": 2808.0
    },
    {
        "brand": "三菱",
        "Sales": 3999.0
    },
    {
        "brand": "三菱",
        "Sales": 6699.0
    },
    {
        "brand": "三菱",
        "Sales": 11998.0
    },
    {
        "brand": "三菱",
        "Sales": 13599.0
    },
    {
        "brand": "三菱",
        "Sales": 15999.0
    },
    {
        "brand": "三菱",
        "Sales": 4490.0
    },
    {
        "brand": "三菱",
        "Sales": 8899.0
    },
    {
        "brand": "三菱",
        "Sales": 1029.0
    },
    {
        "brand": "三菱",
        "Sales": 4158.0
    },
    {
        "brand": "三菱",
        "Sales": 11999.0
    },
    {
        "brand": "三菱",
        "Sales": 14799.0
    },
    {
        "brand": "三菱",
        "Sales": 5299.0
    },
    {
        "brand": "三菱",
        "Sales": 4490.0
    },
    {
        "brand": "三菱",
        "Sales": 13999.0
    },
    {
        "brand": "三菱",
        "Sales": 12880.0
    },
    {
        "brand": "三菱",
        "Sales": 3799.0
    },
    {
        "brand": "三菱",
        "Sales": 8090.0
    },
    {
        "brand": "三菱",
        "Sales": 2098.0
    },
    {
        "brand": "三菱",
        "Sales": 10699.0
    },
    {
        "brand": "三菱",
        "Sales": 5399.0
    },
    {
        "brand": "三菱",
        "Sales": 9399.0
    },
    {
        "brand": "三菱",
        "Sales": 3170.0
    },
    {
        "brand": "三菱",
        "Sales": 17798.0
    },
    {
        "brand": "三菱",
        "Sales": 5899.0
    },
    {
        "brand": "三菱",
        "Sales": 16297.0
    },
    {
        "brand": "三菱",
        "Sales": 3199.0
    },
    {
        "brand": "三菱",
        "Sales": 5899.0
    },
    {
        "brand": "三菱",
        "Sales": 1219.0
    },
    {
        "brand": "三菱",
        "Sales": 7299.0
    },
    {
        "brand": "三菱",
        "Sales": 16297.0
    },
    {
        "brand": "三菱",
        "Sales": 13198.0
    },
    {
        "brand": "三菱",
        "Sales": 5299.0
    },
    {
        "brand": "三菱",
        "Sales": 3199.0
    },
    {
        "brand": "三菱",
        "Sales": 14920.0
    },
    {
        "brand": "三菱",
        "Sales": 5099.0
    },
    {
        "brand": "三菱",
        "Sales": 80.0
    },
    {
        "brand": "三菱",
        "Sales": 12999.0
    },
    {
        "brand": "三菱",
        "Sales": 16299.0
    },
    {
        "brand": "三菱",
        "Sales": 4199.0
    },
    {
        "brand": "三菱",
        "Sales": 8990.0
    },
    {
        "brand": "三菱",
        "Sales": 16262.0
    },
    {
        "brand": "三菱",
        "Sales": 8500.0
    },
    {
        "brand": "三菱",
        "Sales": 18999.0
    },
    {
        "brand": "三菱",
        "Sales": 9999.0
    },
    {
        "brand": "三菱",
        "Sales": 19596.0
    },
    {
        "brand": "三菱",
        "Sales": 14490.0
    },
    {
        "brand": "三菱",
        "Sales": 1379.0
    },
    {
        "brand": "三菱",
        "Sales": 17816.4
    },
    {
        "brand": "三菱",
        "Sales": 6190.0
    },
    {
        "brand": "三菱",
        "Sales": 3999.0
    },
    {
        "brand": "三菱",
        "Sales": 4499.0
    },
    {
        "brand": "三菱",
        "Sales": 1448.0
    },
    {
        "brand": "三菱",
        "Sales": 9480.0
    },
    {
        "brand": "三菱",
        "Sales": 7699.0
    },
    {
        "brand": "三菱",
        "Sales": 4199.0
    },
    {
        "brand": "三菱",
        "Sales": 8590.0
    },
    {
        "brand": "三菱",
        "Sales": 1309.0
    },
    {
        "brand": "三菱",
        "Sales": 2599.0
    },
    {
        "brand": "三菱",
        "Sales": 3099.0
    },
    {
        "brand": "三菱",
        "Sales": 19400.0
    },
    {
        "brand": "三菱",
        "Sales": 2375.0
    },
    {
        "brand": "三菱",
        "Sales": 6990.0
    },
    {
        "brand": "三菱",
        "Sales": 12420.0
    },
    {
        "brand": "三菱",
        "Sales": 2700.0
    },
    {
        "brand": "三菱",
        "Sales": 14920.0
    },
    {
        "brand": "三菱",
        "Sales": 6598.0
    },
    {
        "brand": "三菱",
        "Sales": 4590.0
    },
    {
        "brand": "三菱",
        "Sales": 5299.0
    },
    {
        "brand": "三菱",
        "Sales": 2550.0
    },
    {
        "brand": "三菱",
        "Sales": 5499.0
    },
    {
        "brand": "三菱",
        "Sales": 13099.0
    },
    {
        "brand": "三菱",
        "Sales": 17390.0
    },
    {
        "brand": "三菱",
        "Sales": 17180.0
    },
    {
        "brand": "三菱",
        "Sales": 14298.0
    },
    {
        "brand": "三菱",
        "Sales": 9399.0
    },
    {
        "brand": "三菱",
        "Sales": 5399.0
    },
    {
        "brand": "三菱",
        "Sales": 5399.0
    },
    {
        "brand": "三菱",
        "Sales": 3199.0
    },
    {
        "brand": "三菱",
        "Sales": 9480.0
    },
    {
        "brand": "三菱",
        "Sales": 2199.0
    },
    {
        "brand": "三菱",
        "Sales": 16299.0
    },
    {
        "brand": "三菱",
        "Sales": 4499.0
    },
    {
        "brand": "三菱",
        "Sales": 4199.0
    },
    {
        "brand": "三菱",
        "Sales": 14920.0
    },
    {
        "brand": "三菱",
        "Sales": 1818.0
    },
    {
        "brand": "三菱",
        "Sales": 11699.0
    },
    {
        "brand": "三菱",
        "Sales": 6480.0
    },
    {
        "brand": "三菱",
        "Sales": 3199.0
    },
    {
        "brand": "三菱",
        "Sales": 5899.0
    },
    {
        "brand": "三菱",
        "Sales": 14498.0
    },
    {
        "brand": "三菱",
        "Sales": 3999.0
    },
    {
        "brand": "三菱",
        "Sales": 17300.0
    },
    {
        "brand": "三菱",
        "Sales": 2375.0
    },
    {
        "brand": "三菱",
        "Sales": 12699.0
    },
    {
        "brand": "三菱",
        "Sales": 12299.0
    },
    {
        "brand": "三菱",
        "Sales": 13099.0
    },
    {
        "brand": "三菱",
        "Sales": 3900.0
    },
    {
        "brand": "三菱",
        "Sales": 18900.0
    },
    {
        "brand": "三菱",
        "Sales": 1650.0
    },
    {
        "brand": "三菱",
        "Sales": 1738.0
    },
    {
        "brand": "三菱",
        "Sales": 13999.0
    },
    {
        "brand": "三菱",
        "Sales": 8490.0
    },
    {
        "brand": "三菱",
        "Sales": 7200.0
    },
    {
        "brand": "三菱",
        "Sales": 7599.0
    },
    {
        "brand": "三菱",
        "Sales": 8899.0
    },
    {
        "brand": "三菱",
        "Sales": 1999.0
    },
    {
        "brand": "三菱",
        "Sales": 5899.0
    },
    {
        "brand": "三菱",
        "Sales": 1918.0
    },
    {
        "brand": "三菱",
        "Sales": 3199.0
    },
    {
        "brand": "三菱",
        "Sales": 4199.0
    },
    {
        "brand": "三菱",
        "Sales": 1339.0
    },
    {
        "brand": "三菱",
        "Sales": 5890.0
    },
    {
        "brand": "三菱",
        "Sales": 6790.0
    },
    {
        "brand": "三菱",
        "Sales": 2099.0
    },
    {
        "brand": "三菱",
        "Sales": 3648.0
    },
    {
        "brand": "三菱",
        "Sales": 6699.0
    },
    {
        "brand": "三菱",
        "Sales": 3199.0
    },
    {
        "brand": "三菱",
        "Sales": 12599.0
    },
    {
        "brand": "三菱",
        "Sales": 15999.0
    },
    {
        "brand": "三菱",
        "Sales": 11699.0
    },
    {
        "brand": "三菱",
        "Sales": 1029.0
    },
    {
        "brand": "三菱",
        "Sales": 12999.0
    },
    {
        "brand": "三菱",
        "Sales": 18080.0
    },
    {
        "brand": "三菱",
        "Sales": 10999.0
    },
    {
        "brand": "三菱",
        "Sales": 19900.0
    },
    {
        "brand": "三菱",
        "Sales": 8200.0
    },
    {
        "brand": "三菱",
        "Sales": 7299.0
    },
    {
        "brand": "三菱",
        "Sales": 14490.0
    },
    {
        "brand": "三菱",
        "Sales": 13999.0
    },
    {
        "brand": "三菱",
        "Sales": 19099.0
    },
    {
        "brand": "三菱",
        "Sales": 4368.0
    },
    {
        "brand": "三菱",
        "Sales": 8999.0
    },
    {
        "brand": "三菱",
        "Sales": 13999.0
    },
    {
        "brand": "三菱",
        "Sales": 6699.0
    },
    {
        "brand": "华凌",
        "Sales": 3999.0
    },
    {
        "brand": "华凌",
        "Sales": 4899.0
    },
    {
        "brand": "华凌",
        "Sales": 3099.0
    },
    {
        "brand": "华凌",
        "Sales": 1648.0
    },
    {
        "brand": "华凌",
        "Sales": 4599.0
    },
    {
        "brand": "华凌",
        "Sales": 4599.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 2259.0
    },
    {
        "brand": "华凌",
        "Sales": 1688.0
    },
    {
        "brand": "华凌",
        "Sales": 1648.0
    },
    {
        "brand": "华凌",
        "Sales": 2799.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 1799.0
    },
    {
        "brand": "华凌",
        "Sales": 1799.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 2368.0
    },
    {
        "brand": "华凌",
        "Sales": 4599.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 4299.0
    },
    {
        "brand": "华凌",
        "Sales": 2368.0
    },
    {
        "brand": "华凌",
        "Sales": 4299.0
    },
    {
        "brand": "华凌",
        "Sales": 2099.0
    },
    {
        "brand": "华凌",
        "Sales": 4359.0
    },
    {
        "brand": "华凌",
        "Sales": 1398.0
    },
    {
        "brand": "华凌",
        "Sales": 3099.0
    },
    {
        "brand": "华凌",
        "Sales": 3999.0
    },
    {
        "brand": "华凌",
        "Sales": 1568.0
    },
    {
        "brand": "华凌",
        "Sales": 3999.0
    },
    {
        "brand": "华凌",
        "Sales": 1799.0
    },
    {
        "brand": "华凌",
        "Sales": 4649.0
    },
    {
        "brand": "华凌",
        "Sales": 1548.0
    },
    {
        "brand": "华凌",
        "Sales": 1799.0
    },
    {
        "brand": "华凌",
        "Sales": 1799.0
    },
    {
        "brand": "华凌",
        "Sales": 2099.0
    },
    {
        "brand": "华凌",
        "Sales": 1798.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 2099.0
    },
    {
        "brand": "华凌",
        "Sales": 4459.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 1228.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 2389.0
    },
    {
        "brand": "华凌",
        "Sales": 2499.0
    },
    {
        "brand": "华凌",
        "Sales": 4399.0
    },
    {
        "brand": "华凌",
        "Sales": 1798.0
    },
    {
        "brand": "华凌",
        "Sales": 2799.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 2799.0
    },
    {
        "brand": "华凌",
        "Sales": 4699.0
    },
    {
        "brand": "华凌",
        "Sales": 2499.0
    },
    {
        "brand": "华凌",
        "Sales": 1548.0
    },
    {
        "brand": "华凌",
        "Sales": 3799.0
    },
    {
        "brand": "华凌",
        "Sales": 9999.0
    },
    {
        "brand": "华凌",
        "Sales": 1778.0
    },
    {
        "brand": "华凌",
        "Sales": 2399.0
    },
    {
        "brand": "华凌",
        "Sales": 1798.0
    },
    {
        "brand": "华凌",
        "Sales": 4399.0
    },
    {
        "brand": "华凌",
        "Sales": 4599.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 4999.0
    },
    {
        "brand": "华凌",
        "Sales": 6698.0
    },
    {
        "brand": "华凌",
        "Sales": 4599.0
    },
    {
        "brand": "华凌",
        "Sales": 4699.0
    },
    {
        "brand": "华凌",
        "Sales": 2099.0
    },
    {
        "brand": "华凌",
        "Sales": 2799.0
    },
    {
        "brand": "华凌",
        "Sales": 1228.0
    },
    {
        "brand": "华凌",
        "Sales": 2099.0
    },
    {
        "brand": "华凌",
        "Sales": 1798.0
    },
    {
        "brand": "华凌",
        "Sales": 4599.0
    },
    {
        "brand": "华凌",
        "Sales": 9999.0
    },
    {
        "brand": "华凌",
        "Sales": 4649.0
    },
    {
        "brand": "华凌",
        "Sales": 1338.0
    },
    {
        "brand": "华凌",
        "Sales": 1588.0
    },
    {
        "brand": "华凌",
        "Sales": 4459.0
    },
    {
        "brand": "华凌",
        "Sales": 1949.0
    },
    {
        "brand": "华凌",
        "Sales": 2399.0
    },
    {
        "brand": "华凌",
        "Sales": 1948.0
    },
    {
        "brand": "华凌",
        "Sales": 1799.0
    },
    {
        "brand": "华凌",
        "Sales": 3399.0
    },
    {
        "brand": "华凌",
        "Sales": 2799.0
    },
    {
        "brand": "华凌",
        "Sales": 2459.0
    },
    {
        "brand": "华凌",
        "Sales": 4399.0
    },
    {
        "brand": "华凌",
        "Sales": 1799.0
    },
    {
        "brand": "华凌",
        "Sales": 4999.0
    },
    {
        "brand": "华凌",
        "Sales": 1568.0
    },
    {
        "brand": "华凌",
        "Sales": 2849.0
    },
    {
        "brand": "华凌",
        "Sales": 1808.0
    },
    {
        "brand": "华凌",
        "Sales": 4199.0
    },
    {
        "brand": "华凌",
        "Sales": 3999.0
    },
    {
        "brand": "华凌",
        "Sales": 2399.0
    },
    {
        "brand": "华凌",
        "Sales": 1799.0
    },
    {
        "brand": "华凌",
        "Sales": 4699.0
    },
    {
        "brand": "华凌",
        "Sales": 3399.0
    },
    {
        "brand": "华凌",
        "Sales": 1798.0
    },
    {
        "brand": "华凌",
        "Sales": 4299.0
    },
    {
        "brand": "华凌",
        "Sales": 2699.0
    },
    {
        "brand": "华凌",
        "Sales": 2255.0
    },
    {
        "brand": "华凌",
        "Sales": 4399.0
    },
    {
        "brand": "华凌",
        "Sales": 1888.0
    },
    {
        "brand": "华凌",
        "Sales": 3399.0
    },
    {
        "brand": "华凌",
        "Sales": 4599.0
    },
    {
        "brand": "华凌",
        "Sales": 1398.0
    },
    {
        "brand": "华凌",
        "Sales": 4999.0
    },
    {
        "brand": "华凌",
        "Sales": 1799.0
    },
    {
        "brand": "华凌",
        "Sales": 2699.0
    },
    {
        "brand": "华凌",
        "Sales": 1998.0
    },
    {
        "brand": "华凌",
        "Sales": 2799.0
    },
    {
        "brand": "华凌",
        "Sales": 1899.0
    },
    {
        "brand": "华凌",
        "Sales": 2599.0
    },
    {
        "brand": "华凌",
        "Sales": 1228.0
    },
    {
        "brand": "华凌",
        "Sales": 4399.0
    },
    {
        "brand": "华凌",
        "Sales": 1688.0
    },
    {
        "brand": "华凌",
        "Sales": 2799.0
    },
    {
        "brand": "华凌",
        "Sales": 2188.0
    },
    {
        "brand": "华凌",
        "Sales": 2399.0
    },
    {
        "brand": "华凌",
        "Sales": 4999.0
    },
    {
        "brand": "华凌",
        "Sales": 3999.0
    },
    {
        "brand": "华凌",
        "Sales": 4699.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 2099.0
    },
    {
        "brand": "华凌",
        "Sales": 2099.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 8546.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 2299.0
    },
    {
        "brand": "华凌",
        "Sales": 4899.0
    },
    {
        "brand": "华凌",
        "Sales": 2359.0
    },
    {
        "brand": "华凌",
        "Sales": 1948.0
    },
    {
        "brand": "华凌",
        "Sales": 2699.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 4399.0
    },
    {
        "brand": "华凌",
        "Sales": 3399.0
    },
    {
        "brand": "华凌",
        "Sales": 6999.0
    },
    {
        "brand": "华凌",
        "Sales": 3999.0
    },
    {
        "brand": "华凌",
        "Sales": 2099.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 1738.0
    },
    {
        "brand": "华凌",
        "Sales": 1718.0
    },
    {
        "brand": "华凌",
        "Sales": 1899.0
    },
    {
        "brand": "华凌",
        "Sales": 4399.0
    },
    {
        "brand": "华凌",
        "Sales": 1798.0
    },
    {
        "brand": "华凌",
        "Sales": 5999.0
    },
    {
        "brand": "华凌",
        "Sales": 1648.0
    },
    {
        "brand": "华凌",
        "Sales": 1899.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 2699.0
    },
    {
        "brand": "华凌",
        "Sales": 2099.0
    },
    {
        "brand": "华凌",
        "Sales": 4699.0
    },
    {
        "brand": "华凌",
        "Sales": 2099.0
    },
    {
        "brand": "华凌",
        "Sales": 1799.0
    },
    {
        "brand": "华凌",
        "Sales": 2099.0
    },
    {
        "brand": "华凌",
        "Sales": 1899.0
    },
    {
        "brand": "华凌",
        "Sales": 2099.0
    },
    {
        "brand": "华凌",
        "Sales": 4999.0
    },
    {
        "brand": "华凌",
        "Sales": 4199.0
    },
    {
        "brand": "华凌",
        "Sales": 4109.0
    },
    {
        "brand": "华凌",
        "Sales": 1799.0
    },
    {
        "brand": "华凌",
        "Sales": 2099.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 1769.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 2099.0
    },
    {
        "brand": "华凌",
        "Sales": 7499.0
    },
    {
        "brand": "华凌",
        "Sales": 3699.0
    },
    {
        "brand": "华凌",
        "Sales": 1769.0
    },
    {
        "brand": "华凌",
        "Sales": 2299.0
    },
    {
        "brand": "华凌",
        "Sales": 2049.0
    },
    {
        "brand": "华凌",
        "Sales": 2778.0
    },
    {
        "brand": "华凌",
        "Sales": 2299.0
    },
    {
        "brand": "华凌",
        "Sales": 3582.0
    },
    {
        "brand": "华凌",
        "Sales": 4599.0
    },
    {
        "brand": "华凌",
        "Sales": 2699.0
    },
    {
        "brand": "华凌",
        "Sales": 2799.0
    },
    {
        "brand": "华凌",
        "Sales": 1799.0
    },
    {
        "brand": "华凌",
        "Sales": 2099.0
    },
    {
        "brand": "华凌",
        "Sales": 2699.0
    },
    {
        "brand": "华凌",
        "Sales": 2999.0
    },
    {
        "brand": "华凌",
        "Sales": 4299.0
    },
    {
        "brand": "华凌",
        "Sales": 3099.0
    },
    {
        "brand": "华凌",
        "Sales": 4699.0
    },
    {
        "brand": "华凌",
        "Sales": 2799.0
    },
    {
        "brand": "华凌",
        "Sales": 2079.0
    },
    {
        "brand": "华凌",
        "Sales": 2799.0
    },
    {
        "brand": "华凌",
        "Sales": 4799.0
    },
    {
        "brand": "华凌",
        "Sales": 3699.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 3099.0
    },
    {
        "brand": "华凌",
        "Sales": 2299.0
    },
    {
        "brand": "华凌",
        "Sales": 4699.0
    },
    {
        "brand": "华凌",
        "Sales": 1478.0
    },
    {
        "brand": "华凌",
        "Sales": 4399.0
    },
    {
        "brand": "华凌",
        "Sales": 4299.0
    },
    {
        "brand": "华凌",
        "Sales": 4349.0
    },
    {
        "brand": "华凌",
        "Sales": 4999.0
    },
    {
        "brand": "华凌",
        "Sales": 3399.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 2368.0
    },
    {
        "brand": "华凌",
        "Sales": 2699.0
    },
    {
        "brand": "华凌",
        "Sales": 2198.0
    },
    {
        "brand": "华凌",
        "Sales": 2799.0
    },
    {
        "brand": "华凌",
        "Sales": 4699.0
    },
    {
        "brand": "华凌",
        "Sales": 1738.0
    },
    {
        "brand": "华凌",
        "Sales": 2899.0
    },
    {
        "brand": "华凌",
        "Sales": 4199.0
    },
    {
        "brand": "华凌",
        "Sales": 4299.0
    },
    {
        "brand": "华凌",
        "Sales": 3099.0
    },
    {
        "brand": "华凌",
        "Sales": 4299.0
    },
    {
        "brand": "华凌",
        "Sales": 2399.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 5599.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 3599.0
    },
    {
        "brand": "华凌",
        "Sales": 2599.0
    },
    {
        "brand": "华凌",
        "Sales": 3099.0
    },
    {
        "brand": "华凌",
        "Sales": 1568.0
    },
    {
        "brand": "华凌",
        "Sales": 4099.0
    },
    {
        "brand": "华凌",
        "Sales": 1899.0
    },
    {
        "brand": "华凌",
        "Sales": 4399.0
    },
    {
        "brand": "华凌",
        "Sales": 2099.0
    },
    {
        "brand": "华凌",
        "Sales": 2099.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 4599.0
    },
    {
        "brand": "华凌",
        "Sales": 1799.0
    },
    {
        "brand": "华凌",
        "Sales": 2199.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 2099.0
    },
    {
        "brand": "华凌",
        "Sales": 4699.0
    },
    {
        "brand": "华凌",
        "Sales": 4599.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 2799.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 2000.0
    },
    {
        "brand": "华凌",
        "Sales": 4399.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 1899.0
    },
    {
        "brand": "华凌",
        "Sales": 1799.0
    },
    {
        "brand": "华凌",
        "Sales": 8646.0
    },
    {
        "brand": "华凌",
        "Sales": 6498.0
    },
    {
        "brand": "华凌",
        "Sales": 2889.0
    },
    {
        "brand": "华凌",
        "Sales": 1879.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 1799.0
    },
    {
        "brand": "华凌",
        "Sales": 2298.0
    },
    {
        "brand": "华凌",
        "Sales": 3099.0
    },
    {
        "brand": "华凌",
        "Sales": 1568.0
    },
    {
        "brand": "华凌",
        "Sales": 1949.0
    },
    {
        "brand": "华凌",
        "Sales": 1799.0
    },
    {
        "brand": "华凌",
        "Sales": 3099.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 2799.0
    },
    {
        "brand": "华凌",
        "Sales": 9999.0
    },
    {
        "brand": "华凌",
        "Sales": 4599.0
    },
    {
        "brand": "华凌",
        "Sales": 3599.0
    },
    {
        "brand": "华凌",
        "Sales": 2699.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 2699.0
    },
    {
        "brand": "华凌",
        "Sales": 2299.0
    },
    {
        "brand": "华凌",
        "Sales": 4799.0
    },
    {
        "brand": "华凌",
        "Sales": 1378.0
    },
    {
        "brand": "华凌",
        "Sales": 4599.0
    },
    {
        "brand": "华凌",
        "Sales": 2799.0
    },
    {
        "brand": "华凌",
        "Sales": 1699.0
    },
    {
        "brand": "华凌",
        "Sales": 1688.0
    },
    {
        "brand": "华凌",
        "Sales": 2799.0
    },
    {
        "brand": "华凌",
        "Sales": 3999.0
    },
    {
        "brand": "华凌",
        "Sales": 2099.0
    },
    {
        "brand": "华凌",
        "Sales": 1878.0
    },
    {
        "brand": "华凌",
        "Sales": 3999.0
    },
    {
        "brand": "华凌",
        "Sales": 1899.0
    },
    {
        "brand": "华凌",
        "Sales": 2578.0
    },
    {
        "brand": "华凌",
        "Sales": 2699.0
    },
    {
        "brand": "华凌",
        "Sales": 1799.0
    },
    {
        "brand": "华凌",
        "Sales": 4699.0
    },
    {
        "brand": "华凌",
        "Sales": 3999.0
    },
    {
        "brand": "华凌",
        "Sales": 2299.0
    },
    {
        "brand": "华凌",
        "Sales": 2799.0
    },
    {
        "brand": "华凌",
        "Sales": 2499.0
    },
    {
        "brand": "华凌",
        "Sales": 1999.0
    },
    {
        "brand": "华凌",
        "Sales": 1799.0
    },
    {
        "brand": "华凌",
        "Sales": 2039.0
    },
    {
        "brand": "华凌",
        "Sales": 5799.0
    },
    {
        "brand": "华凌",
        "Sales": 4249.0
    },
    {
        "brand": "华凌",
        "Sales": 1949.0
    },
    {
        "brand": "华凌",
        "Sales": 4599.0
    },
    {
        "brand": "华凌",
        "Sales": 2099.0
    },
    {
        "brand": "华凌",
        "Sales": 1949.0
    },
    {
        "brand": "华凌",
        "Sales": 4599.0
    },
    {
        "brand": "华凌",
        "Sales": 1759.0
    },
    {
        "brand": "华凌",
        "Sales": 1799.0
    },
    {
        "brand": "华凌",
        "Sales": 2799.0
    },
    {
        "brand": "华凌",
        "Sales": 1899.0
    },
    {
        "brand": "华凌",
        "Sales": 1698.0
    },
    {
        "brand": "华凌",
        "Sales": 4399.0
    },
    {
        "brand": "华凌",
        "Sales": 1378.0
    },
    {
        "brand": "华凌",
        "Sales": 1629.0
    },
    {
        "brand": "华凌",
        "Sales": 4299.0
    },
    {
        "brand": "华凌",
        "Sales": 1899.0
    },
    {
        "brand": "华凌",
        "Sales": 1799.0
    },
    {
        "brand": "华凌",
        "Sales": 2199.0
    },
    {
        "brand": "华凌",
        "Sales": 4399.0
    },
    {
        "brand": "大金空调",
        "Sales": 14599.0
    },
    {
        "brand": "大金空调",
        "Sales": 16999.0
    },
    {
        "brand": "大金空调",
        "Sales": 3999.0
    },
    {
        "brand": "大金空调",
        "Sales": 12999.0
    },
    {
        "brand": "大金空调",
        "Sales": 10799.0
    },
    {
        "brand": "大金空调",
        "Sales": 15499.0
    },
    {
        "brand": "大金空调",
        "Sales": 17799.0
    },
    {
        "brand": "大金空调",
        "Sales": 3999.0
    },
    {
        "brand": "大金空调",
        "Sales": 11272.0
    },
    {
        "brand": "大金空调",
        "Sales": 15399.0
    },
    {
        "brand": "大金空调",
        "Sales": 8666.0
    },
    {
        "brand": "大金空调",
        "Sales": 7799.0
    },
    {
        "brand": "大金空调",
        "Sales": 4999.0
    },
    {
        "brand": "大金空调",
        "Sales": 3899.0
    },
    {
        "brand": "大金空调",
        "Sales": 13914.0
    },
    {
        "brand": "大金空调",
        "Sales": 17599.0
    },
    {
        "brand": "大金空调",
        "Sales": 12699.0
    },
    {
        "brand": "大金空调",
        "Sales": 6999.0
    },
    {
        "brand": "大金空调",
        "Sales": 18000.0
    },
    {
        "brand": "大金空调",
        "Sales": 4799.0
    },
    {
        "brand": "大金空调",
        "Sales": 14499.0
    },
    {
        "brand": "大金空调",
        "Sales": 3799.0
    },
    {
        "brand": "大金空调",
        "Sales": 4099.0
    },
    {
        "brand": "大金空调",
        "Sales": 11399.0
    },
    {
        "brand": "大金空调",
        "Sales": 17599.0
    },
    {
        "brand": "大金空调",
        "Sales": 17599.0
    },
    {
        "brand": "大金空调",
        "Sales": 4999.0
    },
    {
        "brand": "大金空调",
        "Sales": 11299.0
    },
    {
        "brand": "大金空调",
        "Sales": 13914.0
    },
    {
        "brand": "大金空调",
        "Sales": 11599.0
    },
    {
        "brand": "大金空调",
        "Sales": 4799.0
    },
    {
        "brand": "大金空调",
        "Sales": 3999.0
    },
    {
        "brand": "大金空调",
        "Sales": 15999.0
    },
    {
        "brand": "大金空调",
        "Sales": 15177.0
    },
    {
        "brand": "大金空调",
        "Sales": 17598.0
    },
    {
        "brand": "大金空调",
        "Sales": 3899.0
    },
    {
        "brand": "大金空调",
        "Sales": 10671.0
    },
    {
        "brand": "大金空调",
        "Sales": 4799.0
    },
    {
        "brand": "大金空调",
        "Sales": 6996.0
    },
    {
        "brand": "大金空调",
        "Sales": 3899.0
    },
    {
        "brand": "大金空调",
        "Sales": 4699.0
    },
    {
        "brand": "大金空调",
        "Sales": 13299.0
    },
    {
        "brand": "大金空调",
        "Sales": 10671.0
    },
    {
        "brand": "大金空调",
        "Sales": 16399.0
    },
    {
        "brand": "大金空调",
        "Sales": 10799.0
    },
    {
        "brand": "大金空调",
        "Sales": 4399.0
    },
    {
        "brand": "大金空调",
        "Sales": 3899.0
    },
    {
        "brand": "大金空调",
        "Sales": 11599.0
    },
    {
        "brand": "大金空调",
        "Sales": 17599.0
    },
    {
        "brand": "大金空调",
        "Sales": 7299.0
    },
    {
        "brand": "大金空调",
        "Sales": 13999.0
    },
    {
        "brand": "大金空调",
        "Sales": 4999.0
    },
    {
        "brand": "大金空调",
        "Sales": 9199.0
    },
    {
        "brand": "大金空调",
        "Sales": 15399.0
    },
    {
        "brand": "大金空调",
        "Sales": 7799.0
    },
    {
        "brand": "大金空调",
        "Sales": 4399.0
    },
    {
        "brand": "大金空调",
        "Sales": 10897.0
    },
    {
        "brand": "大金空调",
        "Sales": 9899.0
    },
    {
        "brand": "大金空调",
        "Sales": 13099.0
    },
    {
        "brand": "大金空调",
        "Sales": 3899.0
    },
    {
        "brand": "大金空调",
        "Sales": 13400.0
    },
    {
        "brand": "大金空调",
        "Sales": 11023.0
    },
    {
        "brand": "大金空调",
        "Sales": 13449.0
    },
    {
        "brand": "大金空调",
        "Sales": 15999.0
    },
    {
        "brand": "大金空调",
        "Sales": 9500.0
    },
    {
        "brand": "大金空调",
        "Sales": 4729.0
    },
    {
        "brand": "大金空调",
        "Sales": 12699.0
    },
    {
        "brand": "大金空调",
        "Sales": 6399.0
    },
    {
        "brand": "大金空调",
        "Sales": 11099.0
    },
    {
        "brand": "大金空调",
        "Sales": 2.0
    },
    {
        "brand": "大金空调",
        "Sales": 4999.0
    },
    {
        "brand": "大金空调",
        "Sales": 10399.0
    },
    {
        "brand": "大金空调",
        "Sales": 15599.0
    },
    {
        "brand": "大金空调",
        "Sales": 10799.0
    },
    {
        "brand": "大金空调",
        "Sales": 12999.0
    },
    {
        "brand": "大金空调",
        "Sales": 15399.0
    },
    {
        "brand": "大金空调",
        "Sales": 9699.0
    },
    {
        "brand": "大金空调",
        "Sales": 11999.0
    },
    {
        "brand": "大金空调",
        "Sales": 17599.0
    },
    {
        "brand": "大金空调",
        "Sales": 5899.0
    },
    {
        "brand": "大金空调",
        "Sales": 16799.0
    },
    {
        "brand": "大金空调",
        "Sales": 9999.0
    },
    {
        "brand": "大金空调",
        "Sales": 16399.0
    },
    {
        "brand": "大金空调",
        "Sales": 8666.0
    },
    {
        "brand": "大金空调",
        "Sales": 17599.0
    },
    {
        "brand": "大金空调",
        "Sales": 13914.0
    },
    {
        "brand": "大金空调",
        "Sales": 3899.0
    },
    {
        "brand": "大金空调",
        "Sales": 4799.0
    },
    {
        "brand": "大金空调",
        "Sales": 8888.0
    },
    {
        "brand": "大金空调",
        "Sales": 4799.0
    },
    {
        "brand": "大金空调",
        "Sales": 3699.0
    },
    {
        "brand": "大金空调",
        "Sales": 16399.0
    },
    {
        "brand": "大金空调",
        "Sales": 16499.0
    },
    {
        "brand": "大金空调",
        "Sales": 16469.0
    },
    {
        "brand": "大金空调",
        "Sales": 9899.0
    },
    {
        "brand": "大金空调",
        "Sales": 4799.0
    },
    {
        "brand": "大金空调",
        "Sales": 18155.0
    },
    {
        "brand": "大金空调",
        "Sales": 3799.0
    },
    {
        "brand": "大金空调",
        "Sales": 9099.0
    },
    {
        "brand": "大金空调",
        "Sales": 11023.0
    },
    {
        "brand": "大金空调",
        "Sales": 16299.0
    },
    {
        "brand": "大金空调",
        "Sales": 10799.0
    },
    {
        "brand": "大金空调",
        "Sales": 6499.0
    },
    {
        "brand": "大金空调",
        "Sales": 9999.0
    },
    {
        "brand": "大金空调",
        "Sales": 9999.0
    },
    {
        "brand": "大金空调",
        "Sales": 4799.0
    },
    {
        "brand": "大金空调",
        "Sales": 12299.0
    },
    {
        "brand": "大金空调",
        "Sales": 14499.0
    },
    {
        "brand": "大金空调",
        "Sales": 9200.0
    },
    {
        "brand": "大金空调",
        "Sales": 8666.0
    },
    {
        "brand": "大金空调",
        "Sales": 12699.0
    },
    {
        "brand": "大金空调",
        "Sales": 15599.0
    },
    {
        "brand": "大金空调",
        "Sales": 11099.0
    },
    {
        "brand": "大金空调",
        "Sales": 10799.0
    },
    {
        "brand": "大金空调",
        "Sales": 3799.0
    },
    {
        "brand": "大金空调",
        "Sales": 16299.0
    },
    {
        "brand": "大金空调",
        "Sales": 4199.0
    },
    {
        "brand": "大金空调",
        "Sales": 17799.0
    },
    {
        "brand": "大金空调",
        "Sales": 3699.0
    },
    {
        "brand": "大金空调",
        "Sales": 12299.0
    },
    {
        "brand": "大金空调",
        "Sales": 4999.0
    },
    {
        "brand": "大金空调",
        "Sales": 5340.0
    },
    {
        "brand": "大金空调",
        "Sales": 3899.0
    },
    {
        "brand": "大金空调",
        "Sales": 3999.0
    },
    {
        "brand": "大金空调",
        "Sales": 8888.0
    },
    {
        "brand": "大金空调",
        "Sales": 4799.0
    },
    {
        "brand": "大金空调",
        "Sales": 4999.0
    },
    {
        "brand": "大金空调",
        "Sales": 10799.0
    },
    {
        "brand": "大金空调",
        "Sales": 18000.0
    },
    {
        "brand": "大金空调",
        "Sales": 4799.0
    },
    {
        "brand": "大金空调",
        "Sales": 4899.0
    },
    {
        "brand": "大金空调",
        "Sales": 4799.0
    },
    {
        "brand": "大金空调",
        "Sales": 13400.0
    },
    {
        "brand": "大金空调",
        "Sales": 11999.0
    },
    {
        "brand": "大金空调",
        "Sales": 10999.0
    },
    {
        "brand": "大金空调",
        "Sales": 9999.0
    },
    {
        "brand": "大金空调",
        "Sales": 18042.0
    },
    {
        "brand": "大金空调",
        "Sales": 16799.0
    },
    {
        "brand": "大金空调",
        "Sales": 8899.0
    },
    {
        "brand": "大金空调",
        "Sales": 9413.0
    },
    {
        "brand": "大金空调",
        "Sales": 16499.0
    },
    {
        "brand": "大金空调",
        "Sales": 16099.0
    },
    {
        "brand": "大金空调",
        "Sales": 11399.0
    },
    {
        "brand": "大金空调",
        "Sales": 4599.0
    },
    {
        "brand": "大金空调",
        "Sales": 15569.0
    },
    {
        "brand": "大金空调",
        "Sales": 8666.0
    },
    {
        "brand": "大金空调",
        "Sales": 4999.0
    },
    {
        "brand": "大金空调",
        "Sales": 12999.0
    },
    {
        "brand": "大金空调",
        "Sales": 14999.0
    },
    {
        "brand": "大金空调",
        "Sales": 3699.0
    },
    {
        "brand": "大金空调",
        "Sales": 16499.0
    },
    {
        "brand": "大金空调",
        "Sales": 6999.0
    },
    {
        "brand": "大金空调",
        "Sales": 4799.0
    },
    {
        "brand": "大金空调",
        "Sales": 18813.0
    },
    {
        "brand": "大金空调",
        "Sales": 8557.0
    },
    {
        "brand": "大金空调",
        "Sales": 11599.0
    },
    {
        "brand": "大金空调",
        "Sales": 11399.0
    },
    {
        "brand": "大金空调",
        "Sales": 15599.0
    },
    {
        "brand": "大金空调",
        "Sales": 3669.0
    },
    {
        "brand": "大金空调",
        "Sales": 5499.0
    },
    {
        "brand": "大金空调",
        "Sales": 5099.0
    },
    {
        "brand": "大金空调",
        "Sales": 17500.0
    },
    {
        "brand": "大金空调",
        "Sales": 10799.0
    },
    {
        "brand": "大金空调",
        "Sales": 19971.0
    },
    {
        "brand": "大金空调",
        "Sales": 9999.0
    },
    {
        "brand": "大金空调",
        "Sales": 9999.0
    },
    {
        "brand": "大金空调",
        "Sales": 4799.0
    },
    {
        "brand": "大金空调",
        "Sales": 14699.0
    },
    {
        "brand": "大金空调",
        "Sales": 12649.0
    },
    {
        "brand": "大金空调",
        "Sales": 18499.0
    },
    {
        "brand": "大金空调",
        "Sales": 10799.0
    },
    {
        "brand": "大金空调",
        "Sales": 7299.0
    },
    {
        "brand": "大金空调",
        "Sales": 4999.0
    },
    {
        "brand": "大金空调",
        "Sales": 12299.0
    },
    {
        "brand": "大金空调",
        "Sales": 6599.0
    },
    {
        "brand": "大金空调",
        "Sales": 5610.0
    },
    {
        "brand": "大金空调",
        "Sales": 7599.0
    },
    {
        "brand": "大金空调",
        "Sales": 8888.0
    },
    {
        "brand": "大金空调",
        "Sales": 5299.0
    },
    {
        "brand": "大金空调",
        "Sales": 4509.0
    },
    {
        "brand": "大金空调",
        "Sales": 15299.0
    },
    {
        "brand": "大金空调",
        "Sales": 18499.0
    },
    {
        "brand": "大金空调",
        "Sales": 13999.0
    },
    {
        "brand": "大金空调",
        "Sales": 14499.0
    },
    {
        "brand": "大金空调",
        "Sales": 9152.0
    },
    {
        "brand": "大金空调",
        "Sales": 8666.0
    },
    {
        "brand": "大金空调",
        "Sales": 17599.0
    },
    {
        "brand": "大金空调",
        "Sales": 3899.0
    },
    {
        "brand": "大金空调",
        "Sales": 15999.0
    },
    {
        "brand": "大金空调",
        "Sales": 8666.0
    },
    {
        "brand": "大金空调",
        "Sales": 11599.0
    },
    {
        "brand": "大金空调",
        "Sales": 16299.0
    },
    {
        "brand": "大金空调",
        "Sales": 17052.0
    },
    {
        "brand": "大金空调",
        "Sales": 16699.0
    },
    {
        "brand": "大金空调",
        "Sales": 15499.0
    },
    {
        "brand": "大金空调",
        "Sales": 15499.0
    },
    {
        "brand": "大金空调",
        "Sales": 4999.0
    },
    {
        "brand": "大金空调",
        "Sales": 15799.0
    },
    {
        "brand": "大金空调",
        "Sales": 3699.0
    },
    {
        "brand": "大金空调",
        "Sales": 4099.0
    },
    {
        "brand": "大金空调",
        "Sales": 15499.0
    },
    {
        "brand": "大金空调",
        "Sales": 5610.0
    },
    {
        "brand": "大金空调",
        "Sales": 8888.0
    },
    {
        "brand": "大金空调",
        "Sales": 6500.0
    },
    {
        "brand": "大金空调",
        "Sales": 9800.0
    },
    {
        "brand": "大金空调",
        "Sales": 14699.0
    },
    {
        "brand": "大金空调",
        "Sales": 8639.9
    },
    {
        "brand": "大金空调",
        "Sales": 10308.0
    },
    {
        "brand": "大金空调",
        "Sales": 8666.0
    },
    {
        "brand": "大金空调",
        "Sales": 6360.0
    },
    {
        "brand": "大金空调",
        "Sales": 10247.0
    },
    {
        "brand": "大金空调",
        "Sales": 9199.0
    },
    {
        "brand": "大金空调",
        "Sales": 17903.0
    },
    {
        "brand": "大金空调",
        "Sales": 7969.0
    },
    {
        "brand": "大金空调",
        "Sales": 5200.0
    },
    {
        "brand": "大金空调",
        "Sales": 4099.0
    },
    {
        "brand": "大金空调",
        "Sales": 19078.0
    },
    {
        "brand": "大金空调",
        "Sales": 4509.0
    },
    {
        "brand": "大金空调",
        "Sales": 16799.0
    },
    {
        "brand": "大金空调",
        "Sales": 3699.0
    },
    {
        "brand": "大金空调",
        "Sales": 12999.0
    },
    {
        "brand": "大金空调",
        "Sales": 9999.0
    },
    {
        "brand": "大金空调",
        "Sales": 16299.0
    },
    {
        "brand": "大金空调",
        "Sales": 7099.0
    },
    {
        "brand": "大金空调",
        "Sales": 4799.0
    },
    {
        "brand": "大金空调",
        "Sales": 12299.0
    },
    {
        "brand": "大金空调",
        "Sales": 3899.0
    },
    {
        "brand": "大金空调",
        "Sales": 9999.0
    },
    {
        "brand": "大金空调",
        "Sales": 16799.0
    },
    {
        "brand": "大金空调",
        "Sales": 8666.0
    },
    {
        "brand": "大金空调",
        "Sales": 3894.0
    },
    {
        "brand": "大金空调",
        "Sales": 7399.0
    },
    {
        "brand": "大金空调",
        "Sales": 5899.0
    },
    {
        "brand": "大金空调",
        "Sales": 10021.0
    },
    {
        "brand": "大金空调",
        "Sales": 9899.0
    },
    {
        "brand": "大金空调",
        "Sales": 9000.0
    },
    {
        "brand": "大金空调",
        "Sales": 15799.0
    },
    {
        "brand": "大金空调",
        "Sales": 3899.0
    },
    {
        "brand": "大金空调",
        "Sales": 17599.0
    },
    {
        "brand": "大金空调",
        "Sales": 6099.0
    },
    {
        "brand": "大金空调",
        "Sales": 12999.0
    },
    {
        "brand": "大金空调",
        "Sales": 8666.0
    },
    {
        "brand": "大金空调",
        "Sales": 3899.0
    },
    {
        "brand": "大金空调",
        "Sales": 10799.0
    },
    {
        "brand": "大金空调",
        "Sales": 9000.0
    },
    {
        "brand": "大金空调",
        "Sales": 17103.0
    },
    {
        "brand": "大金空调",
        "Sales": 7799.0
    },
    {
        "brand": "大金空调",
        "Sales": 11999.0
    },
    {
        "brand": "大金空调",
        "Sales": 3694.0
    },
    {
        "brand": "大金空调",
        "Sales": 8969.0
    },
    {
        "brand": "大金空调",
        "Sales": 11399.0
    },
    {
        "brand": "大金空调",
        "Sales": 11599.0
    },
    {
        "brand": "大金空调",
        "Sales": 4699.0
    },
    {
        "brand": "大金空调",
        "Sales": 8888.0
    },
    {
        "brand": "大金空调",
        "Sales": 4599.0
    },
    {
        "brand": "大金空调",
        "Sales": 9399.0
    },
    {
        "brand": "大金空调",
        "Sales": 11599.0
    },
    {
        "brand": "大金空调",
        "Sales": 3699.0
    },
    {
        "brand": "大金空调",
        "Sales": 4799.0
    },
    {
        "brand": "大金空调",
        "Sales": 9999.0
    },
    {
        "brand": "大金空调",
        "Sales": 8888.0
    },
    {
        "brand": "大金空调",
        "Sales": 5899.0
    },
    {
        "brand": "大金空调",
        "Sales": 4599.0
    },
    {
        "brand": "大金空调",
        "Sales": 5299.0
    },
    {
        "brand": "大金空调",
        "Sales": 15399.0
    },
    {
        "brand": "大金空调",
        "Sales": 4599.0
    },
    {
        "brand": "大金空调",
        "Sales": 4999.0
    },
    {
        "brand": "大金空调",
        "Sales": 10021.0
    },
    {
        "brand": "大金空调",
        "Sales": 4099.0
    },
    {
        "brand": "大金空调",
        "Sales": 11999.0
    },
    {
        "brand": "大金空调",
        "Sales": 7599.0
    },
    {
        "brand": "大金空调",
        "Sales": 3899.0
    },
    {
        "brand": "大金空调",
        "Sales": 12699.0
    },
    {
        "brand": "大金空调",
        "Sales": 4899.0
    },
    {
        "brand": "大金空调",
        "Sales": 10699.0
    },
    {
        "brand": "大金空调",
        "Sales": 11399.0
    },
    {
        "brand": "大金空调",
        "Sales": 11399.0
    },
    {
        "brand": "大金空调",
        "Sales": 13099.0
    },
    {
        "brand": "大金空调",
        "Sales": 4499.0
    },
    {
        "brand": "大金空调",
        "Sales": 6140.0
    },
    {
        "brand": "大金空调",
        "Sales": 3699.0
    },
    {
        "brand": "大金空调",
        "Sales": 8888.0
    },
    {
        "brand": "大金空调",
        "Sales": 3699.0
    },
    {
        "brand": "大金空调",
        "Sales": 4958.0
    },
    {
        "brand": "大金空调",
        "Sales": 14699.0
    },
    {
        "brand": "大金空调",
        "Sales": 7399.0
    },
    {
        "brand": "大金空调",
        "Sales": 4799.0
    },
    {
        "brand": "大金空调",
        "Sales": 3899.0
    },
    {
        "brand": "大金空调",
        "Sales": 15999.0
    },
    {
        "brand": "大金空调",
        "Sales": 10799.0
    },
    {
        "brand": "大金空调",
        "Sales": 11399.0
    },
    {
        "brand": "大金空调",
        "Sales": 14699.0
    },
    {
        "brand": "大金空调",
        "Sales": 4899.0
    },
    {
        "brand": "大金空调",
        "Sales": 9899.0
    },
    {
        "brand": "大金空调",
        "Sales": 9099.0
    },
    {
        "brand": "大金空调",
        "Sales": 12699.0
    },
    {
        "brand": "大金空调",
        "Sales": 15499.0
    },
    {
        "brand": "大金空调",
        "Sales": 10999.0
    },
    {
        "brand": "大金空调",
        "Sales": 4999.0
    },
    {
        "brand": "大金空调",
        "Sales": 3600.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1668.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4704.0
    },
    {
        "brand": "奥克斯",
        "Sales": 5956.0
    },
    {
        "brand": "奥克斯",
        "Sales": 5399.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4199.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4399.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1898.0
    },
    {
        "brand": "奥克斯",
        "Sales": 5517.6
    },
    {
        "brand": "奥克斯",
        "Sales": 6799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 5145.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2058.0
    },
    {
        "brand": "奥克斯",
        "Sales": 13758.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2699.0
    },
    {
        "brand": "奥克斯",
        "Sales": 6799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1688.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2399.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4599.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3099.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4599.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1829.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3299.0
    },
    {
        "brand": "奥克斯",
        "Sales": 9228.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2798.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3889.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4798.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2699.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3099.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2399.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2199.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1718.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1899.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1749.0
    },
    {
        "brand": "奥克斯",
        "Sales": 5198.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 8598.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1738.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4599.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1749.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4199.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3999.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3599.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 11538.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3598.0
    },
    {
        "brand": "奥克斯",
        "Sales": 6799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 5499.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1599.0
    },
    {
        "brand": "奥克斯",
        "Sales": 14637.6
    },
    {
        "brand": "奥克斯",
        "Sales": 4399.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3999.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1498.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1629.0
    },
    {
        "brand": "奥克斯",
        "Sales": 5099.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3199.0
    },
    {
        "brand": "奥克斯",
        "Sales": 12494.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1699.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2099.0
    },
    {
        "brand": "奥克斯",
        "Sales": 8398.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1568.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1899.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1587.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4199.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4599.0
    },
    {
        "brand": "奥克斯",
        "Sales": 14847.0
    },
    {
        "brand": "奥克斯",
        "Sales": 6590.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3599.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1708.0
    },
    {
        "brand": "奥克斯",
        "Sales": 9198.0
    },
    {
        "brand": "奥克斯",
        "Sales": 7437.6
    },
    {
        "brand": "奥克斯",
        "Sales": 3798.0
    },
    {
        "brand": "奥克斯",
        "Sales": 6998.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1828.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4598.0
    },
    {
        "brand": "奥克斯",
        "Sales": 8094.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4399.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1699.0
    },
    {
        "brand": "奥克斯",
        "Sales": 15051.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2598.0
    },
    {
        "brand": "奥克斯",
        "Sales": 5799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 5199.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1898.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4298.0
    },
    {
        "brand": "奥克斯",
        "Sales": 16598.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2099.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4174.0
    },
    {
        "brand": "奥克斯",
        "Sales": 6998.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3998.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1568.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1798.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1688.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3999.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3299.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2599.0
    },
    {
        "brand": "奥克斯",
        "Sales": 11247.0
    },
    {
        "brand": "奥克斯",
        "Sales": 7299.0
    },
    {
        "brand": "奥克斯",
        "Sales": 6299.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4399.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1599.0
    },
    {
        "brand": "奥克斯",
        "Sales": 5757.6
    },
    {
        "brand": "奥克斯",
        "Sales": 1629.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2999.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3598.0
    },
    {
        "brand": "奥克斯",
        "Sales": 7899.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4399.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1928.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1889.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1749.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3179.0
    },
    {
        "brand": "奥克斯",
        "Sales": 8256.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3599.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4199.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2349.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3899.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2079.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1810.0
    },
    {
        "brand": "奥克斯",
        "Sales": 8664.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2966.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2069.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1499.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3899.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4299.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3999.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2099.0
    },
    {
        "brand": "奥克斯",
        "Sales": 12708.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4399.0
    },
    {
        "brand": "奥克斯",
        "Sales": 6000.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2929.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2499.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3899.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3669.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3149.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2099.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4199.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3199.0
    },
    {
        "brand": "奥克斯",
        "Sales": 5099.0
    },
    {
        "brand": "奥克斯",
        "Sales": 5199.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1599.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2148.0
    },
    {
        "brand": "奥克斯",
        "Sales": 8622.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3899.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1398.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1599.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1999.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1798.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1699.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1749.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4399.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1710.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1658.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1498.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2328.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3499.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1398.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1599.0
    },
    {
        "brand": "奥克斯",
        "Sales": 9178.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3399.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1549.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3398.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1818.0
    },
    {
        "brand": "奥克斯",
        "Sales": 5098.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4399.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3099.0
    },
    {
        "brand": "奥克斯",
        "Sales": 5999.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3999.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2099.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1912.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3999.0
    },
    {
        "brand": "奥克斯",
        "Sales": 9198.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2578.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1749.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1999.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 7792.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2599.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3099.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3299.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 10635.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3457.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4498.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3897.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1878.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1699.0
    },
    {
        "brand": "奥克斯",
        "Sales": 6571.2
    },
    {
        "brand": "奥克斯",
        "Sales": 3598.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3818.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4207.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1549.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3899.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1899.0
    },
    {
        "brand": "奥克斯",
        "Sales": 17999.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 16014.0
    },
    {
        "brand": "奥克斯",
        "Sales": 5799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1919.0
    },
    {
        "brand": "奥克斯",
        "Sales": 6799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3468.0
    },
    {
        "brand": "奥克斯",
        "Sales": 19999.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1718.0
    },
    {
        "brand": "奥克斯",
        "Sales": 12633.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3599.0
    },
    {
        "brand": "奥克斯",
        "Sales": 6598.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1738.0
    },
    {
        "brand": "奥克斯",
        "Sales": 7899.0
    },
    {
        "brand": "奥克斯",
        "Sales": 6899.0
    },
    {
        "brand": "奥克斯",
        "Sales": 8757.6
    },
    {
        "brand": "奥克斯",
        "Sales": 1769.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1999.0
    },
    {
        "brand": "奥克斯",
        "Sales": 14514.0
    },
    {
        "brand": "奥克斯",
        "Sales": 11484.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4599.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3599.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2099.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1899.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3199.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3949.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3979.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4599.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 6499.0
    },
    {
        "brand": "奥克斯",
        "Sales": 5247.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 5277.6
    },
    {
        "brand": "奥克斯",
        "Sales": 2499.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3080.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1907.0
    },
    {
        "brand": "奥克斯",
        "Sales": 11088.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1688.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1738.0
    },
    {
        "brand": "奥克斯",
        "Sales": 7399.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1688.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4999.0
    },
    {
        "brand": "奥克斯",
        "Sales": 7799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4199.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1690.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4199.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1828.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1648.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1999.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3599.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1699.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1899.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3849.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2649.0
    },
    {
        "brand": "奥克斯",
        "Sales": 7599.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1969.0
    },
    {
        "brand": "奥克斯",
        "Sales": 6237.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 7869.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3869.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1849.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3199.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2099.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1599.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4999.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4999.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3998.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1668.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3500.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4999.0
    },
    {
        "brand": "奥克斯",
        "Sales": 8598.0
    },
    {
        "brand": "奥克斯",
        "Sales": 6899.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4279.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4077.6
    },
    {
        "brand": "奥克斯",
        "Sales": 3598.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4399.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4599.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3999.0
    },
    {
        "brand": "奥克斯",
        "Sales": 13677.6
    },
    {
        "brand": "奥克斯",
        "Sales": 3999.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3250.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2099.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1749.0
    },
    {
        "brand": "奥克斯",
        "Sales": 5998.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2599.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4599.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2299.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4769.0
    },
    {
        "brand": "奥克斯",
        "Sales": 3899.0
    },
    {
        "brand": "奥克斯",
        "Sales": 9429.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4799.0
    },
    {
        "brand": "奥克斯",
        "Sales": 4932.0
    },
    {
        "brand": "奥克斯",
        "Sales": 1809.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2099.0
    },
    {
        "brand": "奥克斯",
        "Sales": 6354.0
    },
    {
        "brand": "奥克斯",
        "Sales": 2399.0
    },
    {
        "brand": "小米",
        "Sales": 7499.0
    },
    {
        "brand": "小米",
        "Sales": 1799.0
    },
    {
        "brand": "小米",
        "Sales": 1899.0
    },
    {
        "brand": "小米",
        "Sales": 1589.0
    },
    {
        "brand": "小米",
        "Sales": 4299.0
    },
    {
        "brand": "小米",
        "Sales": 1499.0
    },
    {
        "brand": "小米",
        "Sales": 1878.0
    },
    {
        "brand": "小米",
        "Sales": 2299.0
    },
    {
        "brand": "小米",
        "Sales": 3599.0
    },
    {
        "brand": "小米",
        "Sales": 2599.0
    },
    {
        "brand": "小米",
        "Sales": 1378.0
    },
    {
        "brand": "小米",
        "Sales": 4700.0
    },
    {
        "brand": "小米",
        "Sales": 1599.0
    },
    {
        "brand": "小米",
        "Sales": 2799.0
    },
    {
        "brand": "小米",
        "Sales": 2399.0
    },
    {
        "brand": "小米",
        "Sales": 1999.0
    },
    {
        "brand": "小米",
        "Sales": 2678.0
    },
    {
        "brand": "小米",
        "Sales": 2599.0
    },
    {
        "brand": "小米",
        "Sales": 1398.0
    },
    {
        "brand": "小米",
        "Sales": 2999.0
    },
    {
        "brand": "小米",
        "Sales": 1899.0
    },
    {
        "brand": "小米",
        "Sales": 3416.0
    },
    {
        "brand": "小米",
        "Sales": 4039.0
    },
    {
        "brand": "小米",
        "Sales": 1798.0
    },
    {
        "brand": "小米",
        "Sales": 1648.0
    },
    {
        "brand": "小米",
        "Sales": 1799.0
    },
    {
        "brand": "小米",
        "Sales": 1999.0
    },
    {
        "brand": "小米",
        "Sales": 1999.0
    },
    {
        "brand": "小米",
        "Sales": 5799.0
    },
    {
        "brand": "小米",
        "Sales": 1999.0
    },
    {
        "brand": "小米",
        "Sales": 2599.0
    },
    {
        "brand": "小米",
        "Sales": 2199.0
    },
    {
        "brand": "小米",
        "Sales": 1799.0
    },
    {
        "brand": "小米",
        "Sales": 2699.0
    },
    {
        "brand": "小米",
        "Sales": 2999.0
    },
    {
        "brand": "小米",
        "Sales": 2099.0
    },
    {
        "brand": "小米",
        "Sales": 4399.0
    },
    {
        "brand": "小米",
        "Sales": 4099.0
    },
    {
        "brand": "小米",
        "Sales": 1899.0
    },
    {
        "brand": "小米",
        "Sales": 1999.0
    },
    {
        "brand": "小米",
        "Sales": 1899.0
    },
    {
        "brand": "小米",
        "Sales": 1698.0
    },
    {
        "brand": "小米",
        "Sales": 1899.0
    },
    {
        "brand": "小米",
        "Sales": 2043.0
    },
    {
        "brand": "小米",
        "Sales": 2536.24
    },
    {
        "brand": "小米",
        "Sales": 1899.0
    },
    {
        "brand": "小米",
        "Sales": 1899.0
    },
    {
        "brand": "小米",
        "Sales": 2899.0
    },
    {
        "brand": "小米",
        "Sales": 7499.0
    },
    {
        "brand": "小米",
        "Sales": 3999.0
    },
    {
        "brand": "小米",
        "Sales": 1738.0
    },
    {
        "brand": "小米",
        "Sales": 2599.0
    },
    {
        "brand": "小米",
        "Sales": 3999.0
    },
    {
        "brand": "小米",
        "Sales": 8499.0
    },
    {
        "brand": "小米",
        "Sales": 10983.0
    },
    {
        "brand": "小米",
        "Sales": 2599.0
    },
    {
        "brand": "小米",
        "Sales": 2099.0
    },
    {
        "brand": "小米",
        "Sales": 1688.0
    },
    {
        "brand": "小米",
        "Sales": 2859.0
    },
    {
        "brand": "小米",
        "Sales": 2799.0
    },
    {
        "brand": "小米",
        "Sales": 3798.0
    },
    {
        "brand": "小米",
        "Sales": 5099.0
    },
    {
        "brand": "小米",
        "Sales": 2599.0
    },
    {
        "brand": "小米",
        "Sales": 1668.0
    },
    {
        "brand": "小米",
        "Sales": 2899.0
    },
    {
        "brand": "小米",
        "Sales": 6699.0
    },
    {
        "brand": "小米",
        "Sales": 1899.0
    },
    {
        "brand": "小米",
        "Sales": 1698.0
    },
    {
        "brand": "小米",
        "Sales": 1999.0
    },
    {
        "brand": "小米",
        "Sales": 2998.0
    },
    {
        "brand": "小米",
        "Sales": 1799.0
    },
    {
        "brand": "小米",
        "Sales": 2899.0
    },
    {
        "brand": "小米",
        "Sales": 8499.0
    },
    {
        "brand": "小米",
        "Sales": 2599.0
    },
    {
        "brand": "小米",
        "Sales": 2579.0
    },
    {
        "brand": "小米",
        "Sales": 2699.0
    },
    {
        "brand": "小米",
        "Sales": 6999.0
    },
    {
        "brand": "小米",
        "Sales": 1718.0
    },
    {
        "brand": "小米",
        "Sales": 7499.0
    },
    {
        "brand": "小米",
        "Sales": 2099.0
    },
    {
        "brand": "小米",
        "Sales": 6358.0
    },
    {
        "brand": "小米",
        "Sales": 3599.0
    },
    {
        "brand": "小米",
        "Sales": 1799.0
    },
    {
        "brand": "小米",
        "Sales": 6799.0
    },
    {
        "brand": "小米",
        "Sales": 2599.0
    },
    {
        "brand": "小米",
        "Sales": 4499.0
    },
    {
        "brand": "小米",
        "Sales": 2599.0
    },
    {
        "brand": "小米",
        "Sales": 2049.0
    },
    {
        "brand": "小米",
        "Sales": 1899.0
    },
    {
        "brand": "小米",
        "Sales": 1999.0
    },
    {
        "brand": "小米",
        "Sales": 5099.0
    },
    {
        "brand": "小米",
        "Sales": 2699.0
    },
    {
        "brand": "小米",
        "Sales": 1248.0
    },
    {
        "brand": "小米",
        "Sales": 3499.0
    },
    {
        "brand": "小米",
        "Sales": 2699.0
    },
    {
        "brand": "小米",
        "Sales": 1878.0
    },
    {
        "brand": "小米",
        "Sales": 1999.0
    },
    {
        "brand": "小米",
        "Sales": 1799.0
    },
    {
        "brand": "小米",
        "Sales": 3939.0
    },
    {
        "brand": "小米",
        "Sales": 2668.0
    },
    {
        "brand": "小米",
        "Sales": 6999.0
    },
    {
        "brand": "小米",
        "Sales": 1999.0
    },
    {
        "brand": "小米",
        "Sales": 1358.0
    },
    {
        "brand": "小米",
        "Sales": 3898.0
    },
    {
        "brand": "小米",
        "Sales": 6399.0
    },
    {
        "brand": "小米",
        "Sales": 1798.0
    },
    {
        "brand": "小米",
        "Sales": 3999.0
    },
    {
        "brand": "小米",
        "Sales": 1599.0
    },
    {
        "brand": "小米",
        "Sales": 2399.0
    },
    {
        "brand": "小米",
        "Sales": 3366.0
    },
    {
        "brand": "小米",
        "Sales": 1899.0
    },
    {
        "brand": "小米",
        "Sales": 7499.0
    },
    {
        "brand": "小米",
        "Sales": 7499.0
    },
    {
        "brand": "小米",
        "Sales": 2599.0
    },
    {
        "brand": "小米",
        "Sales": 11058.7
    },
    {
        "brand": "小米",
        "Sales": 3899.0
    },
    {
        "brand": "小米",
        "Sales": 1899.0
    },
    {
        "brand": "小米",
        "Sales": 5921.69
    },
    {
        "brand": "小米",
        "Sales": 2599.0
    },
    {
        "brand": "小米",
        "Sales": 4299.0
    },
    {
        "brand": "小米",
        "Sales": 1899.0
    },
    {
        "brand": "小米",
        "Sales": 4799.0
    },
    {
        "brand": "小米",
        "Sales": 7958.0
    },
    {
        "brand": "小米",
        "Sales": 2999.0
    },
    {
        "brand": "小米",
        "Sales": 1999.0
    },
    {
        "brand": "小米",
        "Sales": 1568.0
    },
    {
        "brand": "小米",
        "Sales": 4199.0
    },
    {
        "brand": "小米",
        "Sales": 2599.0
    },
    {
        "brand": "小米",
        "Sales": 7499.0
    },
    {
        "brand": "小米",
        "Sales": 2799.0
    },
    {
        "brand": "小米",
        "Sales": 6599.0
    },
    {
        "brand": "小米",
        "Sales": 1899.0
    },
    {
        "brand": "小米",
        "Sales": 2399.0
    },
    {
        "brand": "小米",
        "Sales": 7399.0
    },
    {
        "brand": "小米",
        "Sales": 1849.0
    },
    {
        "brand": "小米",
        "Sales": 8883.0
    },
    {
        "brand": "小米",
        "Sales": 1499.0
    },
    {
        "brand": "小米",
        "Sales": 2399.0
    },
    {
        "brand": "小米",
        "Sales": 2699.0
    },
    {
        "brand": "小米",
        "Sales": 3999.0
    },
    {
        "brand": "小米",
        "Sales": 5499.0
    },
    {
        "brand": "小米",
        "Sales": 2299.0
    },
    {
        "brand": "小米",
        "Sales": 2599.0
    },
    {
        "brand": "小米",
        "Sales": 1999.0
    },
    {
        "brand": "小米",
        "Sales": 1499.0
    },
    {
        "brand": "小米",
        "Sales": 2199.0
    },
    {
        "brand": "小米",
        "Sales": 4949.0
    },
    {
        "brand": "小米",
        "Sales": 1899.0
    },
    {
        "brand": "小米",
        "Sales": 1868.0
    },
    {
        "brand": "小米",
        "Sales": 1899.0
    },
    {
        "brand": "小米",
        "Sales": 1999.0
    },
    {
        "brand": "小米",
        "Sales": 1978.0
    },
    {
        "brand": "小米",
        "Sales": 8499.0
    },
    {
        "brand": "小米",
        "Sales": 3899.0
    },
    {
        "brand": "小米",
        "Sales": 1999.0
    },
    {
        "brand": "小米",
        "Sales": 2049.0
    },
    {
        "brand": "小米",
        "Sales": 5499.0
    },
    {
        "brand": "小米",
        "Sales": 6399.0
    },
    {
        "brand": "小米",
        "Sales": 1999.0
    },
    {
        "brand": "小米",
        "Sales": 4899.0
    },
    {
        "brand": "小米",
        "Sales": 4999.0
    },
    {
        "brand": "小米",
        "Sales": 1899.0
    },
    {
        "brand": "小米",
        "Sales": 3899.0
    },
    {
        "brand": "小米",
        "Sales": 1338.0
    },
    {
        "brand": "小米",
        "Sales": 1948.0
    },
    {
        "brand": "小米",
        "Sales": 1999.0
    },
    {
        "brand": "小米",
        "Sales": 1738.0
    },
    {
        "brand": "小米",
        "Sales": 1828.0
    },
    {
        "brand": "小米",
        "Sales": 1999.0
    },
    {
        "brand": "小米",
        "Sales": 2699.0
    },
    {
        "brand": "小米",
        "Sales": 1798.0
    },
    {
        "brand": "小米",
        "Sales": 2599.0
    },
    {
        "brand": "小米",
        "Sales": 3849.0
    },
    {
        "brand": "小米",
        "Sales": 2798.0
    },
    {
        "brand": "小米",
        "Sales": 1999.0
    },
    {
        "brand": "小米",
        "Sales": 3899.0
    },
    {
        "brand": "小米",
        "Sales": 1899.0
    },
    {
        "brand": "小米",
        "Sales": 1498.0
    },
    {
        "brand": "小米",
        "Sales": 1999.0
    },
    {
        "brand": "小米",
        "Sales": 7499.0
    },
    {
        "brand": "小米",
        "Sales": 1599.0
    },
    {
        "brand": "小米",
        "Sales": 1499.0
    },
    {
        "brand": "小米",
        "Sales": 1999.0
    },
    {
        "brand": "小米",
        "Sales": 9999.0
    },
    {
        "brand": "小米",
        "Sales": 2198.0
    },
    {
        "brand": "小米",
        "Sales": 2599.0
    },
    {
        "brand": "小米",
        "Sales": 1999.0
    },
    {
        "brand": "小米",
        "Sales": 7499.0
    },
    {
        "brand": "小米",
        "Sales": 9820.0
    },
    {
        "brand": "小米",
        "Sales": 1949.0
    },
    {
        "brand": "小米",
        "Sales": 2999.0
    },
    {
        "brand": "小米",
        "Sales": 2778.0
    },
    {
        "brand": "小米",
        "Sales": 2788.0
    },
    {
        "brand": "小米",
        "Sales": 4799.0
    },
    {
        "brand": "小米",
        "Sales": 1899.0
    },
    {
        "brand": "小米",
        "Sales": 1899.0
    },
    {
        "brand": "小米",
        "Sales": 1668.0
    },
    {
        "brand": "小米",
        "Sales": 7997.0
    },
    {
        "brand": "小米",
        "Sales": 2599.0
    },
    {
        "brand": "小米",
        "Sales": 3999.0
    },
    {
        "brand": "小米",
        "Sales": 6799.0
    },
    {
        "brand": "小米",
        "Sales": 5999.0
    },
    {
        "brand": "小米",
        "Sales": 2699.0
    },
    {
        "brand": "小米",
        "Sales": 6999.0
    },
    {
        "brand": "小米",
        "Sales": 1899.0
    },
    {
        "brand": "小米",
        "Sales": 1999.0
    },
    {
        "brand": "小米",
        "Sales": 3598.0
    },
    {
        "brand": "小米",
        "Sales": 1888.0
    },
    {
        "brand": "小米",
        "Sales": 2099.0
    },
    {
        "brand": "小米",
        "Sales": 1738.0
    },
    {
        "brand": "小米",
        "Sales": 2399.0
    },
    {
        "brand": "小米",
        "Sales": 6799.0
    },
    {
        "brand": "小米",
        "Sales": 5899.0
    },
    {
        "brand": "小米",
        "Sales": 1899.0
    },
    {
        "brand": "小米",
        "Sales": 3899.0
    },
    {
        "brand": "小米",
        "Sales": 1588.0
    },
    {
        "brand": "小米",
        "Sales": 3139.0
    },
    {
        "brand": "小米",
        "Sales": 5899.0
    },
    {
        "brand": "小米",
        "Sales": 1999.0
    },
    {
        "brand": "小米",
        "Sales": 2399.0
    },
    {
        "brand": "小米",
        "Sales": 5699.0
    },
    {
        "brand": "小米",
        "Sales": 6999.0
    },
    {
        "brand": "小米",
        "Sales": 13398.0
    },
    {
        "brand": "小米",
        "Sales": 1999.0
    },
    {
        "brand": "小米",
        "Sales": 1228.0
    },
    {
        "brand": "小米",
        "Sales": 1999.0
    },
    {
        "brand": "小米",
        "Sales": 3599.0
    },
    {
        "brand": "小米",
        "Sales": 2999.0
    },
    {
        "brand": "小米",
        "Sales": 4388.0
    },
    {
        "brand": "小米",
        "Sales": 3999.0
    },
    {
        "brand": "小米",
        "Sales": 2798.0
    },
    {
        "brand": "小米",
        "Sales": 1688.0
    },
    {
        "brand": "小米",
        "Sales": 2099.0
    },
    {
        "brand": "小米",
        "Sales": 6199.0
    },
    {
        "brand": "小米",
        "Sales": 5999.0
    },
    {
        "brand": "小米",
        "Sales": 1899.0
    },
    {
        "brand": "小米",
        "Sales": 2399.0
    },
    {
        "brand": "小米",
        "Sales": 6999.0
    },
    {
        "brand": "小米",
        "Sales": 2699.0
    },
    {
        "brand": "小米",
        "Sales": 2313.75
    },
    {
        "brand": "小米",
        "Sales": 1718.0
    },
    {
        "brand": "小米",
        "Sales": 3149.0
    },
    {
        "brand": "小米",
        "Sales": 2599.0
    },
    {
        "brand": "小米",
        "Sales": 4355.42
    },
    {
        "brand": "小米",
        "Sales": 7197.0
    },
    {
        "brand": "小米",
        "Sales": 1748.0
    },
    {
        "brand": "小米",
        "Sales": 4299.0
    },
    {
        "brand": "小米",
        "Sales": 6399.0
    },
    {
        "brand": "小米",
        "Sales": 1648.0
    },
    {
        "brand": "小米",
        "Sales": 1899.0
    },
    {
        "brand": "小米",
        "Sales": 3599.0
    },
    {
        "brand": "小米",
        "Sales": 1899.0
    },
    {
        "brand": "小米",
        "Sales": 9999.0
    },
    {
        "brand": "小米",
        "Sales": 1999.0
    },
    {
        "brand": "小米",
        "Sales": 1378.0
    },
    {
        "brand": "小米",
        "Sales": 2999.0
    },
    {
        "brand": "小米",
        "Sales": 5099.0
    },
    {
        "brand": "小米",
        "Sales": 2798.0
    },
    {
        "brand": "小米",
        "Sales": 2198.0
    },
    {
        "brand": "小米",
        "Sales": 2399.0
    },
    {
        "brand": "小米",
        "Sales": 5499.0
    },
    {
        "brand": "小米",
        "Sales": 2578.0
    },
    {
        "brand": "小米",
        "Sales": 2368.0
    },
    {
        "brand": "小米",
        "Sales": 1968.0
    },
    {
        "brand": "小米",
        "Sales": 1899.0
    },
    {
        "brand": "小米",
        "Sales": 5099.0
    },
    {
        "brand": "小米",
        "Sales": 1449.0
    },
    {
        "brand": "小米",
        "Sales": 3199.0
    },
    {
        "brand": "小米",
        "Sales": 1738.0
    },
    {
        "brand": "小米",
        "Sales": 2199.0
    },
    {
        "brand": "小米",
        "Sales": 1898.0
    },
    {
        "brand": "小米",
        "Sales": 2599.0
    },
    {
        "brand": "小米",
        "Sales": 2899.0
    },
    {
        "brand": "小米",
        "Sales": 1999.0
    },
    {
        "brand": "小米",
        "Sales": 6098.0
    },
    {
        "brand": "小米",
        "Sales": 5699.0
    },
    {
        "brand": "小米",
        "Sales": 2699.0
    },
    {
        "brand": "小米",
        "Sales": 6499.0
    },
    {
        "brand": "小米",
        "Sales": 3999.0
    },
    {
        "brand": "小米",
        "Sales": 1849.0
    },
    {
        "brand": "小米",
        "Sales": 2549.0
    },
    {
        "brand": "小米",
        "Sales": 5499.0
    },
    {
        "brand": "小米",
        "Sales": 2488.0
    },
    {
        "brand": "小米",
        "Sales": 1999.0
    },
    {
        "brand": "小米",
        "Sales": 2899.0
    },
    {
        "brand": "小米",
        "Sales": 4799.0
    },
    {
        "brand": "小米",
        "Sales": 1588.0
    },
    {
        "brand": "小米",
        "Sales": 3998.0
    },
    {
        "brand": "小米",
        "Sales": 4299.0
    },
    {
        "brand": "小米",
        "Sales": 2799.0
    },
    {
        "brand": "小米",
        "Sales": 5699.0
    },
    {
        "brand": "小米",
        "Sales": 2599.0
    },
    {
        "brand": "小米",
        "Sales": 3899.0
    },
    {
        "brand": "小米",
        "Sales": 2199.0
    },
    {
        "brand": "小米",
        "Sales": 1879.0
    },
    {
        "brand": "小米",
        "Sales": 3789.0
    },
    {
        "brand": "小米",
        "Sales": 3236.0
    },
    {
        "brand": "小米",
        "Sales": 5598.0
    },
    {
        "brand": "小米",
        "Sales": 1738.0
    },
    {
        "brand": "小米",
        "Sales": 1668.0
    },
    {
        "brand": "志高",
        "Sales": 4499.0
    },
    {
        "brand": "志高",
        "Sales": 1799.0
    },
    {
        "brand": "志高",
        "Sales": 4149.0
    },
    {
        "brand": "志高",
        "Sales": 909.0
    },
    {
        "brand": "志高",
        "Sales": 1599.0
    },
    {
        "brand": "志高",
        "Sales": 6499.0
    },
    {
        "brand": "志高",
        "Sales": 6499.0
    },
    {
        "brand": "志高",
        "Sales": 1899.0
    },
    {
        "brand": "志高",
        "Sales": 1399.0
    },
    {
        "brand": "志高",
        "Sales": 1999.0
    },
    {
        "brand": "志高",
        "Sales": 1399.0
    },
    {
        "brand": "志高",
        "Sales": 899.0
    },
    {
        "brand": "志高",
        "Sales": 8259.0
    },
    {
        "brand": "志高",
        "Sales": 7299.0
    },
    {
        "brand": "志高",
        "Sales": 1799.0
    },
    {
        "brand": "志高",
        "Sales": 1599.0
    },
    {
        "brand": "志高",
        "Sales": 2399.0
    },
    {
        "brand": "志高",
        "Sales": 1299.0
    },
    {
        "brand": "志高",
        "Sales": 4799.0
    },
    {
        "brand": "志高",
        "Sales": 2199.0
    },
    {
        "brand": "志高",
        "Sales": 8799.0
    },
    {
        "brand": "志高",
        "Sales": 1399.0
    },
    {
        "brand": "志高",
        "Sales": 1999.0
    },
    {
        "brand": "志高",
        "Sales": 5199.0
    },
    {
        "brand": "志高",
        "Sales": 1599.0
    },
    {
        "brand": "志高",
        "Sales": 3999.0
    },
    {
        "brand": "志高",
        "Sales": 1869.0
    },
    {
        "brand": "志高",
        "Sales": 1849.0
    },
    {
        "brand": "志高",
        "Sales": 999.0
    },
    {
        "brand": "志高",
        "Sales": 1499.0
    },
    {
        "brand": "志高",
        "Sales": 1879.0
    },
    {
        "brand": "志高",
        "Sales": 4199.0
    },
    {
        "brand": "志高",
        "Sales": 1399.0
    },
    {
        "brand": "志高",
        "Sales": 1099.0
    },
    {
        "brand": "志高",
        "Sales": 17289.0
    },
    {
        "brand": "志高",
        "Sales": 1699.0
    },
    {
        "brand": "志高",
        "Sales": 1939.0
    },
    {
        "brand": "志高",
        "Sales": 1399.0
    },
    {
        "brand": "志高",
        "Sales": 999.0
    },
    {
        "brand": "志高",
        "Sales": 4149.0
    },
    {
        "brand": "志高",
        "Sales": 3899.0
    },
    {
        "brand": "志高",
        "Sales": 4199.0
    },
    {
        "brand": "志高",
        "Sales": 1599.0
    },
    {
        "brand": "志高",
        "Sales": 1399.0
    },
    {
        "brand": "志高",
        "Sales": 1939.0
    },
    {
        "brand": "志高",
        "Sales": 4099.0
    },
    {
        "brand": "志高",
        "Sales": 1949.0
    },
    {
        "brand": "志高",
        "Sales": 5379.0
    },
    {
        "brand": "志高",
        "Sales": 899.0
    },
    {
        "brand": "志高",
        "Sales": 1499.0
    },
    {
        "brand": "志高",
        "Sales": 11619.0
    },
    {
        "brand": "志高",
        "Sales": 799.0
    },
    {
        "brand": "志高",
        "Sales": 899.0
    },
    {
        "brand": "志高",
        "Sales": 6049.0
    },
    {
        "brand": "志高",
        "Sales": 2199.0
    },
    {
        "brand": "志高",
        "Sales": 11499.0
    },
    {
        "brand": "志高",
        "Sales": 7399.0
    },
    {
        "brand": "志高",
        "Sales": 1939.0
    },
    {
        "brand": "志高",
        "Sales": 2799.0
    },
    {
        "brand": "志高",
        "Sales": 15180.0
    },
    {
        "brand": "志高",
        "Sales": 15799.0
    },
    {
        "brand": "志高",
        "Sales": 1599.0
    },
    {
        "brand": "志高",
        "Sales": 5555.0
    },
    {
        "brand": "志高",
        "Sales": 3299.0
    },
    {
        "brand": "志高",
        "Sales": 4299.0
    },
    {
        "brand": "志高",
        "Sales": 7799.0
    },
    {
        "brand": "志高",
        "Sales": 4899.0
    },
    {
        "brand": "志高",
        "Sales": 2399.0
    },
    {
        "brand": "志高",
        "Sales": 7499.0
    },
    {
        "brand": "志高",
        "Sales": 8999.0
    },
    {
        "brand": "志高",
        "Sales": 9499.0
    },
    {
        "brand": "志高",
        "Sales": 1799.0
    },
    {
        "brand": "志高",
        "Sales": 1299.0
    },
    {
        "brand": "志高",
        "Sales": 999.0
    },
    {
        "brand": "志高",
        "Sales": 1399.0
    },
    {
        "brand": "志高",
        "Sales": 1099.0
    },
    {
        "brand": "志高",
        "Sales": 1649.0
    },
    {
        "brand": "志高",
        "Sales": 1599.0
    },
    {
        "brand": "志高",
        "Sales": 4599.0
    },
    {
        "brand": "志高",
        "Sales": 2799.0
    },
    {
        "brand": "志高",
        "Sales": 4599.0
    },
    {
        "brand": "志高",
        "Sales": 9999.0
    },
    {
        "brand": "志高",
        "Sales": 1899.0
    },
    {
        "brand": "志高",
        "Sales": 4169.0
    },
    {
        "brand": "志高",
        "Sales": 12999.0
    },
    {
        "brand": "志高",
        "Sales": 4299.0
    },
    {
        "brand": "志高",
        "Sales": 4799.0
    },
    {
        "brand": "志高",
        "Sales": 4099.0
    },
    {
        "brand": "志高",
        "Sales": 6299.0
    },
    {
        "brand": "志高",
        "Sales": 2149.0
    },
    {
        "brand": "志高",
        "Sales": 4299.0
    },
    {
        "brand": "志高",
        "Sales": 10799.0
    },
    {
        "brand": "志高",
        "Sales": 1429.0
    },
    {
        "brand": "志高",
        "Sales": 1599.0
    },
    {
        "brand": "志高",
        "Sales": 1199.0
    },
    {
        "brand": "志高",
        "Sales": 1299.0
    },
    {
        "brand": "志高",
        "Sales": 3499.0
    },
    {
        "brand": "志高",
        "Sales": 4799.0
    },
    {
        "brand": "志高",
        "Sales": 999.0
    },
    {
        "brand": "志高",
        "Sales": 1850.0
    },
    {
        "brand": "志高",
        "Sales": 1799.0
    },
    {
        "brand": "志高",
        "Sales": 7609.0
    },
    {
        "brand": "志高",
        "Sales": 1599.0
    },
    {
        "brand": "志高",
        "Sales": 4299.0
    },
    {
        "brand": "志高",
        "Sales": 999.0
    },
    {
        "brand": "志高",
        "Sales": 999.0
    },
    {
        "brand": "志高",
        "Sales": 13999.0
    },
    {
        "brand": "志高",
        "Sales": 1499.0
    },
    {
        "brand": "志高",
        "Sales": 1499.0
    },
    {
        "brand": "志高",
        "Sales": 1999.0
    },
    {
        "brand": "志高",
        "Sales": 3599.0
    },
    {
        "brand": "志高",
        "Sales": 3199.0
    },
    {
        "brand": "志高",
        "Sales": 4299.0
    },
    {
        "brand": "志高",
        "Sales": 2099.0
    },
    {
        "brand": "志高",
        "Sales": 1699.0
    },
    {
        "brand": "志高",
        "Sales": 1399.0
    },
    {
        "brand": "志高",
        "Sales": 1399.0
    },
    {
        "brand": "志高",
        "Sales": 1799.0
    },
    {
        "brand": "志高",
        "Sales": 3399.0
    },
    {
        "brand": "志高",
        "Sales": 899.0
    },
    {
        "brand": "志高",
        "Sales": 1499.0
    },
    {
        "brand": "志高",
        "Sales": 1699.0
    },
    {
        "brand": "志高",
        "Sales": 13880.0
    },
    {
        "brand": "志高",
        "Sales": 6499.0
    },
    {
        "brand": "志高",
        "Sales": 6499.0
    },
    {
        "brand": "志高",
        "Sales": 4299.0
    },
    {
        "brand": "志高",
        "Sales": 5199.0
    },
    {
        "brand": "志高",
        "Sales": 4199.0
    },
    {
        "brand": "志高",
        "Sales": 5299.0
    },
    {
        "brand": "志高",
        "Sales": 8699.0
    },
    {
        "brand": "志高",
        "Sales": 5849.0
    },
    {
        "brand": "志高",
        "Sales": 3529.0
    },
    {
        "brand": "志高",
        "Sales": 899.0
    },
    {
        "brand": "志高",
        "Sales": 899.0
    },
    {
        "brand": "志高",
        "Sales": 1399.0
    },
    {
        "brand": "志高",
        "Sales": 999.0
    },
    {
        "brand": "志高",
        "Sales": 5099.0
    },
    {
        "brand": "志高",
        "Sales": 999.0
    },
    {
        "brand": "志高",
        "Sales": 1899.0
    },
    {
        "brand": "志高",
        "Sales": 12280.0
    },
    {
        "brand": "志高",
        "Sales": 11699.0
    },
    {
        "brand": "志高",
        "Sales": 3319.0
    },
    {
        "brand": "志高",
        "Sales": 1649.0
    },
    {
        "brand": "志高",
        "Sales": 1899.0
    },
    {
        "brand": "志高",
        "Sales": 979.0
    },
    {
        "brand": "志高",
        "Sales": 1699.0
    },
    {
        "brand": "志高",
        "Sales": 9400.0
    },
    {
        "brand": "志高",
        "Sales": 10099.0
    },
    {
        "brand": "志高",
        "Sales": 1899.0
    },
    {
        "brand": "志高",
        "Sales": 3199.0
    },
    {
        "brand": "志高",
        "Sales": 14499.0
    },
    {
        "brand": "志高",
        "Sales": 3999.0
    },
    {
        "brand": "志高",
        "Sales": 2799.0
    },
    {
        "brand": "志高",
        "Sales": 1399.0
    },
    {
        "brand": "志高",
        "Sales": 1099.0
    },
    {
        "brand": "志高",
        "Sales": 1629.0
    },
    {
        "brand": "志高",
        "Sales": 2799.0
    },
    {
        "brand": "志高",
        "Sales": 3099.0
    },
    {
        "brand": "志高",
        "Sales": 999.0
    },
    {
        "brand": "志高",
        "Sales": 3699.0
    },
    {
        "brand": "志高",
        "Sales": 9799.0
    },
    {
        "brand": "志高",
        "Sales": 17180.0
    },
    {
        "brand": "志高",
        "Sales": 9999.0
    },
    {
        "brand": "志高",
        "Sales": 4079.0
    },
    {
        "brand": "志高",
        "Sales": 13680.0
    },
    {
        "brand": "志高",
        "Sales": 5199.0
    },
    {
        "brand": "志高",
        "Sales": 11099.0
    },
    {
        "brand": "志高",
        "Sales": 4299.0
    },
    {
        "brand": "志高",
        "Sales": 2299.0
    },
    {
        "brand": "志高",
        "Sales": 3399.0
    },
    {
        "brand": "志高",
        "Sales": 4799.0
    },
    {
        "brand": "志高",
        "Sales": 1499.0
    },
    {
        "brand": "志高",
        "Sales": 3499.0
    },
    {
        "brand": "志高",
        "Sales": 1099.0
    },
    {
        "brand": "志高",
        "Sales": 2349.0
    },
    {
        "brand": "志高",
        "Sales": 1999.0
    },
    {
        "brand": "志高",
        "Sales": 1629.0
    },
    {
        "brand": "志高",
        "Sales": 11899.0
    },
    {
        "brand": "志高",
        "Sales": 7699.0
    },
    {
        "brand": "志高",
        "Sales": 4499.0
    },
    {
        "brand": "志高",
        "Sales": 899.0
    },
    {
        "brand": "志高",
        "Sales": 999.0
    },
    {
        "brand": "志高",
        "Sales": 4598.0
    },
    {
        "brand": "志高",
        "Sales": 799.0
    },
    {
        "brand": "志高",
        "Sales": 9999.0
    },
    {
        "brand": "志高",
        "Sales": 4699.0
    },
    {
        "brand": "志高",
        "Sales": 1799.0
    },
    {
        "brand": "志高",
        "Sales": 899.0
    },
    {
        "brand": "志高",
        "Sales": 2699.0
    },
    {
        "brand": "志高",
        "Sales": 2149.0
    },
    {
        "brand": "志高",
        "Sales": 2199.0
    },
    {
        "brand": "志高",
        "Sales": 5379.0
    },
    {
        "brand": "志高",
        "Sales": 3619.0
    },
    {
        "brand": "志高",
        "Sales": 4799.0
    },
    {
        "brand": "志高",
        "Sales": 4899.0
    },
    {
        "brand": "志高",
        "Sales": 1999.0
    },
    {
        "brand": "志高",
        "Sales": 10099.0
    },
    {
        "brand": "志高",
        "Sales": 1899.0
    },
    {
        "brand": "志高",
        "Sales": 1899.0
    },
    {
        "brand": "志高",
        "Sales": 1599.0
    },
    {
        "brand": "志高",
        "Sales": 1999.0
    },
    {
        "brand": "志高",
        "Sales": 2049.0
    },
    {
        "brand": "志高",
        "Sales": 4999.0
    },
    {
        "brand": "志高",
        "Sales": 6199.0
    },
    {
        "brand": "志高",
        "Sales": 5099.0
    },
    {
        "brand": "志高",
        "Sales": 3000.0
    },
    {
        "brand": "志高",
        "Sales": 2799.0
    },
    {
        "brand": "志高",
        "Sales": 1699.0
    },
    {
        "brand": "志高",
        "Sales": 8799.0
    },
    {
        "brand": "志高",
        "Sales": 6969.0
    },
    {
        "brand": "志高",
        "Sales": 4899.0
    },
    {
        "brand": "志高",
        "Sales": 9880.0
    },
    {
        "brand": "志高",
        "Sales": 3649.0
    },
    {
        "brand": "志高",
        "Sales": 1299.0
    },
    {
        "brand": "志高",
        "Sales": 2399.0
    },
    {
        "brand": "志高",
        "Sales": 4069.0
    },
    {
        "brand": "志高",
        "Sales": 8799.0
    },
    {
        "brand": "志高",
        "Sales": 9899.0
    },
    {
        "brand": "志高",
        "Sales": 999.0
    },
    {
        "brand": "志高",
        "Sales": 929.0
    },
    {
        "brand": "志高",
        "Sales": 1599.0
    },
    {
        "brand": "志高",
        "Sales": 4049.0
    },
    {
        "brand": "志高",
        "Sales": 7999.0
    },
    {
        "brand": "志高",
        "Sales": 1799.0
    },
    {
        "brand": "志高",
        "Sales": 1399.0
    },
    {
        "brand": "志高",
        "Sales": 1599.0
    },
    {
        "brand": "志高",
        "Sales": 2099.0
    },
    {
        "brand": "志高",
        "Sales": 10999.0
    },
    {
        "brand": "志高",
        "Sales": 2819.0
    },
    {
        "brand": "志高",
        "Sales": 9499.0
    },
    {
        "brand": "志高",
        "Sales": 1099.0
    },
    {
        "brand": "志高",
        "Sales": 11299.0
    },
    {
        "brand": "志高",
        "Sales": 4999.0
    },
    {
        "brand": "志高",
        "Sales": 6199.0
    },
    {
        "brand": "志高",
        "Sales": 1849.0
    },
    {
        "brand": "志高",
        "Sales": 4899.0
    },
    {
        "brand": "志高",
        "Sales": 2299.0
    },
    {
        "brand": "志高",
        "Sales": 4099.0
    },
    {
        "brand": "志高",
        "Sales": 5169.0
    },
    {
        "brand": "志高",
        "Sales": 1699.0
    },
    {
        "brand": "志高",
        "Sales": 5399.0
    },
    {
        "brand": "志高",
        "Sales": 2499.0
    },
    {
        "brand": "志高",
        "Sales": 1399.0
    },
    {
        "brand": "志高",
        "Sales": 5899.0
    },
    {
        "brand": "志高",
        "Sales": 3099.0
    },
    {
        "brand": "志高",
        "Sales": 2299.0
    },
    {
        "brand": "志高",
        "Sales": 6579.0
    },
    {
        "brand": "志高",
        "Sales": 2169.0
    },
    {
        "brand": "志高",
        "Sales": 899.0
    },
    {
        "brand": "志高",
        "Sales": 1099.0
    },
    {
        "brand": "志高",
        "Sales": 10999.0
    },
    {
        "brand": "志高",
        "Sales": 1199.0
    },
    {
        "brand": "志高",
        "Sales": 9999.0
    },
    {
        "brand": "志高",
        "Sales": 3899.0
    },
    {
        "brand": "志高",
        "Sales": 6599.0
    },
    {
        "brand": "志高",
        "Sales": 6899.0
    },
    {
        "brand": "志高",
        "Sales": 2749.0
    },
    {
        "brand": "志高",
        "Sales": 12599.0
    },
    {
        "brand": "志高",
        "Sales": 1699.0
    },
    {
        "brand": "志高",
        "Sales": 18299.0
    },
    {
        "brand": "志高",
        "Sales": 4399.0
    },
    {
        "brand": "志高",
        "Sales": 3699.0
    },
    {
        "brand": "志高",
        "Sales": 1869.0
    },
    {
        "brand": "志高",
        "Sales": 1299.0
    },
    {
        "brand": "志高",
        "Sales": 2249.0
    },
    {
        "brand": "志高",
        "Sales": 13680.0
    },
    {
        "brand": "志高",
        "Sales": 8546.02
    },
    {
        "brand": "志高",
        "Sales": 4299.0
    },
    {
        "brand": "志高",
        "Sales": 2799.0
    },
    {
        "brand": "志高",
        "Sales": 3298.0
    },
    {
        "brand": "志高",
        "Sales": 4299.0
    },
    {
        "brand": "志高",
        "Sales": 1699.0
    },
    {
        "brand": "志高",
        "Sales": 4199.0
    },
    {
        "brand": "志高",
        "Sales": 4199.0
    },
    {
        "brand": "志高",
        "Sales": 6339.0
    },
    {
        "brand": "志高",
        "Sales": 1399.0
    },
    {
        "brand": "志高",
        "Sales": 1999.0
    },
    {
        "brand": "志高",
        "Sales": 5399.0
    },
    {
        "brand": "志高",
        "Sales": 1899.0
    },
    {
        "brand": "志高",
        "Sales": 2599.0
    },
    {
        "brand": "志高",
        "Sales": 1499.0
    },
    {
        "brand": "志高",
        "Sales": 1899.0
    },
    {
        "brand": "志高",
        "Sales": 6339.0
    },
    {
        "brand": "志高",
        "Sales": 6179.0
    },
    {
        "brand": "志高",
        "Sales": 1599.0
    },
    {
        "brand": "志高",
        "Sales": 4579.0
    },
    {
        "brand": "志高",
        "Sales": 2849.0
    },
    {
        "brand": "志高",
        "Sales": 3139.0
    },
    {
        "brand": "志高",
        "Sales": 1849.0
    },
    {
        "brand": "志高",
        "Sales": 7339.0
    },
    {
        "brand": "志高",
        "Sales": 4199.0
    },
    {
        "brand": "志高",
        "Sales": 10899.0
    },
    {
        "brand": "志高",
        "Sales": 2949.0
    },
    {
        "brand": "志高",
        "Sales": 2299.0
    },
    {
        "brand": "志高",
        "Sales": 9299.0
    },
    {
        "brand": "志高",
        "Sales": 6299.0
    },
    {
        "brand": "志高",
        "Sales": 6299.0
    },
    {
        "brand": "志高",
        "Sales": 12349.02
    },
    {
        "brand": "志高",
        "Sales": 1799.0
    },
    {
        "brand": "志高",
        "Sales": 1599.0
    },
    {
        "brand": "新飞",
        "Sales": 1399.0
    },
    {
        "brand": "新飞",
        "Sales": 1299.0
    },
    {
        "brand": "新飞",
        "Sales": 1399.0
    },
    {
        "brand": "新飞",
        "Sales": 771.6
    },
    {
        "brand": "新飞",
        "Sales": 1395.0
    },
    {
        "brand": "新飞",
        "Sales": 959.0
    },
    {
        "brand": "新飞",
        "Sales": 1799.0
    },
    {
        "brand": "新飞",
        "Sales": 1399.0
    },
    {
        "brand": "新飞",
        "Sales": 1159.5
    },
    {
        "brand": "新飞",
        "Sales": 649.0
    },
    {
        "brand": "新飞",
        "Sales": 601.0
    },
    {
        "brand": "新飞",
        "Sales": 4399.0
    },
    {
        "brand": "新飞",
        "Sales": 959.0
    },
    {
        "brand": "新飞",
        "Sales": 1499.0
    },
    {
        "brand": "新飞",
        "Sales": 3599.0
    },
    {
        "brand": "新飞",
        "Sales": 1399.0
    },
    {
        "brand": "新飞",
        "Sales": 699.0
    },
    {
        "brand": "新飞",
        "Sales": 770.0
    },
    {
        "brand": "新飞",
        "Sales": 1849.5
    },
    {
        "brand": "新飞",
        "Sales": 2099.0
    },
    {
        "brand": "新飞",
        "Sales": 3399.0
    },
    {
        "brand": "新飞",
        "Sales": 1199.0
    },
    {
        "brand": "新飞",
        "Sales": 2080.0
    },
    {
        "brand": "新飞",
        "Sales": 1899.0
    },
    {
        "brand": "新飞",
        "Sales": 1499.0
    },
    {
        "brand": "新飞",
        "Sales": 2000.0
    },
    {
        "brand": "新飞",
        "Sales": 1219.0
    },
    {
        "brand": "新飞",
        "Sales": 1799.0
    },
    {
        "brand": "新飞",
        "Sales": 1719.0
    },
    {
        "brand": "新飞",
        "Sales": 1699.0
    },
    {
        "brand": "新飞",
        "Sales": 1599.0
    },
    {
        "brand": "新飞",
        "Sales": 794.0
    },
    {
        "brand": "新飞",
        "Sales": 872.0
    },
    {
        "brand": "新飞",
        "Sales": 749.0
    },
    {
        "brand": "新飞",
        "Sales": 780.0
    },
    {
        "brand": "新飞",
        "Sales": 1699.0
    },
    {
        "brand": "新飞",
        "Sales": 1699.0
    },
    {
        "brand": "新飞",
        "Sales": 1699.0
    },
    {
        "brand": "新飞",
        "Sales": 1699.0
    },
    {
        "brand": "新飞",
        "Sales": 1479.0
    },
    {
        "brand": "新飞",
        "Sales": 1399.0
    },
    {
        "brand": "新飞",
        "Sales": 1749.0
    },
    {
        "brand": "新飞",
        "Sales": 1249.0
    },
    {
        "brand": "新飞",
        "Sales": 1199.0
    },
    {
        "brand": "新飞",
        "Sales": 1499.0
    },
    {
        "brand": "新飞",
        "Sales": 1599.0
    },
    {
        "brand": "新飞",
        "Sales": 761.0
    },
    {
        "brand": "新飞",
        "Sales": 1634.0
    },
    {
        "brand": "新飞",
        "Sales": 849.0
    },
    {
        "brand": "新飞",
        "Sales": 664.0
    },
    {
        "brand": "新飞",
        "Sales": 959.0
    },
    {
        "brand": "新飞",
        "Sales": 1199.0
    },
    {
        "brand": "新飞",
        "Sales": 927.6
    },
    {
        "brand": "新飞",
        "Sales": 980.0
    },
    {
        "brand": "新飞",
        "Sales": 1308.0
    },
    {
        "brand": "新飞",
        "Sales": 1459.0
    },
    {
        "brand": "新飞",
        "Sales": 1649.0
    },
    {
        "brand": "新飞",
        "Sales": 2099.0
    },
    {
        "brand": "新飞",
        "Sales": 2699.0
    },
    {
        "brand": "新飞",
        "Sales": 1599.0
    },
    {
        "brand": "新飞",
        "Sales": 1442.0
    },
    {
        "brand": "新飞",
        "Sales": 4399.0
    },
    {
        "brand": "新飞",
        "Sales": 3599.0
    },
    {
        "brand": "新飞",
        "Sales": 899.0
    },
    {
        "brand": "新飞",
        "Sales": 1880.0
    },
    {
        "brand": "新飞",
        "Sales": 1418.0
    },
    {
        "brand": "新飞",
        "Sales": 699.0
    },
    {
        "brand": "新飞",
        "Sales": 729.0
    },
    {
        "brand": "新飞",
        "Sales": 1399.0
    },
    {
        "brand": "新飞",
        "Sales": 1199.0
    },
    {
        "brand": "新飞",
        "Sales": 1557.0
    },
    {
        "brand": "新飞",
        "Sales": 1699.0
    },
    {
        "brand": "新飞",
        "Sales": 1159.0
    },
    {
        "brand": "新飞",
        "Sales": 3169.0
    },
    {
        "brand": "新飞",
        "Sales": 619.0
    },
    {
        "brand": "新飞",
        "Sales": 2591.0
    },
    {
        "brand": "新飞",
        "Sales": 1499.0
    },
    {
        "brand": "新飞",
        "Sales": 619.0
    },
    {
        "brand": "新飞",
        "Sales": 1299.0
    },
    {
        "brand": "新飞",
        "Sales": 1649.0
    },
    {
        "brand": "新飞",
        "Sales": 1319.0
    },
    {
        "brand": "新飞",
        "Sales": 1349.0
    },
    {
        "brand": "新飞",
        "Sales": 6999.0
    },
    {
        "brand": "新飞",
        "Sales": 1838.0
    },
    {
        "brand": "新飞",
        "Sales": 1160.0
    },
    {
        "brand": "新飞",
        "Sales": 2799.0
    },
    {
        "brand": "新飞",
        "Sales": 2299.0
    },
    {
        "brand": "新飞",
        "Sales": 1549.0
    },
    {
        "brand": "新飞",
        "Sales": 1539.0
    },
    {
        "brand": "新飞",
        "Sales": 4999.0
    },
    {
        "brand": "新飞",
        "Sales": 770.0
    },
    {
        "brand": "新飞",
        "Sales": 818.0
    },
    {
        "brand": "新飞",
        "Sales": 1729.0
    },
    {
        "brand": "新飞",
        "Sales": 1449.0
    },
    {
        "brand": "新飞",
        "Sales": 1470.0
    },
    {
        "brand": "新飞",
        "Sales": 3299.0
    },
    {
        "brand": "新飞",
        "Sales": 1399.0
    },
    {
        "brand": "新飞",
        "Sales": 1399.0
    },
    {
        "brand": "新飞",
        "Sales": 1409.0
    },
    {
        "brand": "新飞",
        "Sales": 3899.0
    },
    {
        "brand": "新飞",
        "Sales": 1699.0
    },
    {
        "brand": "新飞",
        "Sales": 679.0
    },
    {
        "brand": "新飞",
        "Sales": 1699.0
    },
    {
        "brand": "新飞",
        "Sales": 1549.0
    },
    {
        "brand": "新飞",
        "Sales": 1068.0
    },
    {
        "brand": "新飞",
        "Sales": 1679.0
    },
    {
        "brand": "新飞",
        "Sales": 1449.0
    },
    {
        "brand": "新飞",
        "Sales": 4799.0
    },
    {
        "brand": "新飞",
        "Sales": 1698.0
    },
    {
        "brand": "新飞",
        "Sales": 1799.0
    },
    {
        "brand": "新飞",
        "Sales": 1299.0
    },
    {
        "brand": "新飞",
        "Sales": 1649.0
    },
    {
        "brand": "新飞",
        "Sales": 1679.0
    },
    {
        "brand": "新飞",
        "Sales": 1549.0
    },
    {
        "brand": "新飞",
        "Sales": 1349.0
    },
    {
        "brand": "新飞",
        "Sales": 1699.0
    },
    {
        "brand": "新飞",
        "Sales": 1349.0
    },
    {
        "brand": "新飞",
        "Sales": 1919.0
    },
    {
        "brand": "新飞",
        "Sales": 699.0
    },
    {
        "brand": "新飞",
        "Sales": 1249.0
    },
    {
        "brand": "新飞",
        "Sales": 1399.0
    },
    {
        "brand": "新飞",
        "Sales": 1798.5
    },
    {
        "brand": "新飞",
        "Sales": 1933.5
    },
    {
        "brand": "新飞",
        "Sales": 1399.0
    },
    {
        "brand": "新飞",
        "Sales": 1359.0
    },
    {
        "brand": "新飞",
        "Sales": 1139.0
    },
    {
        "brand": "新飞",
        "Sales": 2099.0
    },
    {
        "brand": "新飞",
        "Sales": 1369.0
    },
    {
        "brand": "新飞",
        "Sales": 1349.0
    },
    {
        "brand": "新飞",
        "Sales": 1238.0
    },
    {
        "brand": "新飞",
        "Sales": 1299.0
    },
    {
        "brand": "新飞",
        "Sales": 1369.0
    },
    {
        "brand": "新飞",
        "Sales": 3869.0
    },
    {
        "brand": "新飞",
        "Sales": 861.0
    },
    {
        "brand": "新飞",
        "Sales": 2399.0
    },
    {
        "brand": "新飞",
        "Sales": 878.0
    },
    {
        "brand": "新飞",
        "Sales": 2299.0
    },
    {
        "brand": "新飞",
        "Sales": 1949.0
    },
    {
        "brand": "新飞",
        "Sales": 1499.0
    },
    {
        "brand": "新飞",
        "Sales": 1499.0
    },
    {
        "brand": "新飞",
        "Sales": 729.0
    },
    {
        "brand": "新飞",
        "Sales": 1099.0
    },
    {
        "brand": "新飞",
        "Sales": 1161.0
    },
    {
        "brand": "新飞",
        "Sales": 1069.0
    },
    {
        "brand": "新飞",
        "Sales": 1189.0
    },
    {
        "brand": "新飞",
        "Sales": 1749.0
    },
    {
        "brand": "新飞",
        "Sales": 1059.0
    },
    {
        "brand": "新飞",
        "Sales": 1299.0
    },
    {
        "brand": "新飞",
        "Sales": 1269.0
    },
    {
        "brand": "新飞",
        "Sales": 1059.0
    },
    {
        "brand": "新飞",
        "Sales": 3079.0
    },
    {
        "brand": "新飞",
        "Sales": 1219.0
    },
    {
        "brand": "新飞",
        "Sales": 1879.0
    },
    {
        "brand": "新飞",
        "Sales": 890.0
    },
    {
        "brand": "新飞",
        "Sales": 1880.0
    },
    {
        "brand": "新飞",
        "Sales": 699.0
    },
    {
        "brand": "新飞",
        "Sales": 729.0
    },
    {
        "brand": "新飞",
        "Sales": 1249.0
    },
    {
        "brand": "新飞",
        "Sales": 1699.0
    },
    {
        "brand": "新飞",
        "Sales": 1399.0
    },
    {
        "brand": "新飞",
        "Sales": 781.0
    },
    {
        "brand": "新飞",
        "Sales": 899.0
    },
    {
        "brand": "新飞",
        "Sales": 3339.0
    },
    {
        "brand": "新飞",
        "Sales": 1031.0
    },
    {
        "brand": "新飞",
        "Sales": 599.0
    },
    {
        "brand": "新飞",
        "Sales": 759.0
    },
    {
        "brand": "新飞",
        "Sales": 1149.0
    },
    {
        "brand": "新飞",
        "Sales": 856.0
    },
    {
        "brand": "新飞",
        "Sales": 799.0
    },
    {
        "brand": "新飞",
        "Sales": 1699.0
    },
    {
        "brand": "新飞",
        "Sales": 2299.0
    },
    {
        "brand": "新飞",
        "Sales": 3099.0
    },
    {
        "brand": "新飞",
        "Sales": 1483.5
    },
    {
        "brand": "新飞",
        "Sales": 679.0
    },
    {
        "brand": "新飞",
        "Sales": 1110.0
    },
    {
        "brand": "新飞",
        "Sales": 1429.0
    },
    {
        "brand": "新飞",
        "Sales": 1039.0
    },
    {
        "brand": "新飞",
        "Sales": 799.0
    },
    {
        "brand": "新飞",
        "Sales": 1199.0
    },
    {
        "brand": "新飞",
        "Sales": 1299.0
    },
    {
        "brand": "新飞",
        "Sales": 1877.12
    },
    {
        "brand": "新飞",
        "Sales": 1059.0
    },
    {
        "brand": "新飞",
        "Sales": 1799.0
    },
    {
        "brand": "新飞",
        "Sales": 1322.0
    },
    {
        "brand": "新飞",
        "Sales": 1399.0
    },
    {
        "brand": "新飞",
        "Sales": 722.0
    },
    {
        "brand": "新飞",
        "Sales": 1519.0
    },
    {
        "brand": "新飞",
        "Sales": 851.0
    },
    {
        "brand": "新飞",
        "Sales": 1070.0
    },
    {
        "brand": "新飞",
        "Sales": 899.0
    },
    {
        "brand": "新飞",
        "Sales": 899.0
    },
    {
        "brand": "新飞",
        "Sales": 834.0
    },
    {
        "brand": "新飞",
        "Sales": 1576.0
    },
    {
        "brand": "新飞",
        "Sales": 1500.0
    },
    {
        "brand": "新飞",
        "Sales": 1749.0
    },
    {
        "brand": "新飞",
        "Sales": 1699.0
    },
    {
        "brand": "新飞",
        "Sales": 959.0
    },
    {
        "brand": "新飞",
        "Sales": 779.0
    },
    {
        "brand": "新飞",
        "Sales": 1299.0
    },
    {
        "brand": "新飞",
        "Sales": 1649.0
    },
    {
        "brand": "新飞",
        "Sales": 1249.0
    },
    {
        "brand": "新飞",
        "Sales": 2149.0
    },
    {
        "brand": "新飞",
        "Sales": 721.0
    },
    {
        "brand": "新飞",
        "Sales": 781.0
    },
    {
        "brand": "新飞",
        "Sales": 1779.0
    },
    {
        "brand": "新飞",
        "Sales": 1679.0
    },
    {
        "brand": "新飞",
        "Sales": 1299.0
    },
    {
        "brand": "新飞",
        "Sales": 2199.0
    },
    {
        "brand": "新飞",
        "Sales": 1399.0
    },
    {
        "brand": "新飞",
        "Sales": 999.0
    },
    {
        "brand": "新飞",
        "Sales": 1399.0
    },
    {
        "brand": "新飞",
        "Sales": 1032.0
    },
    {
        "brand": "新飞",
        "Sales": 1049.0
    },
    {
        "brand": "新飞",
        "Sales": 2399.0
    },
    {
        "brand": "新飞",
        "Sales": 899.0
    },
    {
        "brand": "新飞",
        "Sales": 1649.0
    },
    {
        "brand": "新飞",
        "Sales": 2199.0
    },
    {
        "brand": "新飞",
        "Sales": 1291.0
    },
    {
        "brand": "新飞",
        "Sales": 779.0
    },
    {
        "brand": "新飞",
        "Sales": 1919.0
    },
    {
        "brand": "新飞",
        "Sales": 1119.6
    },
    {
        "brand": "新飞",
        "Sales": 999.0
    },
    {
        "brand": "新飞",
        "Sales": 1499.0
    },
    {
        "brand": "新飞",
        "Sales": 1559.0
    },
    {
        "brand": "新飞",
        "Sales": 1399.0
    },
    {
        "brand": "新飞",
        "Sales": 1099.0
    },
    {
        "brand": "新飞",
        "Sales": 782.0
    },
    {
        "brand": "新飞",
        "Sales": 1569.0
    },
    {
        "brand": "新飞",
        "Sales": 779.0
    },
    {
        "brand": "新飞",
        "Sales": 1649.0
    },
    {
        "brand": "新飞",
        "Sales": 1299.0
    },
    {
        "brand": "新飞",
        "Sales": 1299.0
    },
    {
        "brand": "新飞",
        "Sales": 1719.0
    },
    {
        "brand": "新飞",
        "Sales": 1509.0
    },
    {
        "brand": "新飞",
        "Sales": 1599.0
    },
    {
        "brand": "新飞",
        "Sales": 1939.0
    },
    {
        "brand": "新飞",
        "Sales": 1799.0
    },
    {
        "brand": "新飞",
        "Sales": 1499.0
    },
    {
        "brand": "新飞",
        "Sales": 1699.0
    },
    {
        "brand": "新飞",
        "Sales": 1149.0
    },
    {
        "brand": "新飞",
        "Sales": 1399.0
    },
    {
        "brand": "新飞",
        "Sales": 1499.0
    },
    {
        "brand": "新飞",
        "Sales": 1549.0
    },
    {
        "brand": "新飞",
        "Sales": 1499.0
    },
    {
        "brand": "新飞",
        "Sales": 1599.0
    },
    {
        "brand": "新飞",
        "Sales": 1099.0
    },
    {
        "brand": "新飞",
        "Sales": 782.0
    },
    {
        "brand": "新飞",
        "Sales": 959.0
    },
    {
        "brand": "新飞",
        "Sales": 689.0
    },
    {
        "brand": "新飞",
        "Sales": 4199.0
    },
    {
        "brand": "新飞",
        "Sales": 1399.0
    },
    {
        "brand": "新飞",
        "Sales": 1264.0
    },
    {
        "brand": "新飞",
        "Sales": 2045.0
    },
    {
        "brand": "新飞",
        "Sales": 2999.0
    },
    {
        "brand": "新飞",
        "Sales": 867.0
    },
    {
        "brand": "新飞",
        "Sales": 1699.0
    },
    {
        "brand": "新飞",
        "Sales": 1499.0
    },
    {
        "brand": "新飞",
        "Sales": 1049.0
    },
    {
        "brand": "新飞",
        "Sales": 999.6
    },
    {
        "brand": "新飞",
        "Sales": 1779.0
    },
    {
        "brand": "新飞",
        "Sales": 1499.0
    },
    {
        "brand": "新飞",
        "Sales": 1059.0
    },
    {
        "brand": "新飞",
        "Sales": 1159.0
    },
    {
        "brand": "新飞",
        "Sales": 1399.0
    },
    {
        "brand": "新飞",
        "Sales": 1039.0
    },
    {
        "brand": "新飞",
        "Sales": 1799.0
    },
    {
        "brand": "新飞",
        "Sales": 1689.0
    },
    {
        "brand": "新飞",
        "Sales": 1399.0
    },
    {
        "brand": "新飞",
        "Sales": 1458.0
    },
    {
        "brand": "新飞",
        "Sales": 1139.0
    },
    {
        "brand": "新飞",
        "Sales": 1070.0
    },
    {
        "brand": "新飞",
        "Sales": 1449.0
    },
    {
        "brand": "新飞",
        "Sales": 1849.0
    },
    {
        "brand": "新飞",
        "Sales": 1199.0
    },
    {
        "brand": "新飞",
        "Sales": 1499.0
    },
    {
        "brand": "新飞",
        "Sales": 1823.0
    },
    {
        "brand": "新飞",
        "Sales": 799.0
    },
    {
        "brand": "新飞",
        "Sales": 1649.0
    },
    {
        "brand": "新飞",
        "Sales": 2399.0
    },
    {
        "brand": "新飞",
        "Sales": 1169.0
    },
    {
        "brand": "新飞",
        "Sales": 1378.5
    },
    {
        "brand": "新飞",
        "Sales": 959.0
    },
    {
        "brand": "新飞",
        "Sales": 959.0
    },
    {
        "brand": "新飞",
        "Sales": 1399.0
    },
    {
        "brand": "新飞",
        "Sales": 1449.0
    },
    {
        "brand": "新飞",
        "Sales": 1278.0
    },
    {
        "brand": "新飞",
        "Sales": 1399.0
    },
    {
        "brand": "新飞",
        "Sales": 1799.0
    },
    {
        "brand": "新飞",
        "Sales": 2499.0
    },
    {
        "brand": "新飞",
        "Sales": 619.0
    },
    {
        "brand": "新飞",
        "Sales": 1379.0
    },
    {
        "brand": "新飞",
        "Sales": 780.0
    },
    {
        "brand": "新飞",
        "Sales": 770.0
    },
    {
        "brand": "新飞",
        "Sales": 1399.0
    },
    {
        "brand": "新飞",
        "Sales": 1999.0
    },
    {
        "brand": "新飞",
        "Sales": 1399.0
    },
    {
        "brand": "新飞",
        "Sales": 1749.0
    },
    {
        "brand": "新飞",
        "Sales": 1679.0
    },
    {
        "brand": "新飞",
        "Sales": 1399.0
    },
    {
        "brand": "新飞",
        "Sales": 699.0
    },
    {
        "brand": "松下",
        "Sales": 6998.0
    },
    {
        "brand": "松下",
        "Sales": 4798.0
    },
    {
        "brand": "松下",
        "Sales": 6885.0
    },
    {
        "brand": "松下",
        "Sales": 6968.0
    },
    {
        "brand": "松下",
        "Sales": 8698.0
    },
    {
        "brand": "松下",
        "Sales": 7998.0
    },
    {
        "brand": "松下",
        "Sales": 3898.0
    },
    {
        "brand": "松下",
        "Sales": 8998.0
    },
    {
        "brand": "松下",
        "Sales": 8697.0
    },
    {
        "brand": "松下",
        "Sales": 5190.0
    },
    {
        "brand": "松下",
        "Sales": 5498.0
    },
    {
        "brand": "松下",
        "Sales": 4898.0
    },
    {
        "brand": "松下",
        "Sales": 18499.0
    },
    {
        "brand": "松下",
        "Sales": 5698.0
    },
    {
        "brand": "松下",
        "Sales": 6498.0
    },
    {
        "brand": "松下",
        "Sales": 4250.0
    },
    {
        "brand": "松下",
        "Sales": 5498.0
    },
    {
        "brand": "松下",
        "Sales": 8698.0
    },
    {
        "brand": "松下",
        "Sales": 12385.0
    },
    {
        "brand": "松下",
        "Sales": 6799.0
    },
    {
        "brand": "松下",
        "Sales": 2898.0
    },
    {
        "brand": "松下",
        "Sales": 7406.0
    },
    {
        "brand": "松下",
        "Sales": 5698.0
    },
    {
        "brand": "松下",
        "Sales": 4498.0
    },
    {
        "brand": "松下",
        "Sales": 9998.0
    },
    {
        "brand": "松下",
        "Sales": 14401.88
    },
    {
        "brand": "松下",
        "Sales": 8147.0
    },
    {
        "brand": "松下",
        "Sales": 15996.0
    },
    {
        "brand": "松下",
        "Sales": 2898.0
    },
    {
        "brand": "松下",
        "Sales": 8998.0
    },
    {
        "brand": "松下",
        "Sales": 7998.0
    },
    {
        "brand": "松下",
        "Sales": 8748.0
    },
    {
        "brand": "松下",
        "Sales": 7801.0
    },
    {
        "brand": "松下",
        "Sales": 8998.0
    },
    {
        "brand": "松下",
        "Sales": 3998.0
    },
    {
        "brand": "松下",
        "Sales": 6498.0
    },
    {
        "brand": "松下",
        "Sales": 7335.0
    },
    {
        "brand": "松下",
        "Sales": 8698.0
    },
    {
        "brand": "松下",
        "Sales": 9399.0
    },
    {
        "brand": "松下",
        "Sales": 6397.0
    },
    {
        "brand": "松下",
        "Sales": 5535.0
    },
    {
        "brand": "松下",
        "Sales": 6098.0
    },
    {
        "brand": "松下",
        "Sales": 3098.0
    },
    {
        "brand": "松下",
        "Sales": 7998.0
    },
    {
        "brand": "松下",
        "Sales": 3998.0
    },
    {
        "brand": "松下",
        "Sales": 10275.3
    },
    {
        "brand": "松下",
        "Sales": 6698.0
    },
    {
        "brand": "松下",
        "Sales": 18214.0
    },
    {
        "brand": "松下",
        "Sales": 3998.0
    },
    {
        "brand": "松下",
        "Sales": 12039.3
    },
    {
        "brand": "松下",
        "Sales": 3398.0
    },
    {
        "brand": "松下",
        "Sales": 6861.0
    },
    {
        "brand": "松下",
        "Sales": 8599.0
    },
    {
        "brand": "松下",
        "Sales": 5298.0
    },
    {
        "brand": "松下",
        "Sales": 7035.0
    },
    {
        "brand": "松下",
        "Sales": 8207.95
    },
    {
        "brand": "松下",
        "Sales": 4498.0
    },
    {
        "brand": "松下",
        "Sales": 9998.0
    },
    {
        "brand": "松下",
        "Sales": 11757.0
    },
    {
        "brand": "松下",
        "Sales": 7797.6
    },
    {
        "brand": "松下",
        "Sales": 10699.0
    },
    {
        "brand": "松下",
        "Sales": 3098.0
    },
    {
        "brand": "松下",
        "Sales": 13996.0
    },
    {
        "brand": "松下",
        "Sales": 9299.0
    },
    {
        "brand": "松下",
        "Sales": 7998.0
    },
    {
        "brand": "松下",
        "Sales": 4898.0
    },
    {
        "brand": "松下",
        "Sales": 2750.0
    },
    {
        "brand": "松下",
        "Sales": 8351.99
    },
    {
        "brand": "松下",
        "Sales": 12056.0
    },
    {
        "brand": "松下",
        "Sales": 8698.0
    },
    {
        "brand": "松下",
        "Sales": 4698.0
    },
    {
        "brand": "松下",
        "Sales": 3198.0
    },
    {
        "brand": "松下",
        "Sales": 5550.0
    },
    {
        "brand": "松下",
        "Sales": 9198.0
    },
    {
        "brand": "松下",
        "Sales": 5835.0
    },
    {
        "brand": "松下",
        "Sales": 6968.0
    },
    {
        "brand": "松下",
        "Sales": 6698.0
    },
    {
        "brand": "松下",
        "Sales": 8351.99
    },
    {
        "brand": "松下",
        "Sales": 10399.0
    },
    {
        "brand": "松下",
        "Sales": 17596.48
    },
    {
        "brand": "松下",
        "Sales": 2898.0
    },
    {
        "brand": "松下",
        "Sales": 18039.0
    },
    {
        "brand": "松下",
        "Sales": 8985.0
    },
    {
        "brand": "松下",
        "Sales": 12285.0
    },
    {
        "brand": "松下",
        "Sales": 9298.0
    },
    {
        "brand": "松下",
        "Sales": 9298.0
    },
    {
        "brand": "松下",
        "Sales": 12385.0
    },
    {
        "brand": "松下",
        "Sales": 7660.58
    },
    {
        "brand": "松下",
        "Sales": 2898.0
    },
    {
        "brand": "松下",
        "Sales": 8099.0
    },
    {
        "brand": "松下",
        "Sales": 4939.2
    },
    {
        "brand": "松下",
        "Sales": 3898.0
    },
    {
        "brand": "松下",
        "Sales": 4798.0
    },
    {
        "brand": "松下",
        "Sales": 7998.0
    },
    {
        "brand": "松下",
        "Sales": 17449.0
    },
    {
        "brand": "松下",
        "Sales": 8498.0
    },
    {
        "brand": "松下",
        "Sales": 13396.0
    },
    {
        "brand": "松下",
        "Sales": 14397.0
    },
    {
        "brand": "松下",
        "Sales": 3198.0
    },
    {
        "brand": "松下",
        "Sales": 8276.0
    },
    {
        "brand": "松下",
        "Sales": 6698.0
    },
    {
        "brand": "松下",
        "Sales": 6998.0
    },
    {
        "brand": "松下",
        "Sales": 8968.0
    },
    {
        "brand": "松下",
        "Sales": 6298.0
    },
    {
        "brand": "松下",
        "Sales": 12883.0
    },
    {
        "brand": "松下",
        "Sales": 3098.0
    },
    {
        "brand": "松下",
        "Sales": 8770.0
    },
    {
        "brand": "松下",
        "Sales": 10497.0
    },
    {
        "brand": "松下",
        "Sales": 6698.0
    },
    {
        "brand": "松下",
        "Sales": 3198.0
    },
    {
        "brand": "松下",
        "Sales": 8998.0
    },
    {
        "brand": "松下",
        "Sales": 3098.0
    },
    {
        "brand": "松下",
        "Sales": 4498.0
    },
    {
        "brand": "松下",
        "Sales": 7698.0
    },
    {
        "brand": "松下",
        "Sales": 5611.0
    },
    {
        "brand": "松下",
        "Sales": 6299.0
    },
    {
        "brand": "松下",
        "Sales": 10797.6
    },
    {
        "brand": "松下",
        "Sales": 15056.0
    },
    {
        "brand": "松下",
        "Sales": 3398.0
    },
    {
        "brand": "松下",
        "Sales": 8099.0
    },
    {
        "brand": "松下",
        "Sales": 7663.0
    },
    {
        "brand": "松下",
        "Sales": 16870.0
    },
    {
        "brand": "松下",
        "Sales": 12285.0
    },
    {
        "brand": "松下",
        "Sales": 14248.0
    },
    {
        "brand": "松下",
        "Sales": 3998.0
    },
    {
        "brand": "松下",
        "Sales": 4798.0
    },
    {
        "brand": "松下",
        "Sales": 5128.0
    },
    {
        "brand": "松下",
        "Sales": 7299.0
    },
    {
        "brand": "松下",
        "Sales": 5086.2
    },
    {
        "brand": "松下",
        "Sales": 7698.0
    },
    {
        "brand": "松下",
        "Sales": 10998.0
    },
    {
        "brand": "松下",
        "Sales": 4698.0
    },
    {
        "brand": "松下",
        "Sales": 8998.0
    },
    {
        "brand": "松下",
        "Sales": 13597.0
    },
    {
        "brand": "松下",
        "Sales": 7998.0
    },
    {
        "brand": "松下",
        "Sales": 6698.0
    },
    {
        "brand": "松下",
        "Sales": 3798.0
    },
    {
        "brand": "松下",
        "Sales": 3798.0
    },
    {
        "brand": "松下",
        "Sales": 3098.0
    },
    {
        "brand": "松下",
        "Sales": 9298.0
    },
    {
        "brand": "松下",
        "Sales": 3998.0
    },
    {
        "brand": "松下",
        "Sales": 3198.0
    },
    {
        "brand": "松下",
        "Sales": 7500.0
    },
    {
        "brand": "松下",
        "Sales": 4335.0
    },
    {
        "brand": "松下",
        "Sales": 3798.0
    },
    {
        "brand": "松下",
        "Sales": 6698.0
    },
    {
        "brand": "松下",
        "Sales": 5424.3
    },
    {
        "brand": "松下",
        "Sales": 8317.0
    },
    {
        "brand": "松下",
        "Sales": 7999.0
    },
    {
        "brand": "松下",
        "Sales": 9298.0
    },
    {
        "brand": "松下",
        "Sales": 7520.0
    },
    {
        "brand": "松下",
        "Sales": 9435.0
    },
    {
        "brand": "松下",
        "Sales": 5698.0
    },
    {
        "brand": "松下",
        "Sales": 9283.0
    },
    {
        "brand": "松下",
        "Sales": 6507.0
    },
    {
        "brand": "松下",
        "Sales": 5599.0
    },
    {
        "brand": "松下",
        "Sales": 3598.0
    },
    {
        "brand": "松下",
        "Sales": 9998.0
    },
    {
        "brand": "松下",
        "Sales": 5698.0
    },
    {
        "brand": "松下",
        "Sales": 18597.0
    },
    {
        "brand": "松下",
        "Sales": 5798.0
    },
    {
        "brand": "松下",
        "Sales": 3298.0
    },
    {
        "brand": "松下",
        "Sales": 7598.0
    },
    {
        "brand": "松下",
        "Sales": 9398.0
    },
    {
        "brand": "松下",
        "Sales": 4901.0
    },
    {
        "brand": "松下",
        "Sales": 3398.0
    },
    {
        "brand": "松下",
        "Sales": 3998.0
    },
    {
        "brand": "松下",
        "Sales": 6698.0
    },
    {
        "brand": "松下",
        "Sales": 5598.0
    },
    {
        "brand": "松下",
        "Sales": 6789.0
    },
    {
        "brand": "松下",
        "Sales": 6698.0
    },
    {
        "brand": "松下",
        "Sales": 7376.0
    },
    {
        "brand": "松下",
        "Sales": 9998.0
    },
    {
        "brand": "松下",
        "Sales": 3798.0
    },
    {
        "brand": "松下",
        "Sales": 14997.0
    },
    {
        "brand": "松下",
        "Sales": 9798.0
    },
    {
        "brand": "松下",
        "Sales": 10635.0
    },
    {
        "brand": "松下",
        "Sales": 3598.0
    },
    {
        "brand": "松下",
        "Sales": 4998.0
    },
    {
        "brand": "松下",
        "Sales": 3798.0
    },
    {
        "brand": "松下",
        "Sales": 10976.0
    },
    {
        "brand": "松下",
        "Sales": 6698.0
    },
    {
        "brand": "松下",
        "Sales": 5718.3
    },
    {
        "brand": "松下",
        "Sales": 13909.0
    },
    {
        "brand": "松下",
        "Sales": 5798.0
    },
    {
        "brand": "松下",
        "Sales": 9698.0
    },
    {
        "brand": "松下",
        "Sales": 6238.0
    },
    {
        "brand": "松下",
        "Sales": 9698.0
    },
    {
        "brand": "松下",
        "Sales": 6298.0
    },
    {
        "brand": "松下",
        "Sales": 8014.0
    },
    {
        "brand": "松下",
        "Sales": 8699.0
    },
    {
        "brand": "松下",
        "Sales": 6698.0
    },
    {
        "brand": "松下",
        "Sales": 7099.0
    },
    {
        "brand": "松下",
        "Sales": 5892.0
    },
    {
        "brand": "松下",
        "Sales": 999.0
    },
    {
        "brand": "松下",
        "Sales": 5385.0
    },
    {
        "brand": "松下",
        "Sales": 13999.0
    },
    {
        "brand": "松下",
        "Sales": 10080.53
    },
    {
        "brand": "松下",
        "Sales": 10869.0
    },
    {
        "brand": "松下",
        "Sales": 18214.0
    },
    {
        "brand": "松下",
        "Sales": 5698.0
    },
    {
        "brand": "松下",
        "Sales": 11981.0
    },
    {
        "brand": "松下",
        "Sales": 7216.0
    },
    {
        "brand": "松下",
        "Sales": 6502.0
    },
    {
        "brand": "松下",
        "Sales": 999.0
    },
    {
        "brand": "松下",
        "Sales": 8968.0
    },
    {
        "brand": "松下",
        "Sales": 15680.0
    },
    {
        "brand": "松下",
        "Sales": 17099.0
    },
    {
        "brand": "松下",
        "Sales": 2798.0
    },
    {
        "brand": "松下",
        "Sales": 10026.6
    },
    {
        "brand": "松下",
        "Sales": 12976.0
    },
    {
        "brand": "松下",
        "Sales": 4698.0
    },
    {
        "brand": "松下",
        "Sales": 9998.0
    },
    {
        "brand": "松下",
        "Sales": 3998.0
    },
    {
        "brand": "松下",
        "Sales": 10863.3
    },
    {
        "brand": "松下",
        "Sales": 3080.0
    },
    {
        "brand": "松下",
        "Sales": 4898.0
    },
    {
        "brand": "松下",
        "Sales": 18856.0
    },
    {
        "brand": "松下",
        "Sales": 4057.2
    },
    {
        "brand": "松下",
        "Sales": 18796.0
    },
    {
        "brand": "松下",
        "Sales": 5498.0
    },
    {
        "brand": "松下",
        "Sales": 3598.0
    },
    {
        "brand": "松下",
        "Sales": 15147.0
    },
    {
        "brand": "松下",
        "Sales": 5498.0
    },
    {
        "brand": "松下",
        "Sales": 8438.0
    },
    {
        "brand": "松下",
        "Sales": 3298.0
    },
    {
        "brand": "松下",
        "Sales": 4498.0
    },
    {
        "brand": "松下",
        "Sales": 12039.3
    },
    {
        "brand": "松下",
        "Sales": 9451.0
    },
    {
        "brand": "松下",
        "Sales": 4398.0
    },
    {
        "brand": "松下",
        "Sales": 13047.0
    },
    {
        "brand": "松下",
        "Sales": 3698.0
    },
    {
        "brand": "松下",
        "Sales": 5798.0
    },
    {
        "brand": "松下",
        "Sales": 3398.0
    },
    {
        "brand": "松下",
        "Sales": 4250.0
    },
    {
        "brand": "松下",
        "Sales": 8998.0
    },
    {
        "brand": "松下",
        "Sales": 4498.0
    },
    {
        "brand": "松下",
        "Sales": 5798.0
    },
    {
        "brand": "松下",
        "Sales": 3050.0
    },
    {
        "brand": "松下",
        "Sales": 11999.0
    },
    {
        "brand": "松下",
        "Sales": 11556.6
    },
    {
        "brand": "松下",
        "Sales": 7335.0
    },
    {
        "brand": "松下",
        "Sales": 9998.0
    },
    {
        "brand": "松下",
        "Sales": 3998.0
    },
    {
        "brand": "松下",
        "Sales": 9998.0
    },
    {
        "brand": "松下",
        "Sales": 9597.0
    },
    {
        "brand": "松下",
        "Sales": 3250.0
    },
    {
        "brand": "松下",
        "Sales": 4850.0
    },
    {
        "brand": "松下",
        "Sales": 6499.0
    },
    {
        "brand": "松下",
        "Sales": 7998.0
    },
    {
        "brand": "松下",
        "Sales": 5179.0
    },
    {
        "brand": "松下",
        "Sales": 4798.0
    },
    {
        "brand": "松下",
        "Sales": 7335.0
    },
    {
        "brand": "松下",
        "Sales": 8998.0
    },
    {
        "brand": "松下",
        "Sales": 5798.0
    },
    {
        "brand": "松下",
        "Sales": 8797.0
    },
    {
        "brand": "松下",
        "Sales": 4898.0
    },
    {
        "brand": "松下",
        "Sales": 9880.0
    },
    {
        "brand": "松下",
        "Sales": 5968.0
    },
    {
        "brand": "松下",
        "Sales": 5498.0
    },
    {
        "brand": "松下",
        "Sales": 7499.0
    },
    {
        "brand": "松下",
        "Sales": 5105.0
    },
    {
        "brand": "松下",
        "Sales": 7998.0
    },
    {
        "brand": "松下",
        "Sales": 5429.0
    },
    {
        "brand": "松下",
        "Sales": 3198.0
    },
    {
        "brand": "松下",
        "Sales": 3885.0
    },
    {
        "brand": "松下",
        "Sales": 8998.0
    },
    {
        "brand": "松下",
        "Sales": 7299.0
    },
    {
        "brand": "松下",
        "Sales": 8999.0
    },
    {
        "brand": "松下",
        "Sales": 5674.2
    },
    {
        "brand": "松下",
        "Sales": 8985.0
    },
    {
        "brand": "松下",
        "Sales": 5790.0
    },
    {
        "brand": "松下",
        "Sales": 3598.0
    },
    {
        "brand": "松下",
        "Sales": 11579.0
    },
    {
        "brand": "松下",
        "Sales": 9998.0
    },
    {
        "brand": "松下",
        "Sales": 3098.0
    },
    {
        "brand": "松下",
        "Sales": 6998.0
    },
    {
        "brand": "松下",
        "Sales": 8998.0
    },
    {
        "brand": "松下",
        "Sales": 8496.6
    },
    {
        "brand": "松下",
        "Sales": 4797.0
    },
    {
        "brand": "松下",
        "Sales": 7899.0
    },
    {
        "brand": "松下",
        "Sales": 13999.0
    },
    {
        "brand": "松下",
        "Sales": 16692.0
    },
    {
        "brand": "松下",
        "Sales": 6098.0
    },
    {
        "brand": "松下",
        "Sales": 10196.6
    },
    {
        "brand": "松下",
        "Sales": 15680.0
    },
    {
        "brand": "松下",
        "Sales": 8925.0
    },
    {
        "brand": "松下",
        "Sales": 4498.0
    },
    {
        "brand": "松下",
        "Sales": 19800.0
    },
    {
        "brand": "松下",
        "Sales": 9298.0
    },
    {
        "brand": "松下",
        "Sales": 9435.0
    },
    {
        "brand": "松下",
        "Sales": 16134.0
    },
    {
        "brand": "松下",
        "Sales": 2998.0
    },
    {
        "brand": "松下",
        "Sales": 5385.0
    },
    {
        "brand": "松下",
        "Sales": 5798.0
    },
    {
        "brand": "松下",
        "Sales": 8699.0
    },
    {
        "brand": "松下",
        "Sales": 3998.0
    },
    {
        "brand": "松下",
        "Sales": 9999.0
    },
    {
        "brand": "松下",
        "Sales": 5235.0
    },
    {
        "brand": "松下",
        "Sales": 5792.0
    },
    {
        "brand": "格力",
        "Sales": 5399.0
    },
    {
        "brand": "格力",
        "Sales": 2999.0
    },
    {
        "brand": "格力",
        "Sales": 2249.0
    },
    {
        "brand": "格力",
        "Sales": 3550.0
    },
    {
        "brand": "格力",
        "Sales": 8076.0
    },
    {
        "brand": "格力",
        "Sales": 6599.0
    },
    {
        "brand": "格力",
        "Sales": 6099.0
    },
    {
        "brand": "格力",
        "Sales": 6399.0
    },
    {
        "brand": "格力",
        "Sales": 5999.0
    },
    {
        "brand": "格力",
        "Sales": 14296.0
    },
    {
        "brand": "格力",
        "Sales": 7699.0
    },
    {
        "brand": "格力",
        "Sales": 7399.0
    },
    {
        "brand": "格力",
        "Sales": 6299.0
    },
    {
        "brand": "格力",
        "Sales": 11999.0
    },
    {
        "brand": "格力",
        "Sales": 5999.0
    },
    {
        "brand": "格力",
        "Sales": 8699.0
    },
    {
        "brand": "格力",
        "Sales": 4099.0
    },
    {
        "brand": "格力",
        "Sales": 6899.0
    },
    {
        "brand": "格力",
        "Sales": 3099.0
    },
    {
        "brand": "格力",
        "Sales": 2249.0
    },
    {
        "brand": "格力",
        "Sales": 7099.0
    },
    {
        "brand": "格力",
        "Sales": 4199.0
    },
    {
        "brand": "格力",
        "Sales": 6999.0
    },
    {
        "brand": "格力",
        "Sales": 2999.0
    },
    {
        "brand": "格力",
        "Sales": 3299.0
    },
    {
        "brand": "格力",
        "Sales": 4799.0
    },
    {
        "brand": "格力",
        "Sales": 7899.0
    },
    {
        "brand": "格力",
        "Sales": 1999.0
    },
    {
        "brand": "格力",
        "Sales": 3099.0
    },
    {
        "brand": "格力",
        "Sales": 2849.0
    },
    {
        "brand": "格力",
        "Sales": 5999.0
    },
    {
        "brand": "格力",
        "Sales": 7699.0
    },
    {
        "brand": "格力",
        "Sales": 3099.0
    },
    {
        "brand": "格力",
        "Sales": 5199.0
    },
    {
        "brand": "格力",
        "Sales": 13999.0
    },
    {
        "brand": "格力",
        "Sales": 9900.0
    },
    {
        "brand": "格力",
        "Sales": 3099.0
    },
    {
        "brand": "格力",
        "Sales": 11999.0
    },
    {
        "brand": "格力",
        "Sales": 5569.0
    },
    {
        "brand": "格力",
        "Sales": 4199.0
    },
    {
        "brand": "格力",
        "Sales": 12300.0
    },
    {
        "brand": "格力",
        "Sales": 4199.0
    },
    {
        "brand": "格力",
        "Sales": 3399.0
    },
    {
        "brand": "格力",
        "Sales": 3099.0
    },
    {
        "brand": "格力",
        "Sales": 10199.0
    },
    {
        "brand": "格力",
        "Sales": 579.0
    },
    {
        "brand": "格力",
        "Sales": 19900.0
    },
    {
        "brand": "格力",
        "Sales": 7999.0
    },
    {
        "brand": "格力",
        "Sales": 3899.0
    },
    {
        "brand": "格力",
        "Sales": 2899.0
    },
    {
        "brand": "格力",
        "Sales": 2399.0
    },
    {
        "brand": "格力",
        "Sales": 3699.0
    },
    {
        "brand": "格力",
        "Sales": 7399.0
    },
    {
        "brand": "格力",
        "Sales": 2449.0
    },
    {
        "brand": "格力",
        "Sales": 5299.0
    },
    {
        "brand": "格力",
        "Sales": 6999.0
    },
    {
        "brand": "格力",
        "Sales": 3999.0
    },
    {
        "brand": "格力",
        "Sales": 3999.0
    },
    {
        "brand": "格力",
        "Sales": 3199.0
    },
    {
        "brand": "格力",
        "Sales": 6798.0
    },
    {
        "brand": "格力",
        "Sales": 4599.0
    },
    {
        "brand": "格力",
        "Sales": 8699.0
    },
    {
        "brand": "格力",
        "Sales": 5050.0
    },
    {
        "brand": "格力",
        "Sales": 7999.0
    },
    {
        "brand": "格力",
        "Sales": 3199.0
    },
    {
        "brand": "格力",
        "Sales": 12134.0
    },
    {
        "brand": "格力",
        "Sales": 2999.0
    },
    {
        "brand": "格力",
        "Sales": 2699.0
    },
    {
        "brand": "格力",
        "Sales": 5399.0
    },
    {
        "brand": "格力",
        "Sales": 3099.0
    },
    {
        "brand": "格力",
        "Sales": 2799.0
    },
    {
        "brand": "格力",
        "Sales": 7899.0
    },
    {
        "brand": "格力",
        "Sales": 8699.0
    },
    {
        "brand": "格力",
        "Sales": 5999.0
    },
    {
        "brand": "格力",
        "Sales": 7199.0
    },
    {
        "brand": "格力",
        "Sales": 7199.0
    },
    {
        "brand": "格力",
        "Sales": 5399.0
    },
    {
        "brand": "格力",
        "Sales": 2749.0
    },
    {
        "brand": "格力",
        "Sales": 2599.0
    },
    {
        "brand": "格力",
        "Sales": 6299.0
    },
    {
        "brand": "格力",
        "Sales": 5399.0
    },
    {
        "brand": "格力",
        "Sales": 7799.0
    },
    {
        "brand": "格力",
        "Sales": 3199.0
    },
    {
        "brand": "格力",
        "Sales": 5599.0
    },
    {
        "brand": "格力",
        "Sales": 11999.0
    },
    {
        "brand": "格力",
        "Sales": 6299.0
    },
    {
        "brand": "格力",
        "Sales": 3649.0
    },
    {
        "brand": "格力",
        "Sales": 7699.0
    },
    {
        "brand": "格力",
        "Sales": 3899.0
    },
    {
        "brand": "格力",
        "Sales": 2999.0
    },
    {
        "brand": "格力",
        "Sales": 8599.0
    },
    {
        "brand": "格力",
        "Sales": 3199.0
    },
    {
        "brand": "格力",
        "Sales": 3099.0
    },
    {
        "brand": "格力",
        "Sales": 10498.0
    },
    {
        "brand": "格力",
        "Sales": 10297.0
    },
    {
        "brand": "格力",
        "Sales": 3899.0
    },
    {
        "brand": "格力",
        "Sales": 2249.0
    },
    {
        "brand": "格力",
        "Sales": 6399.0
    },
    {
        "brand": "格力",
        "Sales": 3199.0
    },
    {
        "brand": "格力",
        "Sales": 3199.0
    },
    {
        "brand": "格力",
        "Sales": 2499.0
    },
    {
        "brand": "格力",
        "Sales": 5299.0
    },
    {
        "brand": "格力",
        "Sales": 2999.0
    },
    {
        "brand": "格力",
        "Sales": 6199.0
    },
    {
        "brand": "格力",
        "Sales": 6299.0
    },
    {
        "brand": "格力",
        "Sales": 6099.0
    },
    {
        "brand": "格力",
        "Sales": 5599.0
    },
    {
        "brand": "格力",
        "Sales": 5699.0
    },
    {
        "brand": "格力",
        "Sales": 3699.0
    },
    {
        "brand": "格力",
        "Sales": 11798.0
    },
    {
        "brand": "格力",
        "Sales": 5169.0
    },
    {
        "brand": "格力",
        "Sales": 3899.0
    },
    {
        "brand": "格力",
        "Sales": 6199.0
    },
    {
        "brand": "格力",
        "Sales": 2399.0
    },
    {
        "brand": "格力",
        "Sales": 7299.0
    },
    {
        "brand": "格力",
        "Sales": 2699.0
    },
    {
        "brand": "格力",
        "Sales": 5999.0
    },
    {
        "brand": "格力",
        "Sales": 7399.0
    },
    {
        "brand": "格力",
        "Sales": 10999.0
    },
    {
        "brand": "格力",
        "Sales": 6269.0
    },
    {
        "brand": "格力",
        "Sales": 7589.0
    },
    {
        "brand": "格力",
        "Sales": 3399.0
    },
    {
        "brand": "格力",
        "Sales": 5599.0
    },
    {
        "brand": "格力",
        "Sales": 2249.0
    },
    {
        "brand": "格力",
        "Sales": 5599.0
    },
    {
        "brand": "格力",
        "Sales": 2749.0
    },
    {
        "brand": "格力",
        "Sales": 5199.0
    },
    {
        "brand": "格力",
        "Sales": 2699.0
    },
    {
        "brand": "格力",
        "Sales": 7899.0
    },
    {
        "brand": "格力",
        "Sales": 19999.0
    },
    {
        "brand": "格力",
        "Sales": 8999.0
    },
    {
        "brand": "格力",
        "Sales": 2099.0
    },
    {
        "brand": "格力",
        "Sales": 2199.0
    },
    {
        "brand": "格力",
        "Sales": 2099.0
    },
    {
        "brand": "格力",
        "Sales": 5299.0
    },
    {
        "brand": "格力",
        "Sales": 6999.0
    },
    {
        "brand": "格力",
        "Sales": 5388.0
    },
    {
        "brand": "格力",
        "Sales": 5299.0
    },
    {
        "brand": "格力",
        "Sales": 6859.0
    },
    {
        "brand": "格力",
        "Sales": 7399.0
    },
    {
        "brand": "格力",
        "Sales": 2999.0
    },
    {
        "brand": "格力",
        "Sales": 7099.0
    },
    {
        "brand": "格力",
        "Sales": 6299.0
    },
    {
        "brand": "格力",
        "Sales": 3199.0
    },
    {
        "brand": "格力",
        "Sales": 2499.0
    },
    {
        "brand": "格力",
        "Sales": 7600.0
    },
    {
        "brand": "格力",
        "Sales": 7099.0
    },
    {
        "brand": "格力",
        "Sales": 9917.0
    },
    {
        "brand": "格力",
        "Sales": 2699.0
    },
    {
        "brand": "格力",
        "Sales": 3999.0
    },
    {
        "brand": "格力",
        "Sales": 5299.0
    },
    {
        "brand": "格力",
        "Sales": 3199.0
    },
    {
        "brand": "格力",
        "Sales": 7599.0
    },
    {
        "brand": "格力",
        "Sales": 7700.0
    },
    {
        "brand": "格力",
        "Sales": 11798.0
    },
    {
        "brand": "格力",
        "Sales": 4999.0
    },
    {
        "brand": "格力",
        "Sales": 13999.0
    },
    {
        "brand": "格力",
        "Sales": 3199.0
    },
    {
        "brand": "格力",
        "Sales": 3899.0
    },
    {
        "brand": "格力",
        "Sales": 4599.0
    },
    {
        "brand": "格力",
        "Sales": 10800.0
    },
    {
        "brand": "格力",
        "Sales": 2799.0
    },
    {
        "brand": "格力",
        "Sales": 2349.0
    },
    {
        "brand": "格力",
        "Sales": 4299.0
    },
    {
        "brand": "格力",
        "Sales": 5599.0
    },
    {
        "brand": "格力",
        "Sales": 2599.0
    },
    {
        "brand": "格力",
        "Sales": 5399.0
    },
    {
        "brand": "格力",
        "Sales": 2099.0
    },
    {
        "brand": "格力",
        "Sales": 3440.0
    },
    {
        "brand": "格力",
        "Sales": 5199.0
    },
    {
        "brand": "格力",
        "Sales": 7099.0
    },
    {
        "brand": "格力",
        "Sales": 3399.0
    },
    {
        "brand": "格力",
        "Sales": 3399.0
    },
    {
        "brand": "格力",
        "Sales": 1999.0
    },
    {
        "brand": "格力",
        "Sales": 7684.0
    },
    {
        "brand": "格力",
        "Sales": 6999.0
    },
    {
        "brand": "格力",
        "Sales": 2999.0
    },
    {
        "brand": "格力",
        "Sales": 2099.0
    },
    {
        "brand": "格力",
        "Sales": 3199.0
    },
    {
        "brand": "格力",
        "Sales": 8699.0
    },
    {
        "brand": "格力",
        "Sales": 4799.0
    },
    {
        "brand": "格力",
        "Sales": 2999.0
    },
    {
        "brand": "格力",
        "Sales": 12448.0
    },
    {
        "brand": "格力",
        "Sales": 8299.0
    },
    {
        "brand": "格力",
        "Sales": 2879.0
    },
    {
        "brand": "格力",
        "Sales": 2699.0
    },
    {
        "brand": "格力",
        "Sales": 6699.0
    },
    {
        "brand": "格力",
        "Sales": 2999.0
    },
    {
        "brand": "格力",
        "Sales": 3699.0
    },
    {
        "brand": "格力",
        "Sales": 6599.0
    },
    {
        "brand": "格力",
        "Sales": 10499.0
    },
    {
        "brand": "格力",
        "Sales": 2719.0
    },
    {
        "brand": "格力",
        "Sales": 6199.0
    },
    {
        "brand": "格力",
        "Sales": 2249.0
    },
    {
        "brand": "格力",
        "Sales": 6999.0
    },
    {
        "brand": "格力",
        "Sales": 5299.0
    },
    {
        "brand": "格力",
        "Sales": 7699.0
    },
    {
        "brand": "格力",
        "Sales": 6199.0
    },
    {
        "brand": "格力",
        "Sales": 2299.0
    },
    {
        "brand": "格力",
        "Sales": 2499.0
    },
    {
        "brand": "格力",
        "Sales": 6098.0
    },
    {
        "brand": "格力",
        "Sales": 3899.0
    },
    {
        "brand": "格力",
        "Sales": 1609.0
    },
    {
        "brand": "格力",
        "Sales": 7299.0
    },
    {
        "brand": "格力",
        "Sales": 6599.0
    },
    {
        "brand": "格力",
        "Sales": 7339.0
    },
    {
        "brand": "格力",
        "Sales": 10999.0
    },
    {
        "brand": "格力",
        "Sales": 13999.0
    },
    {
        "brand": "格力",
        "Sales": 4099.0
    },
    {
        "brand": "格力",
        "Sales": 6899.0
    },
    {
        "brand": "格力",
        "Sales": 5999.0
    },
    {
        "brand": "格力",
        "Sales": 6399.0
    },
    {
        "brand": "格力",
        "Sales": 7699.0
    },
    {
        "brand": "格力",
        "Sales": 3599.0
    },
    {
        "brand": "格力",
        "Sales": 4599.0
    },
    {
        "brand": "格力",
        "Sales": 6599.0
    },
    {
        "brand": "格力",
        "Sales": 4599.0
    },
    {
        "brand": "格力",
        "Sales": 2999.0
    },
    {
        "brand": "格力",
        "Sales": 8999.0
    },
    {
        "brand": "格力",
        "Sales": 16599.0
    },
    {
        "brand": "格力",
        "Sales": 5699.0
    },
    {
        "brand": "格力",
        "Sales": 5599.0
    },
    {
        "brand": "格力",
        "Sales": 2599.0
    },
    {
        "brand": "格力",
        "Sales": 3099.0
    },
    {
        "brand": "格力",
        "Sales": 2499.0
    },
    {
        "brand": "格力",
        "Sales": 3899.0
    },
    {
        "brand": "格力",
        "Sales": 14500.0
    },
    {
        "brand": "格力",
        "Sales": 3888.0
    },
    {
        "brand": "格力",
        "Sales": 8699.0
    },
    {
        "brand": "格力",
        "Sales": 2499.0
    },
    {
        "brand": "格力",
        "Sales": 5599.0
    },
    {
        "brand": "格力",
        "Sales": 2099.0
    },
    {
        "brand": "格力",
        "Sales": 3199.0
    },
    {
        "brand": "格力",
        "Sales": 3049.0
    },
    {
        "brand": "格力",
        "Sales": 6299.0
    },
    {
        "brand": "格力",
        "Sales": 5299.0
    },
    {
        "brand": "格力",
        "Sales": 2899.0
    },
    {
        "brand": "格力",
        "Sales": 3699.0
    },
    {
        "brand": "格力",
        "Sales": 8099.0
    },
    {
        "brand": "格力",
        "Sales": 3999.0
    },
    {
        "brand": "格力",
        "Sales": 4599.0
    },
    {
        "brand": "格力",
        "Sales": 3899.0
    },
    {
        "brand": "格力",
        "Sales": 5599.0
    },
    {
        "brand": "格力",
        "Sales": 2999.0
    },
    {
        "brand": "格力",
        "Sales": 10999.0
    },
    {
        "brand": "格力",
        "Sales": 2749.0
    },
    {
        "brand": "格力",
        "Sales": 2999.0
    },
    {
        "brand": "格力",
        "Sales": 3449.0
    },
    {
        "brand": "格力",
        "Sales": 5529.0
    },
    {
        "brand": "格力",
        "Sales": 4599.0
    },
    {
        "brand": "格力",
        "Sales": 1599.0
    },
    {
        "brand": "格力",
        "Sales": 3369.0
    },
    {
        "brand": "格力",
        "Sales": 10874.0
    },
    {
        "brand": "格力",
        "Sales": 8699.0
    },
    {
        "brand": "格力",
        "Sales": 799.0
    },
    {
        "brand": "格力",
        "Sales": 2499.0
    },
    {
        "brand": "格力",
        "Sales": 3699.0
    },
    {
        "brand": "格力",
        "Sales": 2449.0
    },
    {
        "brand": "格力",
        "Sales": 8150.0
    },
    {
        "brand": "格力",
        "Sales": 2699.0
    },
    {
        "brand": "格力",
        "Sales": 8200.0
    },
    {
        "brand": "格力",
        "Sales": 2099.0
    },
    {
        "brand": "格力",
        "Sales": 2699.0
    },
    {
        "brand": "格力",
        "Sales": 2499.0
    },
    {
        "brand": "格力",
        "Sales": 8999.0
    },
    {
        "brand": "格力",
        "Sales": 2999.0
    },
    {
        "brand": "格力",
        "Sales": 3499.0
    },
    {
        "brand": "格力",
        "Sales": 8269.0
    },
    {
        "brand": "格力",
        "Sales": 6599.0
    },
    {
        "brand": "格力",
        "Sales": 5799.0
    },
    {
        "brand": "格力",
        "Sales": 9899.0
    },
    {
        "brand": "格力",
        "Sales": 13199.0
    },
    {
        "brand": "格力",
        "Sales": 3099.0
    },
    {
        "brand": "格力",
        "Sales": 11334.0
    },
    {
        "brand": "格力",
        "Sales": 2999.0
    },
    {
        "brand": "格力",
        "Sales": 6299.0
    },
    {
        "brand": "格力",
        "Sales": 3099.0
    },
    {
        "brand": "格力",
        "Sales": 2899.0
    },
    {
        "brand": "格力",
        "Sales": 6379.0
    },
    {
        "brand": "格力",
        "Sales": 2999.0
    },
    {
        "brand": "格力",
        "Sales": 3499.0
    },
    {
        "brand": "格力",
        "Sales": 2499.0
    },
    {
        "brand": "格力",
        "Sales": 6299.0
    },
    {
        "brand": "格力",
        "Sales": 17999.0
    },
    {
        "brand": "格力",
        "Sales": 2699.0
    },
    {
        "brand": "格力",
        "Sales": 3399.0
    },
    {
        "brand": "格力",
        "Sales": 11192.0
    },
    {
        "brand": "格力",
        "Sales": 2599.0
    },
    {
        "brand": "格力",
        "Sales": 14296.0
    },
    {
        "brand": "格力",
        "Sales": 2885.0
    },
    {
        "brand": "格力",
        "Sales": 2999.0
    },
    {
        "brand": "格力",
        "Sales": 2449.0
    },
    {
        "brand": "格力",
        "Sales": 5299.0
    },
    {
        "brand": "格力",
        "Sales": 11299.0
    },
    {
        "brand": "格力",
        "Sales": 6399.0
    },
    {
        "brand": "格力",
        "Sales": 5299.0
    },
    {
        "brand": "格力",
        "Sales": 3568.0
    },
    {
        "brand": "格力",
        "Sales": 3699.0
    },
    {
        "brand": "格力",
        "Sales": 6899.0
    },
    {
        "brand": "格力",
        "Sales": 3400.0
    },
    {
        "brand": "海信",
        "Sales": 11599.0
    },
    {
        "brand": "海信",
        "Sales": 2399.0
    },
    {
        "brand": "海信",
        "Sales": 15399.0
    },
    {
        "brand": "海信",
        "Sales": 2069.0
    },
    {
        "brand": "海信",
        "Sales": 4199.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 15999.0
    },
    {
        "brand": "海信",
        "Sales": 2899.0
    },
    {
        "brand": "海信",
        "Sales": 2189.0
    },
    {
        "brand": "海信",
        "Sales": 4088.0
    },
    {
        "brand": "海信",
        "Sales": 4499.0
    },
    {
        "brand": "海信",
        "Sales": 2049.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 3688.0
    },
    {
        "brand": "海信",
        "Sales": 4999.0
    },
    {
        "brand": "海信",
        "Sales": 3999.0
    },
    {
        "brand": "海信",
        "Sales": 5499.0
    },
    {
        "brand": "海信",
        "Sales": 2049.0
    },
    {
        "brand": "海信",
        "Sales": 4499.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 6199.0
    },
    {
        "brand": "海信",
        "Sales": 7364.61
    },
    {
        "brand": "海信",
        "Sales": 2099.0
    },
    {
        "brand": "海信",
        "Sales": 4999.0
    },
    {
        "brand": "海信",
        "Sales": 3299.0
    },
    {
        "brand": "海信",
        "Sales": 2199.0
    },
    {
        "brand": "海信",
        "Sales": 3599.0
    },
    {
        "brand": "海信",
        "Sales": 3188.0
    },
    {
        "brand": "海信",
        "Sales": 4899.0
    },
    {
        "brand": "海信",
        "Sales": 2149.0
    },
    {
        "brand": "海信",
        "Sales": 8099.0
    },
    {
        "brand": "海信",
        "Sales": 2399.0
    },
    {
        "brand": "海信",
        "Sales": 5999.0
    },
    {
        "brand": "海信",
        "Sales": 8099.0
    },
    {
        "brand": "海信",
        "Sales": 3188.0
    },
    {
        "brand": "海信",
        "Sales": 2449.0
    },
    {
        "brand": "海信",
        "Sales": 2499.0
    },
    {
        "brand": "海信",
        "Sales": 2049.0
    },
    {
        "brand": "海信",
        "Sales": 5960.0
    },
    {
        "brand": "海信",
        "Sales": 2049.0
    },
    {
        "brand": "海信",
        "Sales": 6597.0
    },
    {
        "brand": "海信",
        "Sales": 4088.0
    },
    {
        "brand": "海信",
        "Sales": 2099.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 2449.0
    },
    {
        "brand": "海信",
        "Sales": 7997.0
    },
    {
        "brand": "海信",
        "Sales": 4299.0
    },
    {
        "brand": "海信",
        "Sales": 5999.0
    },
    {
        "brand": "海信",
        "Sales": 2049.0
    },
    {
        "brand": "海信",
        "Sales": 2049.0
    },
    {
        "brand": "海信",
        "Sales": 4199.0
    },
    {
        "brand": "海信",
        "Sales": 2049.0
    },
    {
        "brand": "海信",
        "Sales": 4898.0
    },
    {
        "brand": "海信",
        "Sales": 10000.0
    },
    {
        "brand": "海信",
        "Sales": 3598.0
    },
    {
        "brand": "海信",
        "Sales": 2399.0
    },
    {
        "brand": "海信",
        "Sales": 4649.0
    },
    {
        "brand": "海信",
        "Sales": 5299.0
    },
    {
        "brand": "海信",
        "Sales": 6899.0
    },
    {
        "brand": "海信",
        "Sales": 1949.0
    },
    {
        "brand": "海信",
        "Sales": 1999.0
    },
    {
        "brand": "海信",
        "Sales": 3499.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 1999.0
    },
    {
        "brand": "海信",
        "Sales": 2099.0
    },
    {
        "brand": "海信",
        "Sales": 10037.0
    },
    {
        "brand": "海信",
        "Sales": 4299.0
    },
    {
        "brand": "海信",
        "Sales": 2249.0
    },
    {
        "brand": "海信",
        "Sales": 2099.0
    },
    {
        "brand": "海信",
        "Sales": 4898.0
    },
    {
        "brand": "海信",
        "Sales": 2049.0
    },
    {
        "brand": "海信",
        "Sales": 2099.0
    },
    {
        "brand": "海信",
        "Sales": 4188.0
    },
    {
        "brand": "海信",
        "Sales": 2099.0
    },
    {
        "brand": "海信",
        "Sales": 4699.0
    },
    {
        "brand": "海信",
        "Sales": 6776.0
    },
    {
        "brand": "海信",
        "Sales": 6280.0
    },
    {
        "brand": "海信",
        "Sales": 7899.0
    },
    {
        "brand": "海信",
        "Sales": 2399.0
    },
    {
        "brand": "海信",
        "Sales": 4499.0
    },
    {
        "brand": "海信",
        "Sales": 4499.0
    },
    {
        "brand": "海信",
        "Sales": 10999.0
    },
    {
        "brand": "海信",
        "Sales": 3188.0
    },
    {
        "brand": "海信",
        "Sales": 1799.0
    },
    {
        "brand": "海信",
        "Sales": 3999.0
    },
    {
        "brand": "海信",
        "Sales": 2449.0
    },
    {
        "brand": "海信",
        "Sales": 4999.0
    },
    {
        "brand": "海信",
        "Sales": 4699.0
    },
    {
        "brand": "海信",
        "Sales": 2449.0
    },
    {
        "brand": "海信",
        "Sales": 2399.0
    },
    {
        "brand": "海信",
        "Sales": 9830.0
    },
    {
        "brand": "海信",
        "Sales": 2597.0
    },
    {
        "brand": "海信",
        "Sales": 2449.0
    },
    {
        "brand": "海信",
        "Sales": 7999.0
    },
    {
        "brand": "海信",
        "Sales": 3366.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 3999.0
    },
    {
        "brand": "海信",
        "Sales": 4499.0
    },
    {
        "brand": "海信",
        "Sales": 8099.0
    },
    {
        "brand": "海信",
        "Sales": 3999.0
    },
    {
        "brand": "海信",
        "Sales": 1999.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 2299.0
    },
    {
        "brand": "海信",
        "Sales": 11999.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 4199.0
    },
    {
        "brand": "海信",
        "Sales": 2099.0
    },
    {
        "brand": "海信",
        "Sales": 15000.0
    },
    {
        "brand": "海信",
        "Sales": 4499.0
    },
    {
        "brand": "海信",
        "Sales": 2399.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 4098.0
    },
    {
        "brand": "海信",
        "Sales": 4199.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 2149.0
    },
    {
        "brand": "海信",
        "Sales": 13999.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 3499.0
    },
    {
        "brand": "海信",
        "Sales": 4499.0
    },
    {
        "brand": "海信",
        "Sales": 2399.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 3899.0
    },
    {
        "brand": "海信",
        "Sales": 4699.0
    },
    {
        "brand": "海信",
        "Sales": 3799.0
    },
    {
        "brand": "海信",
        "Sales": 2899.0
    },
    {
        "brand": "海信",
        "Sales": 2099.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 3799.0
    },
    {
        "brand": "海信",
        "Sales": 2099.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 8899.0
    },
    {
        "brand": "海信",
        "Sales": 2049.0
    },
    {
        "brand": "海信",
        "Sales": 4599.0
    },
    {
        "brand": "海信",
        "Sales": 1999.0
    },
    {
        "brand": "海信",
        "Sales": 7430.35
    },
    {
        "brand": "海信",
        "Sales": 2049.0
    },
    {
        "brand": "海信",
        "Sales": 1799.0
    },
    {
        "brand": "海信",
        "Sales": 7999.0
    },
    {
        "brand": "海信",
        "Sales": 3188.0
    },
    {
        "brand": "海信",
        "Sales": 4199.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 6999.0
    },
    {
        "brand": "海信",
        "Sales": 2888.0
    },
    {
        "brand": "海信",
        "Sales": 1999.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 2399.0
    },
    {
        "brand": "海信",
        "Sales": 2199.0
    },
    {
        "brand": "海信",
        "Sales": 9299.0
    },
    {
        "brand": "海信",
        "Sales": 2049.0
    },
    {
        "brand": "海信",
        "Sales": 1599.0
    },
    {
        "brand": "海信",
        "Sales": 8899.0
    },
    {
        "brand": "海信",
        "Sales": 1999.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 8199.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 2049.0
    },
    {
        "brand": "海信",
        "Sales": 2049.0
    },
    {
        "brand": "海信",
        "Sales": 2599.0
    },
    {
        "brand": "海信",
        "Sales": 2149.0
    },
    {
        "brand": "海信",
        "Sales": 3366.0
    },
    {
        "brand": "海信",
        "Sales": 4199.0
    },
    {
        "brand": "海信",
        "Sales": 3999.0
    },
    {
        "brand": "海信",
        "Sales": 3079.0
    },
    {
        "brand": "海信",
        "Sales": 1729.0
    },
    {
        "brand": "海信",
        "Sales": 2099.0
    },
    {
        "brand": "海信",
        "Sales": 4999.0
    },
    {
        "brand": "海信",
        "Sales": 1999.0
    },
    {
        "brand": "海信",
        "Sales": 4799.0
    },
    {
        "brand": "海信",
        "Sales": 2049.0
    },
    {
        "brand": "海信",
        "Sales": 2399.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 5299.0
    },
    {
        "brand": "海信",
        "Sales": 2799.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 2199.0
    },
    {
        "brand": "海信",
        "Sales": 18688.0
    },
    {
        "brand": "海信",
        "Sales": 1999.0
    },
    {
        "brand": "海信",
        "Sales": 1599.0
    },
    {
        "brand": "海信",
        "Sales": 3188.0
    },
    {
        "brand": "海信",
        "Sales": 6598.0
    },
    {
        "brand": "海信",
        "Sales": 5999.0
    },
    {
        "brand": "海信",
        "Sales": 3999.0
    },
    {
        "brand": "海信",
        "Sales": 7797.0
    },
    {
        "brand": "海信",
        "Sales": 4599.0
    },
    {
        "brand": "海信",
        "Sales": 2599.0
    },
    {
        "brand": "海信",
        "Sales": 3188.0
    },
    {
        "brand": "海信",
        "Sales": 16888.0
    },
    {
        "brand": "海信",
        "Sales": 12752.0
    },
    {
        "brand": "海信",
        "Sales": 17796.0
    },
    {
        "brand": "海信",
        "Sales": 2299.0
    },
    {
        "brand": "海信",
        "Sales": 5697.0
    },
    {
        "brand": "海信",
        "Sales": 1599.0
    },
    {
        "brand": "海信",
        "Sales": 8199.0
    },
    {
        "brand": "海信",
        "Sales": 2049.0
    },
    {
        "brand": "海信",
        "Sales": 4959.0
    },
    {
        "brand": "海信",
        "Sales": 3998.0
    },
    {
        "brand": "海信",
        "Sales": 4699.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 4999.0
    },
    {
        "brand": "海信",
        "Sales": 4058.0
    },
    {
        "brand": "海信",
        "Sales": 9399.0
    },
    {
        "brand": "海信",
        "Sales": 4198.0
    },
    {
        "brand": "海信",
        "Sales": 3799.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 2049.0
    },
    {
        "brand": "海信",
        "Sales": 2049.0
    },
    {
        "brand": "海信",
        "Sales": 5000.0
    },
    {
        "brand": "海信",
        "Sales": 2199.0
    },
    {
        "brand": "海信",
        "Sales": 2199.0
    },
    {
        "brand": "海信",
        "Sales": 3188.0
    },
    {
        "brand": "海信",
        "Sales": 2049.0
    },
    {
        "brand": "海信",
        "Sales": 4599.0
    },
    {
        "brand": "海信",
        "Sales": 7999.0
    },
    {
        "brand": "海信",
        "Sales": 4999.0
    },
    {
        "brand": "海信",
        "Sales": 1599.0
    },
    {
        "brand": "海信",
        "Sales": 4999.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 3188.0
    },
    {
        "brand": "海信",
        "Sales": 6251.0
    },
    {
        "brand": "海信",
        "Sales": 6448.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 3099.0
    },
    {
        "brand": "海信",
        "Sales": 5799.0
    },
    {
        "brand": "海信",
        "Sales": 2049.0
    },
    {
        "brand": "海信",
        "Sales": 5299.0
    },
    {
        "brand": "海信",
        "Sales": 2049.0
    },
    {
        "brand": "海信",
        "Sales": 4188.0
    },
    {
        "brand": "海信",
        "Sales": 6949.0
    },
    {
        "brand": "海信",
        "Sales": 2449.0
    },
    {
        "brand": "海信",
        "Sales": 4299.0
    },
    {
        "brand": "海信",
        "Sales": 3194.11
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 3499.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 1999.0
    },
    {
        "brand": "海信",
        "Sales": 2399.0
    },
    {
        "brand": "海信",
        "Sales": 2049.0
    },
    {
        "brand": "海信",
        "Sales": 1849.0
    },
    {
        "brand": "海信",
        "Sales": 2299.0
    },
    {
        "brand": "海信",
        "Sales": 2899.0
    },
    {
        "brand": "海信",
        "Sales": 6999.0
    },
    {
        "brand": "海信",
        "Sales": 5799.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 2149.0
    },
    {
        "brand": "海信",
        "Sales": 2149.0
    },
    {
        "brand": "海信",
        "Sales": 1599.0
    },
    {
        "brand": "海信",
        "Sales": 2149.0
    },
    {
        "brand": "海信",
        "Sales": 5999.0
    },
    {
        "brand": "海信",
        "Sales": 4199.0
    },
    {
        "brand": "海信",
        "Sales": 3999.0
    },
    {
        "brand": "海信",
        "Sales": 5825.0
    },
    {
        "brand": "海信",
        "Sales": 2999.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 7798.0
    },
    {
        "brand": "海信",
        "Sales": 3188.0
    },
    {
        "brand": "海信",
        "Sales": 4199.0
    },
    {
        "brand": "海信",
        "Sales": 2299.0
    },
    {
        "brand": "海信",
        "Sales": 1999.0
    },
    {
        "brand": "海信",
        "Sales": 5499.0
    },
    {
        "brand": "海信",
        "Sales": 7599.0
    },
    {
        "brand": "海信",
        "Sales": 4499.0
    },
    {
        "brand": "海信",
        "Sales": 4999.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 1599.0
    },
    {
        "brand": "海信",
        "Sales": 4688.0
    },
    {
        "brand": "海信",
        "Sales": 4299.0
    },
    {
        "brand": "海信",
        "Sales": 4499.0
    },
    {
        "brand": "海信",
        "Sales": 3999.0
    },
    {
        "brand": "海信",
        "Sales": 11999.0
    },
    {
        "brand": "海信",
        "Sales": 7099.0
    },
    {
        "brand": "海信",
        "Sales": 2199.0
    },
    {
        "brand": "海信",
        "Sales": 5599.0
    },
    {
        "brand": "海信",
        "Sales": 16696.0
    },
    {
        "brand": "海信",
        "Sales": 2049.0
    },
    {
        "brand": "海信",
        "Sales": 4299.0
    },
    {
        "brand": "海信",
        "Sales": 5697.0
    },
    {
        "brand": "海信",
        "Sales": 5199.0
    },
    {
        "brand": "海信",
        "Sales": 5877.0
    },
    {
        "brand": "海信",
        "Sales": 17638.0
    },
    {
        "brand": "海信",
        "Sales": 1999.0
    },
    {
        "brand": "海信",
        "Sales": 2899.0
    },
    {
        "brand": "海信",
        "Sales": 4088.0
    },
    {
        "brand": "海信",
        "Sales": 2149.0
    },
    {
        "brand": "海信",
        "Sales": 1999.0
    },
    {
        "brand": "海信",
        "Sales": 1799.0
    },
    {
        "brand": "海信",
        "Sales": 13996.0
    },
    {
        "brand": "海信",
        "Sales": 4999.0
    },
    {
        "brand": "海信",
        "Sales": 4699.0
    },
    {
        "brand": "海信",
        "Sales": 3688.0
    },
    {
        "brand": "海信",
        "Sales": 3599.0
    },
    {
        "brand": "海信",
        "Sales": 2149.0
    },
    {
        "brand": "海信",
        "Sales": 2499.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 4199.0
    },
    {
        "brand": "海信",
        "Sales": 2049.0
    },
    {
        "brand": "海信",
        "Sales": 1899.0
    },
    {
        "brand": "海信",
        "Sales": 2199.0
    },
    {
        "brand": "海尔",
        "Sales": 4099.0
    },
    {
        "brand": "海尔",
        "Sales": 5399.0
    },
    {
        "brand": "海尔",
        "Sales": 2447.0
    },
    {
        "brand": "海尔",
        "Sales": 2769.0
    },
    {
        "brand": "海尔",
        "Sales": 2399.0
    },
    {
        "brand": "海尔",
        "Sales": 2199.0
    },
    {
        "brand": "海尔",
        "Sales": 2099.0
    },
    {
        "brand": "海尔",
        "Sales": 5999.0
    },
    {
        "brand": "海尔",
        "Sales": 4399.0
    },
    {
        "brand": "海尔",
        "Sales": 2549.0
    },
    {
        "brand": "海尔",
        "Sales": 1799.0
    },
    {
        "brand": "海尔",
        "Sales": 2199.0
    },
    {
        "brand": "海尔",
        "Sales": 2299.0
    },
    {
        "brand": "海尔",
        "Sales": 3099.0
    },
    {
        "brand": "海尔",
        "Sales": 4999.0
    },
    {
        "brand": "海尔",
        "Sales": 5199.0
    },
    {
        "brand": "海尔",
        "Sales": 7898.0
    },
    {
        "brand": "海尔",
        "Sales": 2499.0
    },
    {
        "brand": "海尔",
        "Sales": 4499.0
    },
    {
        "brand": "海尔",
        "Sales": 3299.0
    },
    {
        "brand": "海尔",
        "Sales": 4099.0
    },
    {
        "brand": "海尔",
        "Sales": 7699.0
    },
    {
        "brand": "海尔",
        "Sales": 1799.0
    },
    {
        "brand": "海尔",
        "Sales": 15999.0
    },
    {
        "brand": "海尔",
        "Sales": 7499.0
    },
    {
        "brand": "海尔",
        "Sales": 8499.0
    },
    {
        "brand": "海尔",
        "Sales": 9899.0
    },
    {
        "brand": "海尔",
        "Sales": 2899.0
    },
    {
        "brand": "海尔",
        "Sales": 4899.0
    },
    {
        "brand": "海尔",
        "Sales": 3999.0
    },
    {
        "brand": "海尔",
        "Sales": 5599.0
    },
    {
        "brand": "海尔",
        "Sales": 19999.0
    },
    {
        "brand": "海尔",
        "Sales": 2299.0
    },
    {
        "brand": "海尔",
        "Sales": 4299.0
    },
    {
        "brand": "海尔",
        "Sales": 9797.0
    },
    {
        "brand": "海尔",
        "Sales": 20000.0
    },
    {
        "brand": "海尔",
        "Sales": 3299.0
    },
    {
        "brand": "海尔",
        "Sales": 11580.0
    },
    {
        "brand": "海尔",
        "Sales": 4149.0
    },
    {
        "brand": "海尔",
        "Sales": 1799.0
    },
    {
        "brand": "海尔",
        "Sales": 8999.0
    },
    {
        "brand": "海尔",
        "Sales": 1799.0
    },
    {
        "brand": "海尔",
        "Sales": 4699.0
    },
    {
        "brand": "海尔",
        "Sales": 6968.0
    },
    {
        "brand": "海尔",
        "Sales": 5499.0
    },
    {
        "brand": "海尔",
        "Sales": 3099.0
    },
    {
        "brand": "海尔",
        "Sales": 1299.0
    },
    {
        "brand": "海尔",
        "Sales": 6899.0
    },
    {
        "brand": "海尔",
        "Sales": 2179.0
    },
    {
        "brand": "海尔",
        "Sales": 8599.0
    },
    {
        "brand": "海尔",
        "Sales": 5099.0
    },
    {
        "brand": "海尔",
        "Sales": 6599.0
    },
    {
        "brand": "海尔",
        "Sales": 8399.0
    },
    {
        "brand": "海尔",
        "Sales": 5699.0
    },
    {
        "brand": "海尔",
        "Sales": 12622.0
    },
    {
        "brand": "海尔",
        "Sales": 10067.0
    },
    {
        "brand": "海尔",
        "Sales": 10078.0
    },
    {
        "brand": "海尔",
        "Sales": 2499.0
    },
    {
        "brand": "海尔",
        "Sales": 4749.0
    },
    {
        "brand": "海尔",
        "Sales": 3399.0
    },
    {
        "brand": "海尔",
        "Sales": 8898.0
    },
    {
        "brand": "海尔",
        "Sales": 2399.0
    },
    {
        "brand": "海尔",
        "Sales": 4999.0
    },
    {
        "brand": "海尔",
        "Sales": 2899.0
    },
    {
        "brand": "海尔",
        "Sales": 4798.0
    },
    {
        "brand": "海尔",
        "Sales": 5999.0
    },
    {
        "brand": "海尔",
        "Sales": 4299.0
    },
    {
        "brand": "海尔",
        "Sales": 9899.0
    },
    {
        "brand": "海尔",
        "Sales": 6799.0
    },
    {
        "brand": "海尔",
        "Sales": 15580.0
    },
    {
        "brand": "海尔",
        "Sales": 8980.0
    },
    {
        "brand": "海尔",
        "Sales": 6999.0
    },
    {
        "brand": "海尔",
        "Sales": 2699.0
    },
    {
        "brand": "海尔",
        "Sales": 8480.0
    },
    {
        "brand": "海尔",
        "Sales": 4899.0
    },
    {
        "brand": "海尔",
        "Sales": 2399.0
    },
    {
        "brand": "海尔",
        "Sales": 2199.0
    },
    {
        "brand": "海尔",
        "Sales": 8599.0
    },
    {
        "brand": "海尔",
        "Sales": 2199.0
    },
    {
        "brand": "海尔",
        "Sales": 10097.0
    },
    {
        "brand": "海尔",
        "Sales": 2699.0
    },
    {
        "brand": "海尔",
        "Sales": 5299.0
    },
    {
        "brand": "海尔",
        "Sales": 6299.0
    },
    {
        "brand": "海尔",
        "Sales": 2099.0
    },
    {
        "brand": "海尔",
        "Sales": 11296.0
    },
    {
        "brand": "海尔",
        "Sales": 2899.0
    },
    {
        "brand": "海尔",
        "Sales": 11999.0
    },
    {
        "brand": "海尔",
        "Sales": 2499.0
    },
    {
        "brand": "海尔",
        "Sales": 2149.0
    },
    {
        "brand": "海尔",
        "Sales": 2299.0
    },
    {
        "brand": "海尔",
        "Sales": 2599.0
    },
    {
        "brand": "海尔",
        "Sales": 4799.0
    },
    {
        "brand": "海尔",
        "Sales": 4999.0
    },
    {
        "brand": "海尔",
        "Sales": 14095.0
    },
    {
        "brand": "海尔",
        "Sales": 5199.0
    },
    {
        "brand": "海尔",
        "Sales": 4899.0
    },
    {
        "brand": "海尔",
        "Sales": 5999.0
    },
    {
        "brand": "海尔",
        "Sales": 16499.0
    },
    {
        "brand": "海尔",
        "Sales": 2199.0
    },
    {
        "brand": "海尔",
        "Sales": 2298.0
    },
    {
        "brand": "海尔",
        "Sales": 4799.0
    },
    {
        "brand": "海尔",
        "Sales": 11999.0
    },
    {
        "brand": "海尔",
        "Sales": 12346.0
    },
    {
        "brand": "海尔",
        "Sales": 4099.0
    },
    {
        "brand": "海尔",
        "Sales": 4698.0
    },
    {
        "brand": "海尔",
        "Sales": 3099.0
    },
    {
        "brand": "海尔",
        "Sales": 18999.0
    },
    {
        "brand": "海尔",
        "Sales": 5799.0
    },
    {
        "brand": "海尔",
        "Sales": 5699.0
    },
    {
        "brand": "海尔",
        "Sales": 6998.0
    },
    {
        "brand": "海尔",
        "Sales": 5999.0
    },
    {
        "brand": "海尔",
        "Sales": 9399.0
    },
    {
        "brand": "海尔",
        "Sales": 2399.0
    },
    {
        "brand": "海尔",
        "Sales": 2099.0
    },
    {
        "brand": "海尔",
        "Sales": 10137.0
    },
    {
        "brand": "海尔",
        "Sales": 2099.0
    },
    {
        "brand": "海尔",
        "Sales": 3599.0
    },
    {
        "brand": "海尔",
        "Sales": 5899.0
    },
    {
        "brand": "海尔",
        "Sales": 2411.0
    },
    {
        "brand": "海尔",
        "Sales": 8399.0
    },
    {
        "brand": "海尔",
        "Sales": 2399.0
    },
    {
        "brand": "海尔",
        "Sales": 7800.0
    },
    {
        "brand": "海尔",
        "Sales": 4299.0
    },
    {
        "brand": "海尔",
        "Sales": 2299.0
    },
    {
        "brand": "海尔",
        "Sales": 4799.0
    },
    {
        "brand": "海尔",
        "Sales": 4599.0
    },
    {
        "brand": "海尔",
        "Sales": 2999.0
    },
    {
        "brand": "海尔",
        "Sales": 2399.0
    },
    {
        "brand": "海尔",
        "Sales": 7999.0
    },
    {
        "brand": "海尔",
        "Sales": 6799.0
    },
    {
        "brand": "海尔",
        "Sales": 4899.0
    },
    {
        "brand": "海尔",
        "Sales": 2599.0
    },
    {
        "brand": "海尔",
        "Sales": 11596.0
    },
    {
        "brand": "海尔",
        "Sales": 2299.0
    },
    {
        "brand": "海尔",
        "Sales": 2799.0
    },
    {
        "brand": "海尔",
        "Sales": 2999.0
    },
    {
        "brand": "海尔",
        "Sales": 3299.0
    },
    {
        "brand": "海尔",
        "Sales": 4899.0
    },
    {
        "brand": "海尔",
        "Sales": 4699.0
    },
    {
        "brand": "海尔",
        "Sales": 5099.0
    },
    {
        "brand": "海尔",
        "Sales": 2399.0
    },
    {
        "brand": "海尔",
        "Sales": 5399.0
    },
    {
        "brand": "海尔",
        "Sales": 2149.0
    },
    {
        "brand": "海尔",
        "Sales": 2149.0
    },
    {
        "brand": "海尔",
        "Sales": 3899.0
    },
    {
        "brand": "海尔",
        "Sales": 11496.0
    },
    {
        "brand": "海尔",
        "Sales": 2699.0
    },
    {
        "brand": "海尔",
        "Sales": 3699.0
    },
    {
        "brand": "海尔",
        "Sales": 4699.0
    },
    {
        "brand": "海尔",
        "Sales": 11980.0
    },
    {
        "brand": "海尔",
        "Sales": 2599.0
    },
    {
        "brand": "海尔",
        "Sales": 7599.0
    },
    {
        "brand": "海尔",
        "Sales": 4599.0
    },
    {
        "brand": "海尔",
        "Sales": 1699.0
    },
    {
        "brand": "海尔",
        "Sales": 7149.0
    },
    {
        "brand": "海尔",
        "Sales": 8880.0
    },
    {
        "brand": "海尔",
        "Sales": 4999.0
    },
    {
        "brand": "海尔",
        "Sales": 10702.0
    },
    {
        "brand": "海尔",
        "Sales": 3199.0
    },
    {
        "brand": "海尔",
        "Sales": 2049.0
    },
    {
        "brand": "海尔",
        "Sales": 2499.0
    },
    {
        "brand": "海尔",
        "Sales": 6699.0
    },
    {
        "brand": "海尔",
        "Sales": 4599.0
    },
    {
        "brand": "海尔",
        "Sales": 5998.0
    },
    {
        "brand": "海尔",
        "Sales": 3899.0
    },
    {
        "brand": "海尔",
        "Sales": 5450.0
    },
    {
        "brand": "海尔",
        "Sales": 4396.0
    },
    {
        "brand": "海尔",
        "Sales": 3799.0
    },
    {
        "brand": "海尔",
        "Sales": 11598.0
    },
    {
        "brand": "海尔",
        "Sales": 1999.0
    },
    {
        "brand": "海尔",
        "Sales": 14988.0
    },
    {
        "brand": "海尔",
        "Sales": 8188.0
    },
    {
        "brand": "海尔",
        "Sales": 1899.0
    },
    {
        "brand": "海尔",
        "Sales": 2099.0
    },
    {
        "brand": "海尔",
        "Sales": 2099.0
    },
    {
        "brand": "海尔",
        "Sales": 4599.0
    },
    {
        "brand": "海尔",
        "Sales": 3999.0
    },
    {
        "brand": "海尔",
        "Sales": 14399.0
    },
    {
        "brand": "海尔",
        "Sales": 3969.0
    },
    {
        "brand": "海尔",
        "Sales": 2299.0
    },
    {
        "brand": "海尔",
        "Sales": 6999.0
    },
    {
        "brand": "海尔",
        "Sales": 6999.0
    },
    {
        "brand": "海尔",
        "Sales": 1999.0
    },
    {
        "brand": "海尔",
        "Sales": 4999.0
    },
    {
        "brand": "海尔",
        "Sales": 12096.0
    },
    {
        "brand": "海尔",
        "Sales": 2799.0
    },
    {
        "brand": "海尔",
        "Sales": 16380.0
    },
    {
        "brand": "海尔",
        "Sales": 2499.0
    },
    {
        "brand": "海尔",
        "Sales": 2099.0
    },
    {
        "brand": "海尔",
        "Sales": 10980.0
    },
    {
        "brand": "海尔",
        "Sales": 3699.0
    },
    {
        "brand": "海尔",
        "Sales": 2899.0
    },
    {
        "brand": "海尔",
        "Sales": 2499.0
    },
    {
        "brand": "海尔",
        "Sales": 6299.0
    },
    {
        "brand": "海尔",
        "Sales": 2399.0
    },
    {
        "brand": "海尔",
        "Sales": 6299.0
    },
    {
        "brand": "海尔",
        "Sales": 2099.0
    },
    {
        "brand": "海尔",
        "Sales": 3199.0
    },
    {
        "brand": "海尔",
        "Sales": 4899.0
    },
    {
        "brand": "海尔",
        "Sales": 4398.0
    },
    {
        "brand": "海尔",
        "Sales": 5188.0
    },
    {
        "brand": "海尔",
        "Sales": 5489.0
    },
    {
        "brand": "海尔",
        "Sales": 5399.0
    },
    {
        "brand": "海尔",
        "Sales": 13499.0
    },
    {
        "brand": "海尔",
        "Sales": 5900.0
    },
    {
        "brand": "海尔",
        "Sales": 6398.0
    },
    {
        "brand": "海尔",
        "Sales": 1899.0
    },
    {
        "brand": "海尔",
        "Sales": 1999.0
    },
    {
        "brand": "海尔",
        "Sales": 5299.0
    },
    {
        "brand": "海尔",
        "Sales": 4830.0
    },
    {
        "brand": "海尔",
        "Sales": 5699.0
    },
    {
        "brand": "海尔",
        "Sales": 10599.0
    },
    {
        "brand": "海尔",
        "Sales": 5699.0
    },
    {
        "brand": "海尔",
        "Sales": 9599.0
    },
    {
        "brand": "海尔",
        "Sales": 10999.0
    },
    {
        "brand": "海尔",
        "Sales": 3499.0
    },
    {
        "brand": "海尔",
        "Sales": 1938.0
    },
    {
        "brand": "海尔",
        "Sales": 11996.0
    },
    {
        "brand": "海尔",
        "Sales": 6798.0
    },
    {
        "brand": "海尔",
        "Sales": 3899.0
    },
    {
        "brand": "海尔",
        "Sales": 6999.0
    },
    {
        "brand": "海尔",
        "Sales": 1999.0
    },
    {
        "brand": "海尔",
        "Sales": 2299.0
    },
    {
        "brand": "海尔",
        "Sales": 5099.0
    },
    {
        "brand": "海尔",
        "Sales": 2499.0
    },
    {
        "brand": "海尔",
        "Sales": 2999.0
    },
    {
        "brand": "海尔",
        "Sales": 3999.0
    },
    {
        "brand": "海尔",
        "Sales": 2899.0
    },
    {
        "brand": "海尔",
        "Sales": 2399.0
    },
    {
        "brand": "海尔",
        "Sales": 3199.0
    },
    {
        "brand": "海尔",
        "Sales": 10568.99
    },
    {
        "brand": "海尔",
        "Sales": 2299.0
    },
    {
        "brand": "海尔",
        "Sales": 5399.0
    },
    {
        "brand": "海尔",
        "Sales": 4799.0
    },
    {
        "brand": "海尔",
        "Sales": 8478.0
    },
    {
        "brand": "海尔",
        "Sales": 2199.0
    },
    {
        "brand": "海尔",
        "Sales": 8942.0
    },
    {
        "brand": "海尔",
        "Sales": 4099.0
    },
    {
        "brand": "海尔",
        "Sales": 4782.0
    },
    {
        "brand": "海尔",
        "Sales": 10999.0
    },
    {
        "brand": "海尔",
        "Sales": 5399.0
    },
    {
        "brand": "海尔",
        "Sales": 5499.0
    },
    {
        "brand": "海尔",
        "Sales": 4622.0
    },
    {
        "brand": "海尔",
        "Sales": 10078.0
    },
    {
        "brand": "海尔",
        "Sales": 1799.0
    },
    {
        "brand": "海尔",
        "Sales": 1999.0
    },
    {
        "brand": "海尔",
        "Sales": 7757.0
    },
    {
        "brand": "海尔",
        "Sales": 2199.0
    },
    {
        "brand": "海尔",
        "Sales": 6999.0
    },
    {
        "brand": "海尔",
        "Sales": 2499.0
    },
    {
        "brand": "海尔",
        "Sales": 4782.0
    },
    {
        "brand": "海尔",
        "Sales": 3199.0
    },
    {
        "brand": "海尔",
        "Sales": 6798.0
    },
    {
        "brand": "海尔",
        "Sales": 4499.0
    },
    {
        "brand": "海尔",
        "Sales": 6399.0
    },
    {
        "brand": "海尔",
        "Sales": 4899.0
    },
    {
        "brand": "海尔",
        "Sales": 9996.0
    },
    {
        "brand": "海尔",
        "Sales": 19999.0
    },
    {
        "brand": "海尔",
        "Sales": 2299.0
    },
    {
        "brand": "海尔",
        "Sales": 3069.0
    },
    {
        "brand": "海尔",
        "Sales": 7998.0
    },
    {
        "brand": "海尔",
        "Sales": 6097.0
    },
    {
        "brand": "海尔",
        "Sales": 2299.0
    },
    {
        "brand": "海尔",
        "Sales": 2799.0
    },
    {
        "brand": "海尔",
        "Sales": 1899.0
    },
    {
        "brand": "海尔",
        "Sales": 4699.0
    },
    {
        "brand": "海尔",
        "Sales": 2199.0
    },
    {
        "brand": "海尔",
        "Sales": 6298.0
    },
    {
        "brand": "海尔",
        "Sales": 2699.0
    },
    {
        "brand": "海尔",
        "Sales": 4298.0
    },
    {
        "brand": "海尔",
        "Sales": 1769.0
    },
    {
        "brand": "海尔",
        "Sales": 9799.0
    },
    {
        "brand": "海尔",
        "Sales": 4299.0
    },
    {
        "brand": "海尔",
        "Sales": 10599.0
    },
    {
        "brand": "海尔",
        "Sales": 6999.0
    },
    {
        "brand": "海尔",
        "Sales": 7399.0
    },
    {
        "brand": "海尔",
        "Sales": 1599.0
    },
    {
        "brand": "海尔",
        "Sales": 6499.0
    },
    {
        "brand": "海尔",
        "Sales": 4698.0
    },
    {
        "brand": "海尔",
        "Sales": 7099.0
    },
    {
        "brand": "海尔",
        "Sales": 5399.0
    },
    {
        "brand": "海尔",
        "Sales": 4899.0
    },
    {
        "brand": "海尔",
        "Sales": 2299.0
    },
    {
        "brand": "海尔",
        "Sales": 2599.0
    },
    {
        "brand": "海尔",
        "Sales": 4199.0
    },
    {
        "brand": "海尔",
        "Sales": 6299.0
    },
    {
        "brand": "海尔",
        "Sales": 9099.0
    },
    {
        "brand": "海尔",
        "Sales": 2599.0
    },
    {
        "brand": "海尔",
        "Sales": 5099.0
    },
    {
        "brand": "海尔",
        "Sales": 5599.0
    },
    {
        "brand": "海尔",
        "Sales": 4499.0
    },
    {
        "brand": "海尔",
        "Sales": 5599.0
    },
    {
        "brand": "海尔",
        "Sales": 1999.0
    },
    {
        "brand": "海尔",
        "Sales": 2899.0
    },
    {
        "brand": "海尔",
        "Sales": 7999.0
    },
    {
        "brand": "海尔",
        "Sales": 2099.0
    },
    {
        "brand": "海尔",
        "Sales": 6699.0
    },
    {
        "brand": "海尔",
        "Sales": 4399.0
    },
    {
        "brand": "海尔",
        "Sales": 6268.0
    },
    {
        "brand": "海尔",
        "Sales": 6348.0
    },
    {
        "brand": "科龙",
        "Sales": 1449.0
    },
    {
        "brand": "科龙",
        "Sales": 4099.0
    },
    {
        "brand": "科龙",
        "Sales": 4799.0
    },
    {
        "brand": "科龙",
        "Sales": 3299.0
    },
    {
        "brand": "科龙",
        "Sales": 8097.0
    },
    {
        "brand": "科龙",
        "Sales": 2699.0
    },
    {
        "brand": "科龙",
        "Sales": 6198.0
    },
    {
        "brand": "科龙",
        "Sales": 2399.0
    },
    {
        "brand": "科龙",
        "Sales": 4199.0
    },
    {
        "brand": "科龙",
        "Sales": 1949.0
    },
    {
        "brand": "科龙",
        "Sales": 1949.0
    },
    {
        "brand": "科龙",
        "Sales": 6999.0
    },
    {
        "brand": "科龙",
        "Sales": 1799.0
    },
    {
        "brand": "科龙",
        "Sales": 3299.0
    },
    {
        "brand": "科龙",
        "Sales": 6999.0
    },
    {
        "brand": "科龙",
        "Sales": 4099.0
    },
    {
        "brand": "科龙",
        "Sales": 6999.0
    },
    {
        "brand": "科龙",
        "Sales": 1799.0
    },
    {
        "brand": "科龙",
        "Sales": 3099.0
    },
    {
        "brand": "科龙",
        "Sales": 4499.0
    },
    {
        "brand": "科龙",
        "Sales": 1949.0
    },
    {
        "brand": "科龙",
        "Sales": 2099.0
    },
    {
        "brand": "科龙",
        "Sales": 3599.0
    },
    {
        "brand": "科龙",
        "Sales": 2599.0
    },
    {
        "brand": "科龙",
        "Sales": 4999.0
    },
    {
        "brand": "科龙",
        "Sales": 2599.0
    },
    {
        "brand": "科龙",
        "Sales": 1799.0
    },
    {
        "brand": "科龙",
        "Sales": 13999.0
    },
    {
        "brand": "科龙",
        "Sales": 1499.0
    },
    {
        "brand": "科龙",
        "Sales": 4399.0
    },
    {
        "brand": "科龙",
        "Sales": 1899.0
    },
    {
        "brand": "科龙",
        "Sales": 7497.0
    },
    {
        "brand": "科龙",
        "Sales": 1949.0
    },
    {
        "brand": "科龙",
        "Sales": 5499.0
    },
    {
        "brand": "科龙",
        "Sales": 1799.0
    },
    {
        "brand": "科龙",
        "Sales": 1649.0
    },
    {
        "brand": "科龙",
        "Sales": 3099.0
    },
    {
        "brand": "科龙",
        "Sales": 4998.0
    },
    {
        "brand": "科龙",
        "Sales": 2299.0
    },
    {
        "brand": "科龙",
        "Sales": 9999.0
    },
    {
        "brand": "科龙",
        "Sales": 4999.0
    },
    {
        "brand": "科龙",
        "Sales": 2999.0
    },
    {
        "brand": "科龙",
        "Sales": 4228.0
    },
    {
        "brand": "科龙",
        "Sales": 1699.0
    },
    {
        "brand": "科龙",
        "Sales": 2399.0
    },
    {
        "brand": "科龙",
        "Sales": 2099.0
    },
    {
        "brand": "科龙",
        "Sales": 6999.0
    },
    {
        "brand": "科龙",
        "Sales": 1799.0
    },
    {
        "brand": "科龙",
        "Sales": 1649.0
    },
    {
        "brand": "科龙",
        "Sales": 1819.0
    },
    {
        "brand": "科龙",
        "Sales": 2299.0
    },
    {
        "brand": "科龙",
        "Sales": 1849.0
    },
    {
        "brand": "科龙",
        "Sales": 3699.0
    },
    {
        "brand": "科龙",
        "Sales": 1949.0
    },
    {
        "brand": "科龙",
        "Sales": 1849.0
    },
    {
        "brand": "科龙",
        "Sales": 4599.0
    },
    {
        "brand": "科龙",
        "Sales": 7599.0
    },
    {
        "brand": "科龙",
        "Sales": 4099.0
    },
    {
        "brand": "科龙",
        "Sales": 2299.0
    },
    {
        "brand": "科龙",
        "Sales": 1799.0
    },
    {
        "brand": "科龙",
        "Sales": 4499.0
    },
    {
        "brand": "科龙",
        "Sales": 4999.0
    },
    {
        "brand": "科龙",
        "Sales": 2099.0
    },
    {
        "brand": "科龙",
        "Sales": 4199.0
    },
    {
        "brand": "科龙",
        "Sales": 500.0
    },
    {
        "brand": "科龙",
        "Sales": 1949.0
    },
    {
        "brand": "科龙",
        "Sales": 2099.0
    },
    {
        "brand": "科龙",
        "Sales": 1949.0
    },
    {
        "brand": "科龙",
        "Sales": 3199.0
    },
    {
        "brand": "科龙",
        "Sales": 4991.0
    },
    {
        "brand": "科龙",
        "Sales": 1659.0
    },
    {
        "brand": "科龙",
        "Sales": 4099.0
    },
    {
        "brand": "科龙",
        "Sales": 2999.0
    },
    {
        "brand": "科龙",
        "Sales": 6999.0
    },
    {
        "brand": "科龙",
        "Sales": 2099.0
    },
    {
        "brand": "科龙",
        "Sales": 1819.0
    },
    {
        "brand": "科龙",
        "Sales": 5499.0
    },
    {
        "brand": "科龙",
        "Sales": 2399.0
    },
    {
        "brand": "科龙",
        "Sales": 3199.0
    },
    {
        "brand": "科龙",
        "Sales": 4999.0
    },
    {
        "brand": "科龙",
        "Sales": 6999.0
    },
    {
        "brand": "科龙",
        "Sales": 1799.0
    },
    {
        "brand": "科龙",
        "Sales": 4499.0
    },
    {
        "brand": "科龙",
        "Sales": 1899.0
    },
    {
        "brand": "科龙",
        "Sales": 2199.0
    },
    {
        "brand": "科龙",
        "Sales": 1799.0
    },
    {
        "brand": "科龙",
        "Sales": 7999.0
    },
    {
        "brand": "科龙",
        "Sales": 1999.0
    },
    {
        "brand": "科龙",
        "Sales": 4499.0
    },
    {
        "brand": "科龙",
        "Sales": 1799.0
    },
    {
        "brand": "科龙",
        "Sales": 4099.0
    },
    {
        "brand": "科龙",
        "Sales": 8199.0
    },
    {
        "brand": "科龙",
        "Sales": 1599.0
    },
    {
        "brand": "科龙",
        "Sales": 13898.0
    },
    {
        "brand": "科龙",
        "Sales": 1819.0
    },
    {
        "brand": "科龙",
        "Sales": 1949.0
    },
    {
        "brand": "科龙",
        "Sales": 4499.0
    },
    {
        "brand": "科龙",
        "Sales": 1449.0
    },
    {
        "brand": "科龙",
        "Sales": 3399.0
    },
    {
        "brand": "科龙",
        "Sales": 9499.0
    },
    {
        "brand": "科龙",
        "Sales": 14999.0
    },
    {
        "brand": "科龙",
        "Sales": 3399.0
    },
    {
        "brand": "科龙",
        "Sales": 3299.0
    },
    {
        "brand": "科龙",
        "Sales": 4499.0
    },
    {
        "brand": "科龙",
        "Sales": 2099.0
    },
    {
        "brand": "科龙",
        "Sales": 3299.0
    },
    {
        "brand": "科龙",
        "Sales": 2999.0
    },
    {
        "brand": "科龙",
        "Sales": 4099.0
    },
    {
        "brand": "科龙",
        "Sales": 2599.0
    },
    {
        "brand": "科龙",
        "Sales": 4399.0
    },
    {
        "brand": "科龙",
        "Sales": 7999.0
    },
    {
        "brand": "科龙",
        "Sales": 4399.0
    },
    {
        "brand": "科龙",
        "Sales": 1819.0
    },
    {
        "brand": "科龙",
        "Sales": 6969.0
    },
    {
        "brand": "科龙",
        "Sales": 1899.0
    },
    {
        "brand": "科龙",
        "Sales": 4099.0
    },
    {
        "brand": "科龙",
        "Sales": 6999.0
    },
    {
        "brand": "科龙",
        "Sales": 3299.0
    },
    {
        "brand": "科龙",
        "Sales": 4299.0
    },
    {
        "brand": "科龙",
        "Sales": 1819.0
    },
    {
        "brand": "科龙",
        "Sales": 2299.0
    },
    {
        "brand": "科龙",
        "Sales": 3399.0
    },
    {
        "brand": "科龙",
        "Sales": 6999.0
    },
    {
        "brand": "科龙",
        "Sales": 3599.0
    },
    {
        "brand": "科龙",
        "Sales": 6498.0
    },
    {
        "brand": "科龙",
        "Sales": 2099.0
    },
    {
        "brand": "科龙",
        "Sales": 4599.0
    },
    {
        "brand": "科龙",
        "Sales": 2899.0
    },
    {
        "brand": "科龙",
        "Sales": 8097.0
    },
    {
        "brand": "科龙",
        "Sales": 2999.0
    },
    {
        "brand": "科龙",
        "Sales": 3899.0
    },
    {
        "brand": "科龙",
        "Sales": 1899.0
    },
    {
        "brand": "科龙",
        "Sales": 8299.0
    },
    {
        "brand": "科龙",
        "Sales": 4599.0
    },
    {
        "brand": "科龙",
        "Sales": 1949.0
    },
    {
        "brand": "科龙",
        "Sales": 9125.0
    },
    {
        "brand": "科龙",
        "Sales": 1999.0
    },
    {
        "brand": "科龙",
        "Sales": 2389.0
    },
    {
        "brand": "科龙",
        "Sales": 1429.0
    },
    {
        "brand": "科龙",
        "Sales": 2599.0
    },
    {
        "brand": "科龙",
        "Sales": 6999.0
    },
    {
        "brand": "科龙",
        "Sales": 4299.0
    },
    {
        "brand": "科龙",
        "Sales": 1819.0
    },
    {
        "brand": "科龙",
        "Sales": 2199.0
    },
    {
        "brand": "科龙",
        "Sales": 2599.0
    },
    {
        "brand": "科龙",
        "Sales": 1596.0
    },
    {
        "brand": "科龙",
        "Sales": 2999.0
    },
    {
        "brand": "科龙",
        "Sales": 2299.0
    },
    {
        "brand": "科龙",
        "Sales": 1799.0
    },
    {
        "brand": "科龙",
        "Sales": 2299.0
    },
    {
        "brand": "科龙",
        "Sales": 4499.0
    },
    {
        "brand": "科龙",
        "Sales": 2599.0
    },
    {
        "brand": "科龙",
        "Sales": 1799.0
    },
    {
        "brand": "科龙",
        "Sales": 2599.0
    },
    {
        "brand": "科龙",
        "Sales": 3999.0
    },
    {
        "brand": "科龙",
        "Sales": 3788.0
    },
    {
        "brand": "科龙",
        "Sales": 4799.0
    },
    {
        "brand": "科龙",
        "Sales": 7999.0
    },
    {
        "brand": "科龙",
        "Sales": 4799.0
    },
    {
        "brand": "科龙",
        "Sales": 5599.0
    },
    {
        "brand": "科龙",
        "Sales": 1799.0
    },
    {
        "brand": "科龙",
        "Sales": 4199.0
    },
    {
        "brand": "科龙",
        "Sales": 4499.0
    },
    {
        "brand": "科龙",
        "Sales": 4688.0
    },
    {
        "brand": "科龙",
        "Sales": 3099.0
    },
    {
        "brand": "科龙",
        "Sales": 2799.0
    },
    {
        "brand": "科龙",
        "Sales": 2099.0
    },
    {
        "brand": "科龙",
        "Sales": 4399.0
    },
    {
        "brand": "科龙",
        "Sales": 1849.0
    },
    {
        "brand": "科龙",
        "Sales": 4799.0
    },
    {
        "brand": "科龙",
        "Sales": 4499.0
    },
    {
        "brand": "科龙",
        "Sales": 4499.0
    },
    {
        "brand": "科龙",
        "Sales": 1499.0
    },
    {
        "brand": "科龙",
        "Sales": 1949.0
    },
    {
        "brand": "科龙",
        "Sales": 4399.0
    },
    {
        "brand": "科龙",
        "Sales": 7198.0
    },
    {
        "brand": "科龙",
        "Sales": 2999.0
    },
    {
        "brand": "科龙",
        "Sales": 1879.0
    },
    {
        "brand": "科龙",
        "Sales": 1499.0
    },
    {
        "brand": "科龙",
        "Sales": 2099.0
    },
    {
        "brand": "科龙",
        "Sales": 1899.0
    },
    {
        "brand": "科龙",
        "Sales": 1999.0
    },
    {
        "brand": "科龙",
        "Sales": 4499.0
    },
    {
        "brand": "科龙",
        "Sales": 4799.0
    },
    {
        "brand": "科龙",
        "Sales": 2299.0
    },
    {
        "brand": "科龙",
        "Sales": 1819.0
    },
    {
        "brand": "科龙",
        "Sales": 7999.0
    },
    {
        "brand": "科龙",
        "Sales": 3499.0
    },
    {
        "brand": "科龙",
        "Sales": 1999.0
    },
    {
        "brand": "科龙",
        "Sales": 1849.0
    },
    {
        "brand": "科龙",
        "Sales": 4000.0
    },
    {
        "brand": "科龙",
        "Sales": 1949.0
    },
    {
        "brand": "科龙",
        "Sales": 2599.0
    },
    {
        "brand": "科龙",
        "Sales": 3299.0
    },
    {
        "brand": "科龙",
        "Sales": 7788.0
    },
    {
        "brand": "科龙",
        "Sales": 4499.0
    },
    {
        "brand": "科龙",
        "Sales": 7498.0
    },
    {
        "brand": "科龙",
        "Sales": 3499.0
    },
    {
        "brand": "科龙",
        "Sales": 2699.0
    },
    {
        "brand": "科龙",
        "Sales": 1819.0
    },
    {
        "brand": "科龙",
        "Sales": 3299.0
    },
    {
        "brand": "科龙",
        "Sales": 5788.0
    },
    {
        "brand": "科龙",
        "Sales": 8999.0
    },
    {
        "brand": "科龙",
        "Sales": 4799.0
    },
    {
        "brand": "科龙",
        "Sales": 2999.0
    },
    {
        "brand": "科龙",
        "Sales": 1899.0
    },
    {
        "brand": "科龙",
        "Sales": 1819.0
    },
    {
        "brand": "科龙",
        "Sales": 1599.0
    },
    {
        "brand": "科龙",
        "Sales": 2299.0
    },
    {
        "brand": "科龙",
        "Sales": 3799.0
    },
    {
        "brand": "科龙",
        "Sales": 4099.0
    },
    {
        "brand": "科龙",
        "Sales": 4199.0
    },
    {
        "brand": "科龙",
        "Sales": 1819.0
    },
    {
        "brand": "科龙",
        "Sales": 7999.0
    },
    {
        "brand": "科龙",
        "Sales": 1889.0
    },
    {
        "brand": "科龙",
        "Sales": 3399.0
    },
    {
        "brand": "科龙",
        "Sales": 2599.0
    },
    {
        "brand": "科龙",
        "Sales": 4999.0
    },
    {
        "brand": "科龙",
        "Sales": 4799.0
    },
    {
        "brand": "科龙",
        "Sales": 1899.0
    },
    {
        "brand": "科龙",
        "Sales": 4499.0
    },
    {
        "brand": "科龙",
        "Sales": 1899.0
    },
    {
        "brand": "科龙",
        "Sales": 4299.0
    },
    {
        "brand": "科龙",
        "Sales": 1799.0
    },
    {
        "brand": "科龙",
        "Sales": 4599.0
    },
    {
        "brand": "科龙",
        "Sales": 1819.0
    },
    {
        "brand": "科龙",
        "Sales": 4299.0
    },
    {
        "brand": "科龙",
        "Sales": 1799.0
    },
    {
        "brand": "科龙",
        "Sales": 1499.0
    },
    {
        "brand": "科龙",
        "Sales": 4399.0
    },
    {
        "brand": "科龙",
        "Sales": 2599.0
    },
    {
        "brand": "科龙",
        "Sales": 4999.0
    },
    {
        "brand": "科龙",
        "Sales": 1449.0
    },
    {
        "brand": "科龙",
        "Sales": 1799.0
    },
    {
        "brand": "科龙",
        "Sales": 2899.0
    },
    {
        "brand": "科龙",
        "Sales": 3899.0
    },
    {
        "brand": "科龙",
        "Sales": 2199.0
    },
    {
        "brand": "科龙",
        "Sales": 4799.0
    },
    {
        "brand": "科龙",
        "Sales": 3799.0
    },
    {
        "brand": "科龙",
        "Sales": 3537.0
    },
    {
        "brand": "科龙",
        "Sales": 4499.0
    },
    {
        "brand": "科龙",
        "Sales": 3299.0
    },
    {
        "brand": "科龙",
        "Sales": 6999.0
    },
    {
        "brand": "科龙",
        "Sales": 4699.0
    },
    {
        "brand": "科龙",
        "Sales": 1949.0
    },
    {
        "brand": "科龙",
        "Sales": 4999.0
    },
    {
        "brand": "科龙",
        "Sales": 6788.0
    },
    {
        "brand": "科龙",
        "Sales": 1449.0
    },
    {
        "brand": "科龙",
        "Sales": 3098.0
    },
    {
        "brand": "科龙",
        "Sales": 2699.0
    },
    {
        "brand": "科龙",
        "Sales": 2999.0
    },
    {
        "brand": "科龙",
        "Sales": 4799.0
    },
    {
        "brand": "科龙",
        "Sales": 4499.0
    },
    {
        "brand": "科龙",
        "Sales": 3099.0
    },
    {
        "brand": "科龙",
        "Sales": 1799.0
    },
    {
        "brand": "科龙",
        "Sales": 3299.0
    },
    {
        "brand": "科龙",
        "Sales": 2099.0
    },
    {
        "brand": "科龙",
        "Sales": 4499.0
    },
    {
        "brand": "科龙",
        "Sales": 2299.0
    },
    {
        "brand": "科龙",
        "Sales": 2099.0
    },
    {
        "brand": "科龙",
        "Sales": 1449.0
    },
    {
        "brand": "科龙",
        "Sales": 1599.0
    },
    {
        "brand": "科龙",
        "Sales": 2399.0
    },
    {
        "brand": "科龙",
        "Sales": 2099.0
    },
    {
        "brand": "科龙",
        "Sales": 1649.0
    },
    {
        "brand": "科龙",
        "Sales": 2399.0
    },
    {
        "brand": "科龙",
        "Sales": 1799.0
    },
    {
        "brand": "科龙",
        "Sales": 4499.0
    },
    {
        "brand": "科龙",
        "Sales": 4588.0
    },
    {
        "brand": "科龙",
        "Sales": 8998.0
    },
    {
        "brand": "科龙",
        "Sales": 2299.0
    },
    {
        "brand": "科龙",
        "Sales": 1899.0
    },
    {
        "brand": "科龙",
        "Sales": 4799.0
    },
    {
        "brand": "科龙",
        "Sales": 2599.0
    },
    {
        "brand": "科龙",
        "Sales": 2299.0
    },
    {
        "brand": "科龙",
        "Sales": 13900.0
    },
    {
        "brand": "科龙",
        "Sales": 3799.0
    },
    {
        "brand": "科龙",
        "Sales": 3599.0
    },
    {
        "brand": "科龙",
        "Sales": 1499.0
    },
    {
        "brand": "科龙",
        "Sales": 4399.0
    },
    {
        "brand": "科龙",
        "Sales": 1999.0
    },
    {
        "brand": "科龙",
        "Sales": 5899.0
    },
    {
        "brand": "科龙",
        "Sales": 2399.0
    },
    {
        "brand": "科龙",
        "Sales": 1999.0
    },
    {
        "brand": "科龙",
        "Sales": 2099.0
    },
    {
        "brand": "科龙",
        "Sales": 2999.0
    },
    {
        "brand": "科龙",
        "Sales": 2899.0
    },
    {
        "brand": "科龙",
        "Sales": 2299.0
    },
    {
        "brand": "科龙",
        "Sales": 4199.0
    },
    {
        "brand": "科龙",
        "Sales": 6999.0
    },
    {
        "brand": "科龙",
        "Sales": 3299.0
    },
    {
        "brand": "科龙",
        "Sales": 7999.0
    },
    {
        "brand": "科龙",
        "Sales": 4799.0
    },
    {
        "brand": "科龙",
        "Sales": 1499.0
    },
    {
        "brand": "科龙",
        "Sales": 1999.0
    },
    {
        "brand": "科龙",
        "Sales": 7999.0
    },
    {
        "brand": "科龙",
        "Sales": 1949.0
    },
    {
        "brand": "科龙",
        "Sales": 500.0
    },
    {
        "brand": "科龙",
        "Sales": 1799.0
    },
    {
        "brand": "科龙",
        "Sales": 4499.0
    },
    {
        "brand": "美的",
        "Sales": 13399.0
    },
    {
        "brand": "美的",
        "Sales": 5899.0
    },
    {
        "brand": "美的",
        "Sales": 5299.0
    },
    {
        "brand": "美的",
        "Sales": 10197.0
    },
    {
        "brand": "美的",
        "Sales": 3999.0
    },
    {
        "brand": "美的",
        "Sales": 1949.0
    },
    {
        "brand": "美的",
        "Sales": 9198.0
    },
    {
        "brand": "美的",
        "Sales": 2299.0
    },
    {
        "brand": "美的",
        "Sales": 12096.0
    },
    {
        "brand": "美的",
        "Sales": 8000.0
    },
    {
        "brand": "美的",
        "Sales": 2599.0
    },
    {
        "brand": "美的",
        "Sales": 2699.0
    },
    {
        "brand": "美的",
        "Sales": 3718.8
    },
    {
        "brand": "美的",
        "Sales": 5441.0
    },
    {
        "brand": "美的",
        "Sales": 3699.0
    },
    {
        "brand": "美的",
        "Sales": 2149.0
    },
    {
        "brand": "美的",
        "Sales": 8799.0
    },
    {
        "brand": "美的",
        "Sales": 5999.0
    },
    {
        "brand": "美的",
        "Sales": 3999.0
    },
    {
        "brand": "美的",
        "Sales": 2599.0
    },
    {
        "brand": "美的",
        "Sales": 2299.0
    },
    {
        "brand": "美的",
        "Sales": 6599.0
    },
    {
        "brand": "美的",
        "Sales": 5899.0
    },
    {
        "brand": "美的",
        "Sales": 8299.0
    },
    {
        "brand": "美的",
        "Sales": 1199.0
    },
    {
        "brand": "美的",
        "Sales": 10348.0
    },
    {
        "brand": "美的",
        "Sales": 2299.0
    },
    {
        "brand": "美的",
        "Sales": 9799.0
    },
    {
        "brand": "美的",
        "Sales": 4999.0
    },
    {
        "brand": "美的",
        "Sales": 2299.0
    },
    {
        "brand": "美的",
        "Sales": 2099.0
    },
    {
        "brand": "美的",
        "Sales": 14696.0
    },
    {
        "brand": "美的",
        "Sales": 3999.0
    },
    {
        "brand": "美的",
        "Sales": 7899.0
    },
    {
        "brand": "美的",
        "Sales": 3099.0
    },
    {
        "brand": "美的",
        "Sales": 3864.0
    },
    {
        "brand": "美的",
        "Sales": 5689.0
    },
    {
        "brand": "美的",
        "Sales": 13895.0
    },
    {
        "brand": "美的",
        "Sales": 7439.0
    },
    {
        "brand": "美的",
        "Sales": 9799.0
    },
    {
        "brand": "美的",
        "Sales": 3199.0
    },
    {
        "brand": "美的",
        "Sales": 2099.0
    },
    {
        "brand": "美的",
        "Sales": 3799.0
    },
    {
        "brand": "美的",
        "Sales": 500.0
    },
    {
        "brand": "美的",
        "Sales": 9297.0
    },
    {
        "brand": "美的",
        "Sales": 12696.0
    },
    {
        "brand": "美的",
        "Sales": 8899.0
    },
    {
        "brand": "美的",
        "Sales": 3999.0
    },
    {
        "brand": "美的",
        "Sales": 4999.0
    },
    {
        "brand": "美的",
        "Sales": 2099.0
    },
    {
        "brand": "美的",
        "Sales": 989.0
    },
    {
        "brand": "美的",
        "Sales": 2099.0
    },
    {
        "brand": "美的",
        "Sales": 9199.0
    },
    {
        "brand": "美的",
        "Sales": 4299.0
    },
    {
        "brand": "美的",
        "Sales": 7699.0
    },
    {
        "brand": "美的",
        "Sales": 2099.0
    },
    {
        "brand": "美的",
        "Sales": 7498.0
    },
    {
        "brand": "美的",
        "Sales": 4499.0
    },
    {
        "brand": "美的",
        "Sales": 2649.0
    },
    {
        "brand": "美的",
        "Sales": 2299.0
    },
    {
        "brand": "美的",
        "Sales": 5599.0
    },
    {
        "brand": "美的",
        "Sales": 4999.0
    },
    {
        "brand": "美的",
        "Sales": 2669.0
    },
    {
        "brand": "美的",
        "Sales": 2099.0
    },
    {
        "brand": "美的",
        "Sales": 1999.0
    },
    {
        "brand": "美的",
        "Sales": 1999.0
    },
    {
        "brand": "美的",
        "Sales": 2999.0
    },
    {
        "brand": "美的",
        "Sales": 2099.0
    },
    {
        "brand": "美的",
        "Sales": 3999.0
    },
    {
        "brand": "美的",
        "Sales": 9597.0
    },
    {
        "brand": "美的",
        "Sales": 5999.0
    },
    {
        "brand": "美的",
        "Sales": 5820.0
    },
    {
        "brand": "美的",
        "Sales": 8499.0
    },
    {
        "brand": "美的",
        "Sales": 2599.0
    },
    {
        "brand": "美的",
        "Sales": 5099.0
    },
    {
        "brand": "美的",
        "Sales": 5999.0
    },
    {
        "brand": "美的",
        "Sales": 10397.0
    },
    {
        "brand": "美的",
        "Sales": 3999.0
    },
    {
        "brand": "美的",
        "Sales": 5999.0
    },
    {
        "brand": "美的",
        "Sales": 4099.0
    },
    {
        "brand": "美的",
        "Sales": 2099.0
    },
    {
        "brand": "美的",
        "Sales": 8899.0
    },
    {
        "brand": "美的",
        "Sales": 6699.0
    },
    {
        "brand": "美的",
        "Sales": 8399.0
    },
    {
        "brand": "美的",
        "Sales": 999.0
    },
    {
        "brand": "美的",
        "Sales": 5999.0
    },
    {
        "brand": "美的",
        "Sales": 4899.0
    },
    {
        "brand": "美的",
        "Sales": 8699.0
    },
    {
        "brand": "美的",
        "Sales": 5899.0
    },
    {
        "brand": "美的",
        "Sales": 2099.0
    },
    {
        "brand": "美的",
        "Sales": 4899.0
    },
    {
        "brand": "美的",
        "Sales": 5999.0
    },
    {
        "brand": "美的",
        "Sales": 2594.63
    },
    {
        "brand": "美的",
        "Sales": 2688.0
    },
    {
        "brand": "美的",
        "Sales": 2699.0
    },
    {
        "brand": "美的",
        "Sales": 2899.0
    },
    {
        "brand": "美的",
        "Sales": 2299.0
    },
    {
        "brand": "美的",
        "Sales": 4999.0
    },
    {
        "brand": "美的",
        "Sales": 7499.0
    },
    {
        "brand": "美的",
        "Sales": 4899.0
    },
    {
        "brand": "美的",
        "Sales": 5999.0
    },
    {
        "brand": "美的",
        "Sales": 4099.0
    },
    {
        "brand": "美的",
        "Sales": 2799.0
    },
    {
        "brand": "美的",
        "Sales": 3999.0
    },
    {
        "brand": "美的",
        "Sales": 12500.0
    },
    {
        "brand": "美的",
        "Sales": 9199.0
    },
    {
        "brand": "美的",
        "Sales": 11896.0
    },
    {
        "brand": "美的",
        "Sales": 4599.0
    },
    {
        "brand": "美的",
        "Sales": 4999.0
    },
    {
        "brand": "美的",
        "Sales": 3799.0
    },
    {
        "brand": "美的",
        "Sales": 3999.0
    },
    {
        "brand": "美的",
        "Sales": 13796.0
    },
    {
        "brand": "美的",
        "Sales": 2599.0
    },
    {
        "brand": "美的",
        "Sales": 4999.0
    },
    {
        "brand": "美的",
        "Sales": 3799.0
    },
    {
        "brand": "美的",
        "Sales": 3299.0
    },
    {
        "brand": "美的",
        "Sales": 2099.0
    },
    {
        "brand": "美的",
        "Sales": 5099.0
    },
    {
        "brand": "美的",
        "Sales": 2099.0
    },
    {
        "brand": "美的",
        "Sales": 6699.0
    },
    {
        "brand": "美的",
        "Sales": 5999.0
    },
    {
        "brand": "美的",
        "Sales": 2799.0
    },
    {
        "brand": "美的",
        "Sales": 6599.0
    },
    {
        "brand": "美的",
        "Sales": 8899.0
    },
    {
        "brand": "美的",
        "Sales": 5999.0
    },
    {
        "brand": "美的",
        "Sales": 6699.0
    },
    {
        "brand": "美的",
        "Sales": 1450.0
    },
    {
        "brand": "美的",
        "Sales": 3199.0
    },
    {
        "brand": "美的",
        "Sales": 5599.0
    },
    {
        "brand": "美的",
        "Sales": 2799.0
    },
    {
        "brand": "美的",
        "Sales": 3699.0
    },
    {
        "brand": "美的",
        "Sales": 5999.0
    },
    {
        "brand": "美的",
        "Sales": 10396.9
    },
    {
        "brand": "美的",
        "Sales": 3000.0
    },
    {
        "brand": "美的",
        "Sales": 5899.0
    },
    {
        "brand": "美的",
        "Sales": 8699.0
    },
    {
        "brand": "美的",
        "Sales": 13080.0
    },
    {
        "brand": "美的",
        "Sales": 2299.0
    },
    {
        "brand": "美的",
        "Sales": 2099.0
    },
    {
        "brand": "美的",
        "Sales": 5999.0
    },
    {
        "brand": "美的",
        "Sales": 6699.0
    },
    {
        "brand": "美的",
        "Sales": 2949.0
    },
    {
        "brand": "美的",
        "Sales": 8999.0
    },
    {
        "brand": "美的",
        "Sales": 10428.0
    },
    {
        "brand": "美的",
        "Sales": 2899.0
    },
    {
        "brand": "美的",
        "Sales": 3999.0
    },
    {
        "brand": "美的",
        "Sales": 4299.0
    },
    {
        "brand": "美的",
        "Sales": 3699.0
    },
    {
        "brand": "美的",
        "Sales": 2299.0
    },
    {
        "brand": "美的",
        "Sales": 5599.0
    },
    {
        "brand": "美的",
        "Sales": 12296.0
    },
    {
        "brand": "美的",
        "Sales": 2799.0
    },
    {
        "brand": "美的",
        "Sales": 5599.0
    },
    {
        "brand": "美的",
        "Sales": 2099.0
    },
    {
        "brand": "美的",
        "Sales": 2599.0
    },
    {
        "brand": "美的",
        "Sales": 3999.0
    },
    {
        "brand": "美的",
        "Sales": 7799.0
    },
    {
        "brand": "美的",
        "Sales": 3799.0
    },
    {
        "brand": "美的",
        "Sales": 5699.0
    },
    {
        "brand": "美的",
        "Sales": 4099.0
    },
    {
        "brand": "美的",
        "Sales": 7799.0
    },
    {
        "brand": "美的",
        "Sales": 12296.0
    },
    {
        "brand": "美的",
        "Sales": 3683.0
    },
    {
        "brand": "美的",
        "Sales": 5999.0
    },
    {
        "brand": "美的",
        "Sales": 5499.0
    },
    {
        "brand": "美的",
        "Sales": 3999.0
    },
    {
        "brand": "美的",
        "Sales": 1199.0
    },
    {
        "brand": "美的",
        "Sales": 3099.0
    },
    {
        "brand": "美的",
        "Sales": 4599.0
    },
    {
        "brand": "美的",
        "Sales": 2499.0
    },
    {
        "brand": "美的",
        "Sales": 10849.0
    },
    {
        "brand": "美的",
        "Sales": 4899.0
    },
    {
        "brand": "美的",
        "Sales": 2099.0
    },
    {
        "brand": "美的",
        "Sales": 5599.0
    },
    {
        "brand": "美的",
        "Sales": 2599.0
    },
    {
        "brand": "美的",
        "Sales": 4999.0
    },
    {
        "brand": "美的",
        "Sales": 2949.0
    },
    {
        "brand": "美的",
        "Sales": 2299.0
    },
    {
        "brand": "美的",
        "Sales": 5899.0
    },
    {
        "brand": "美的",
        "Sales": 16999.0
    },
    {
        "brand": "美的",
        "Sales": 6799.0
    },
    {
        "brand": "美的",
        "Sales": 2899.0
    },
    {
        "brand": "美的",
        "Sales": 10299.0
    },
    {
        "brand": "美的",
        "Sales": 2299.0
    },
    {
        "brand": "美的",
        "Sales": 2299.0
    },
    {
        "brand": "美的",
        "Sales": 6099.0
    },
    {
        "brand": "美的",
        "Sales": 5599.0
    },
    {
        "brand": "美的",
        "Sales": 15500.0
    },
    {
        "brand": "美的",
        "Sales": 674.0
    },
    {
        "brand": "美的",
        "Sales": 2699.0
    },
    {
        "brand": "美的",
        "Sales": 11898.0
    },
    {
        "brand": "美的",
        "Sales": 8799.0
    },
    {
        "brand": "美的",
        "Sales": 2399.0
    },
    {
        "brand": "美的",
        "Sales": 11500.0
    },
    {
        "brand": "美的",
        "Sales": 7099.0
    },
    {
        "brand": "美的",
        "Sales": 4499.0
    },
    {
        "brand": "美的",
        "Sales": 2399.0
    },
    {
        "brand": "美的",
        "Sales": 2299.0
    },
    {
        "brand": "美的",
        "Sales": 12797.0
    },
    {
        "brand": "美的",
        "Sales": 2099.0
    },
    {
        "brand": "美的",
        "Sales": 3299.0
    },
    {
        "brand": "美的",
        "Sales": 4599.0
    },
    {
        "brand": "美的",
        "Sales": 4499.0
    },
    {
        "brand": "美的",
        "Sales": 2499.0
    },
    {
        "brand": "美的",
        "Sales": 3999.0
    },
    {
        "brand": "美的",
        "Sales": 4499.0
    },
    {
        "brand": "美的",
        "Sales": 2688.0
    },
    {
        "brand": "美的",
        "Sales": 7999.0
    },
    {
        "brand": "美的",
        "Sales": 2299.0
    },
    {
        "brand": "美的",
        "Sales": 5999.0
    },
    {
        "brand": "美的",
        "Sales": 3999.0
    },
    {
        "brand": "美的",
        "Sales": 4999.0
    },
    {
        "brand": "美的",
        "Sales": 4899.0
    },
    {
        "brand": "美的",
        "Sales": 2299.0
    },
    {
        "brand": "美的",
        "Sales": 8799.0
    },
    {
        "brand": "美的",
        "Sales": 7898.0
    },
    {
        "brand": "美的",
        "Sales": 2099.0
    },
    {
        "brand": "美的",
        "Sales": 2599.0
    },
    {
        "brand": "美的",
        "Sales": 4599.0
    },
    {
        "brand": "美的",
        "Sales": 1299.0
    },
    {
        "brand": "美的",
        "Sales": 9899.0
    },
    {
        "brand": "美的",
        "Sales": 4998.0
    },
    {
        "brand": "美的",
        "Sales": 4899.0
    },
    {
        "brand": "美的",
        "Sales": 2599.0
    },
    {
        "brand": "美的",
        "Sales": 6499.0
    },
    {
        "brand": "美的",
        "Sales": 1199.0
    },
    {
        "brand": "美的",
        "Sales": 2299.0
    },
    {
        "brand": "美的",
        "Sales": 2299.0
    },
    {
        "brand": "美的",
        "Sales": 6999.0
    },
    {
        "brand": "美的",
        "Sales": 5289.0
    },
    {
        "brand": "美的",
        "Sales": 1599.0
    },
    {
        "brand": "美的",
        "Sales": 12296.0
    },
    {
        "brand": "美的",
        "Sales": 3999.0
    },
    {
        "brand": "美的",
        "Sales": 999.0
    },
    {
        "brand": "美的",
        "Sales": 2099.0
    },
    {
        "brand": "美的",
        "Sales": 4699.0
    },
    {
        "brand": "美的",
        "Sales": 17899.0
    },
    {
        "brand": "美的",
        "Sales": 4599.0
    },
    {
        "brand": "美的",
        "Sales": 4999.0
    },
    {
        "brand": "美的",
        "Sales": 2299.0
    },
    {
        "brand": "美的",
        "Sales": 2149.0
    },
    {
        "brand": "美的",
        "Sales": 4899.0
    },
    {
        "brand": "美的",
        "Sales": 10696.0
    },
    {
        "brand": "美的",
        "Sales": 3099.0
    },
    {
        "brand": "美的",
        "Sales": 1999.0
    },
    {
        "brand": "美的",
        "Sales": 3500.0
    },
    {
        "brand": "美的",
        "Sales": 6599.0
    },
    {
        "brand": "美的",
        "Sales": 2099.0
    },
    {
        "brand": "美的",
        "Sales": 8799.0
    },
    {
        "brand": "美的",
        "Sales": 2799.0
    },
    {
        "brand": "美的",
        "Sales": 9997.0
    },
    {
        "brand": "美的",
        "Sales": 4499.0
    },
    {
        "brand": "美的",
        "Sales": 12090.0
    },
    {
        "brand": "美的",
        "Sales": 3099.0
    },
    {
        "brand": "美的",
        "Sales": 11999.0
    },
    {
        "brand": "美的",
        "Sales": 2130.0
    },
    {
        "brand": "美的",
        "Sales": 6899.0
    },
    {
        "brand": "美的",
        "Sales": 2299.0
    },
    {
        "brand": "美的",
        "Sales": 2149.0
    },
    {
        "brand": "美的",
        "Sales": 2299.0
    },
    {
        "brand": "美的",
        "Sales": 12846.0
    },
    {
        "brand": "美的",
        "Sales": 12696.0
    },
    {
        "brand": "美的",
        "Sales": 6599.0
    },
    {
        "brand": "美的",
        "Sales": 4399.0
    },
    {
        "brand": "美的",
        "Sales": 2299.0
    },
    {
        "brand": "美的",
        "Sales": 1199.0
    },
    {
        "brand": "美的",
        "Sales": 4699.0
    },
    {
        "brand": "美的",
        "Sales": 8999.0
    },
    {
        "brand": "美的",
        "Sales": 5999.0
    },
    {
        "brand": "美的",
        "Sales": 5699.0
    },
    {
        "brand": "美的",
        "Sales": 7999.0
    },
    {
        "brand": "美的",
        "Sales": 2299.0
    },
    {
        "brand": "美的",
        "Sales": 11696.0
    },
    {
        "brand": "美的",
        "Sales": 1699.0
    },
    {
        "brand": "美的",
        "Sales": 4899.0
    },
    {
        "brand": "美的",
        "Sales": 16000.0
    },
    {
        "brand": "美的",
        "Sales": 1204.0
    },
    {
        "brand": "美的",
        "Sales": 9748.0
    },
    {
        "brand": "美的",
        "Sales": 4549.0
    },
    {
        "brand": "美的",
        "Sales": 7173.6
    },
    {
        "brand": "美的",
        "Sales": 3599.0
    },
    {
        "brand": "美的",
        "Sales": 2599.0
    },
    {
        "brand": "美的",
        "Sales": 2499.0
    },
    {
        "brand": "美的",
        "Sales": 3699.0
    },
    {
        "brand": "美的",
        "Sales": 4599.0
    },
    {
        "brand": "美的",
        "Sales": 10397.0
    },
    {
        "brand": "美的",
        "Sales": 2599.0
    },
    {
        "brand": "美的",
        "Sales": 700.0
    },
    {
        "brand": "美的",
        "Sales": 5165.63
    },
    {
        "brand": "美的",
        "Sales": 5999.0
    },
    {
        "brand": "美的",
        "Sales": 7999.0
    },
    {
        "brand": "美的",
        "Sales": 7199.0
    },
    {
        "brand": "美的",
        "Sales": 1599.0
    },
    {
        "brand": "美的",
        "Sales": 4199.0
    },
    {
        "brand": "美的",
        "Sales": 2099.0
    },
    {
        "brand": "美的",
        "Sales": 3918.75
    },
    {
        "brand": "美的",
        "Sales": 2299.0
    },
    {
        "brand": "美的",
        "Sales": 5999.0
    },
    {
        "brand": "美的",
        "Sales": 8999.0
    },
    {
        "brand": "美的",
        "Sales": 6275.0
    },
    {
        "brand": "荣事达",
        "Sales": 2499.0
    },
    {
        "brand": "荣事达",
        "Sales": 1559.0
    },
    {
        "brand": "荣事达",
        "Sales": 4009.0
    },
    {
        "brand": "荣事达",
        "Sales": 1609.0
    },
    {
        "brand": "荣事达",
        "Sales": 2309.0
    },
    {
        "brand": "荣事达",
        "Sales": 1329.0
    },
    {
        "brand": "荣事达",
        "Sales": 1329.0
    },
    {
        "brand": "荣事达",
        "Sales": 699.0
    },
    {
        "brand": "荣事达",
        "Sales": 1349.0
    },
    {
        "brand": "荣事达",
        "Sales": 999.0
    },
    {
        "brand": "荣事达",
        "Sales": 1319.0
    },
    {
        "brand": "荣事达",
        "Sales": 1499.0
    },
    {
        "brand": "荣事达",
        "Sales": 1459.0
    },
    {
        "brand": "荣事达",
        "Sales": 1329.0
    },
    {
        "brand": "荣事达",
        "Sales": 1099.0
    },
    {
        "brand": "荣事达",
        "Sales": 300.0
    },
    {
        "brand": "荣事达",
        "Sales": 4990.0
    },
    {
        "brand": "荣事达",
        "Sales": 3042.0
    },
    {
        "brand": "荣事达",
        "Sales": 1979.0
    },
    {
        "brand": "荣事达",
        "Sales": 1149.0
    },
    {
        "brand": "荣事达",
        "Sales": 1309.0
    },
    {
        "brand": "荣事达",
        "Sales": 1509.0
    },
    {
        "brand": "荣事达",
        "Sales": 1708.0
    },
    {
        "brand": "荣事达",
        "Sales": 1309.0
    },
    {
        "brand": "荣事达",
        "Sales": 1169.0
    },
    {
        "brand": "荣事达",
        "Sales": 1309.0
    },
    {
        "brand": "荣事达",
        "Sales": 1479.0
    },
    {
        "brand": "荣事达",
        "Sales": 1499.0
    },
    {
        "brand": "荣事达",
        "Sales": 1309.0
    },
    {
        "brand": "荣事达",
        "Sales": 1329.0
    },
    {
        "brand": "荣事达",
        "Sales": 899.0
    },
    {
        "brand": "荣事达",
        "Sales": 2949.0
    },
    {
        "brand": "荣事达",
        "Sales": 739.0
    },
    {
        "brand": "荣事达",
        "Sales": 1499.0
    },
    {
        "brand": "荣事达",
        "Sales": 1249.0
    },
    {
        "brand": "荣事达",
        "Sales": 999.0
    },
    {
        "brand": "荣事达",
        "Sales": 1469.0
    },
    {
        "brand": "荣事达",
        "Sales": 1139.0
    },
    {
        "brand": "荣事达",
        "Sales": 2199.0
    },
    {
        "brand": "荣事达",
        "Sales": 1399.0
    },
    {
        "brand": "荣事达",
        "Sales": 700.0
    },
    {
        "brand": "荣事达",
        "Sales": 1579.0
    },
    {
        "brand": "荣事达",
        "Sales": 1479.0
    },
    {
        "brand": "荣事达",
        "Sales": 1299.0
    },
    {
        "brand": "荣事达",
        "Sales": 1309.0
    },
    {
        "brand": "荣事达",
        "Sales": 1299.0
    },
    {
        "brand": "荣事达",
        "Sales": 1999.0
    },
    {
        "brand": "荣事达",
        "Sales": 1599.0
    },
    {
        "brand": "荣事达",
        "Sales": 1699.0
    },
    {
        "brand": "荣事达",
        "Sales": 1339.0
    },
    {
        "brand": "荣事达",
        "Sales": 1359.0
    },
    {
        "brand": "荣事达",
        "Sales": 1499.0
    },
    {
        "brand": "荣事达",
        "Sales": 3509.0
    },
    {
        "brand": "荣事达",
        "Sales": 1109.0
    },
    {
        "brand": "荣事达",
        "Sales": 1899.0
    },
    {
        "brand": "荣事达",
        "Sales": 3914.0
    },
    {
        "brand": "荣事达",
        "Sales": 899.0
    },
    {
        "brand": "荣事达",
        "Sales": 1779.0
    },
    {
        "brand": "荣事达",
        "Sales": 3109.0
    },
    {
        "brand": "荣事达",
        "Sales": 3699.0
    },
    {
        "brand": "荣事达",
        "Sales": 1499.0
    },
    {
        "brand": "荣事达",
        "Sales": 2309.0
    },
    {
        "brand": "荣事达",
        "Sales": 3009.0
    },
    {
        "brand": "荣事达",
        "Sales": 1309.0
    },
    {
        "brand": "荣事达",
        "Sales": 1299.0
    },
    {
        "brand": "荣事达",
        "Sales": 1149.0
    },
    {
        "brand": "荣事达",
        "Sales": 4009.0
    },
    {
        "brand": "荣事达",
        "Sales": 1499.0
    },
    {
        "brand": "荣事达",
        "Sales": 1559.0
    },
    {
        "brand": "荣事达",
        "Sales": 1699.0
    },
    {
        "brand": "荣事达",
        "Sales": 1529.0
    },
    {
        "brand": "荣事达",
        "Sales": 1299.0
    },
    {
        "brand": "荣事达",
        "Sales": 1709.0
    },
    {
        "brand": "荣事达",
        "Sales": 1419.0
    },
    {
        "brand": "荣事达",
        "Sales": 1469.0
    },
    {
        "brand": "荣事达",
        "Sales": 1259.0
    },
    {
        "brand": "荣事达",
        "Sales": 4109.0
    },
    {
        "brand": "荣事达",
        "Sales": 1329.0
    },
    {
        "brand": "荣事达",
        "Sales": 2309.0
    },
    {
        "brand": "荣事达",
        "Sales": 1339.0
    },
    {
        "brand": "荣事达",
        "Sales": 1099.0
    },
    {
        "brand": "荣事达",
        "Sales": 3709.0
    },
    {
        "brand": "荣事达",
        "Sales": 1329.0
    },
    {
        "brand": "荣事达",
        "Sales": 3709.0
    },
    {
        "brand": "荣事达",
        "Sales": 1319.0
    },
    {
        "brand": "荣事达",
        "Sales": 1249.0
    },
    {
        "brand": "荣事达",
        "Sales": 1308.0
    },
    {
        "brand": "荣事达",
        "Sales": 1449.0
    },
    {
        "brand": "荣事达",
        "Sales": 1109.0
    },
    {
        "brand": "荣事达",
        "Sales": 1489.0
    },
    {
        "brand": "荣事达",
        "Sales": 713.0
    },
    {
        "brand": "荣事达",
        "Sales": 1299.0
    },
    {
        "brand": "荣事达",
        "Sales": 3509.0
    },
    {
        "brand": "荣事达",
        "Sales": 1299.0
    },
    {
        "brand": "荣事达",
        "Sales": 1479.0
    },
    {
        "brand": "荣事达",
        "Sales": 799.0
    },
    {
        "brand": "荣事达",
        "Sales": 1299.0
    },
    {
        "brand": "荣事达",
        "Sales": 1399.0
    },
    {
        "brand": "荣事达",
        "Sales": 1459.0
    },
    {
        "brand": "荣事达",
        "Sales": 699.0
    },
    {
        "brand": "荣事达",
        "Sales": 799.0
    },
    {
        "brand": "荣事达",
        "Sales": 1863.0
    },
    {
        "brand": "荣事达",
        "Sales": 2499.0
    },
    {
        "brand": "荣事达",
        "Sales": 1399.0
    },
    {
        "brand": "荣事达",
        "Sales": 3709.0
    },
    {
        "brand": "荣事达",
        "Sales": 3309.0
    },
    {
        "brand": "荣事达",
        "Sales": 1439.0
    },
    {
        "brand": "荣事达",
        "Sales": 1599.0
    },
    {
        "brand": "荣事达",
        "Sales": 1409.0
    },
    {
        "brand": "荣事达",
        "Sales": 1469.0
    },
    {
        "brand": "荣事达",
        "Sales": 1399.0
    },
    {
        "brand": "荣事达",
        "Sales": 3679.0
    },
    {
        "brand": "荣事达",
        "Sales": 1459.0
    },
    {
        "brand": "荣事达",
        "Sales": 699.0
    },
    {
        "brand": "荣事达",
        "Sales": 599.0
    },
    {
        "brand": "荣事达",
        "Sales": 1309.0
    },
    {
        "brand": "荣事达",
        "Sales": 1499.0
    },
    {
        "brand": "荣事达",
        "Sales": 1209.0
    },
    {
        "brand": "荣事达",
        "Sales": 899.0
    },
    {
        "brand": "荣事达",
        "Sales": 899.0
    },
    {
        "brand": "荣事达",
        "Sales": 3099.0
    },
    {
        "brand": "荣事达",
        "Sales": 5380.0
    },
    {
        "brand": "荣事达",
        "Sales": 3109.0
    },
    {
        "brand": "荣事达",
        "Sales": 1339.0
    },
    {
        "brand": "荣事达",
        "Sales": 1809.0
    },
    {
        "brand": "荣事达",
        "Sales": 1369.0
    },
    {
        "brand": "荣事达",
        "Sales": 1499.0
    },
    {
        "brand": "荣事达",
        "Sales": 2179.0
    },
    {
        "brand": "荣事达",
        "Sales": 1259.0
    },
    {
        "brand": "荣事达",
        "Sales": 3999.0
    },
    {
        "brand": "荣事达",
        "Sales": 1709.0
    },
    {
        "brand": "荣事达",
        "Sales": 1459.0
    },
    {
        "brand": "荣事达",
        "Sales": 799.0
    },
    {
        "brand": "荣事达",
        "Sales": 1589.0
    },
    {
        "brand": "荣事达",
        "Sales": 3009.0
    },
    {
        "brand": "荣事达",
        "Sales": 1009.0
    },
    {
        "brand": "荣事达",
        "Sales": 1889.0
    },
    {
        "brand": "荣事达",
        "Sales": 3009.0
    },
    {
        "brand": "荣事达",
        "Sales": 4899.0
    },
    {
        "brand": "荣事达",
        "Sales": 1549.0
    },
    {
        "brand": "荣事达",
        "Sales": 2499.0
    },
    {
        "brand": "荣事达",
        "Sales": 1599.0
    },
    {
        "brand": "荣事达",
        "Sales": 1399.0
    },
    {
        "brand": "荣事达",
        "Sales": 1439.0
    },
    {
        "brand": "荣事达",
        "Sales": 1589.0
    },
    {
        "brand": "荣事达",
        "Sales": 1449.0
    },
    {
        "brand": "荣事达",
        "Sales": 3299.0
    },
    {
        "brand": "荣事达",
        "Sales": 1199.0
    },
    {
        "brand": "荣事达",
        "Sales": 1249.0
    },
    {
        "brand": "荣事达",
        "Sales": 1109.0
    },
    {
        "brand": "荣事达",
        "Sales": 1409.0
    },
    {
        "brand": "荣事达",
        "Sales": 1809.0
    },
    {
        "brand": "荣事达",
        "Sales": 1809.0
    },
    {
        "brand": "荣事达",
        "Sales": 6099.0
    },
    {
        "brand": "荣事达",
        "Sales": 1559.0
    },
    {
        "brand": "荣事达",
        "Sales": 1109.0
    },
    {
        "brand": "荣事达",
        "Sales": 1109.0
    },
    {
        "brand": "荣事达",
        "Sales": 1439.0
    },
    {
        "brand": "荣事达",
        "Sales": 1009.0
    },
    {
        "brand": "荣事达",
        "Sales": 3009.0
    },
    {
        "brand": "荣事达",
        "Sales": 1599.0
    },
    {
        "brand": "荣事达",
        "Sales": 1259.0
    },
    {
        "brand": "荣事达",
        "Sales": 3009.0
    },
    {
        "brand": "荣事达",
        "Sales": 999.0
    },
    {
        "brand": "荣事达",
        "Sales": 1999.0
    },
    {
        "brand": "荣事达",
        "Sales": 1299.0
    },
    {
        "brand": "荣事达",
        "Sales": 699.0
    },
    {
        "brand": "荣事达",
        "Sales": 1399.0
    },
    {
        "brand": "荣事达",
        "Sales": 1599.0
    },
    {
        "brand": "荣事达",
        "Sales": 1589.0
    },
    {
        "brand": "荣事达",
        "Sales": 1329.0
    },
    {
        "brand": "荣事达",
        "Sales": 1329.0
    },
    {
        "brand": "荣事达",
        "Sales": 2769.0
    },
    {
        "brand": "荣事达",
        "Sales": 1489.0
    },
    {
        "brand": "荣事达",
        "Sales": 1099.0
    },
    {
        "brand": "荣事达",
        "Sales": 6699.0
    },
    {
        "brand": "荣事达",
        "Sales": 729.0
    },
    {
        "brand": "荣事达",
        "Sales": 3099.0
    },
    {
        "brand": "荣事达",
        "Sales": 1779.0
    },
    {
        "brand": "荣事达",
        "Sales": 2079.0
    },
    {
        "brand": "荣事达",
        "Sales": 1809.0
    },
    {
        "brand": "荣事达",
        "Sales": 1399.0
    },
    {
        "brand": "荣事达",
        "Sales": 1709.0
    },
    {
        "brand": "荣事达",
        "Sales": 1209.0
    },
    {
        "brand": "荣事达",
        "Sales": 4009.0
    },
    {
        "brand": "荣事达",
        "Sales": 3009.0
    },
    {
        "brand": "荣事达",
        "Sales": 2309.0
    },
    {
        "brand": "荣事达",
        "Sales": 1199.0
    },
    {
        "brand": "荣事达",
        "Sales": 1309.0
    },
    {
        "brand": "荣事达",
        "Sales": 1479.0
    },
    {
        "brand": "荣事达",
        "Sales": 899.0
    },
    {
        "brand": "荣事达",
        "Sales": 1459.0
    },
    {
        "brand": "荣事达",
        "Sales": 3709.0
    },
    {
        "brand": "荣事达",
        "Sales": 1499.0
    },
    {
        "brand": "荣事达",
        "Sales": 1499.0
    },
    {
        "brand": "荣事达",
        "Sales": 1169.0
    },
    {
        "brand": "荣事达",
        "Sales": 699.0
    },
    {
        "brand": "荣事达",
        "Sales": 1439.0
    },
    {
        "brand": "荣事达",
        "Sales": 1359.0
    },
    {
        "brand": "荣事达",
        "Sales": 1299.0
    },
    {
        "brand": "荣事达",
        "Sales": 1429.0
    },
    {
        "brand": "荣事达",
        "Sales": 1559.0
    },
    {
        "brand": "荣事达",
        "Sales": 1249.0
    },
    {
        "brand": "荣事达",
        "Sales": 1299.0
    },
    {
        "brand": "荣事达",
        "Sales": 2309.0
    },
    {
        "brand": "荣事达",
        "Sales": 3009.0
    },
    {
        "brand": "荣事达",
        "Sales": 1339.0
    },
    {
        "brand": "荣事达",
        "Sales": 1329.0
    },
    {
        "brand": "荣事达",
        "Sales": 1878.0
    },
    {
        "brand": "荣事达",
        "Sales": 1559.0
    },
    {
        "brand": "荣事达",
        "Sales": 2800.0
    },
    {
        "brand": "荣事达",
        "Sales": 1409.0
    },
    {
        "brand": "荣事达",
        "Sales": 1979.0
    },
    {
        "brand": "荣事达",
        "Sales": 1699.0
    },
    {
        "brand": "荣事达",
        "Sales": 1399.0
    },
    {
        "brand": "荣事达",
        "Sales": 1479.0
    },
    {
        "brand": "荣事达",
        "Sales": 3309.0
    },
    {
        "brand": "荣事达",
        "Sales": 1299.0
    },
    {
        "brand": "荣事达",
        "Sales": 2609.0
    },
    {
        "brand": "荣事达",
        "Sales": 1199.0
    },
    {
        "brand": "荣事达",
        "Sales": 3309.0
    },
    {
        "brand": "荣事达",
        "Sales": 1229.0
    },
    {
        "brand": "荣事达",
        "Sales": 1479.0
    },
    {
        "brand": "荣事达",
        "Sales": 1499.0
    },
    {
        "brand": "荣事达",
        "Sales": 1399.0
    },
    {
        "brand": "荣事达",
        "Sales": 1599.0
    },
    {
        "brand": "荣事达",
        "Sales": 1599.0
    },
    {
        "brand": "荣事达",
        "Sales": 4009.0
    },
    {
        "brand": "荣事达",
        "Sales": 999.0
    },
    {
        "brand": "荣事达",
        "Sales": 1309.0
    },
    {
        "brand": "荣事达",
        "Sales": 999.0
    },
    {
        "brand": "荣事达",
        "Sales": 1359.0
    },
    {
        "brand": "荣事达",
        "Sales": 2599.0
    },
    {
        "brand": "荣事达",
        "Sales": 1599.0
    },
    {
        "brand": "荣事达",
        "Sales": 999.0
    },
    {
        "brand": "荣事达",
        "Sales": 829.0
    },
    {
        "brand": "荣事达",
        "Sales": 1449.42
    },
    {
        "brand": "荣事达",
        "Sales": 1149.0
    },
    {
        "brand": "荣事达",
        "Sales": 1459.0
    },
    {
        "brand": "荣事达",
        "Sales": 2999.0
    },
    {
        "brand": "荣事达",
        "Sales": 1299.0
    },
    {
        "brand": "荣事达",
        "Sales": 1589.0
    },
    {
        "brand": "荣事达",
        "Sales": 2609.0
    },
    {
        "brand": "荣事达",
        "Sales": 1699.0
    },
    {
        "brand": "荣事达",
        "Sales": 814.0
    },
    {
        "brand": "荣事达",
        "Sales": 2499.0
    },
    {
        "brand": "荣事达",
        "Sales": 849.0
    },
    {
        "brand": "荣事达",
        "Sales": 1329.0
    },
    {
        "brand": "荣事达",
        "Sales": 1489.0
    },
    {
        "brand": "荣事达",
        "Sales": 1479.0
    },
    {
        "brand": "荣事达",
        "Sales": 1259.0
    },
    {
        "brand": "荣事达",
        "Sales": 2159.0
    },
    {
        "brand": "荣事达",
        "Sales": 1299.0
    },
    {
        "brand": "荣事达",
        "Sales": 1499.0
    },
    {
        "brand": "荣事达",
        "Sales": 3709.0
    },
    {
        "brand": "荣事达",
        "Sales": 1609.0
    },
    {
        "brand": "荣事达",
        "Sales": 3009.0
    },
    {
        "brand": "荣事达",
        "Sales": 3099.0
    },
    {
        "brand": "荣事达",
        "Sales": 799.0
    },
    {
        "brand": "荣事达",
        "Sales": 1099.0
    },
    {
        "brand": "荣事达",
        "Sales": 1499.0
    },
    {
        "brand": "荣事达",
        "Sales": 799.0
    },
    {
        "brand": "荣事达",
        "Sales": 1439.0
    },
    {
        "brand": "荣事达",
        "Sales": 1935.0
    },
    {
        "brand": "荣事达",
        "Sales": 2609.0
    },
    {
        "brand": "荣事达",
        "Sales": 1099.0
    },
    {
        "brand": "荣事达",
        "Sales": 1599.0
    },
    {
        "brand": "荣事达",
        "Sales": 1809.0
    },
    {
        "brand": "荣事达",
        "Sales": 1489.0
    },
    {
        "brand": "荣事达",
        "Sales": 1459.0
    },
    {
        "brand": "荣事达",
        "Sales": 1259.0
    },
    {
        "brand": "荣事达",
        "Sales": 1329.0
    },
    {
        "brand": "荣事达",
        "Sales": 1209.0
    },
    {
        "brand": "荣事达",
        "Sales": 1408.0
    },
    {
        "brand": "荣事达",
        "Sales": 3009.0
    },
    {
        "brand": "荣事达",
        "Sales": 1599.0
    },
    {
        "brand": "荣事达",
        "Sales": 4009.0
    },
    {
        "brand": "荣事达",
        "Sales": 1609.0
    },
    {
        "brand": "荣事达",
        "Sales": 1299.0
    },
    {
        "brand": "荣事达",
        "Sales": 1449.0
    },
    {
        "brand": "荣事达",
        "Sales": 1309.0
    },
    {
        "brand": "荣事达",
        "Sales": 1109.0
    },
    {
        "brand": "荣事达",
        "Sales": 1319.0
    },
    {
        "brand": "荣事达",
        "Sales": 1099.0
    },
    {
        "brand": "荣事达",
        "Sales": 999.0
    },
    {
        "brand": "荣事达",
        "Sales": 3309.0
    },
    {
        "brand": "荣事达",
        "Sales": 1409.0
    },
    {
        "brand": "荣事达",
        "Sales": 1509.0
    },
    {
        "brand": "荣事达",
        "Sales": 1309.0
    },
    {
        "brand": "荣事达",
        "Sales": 1099.0
    },
    {
        "brand": "荣事达",
        "Sales": 3709.0
    },
    {
        "brand": "荣事达",
        "Sales": 1579.0
    },
    {
        "brand": "荣事达",
        "Sales": 3199.0
    },
    {
        "brand": "荣事达",
        "Sales": 999.0
    },
    {
        "brand": "荣事达",
        "Sales": 3464.0
    },
    {
        "brand": "荣事达",
        "Sales": 1499.0
    },
    {
        "brand": "荣事达",
        "Sales": 3009.0
    },
    {
        "brand": "荣事达",
        "Sales": 2609.0
    },
    {
        "brand": "荣事达",
        "Sales": 1309.0
    },
    {
        "brand": "荣事达",
        "Sales": 1608.0
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
      text: '品牌价格箱线图'
    },
    tooltip: {
      trigger: 'axis',
      confine: true
    },
    xAxis: {
      name: '价格',
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
        name: '箱线图',
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
        name: '商品分布详情',
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
          x: '价格',
          y: 'brand',
          tooltip: ['Sales']
        }
      }
    ]
  };
  myChart_4.setOption(option_4);
}

run(_rawData);

option_4 && myChart_4.setOption(option_4);
