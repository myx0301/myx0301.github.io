var myChart=echarts.init(document.getElementById('GDP'));
option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['乐山', '宜宾', '邯郸', '唐山', '连云港', '淄博', '厦门', '济南', '临沂', '徐州', '沈阳', '南京', '苏州', '杭州', '佛山', '青岛']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
   toolbox: {
     feature: {
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
             }
           },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['2014', '2015', '2016', '2017', '2018', '2019', '2020']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: '乐山',
        type: 'line',
        stack: 'Total',
        data: [37125, 39973, 43110, 58714, 49397, 56999, 63259]
    },
        {
            name: '宜宾',
            type: 'line',
            stack: 'Total',
            data: [32318, 34060, 36735, 39271, 44604, 57003, 61182]
        },
        {
            name: '邯郸',
            type: 'line',
            stack: 'Total',
            data: [32943, 33450, 35265, 37796, 36289, 36546, 38623]
        },
        {
            name: '唐山',
            type: 'line',
            stack: 'Total',
            data: [80450, 78398, 81239, 89233, 87855, 86667, 93470]
        },
        {
            name: '淄博',
            type: 'line',
            stack: 'Total',
            data: [87531, 89235, 94587, 113450, 107720, 77510, 78092]
        },
        {
            name: '厦门',
            type: 'line',
            stack: 'Total',
            data: [80450, 78398, 81239, 89233, 87855, 86667, 93470]
        },
        {
            name: '济南',
            type: 'line',
            stack: 'Total',
            data: [80450, 78398, 81239, 89233, 87855, 86667, 93470]
        },
        {
            name: '临沂',
            type: 'line',
            stack: 'Total',
            data: [80450, 78398, 81239, 89233, 87855, 86667, 93470]
        },
        {
            name: '徐州',
            type: 'line',
            stack: 'Total',
            data: [80450, 78398, 81239, 89233, 87855, 86667, 93470]
        },
        {
            name: '沈阳',
            type: 'line',
            stack: 'Total',
            data: [80450, 78398, 81239, 89233, 87855, 86667, 93470]
        },
        {
            name: '南京',
            type: 'line',
            stack: 'Total',
            data: [80450, 78398, 81239, 89233, 87855, 86667, 93470]
        },
        {
            name: '苏州',
            type: 'line',
            stack: 'Total',
            data: [80450, 78398, 81239, 89233, 87855, 86667, 93470]
        },
        {
            name: '杭州',
            type: 'line',
            stack: 'Total',
            data: [80450, 78398, 81239, 89233, 87855, 86667, 93470]
        },
        {
            name: '佛山',
            type: 'line',
            stack: 'Total',
            data: [80450, 78398, 81239, 89233, 87855, 86667, 93470]
        },
        {
            name: '青岛',
            type: 'line',
            stack: 'Total',
            data: [80450, 78398, 81239, 89233, 87855, 86667, 93470]
        },
        {
            name: '连云港',
            type: 'line',
            stack: 'Total',
            data: [44277, 48416, 52987, 69127, 61332, 69523, 71303]
        },
        {
            name: '厦门',
            type: 'line',
            stack: 'Total',
            data: [86832.0, 90379.0, 97282.0, 109753, 118015.0, 142739.0, 123962.0]
        },
        {
            name: '济南',
            type: 'line',
            stack: 'Total',
            data: [82052.0, 85919.0, 90999.0, 110114, 106302.0, 106416.0, 110199.0]
        },
        {
            name: '临沂',
            type: 'line',
            stack: 'Total',
            data: [35032.0, 36656.0, 38803.0, 66256, 44534.0, 43213.0, 43582.0]
        },
        {
            name: '徐州',
            type: 'line',
            stack: 'Total',
            data: [57655.0, 61511.0, 66845.0, 103339, 76915.0, 81138.0, 80673.0]
        },
        {
            name: '沈阳',
            type: 'line',
            stack: 'Total',
            data: [85816.0, 87734.0, 66893.0, 74567, 75766.0, 77777.0, 75570.0]
        },
        {
            name: '南京',
            type: 'line',
            stack: 'Total',
            data: [107545.0, 118171.0, 127264.0, 141103, 152886.0, 165681.0, 159322.0]
        },
        {
            name: '苏州',
            type: 'line',
            stack: 'Total',
            data: [129925.0, 136702.0, 145556.0, 148427, 173765.0, 179174.0, 158466.0]
        },
        {
            name: '杭州',
            type: 'line',
            stack: 'Total',
            data: [103813.0, 112230.0, 124286.0, 148794, 140180.0, 152465.0, 136617.0]
        },
        {
            name: '佛山',
            type: 'line',
            stack: 'Total',
            data: [101617.0, 108299.0, 115891.0, 124324, 127691.0, 133850.0, 114157.0]
        },
        {
            name: '青岛',
            type: 'line',
            stack: 'Total',
            data: [96524.0, 102519.0, 109407.0, 136667, 128459.0, 124282.0, 123828.0]
        }
    ]
};
myChart.setOption(option);
