var chartDom = document.getElementById('transform-example');
var myChart = echarts.init(chartDom);
var option;

// 加label字段的数据
const brand1Data = [
    {
        "value": [
            3799.0,
            1880
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3999.0,
            2036
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3999.0,
            1862
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            4399.0,
            1807
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3699.0,
            2428
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            2199.0,
            2041
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            1999.0,
            2799
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            1999.0,
            2680
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            1999.0,
            2437
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3998.0,
            2460
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3569.0,
            2615
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            1899.0,
            2155
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            2399.0,
            2647
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3799.0,
            2318
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            1899.0,
            1766
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            1899.0,
            1953
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3899.0,
            2593
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            2099.0,
            2089
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3599.0,
            1665
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            1999.0,
            2065
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            1899.0,
            1861
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            2099.0,
            1762
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            2399.0,
            2802
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3999.0,
            2250
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3499.0,
            2333
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3599.0,
            2716
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3687.0,
            1923
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            1988.0,
            1786
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3099.0,
            2505
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3299.0,
            1718
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3399.0,
            1715
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            2099.0,
            2109
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            1999.0,
            2080
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3099.0,
            2662
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3799.0,
            2332
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3999.0,
            2142
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            4199.0,
            2135
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            4399.0,
            2163
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3299.0,
            2638
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3599.0,
            2766
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            1899.0,
            2613
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3798.0,
            2137
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            2198.0,
            2580
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3599.0,
            2169
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            4399.0,
            2751
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3999.0,
            2179
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            4399.0,
            2046
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3797.0,
            1869
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            4399.0,
            1757
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            4199.0,
            2599
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            4299.0,
            2729
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3199.0,
            2497
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            1899.0,
            1633
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            4198.0,
            1811
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            2399.0,
            1780
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            2999.0,
            1698
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3749.0,
            1729
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3198.0,
            1794
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            4298.0,
            1730
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3498.0,
            1677
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            4399.0,
            2868
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            2345.0,
            1781
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3049.0,
            1813
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3449.0,
            1833
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3889.0,
            1706
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            2099.0,
            2835
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3969.0,
            1882
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3499.0,
            2832
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            1999.0,
            2611
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3199.0,
            1814
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            1899.0,
            2198
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            2799.0,
            2885
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            1999.0,
            2515
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3869.0,
            2310
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3599.0,
            2312
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3999.0,
            2226
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            4199.0,
            2766
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            1899.0,
            2355
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            4099.0,
            1720
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            2749.0,
            2569
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            2949.0,
            2118
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3699.0,
            2196
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            4099.0,
            2647
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3599.0,
            2808
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3599.0,
            2157
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3399.0,
            2890
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            1999.0,
            2126
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            2099.0,
            1787
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            1999.0,
            2833
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            2099.0,
            2633
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            1899.0,
            2644
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            4399.0,
            2134
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            4399.0,
            2479
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            4299.0,
            2577
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3199.0,
            2607
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3399.0,
            1746
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3599.0,
            1783
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            1899.0,
            2620
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            3399.0,
            2700
        ],
        "label": "\u5965\u514b\u65af"
    },
    {
        "value": [
            4399.0,
            2163
        ],
        "label": "\u5965\u514b\u65af"
    }
];

