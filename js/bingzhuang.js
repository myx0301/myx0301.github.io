var myChart = echarts.init(document.getElementById('bingzhuang'));
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
    legend: {
        top: '5%',
        left: 'center'
    },
    series: [
        {
            name: '毕业生通勤时间意愿调查',
            type: 'pie',
            color:['#ED7D31',"#002FA7",'#6e9bc5','#FFE78F',
            ],
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: 40,
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 49.8, name: '30分钟到1小时' },
                { value: 10, name: '30分钟以内' },
                { value: 39.6, name: '1-1.5小时' },
                { value: 0.6, name: '1.5小时以上' },
            ]
        }
    ]
};
myChart.setOption(option);
