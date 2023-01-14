var myChart = echarts.init(document.getElementById('gongjiao'));
    option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {},
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: [
                '杭州',
                '南京',
                '厦门',
                '青岛',
                '沈阳',
                '佛山',
                '苏州',
                '济南',
                '徐州',
                '唐山',
                '邯郸',
                '淄博',
                '临沂',
                '乐山',
                '连云港',
                '宜宾'
            ]
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'total',
            type: 'bar',
            color:'#002FA7',
            emphasis: {
                focus: 'series'
            },
            data: [
                75939, 40353, 34866, 34582, 33234, 31831, 30478, 21519, 17026, 16596,
                16039, 10548, 9079, 3443, 3389, 3104
            ]
        },
        {
            name: '2017',
            type: 'bar',
            stack: 'Ad',
            color:'#A23D24',
            emphasis: {
                focus: 'series'
            },
            data: [
                56,
                -544,
                -426 - 9822,
                4645,
                4583,
                -5302,
                -4032,
                3619,
                3348,
                -2914,
                838,
                4459,
                7363,
                1109,
                -782,
                426
            ]
        },
        {
            name: '2018',
            type: 'bar',
            stack: 'Ad',
            color:'#ED7D31',
            emphasis: {
                focus: 'series'
            },
            data: [
                -2466, 1052, 3770, -3427, -5936, 3471, 2993, 0, -54, 685, -116, -391,
                4403, -543, -2312, -603
            ]
        },
        {
            name: '2019',
            type: 'bar',
            stack: 'Ad',
            color:'#F3D13D',
            emphasis: {
                focus: 'series'
            },
            data: [
                58685, -2768, 2587, -14, 169, 1143, 2392, -7719, -4115, 537, -114, 2547,
                1057, -2, 1329, 413
            ]
        },
        {
            name: '2020',
            type: 'bar',
            stack: 'Ad',
            color:'#E9B100',
            emphasis: {
                focus: 'series'
            },
            data: [
                29542, 37424, 23926, 43325, 43033, 23598, 21745, 32152, 20357, 10915,
                8906, 7283, 4401, 3532, 4916, 3720
            ]
        }
    ]
};
myChart.setOption(option);