const brand2Data = [
    {
        "value": [
            2299.0,
            2587
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2299.0,
            1980
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            5099.0,
            2089
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2299.0,
            2738
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            3999.0,
            2123
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2299.0,
            1559
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2699.0,
            2097
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            3399.0,
            2232
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            4599.0,
            2318
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2599.0,
            2016
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            4999.0,
            2699
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            4999.0,
            2377
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2599.0,
            2415
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2299.0,
            2840
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            3999.0,
            2819
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            4999.0,
            2226
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            5599.0,
            1688
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            3599.0,
            1968
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            3599.0,
            2814
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2299.0,
            2653
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            5599.0,
            2119
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            4899.0,
            2413
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            4999.0,
            2620
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2299.0,
            2387
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            4299.0,
            2258
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2999.0,
            1611
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2799.0,
            1787
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            4499.0,
            2346
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            5599.0,
            2011
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            3999.0,
            1880
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            3599.0,
            1955
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            3599.0,
            1880
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2599.0,
            1871
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2899.0,
            2142
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2299.0,
            1597
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            4899.0,
            2596
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            5099.0,
            2625
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            5399.0,
            1591
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2299.0,
            2515
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2299.0,
            2340
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2599.0,
            2726
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2688.0,
            2755
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2599.0,
            2239
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2688.0,
            2762
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2599.0,
            1671
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2299.0,
            2750
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2299.0,
            1684
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2299.0,
            1703
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2299.0,
            1709
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            4999.0,
            1636
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            5399.0,
            2496
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2149.0,
            2127
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2299.0,
            2044
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2299.0,
            1559
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2299.0,
            2005
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            3999.0,
            1787
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2299.0,
            2702
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            3099.0,
            1754
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            5599.0,
            2397
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2299.0,
            1703
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2149.0,
            1697
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            4899.0,
            1993
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            4999.0,
            1999
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2149.0,
            1910
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2299.0,
            1639
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2299.0,
            1830
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2299.0,
            2840
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            3999.0,
            1762
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2299.0,
            2114
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2299.0,
            2597
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            4599.0,
            1998
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2299.0,
            1779
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2299.0,
            2049
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            3999.0,
            2324
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            3999.0,
            1616
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            3999.0,
            2260
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2599.0,
            2502
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2688.0,
            2080
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            3999.0,
            1845
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            4999.0,
            1930
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            4899.0,
            1990
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2799.0,
            2819
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            3999.0,
            2320
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            4999.0,
            2303
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2699.0,
            2405
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            4899.0,
            2098
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            5599.0,
            2515
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2399.0,
            2658
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2999.0,
            2674
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            3999.0,
            1746
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            4999.0,
            1956
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            4999.0,
            1929
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2149.0,
            2053
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2149.0,
            2785
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            5599.0,
            2597
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2149.0,
            1588
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            4989.0,
            1821
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2299.0,
            1956
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2699.0,
            1604
        ],
        "label": "\u7f8e\u7684"
    },
    {
        "value": [
            2299.0,
            1997
        ],
        "label": "\u7f8e\u7684"
    }
];

const brand3Data = [
    {
        "value": [
            2699.0,
            2732
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2999.0,
            2707
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2599.0,
            2629
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2599.0,
            2580
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            3699.0,
            2300
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            3399.0,
            2420
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2699.0,
            1824
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            3099.0,
            2439
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            5599.0,
            1966
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            5299.0,
            2331
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            5299.0,
            2008
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2669.0,
            1908
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            3399.0,
            2264
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            3099.0,
            2623
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2599.0,
            2725
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            3369.0,
            1881
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            3299.0,
            1887
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2699.0,
            2552
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2899.0,
            2289
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2699.0,
            1878
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2699.0,
            2402
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2699.0,
            2189
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2999.0,
            1967
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2699.0,
            2481
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2699.0,
            2435
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            3199.0,
            1980
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2499.0,
            2552
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2699.0,
            2402
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            5599.0,
            2028
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2499.0,
            2128
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2699.0,
            2478
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2699.0,
            2356
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            5599.0,
            2724
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            4599.0,
            2597
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2499.0,
            2258
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            5599.0,
            2025
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            5599.0,
            2596
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            4599.0,
            2683
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2499.0,
            2617
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2499.0,
            2032
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2699.0,
            2452
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2499.0,
            2349
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2699.0,
            2256
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            5599.0,
            2732
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            4599.0,
            2370
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            5599.0,
            2257
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2499.0,
            2279
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2699.0,
            1817
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2999.0,
            2377
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2499.0,
            2636
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2699.0,
            2044
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2699.0,
            2499
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2999.0,
            2036
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2499.0,
            2184
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2999.0,
            2382
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            5599.0,
            2230
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            5599.0,
            2710
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            4599.0,
            2617
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2499.0,
            2743
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            3399.0,
            2063
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            3399.0,
            2687
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            3199.0,
            1953
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2499.0,
            2498
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2499.0,
            2097
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2699.0,
            2171
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2599.0,
            2610
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2799.0,
            2663
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2499.0,
            2346
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2499.0,
            2053
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2699.0,
            2106
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            4599.0,
            2365
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            4799.0,
            2168
        ],
        "label": "\u683c\u529b"
    },
    {
        "value": [
            2699.0,
            1828
        ],
        "label": "\u683c\u529b"
    }
];

