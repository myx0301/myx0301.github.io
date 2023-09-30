var myChart = echarts.init(document.getElementById('租房情况价格'));
option = {
   toolbox: {
     feature: {
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
             }
           },
    tooltip: {
        trigger: 'item'
    },
    color:['#ED7D31'],

    xAxis: {

        type: 'category',
        data: ['2000元以下', '2000-3000元', '3000-5000元', '5000元以上', ]
    },
    yAxis: {
        name:"占比%",
        type: 'value'
    },
    series: [
        {
            data: [46.6, 30.10, 17.48, 8.82, ],
            type: 'bar'

        }
    ]
};
myChart.setOption(option);
