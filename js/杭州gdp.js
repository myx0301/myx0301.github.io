var myChart = echarts.init(document.getElementById('杭州gdp'));

option = {
    color: colors,
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    grid: {
        right: '20%',
        left:100
    },
    toolbox: {
        feature: {
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    legend: {
        data: ['Evaporation', 'Precipitation', 'Temperature']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            // prettier-ignore
            data: ['2019', '2020', '2021']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '拥堵指数',
            position: 'right',
            alignTicks: true,
            axisLine: {
                show: true,
                lineStyle: {
                    color:'#002FA7'
                }
            },
            axisLabel: {
                formatter: '{value} min'
            },
            max:40
        },
        {
            type: 'value',
            name: 'GDP',
            position: 'left',
            alignTicks: true,
            axisLine: {
                show: true,
                lineStyle: {
                    color:'#ED7D31'
                }
            },
            axisLabel: {
                formatter: '{value} 亿元'
            },
            max:18000,
            min:0
        }
    ],
    series: [
        {
            name: 'jam',
            type: 'line',
            color:'#002FA7',
            itemStyle: {
                normal: {

                    lineStyle:{
                        width:5//设置线条粗细
                    }
                }
            },

            data: [
                35, 34.9, 37.7
            ]
        },
        {
            name: 'GDP',
            type: 'bar',
            color:'#ED7D31',
            barWidth:30,
            yAxisIndex: 1,
            data: [
                15373, 16106, 17500
            ]
        },
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