function calculateCostPerformance(data) {
    const maxSales = Math.max(...data.map(item => item.value[1]));
    const minPrice = Math.min(...data.map(item => item.value[0]));
    const performance = data.map(item => 0.7 * (item.value[1] / maxSales) + 0.3 * (minPrice / item.value[0]));
    const maxPerformance = Math.max(...performance);
    return performance.map(p => (p / maxPerformance).toFixed(2)); // 将性价比归一化到0到1之间
}

const brand1Performance = calculateCostPerformance(brand1Data);
const brand2Performance = calculateCostPerformance(brand2Data);
const brand3Performance = calculateCostPerformance(brand3Data);

const scatterOption = {
    xAxis: {
        type: 'value',
        scale: true,
        name: 'Price',
        nameLocation: 'middle',
        nameGap: 30
    },
    yAxis: {
        type: 'value',
        scale: true,
        name: 'Sales',
        nameLocation: 'middle',
        nameGap: 30
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            return params.data.label + ': (Price: ' + params.data.value[0] + ', Sales: ' + params.data.value[1] + ')';
        }
    },
    series: [
        {
            type: 'scatter',
            id: '奥克斯',
            dataGroupId: '奥克斯',
            universalTransition: {
                enabled: true,
                delay: function (idx, count) {
                    return Math.random() * 400;
                }
            },
            data: brand1Data,
            itemStyle: {
                color: '#5470c6'
            }
        },
        {
            type: 'scatter',
            id: '美的',
            dataGroupId: '美的',
            universalTransition: {
                enabled: true,
                delay: function (idx, count) {
                    return Math.random() * 400;
                }
            },
            data: brand2Data,
            itemStyle: {
                color: '#91cc75'
            }
        },
        {
            type: 'scatter',
            id: '格力',
            dataGroupId: '格力',
            universalTransition: {
                enabled: true,
                delay: function (idx, count) {
                    return Math.random() * 400;
                }
            },
            data: brand3Data,
            itemStyle: {
                color: '#fac858'
            }
        }
    ]
};

const barOption = {
    xAxis: {
        type: 'category',
        data: ['奥克斯', '美的', '格力']
    },
    yAxis: {
        type: 'value',
        max: 1,
        min: 0
    },
    series: [
        {
            type: 'bar',
            id: 'total',
            data: [
                {
                    value: brand1Performance.reduce((acc, val) => acc + parseFloat(val), 0) / brand1Performance.length,
                    groupId: '奥克斯',
                    itemStyle: {
                        color: '#5470c6'
                    }
                },
                {
                    value: brand2Performance.reduce((acc, val) => acc + parseFloat(val), 0) / brand2Performance.length,
                    groupId: '美的',
                    itemStyle: {
                        color: '#91cc75'
                    }
                },
                {
                    value: brand3Performance.reduce((acc, val) => acc + parseFloat(val), 0) / brand3Performance.length,
                    groupId: '格力',
                    itemStyle: {
                        color: '#fac858'
                    }
                }
            ],
            universalTransition: {
                enabled: true,
                seriesKey: ['奥克斯', '美的', '格力'],
                delay: function (idx, count) {
                    return Math.random() * 400;
                }
            }
        }
    ]
};

let currentOption = scatterOption;

function switchChartOption() {
    currentOption = currentOption === scatterOption ? barOption : scatterOption;
    myChart.setOption(currentOption, true);
}

myChart.on('click', function () {
    switchChartOption();
});

myChart.setOption(scatterOption);
window.addEventListener('resize', function () {
    myChart.resize();
});
