var myChart = echarts.init(document.getElementById('gonggongfuwu'));
const colors = ['#ED7D31','#002FA7'];
// 指定图表的配置项和数据
    option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#ED7D31'
            }
        }
    },
    legend: {
        data: ['交通', '文化', '消费', '医疗', '教育', '住房'],
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['南京', '苏州', '杭州', '济南', '沈阳', '青岛', '佛山', '唐山', '徐州', '厦门']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '交通',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            color:'#ED7D31',
            emphasis: {
                focus: 'series'
            },
            data: [52.2, 44.2, 62.22, 33.71, 46.97,36.62, 30.99, 23.39, 34.47,47.75]
        },
        {
            name: '文化',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [55.25, 76.2, 55.58, 42.25, 43.98,26.46, 32.66, 17.35, 14.26,30.71]
        },
        {
            name: '消费',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            // color:'#002FA7',
            emphasis: {
                focus: 'series'
            },
            data: [60.37,63.98, 64.6, 50.02, 45.2,51.79, 48.08, 17.24, 32.46,47.72]
        },
        {
            name: '医疗',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [48.79,28.39, 53.49, 49.87, 44.94,39.27, 13.56, 33.23, 32.56,24.55]
        },
        {
            name: '文化',
            type: 'line',
            stack: 'Total',
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [56.5,40.45, 49.48,43.92, 34.74,49.43, 23.66,41.26, 27.7,30.64]
        },
        {
            name: '住房',
            type: 'line',
            stack: 'Total',
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [66.48,87.43, 54.86,86.56, 89.9,80.47, 91.55,91.6, 85.45,42.97]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);