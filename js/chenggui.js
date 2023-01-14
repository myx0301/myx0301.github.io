var dom = document.getElementById('chart-container');
var myChart = echarts.init(dom, 'dark', {
    renderer: 'canvas',
    useDirtyRect: false
});
var app = {};

var option;

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data:['南京', '沈阳', '苏州', '杭州', '佛山', '青岛', '厦门', '济南', '徐州', '宜宾']
    },
    series: [
        {
            name: '地铁线路长度（公里）',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [182.2, 114.1, 210, 342, 53.9, 110, 98.4, 84.1, 64.1, '-']
        },
        {
            name: '市域快轨线路长度（公里）',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [244.4, '-', '-', '-', '-', 174.3, '-', '-', '-', '-']
        },
        {
            name: '有轨电车线路长度（公里）',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [16.7, 102.6, 44.2, '-', 16, 8.8, '-', '-', '-', '-']
        },
        {
            name: '电子导向胶轮系统线路长度（公里）',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: ['-', '-', '-', '-', '-', '-', '-', '-','-', 17.7]
        }
    ]
};

if (option && typeof option === 'object') {
    myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);