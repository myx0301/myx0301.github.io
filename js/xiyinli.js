var myChart=echarts.init(document.getElementById("xiyinli"));
let option = {
    tooltip: { show: false },
    grid: { left: 10, top: 10, bottom: 20, right: 10, containLabel: true },
    xAxis: {
        type: 'value',
        boundaryGap: false,
        max: 8, // Math.ceil(max / 4) * 5 || 10
        axisLine: { show: true, lineStyle: { color: '#ccc' } },
        axisTick: { show: false },
        axisLabel: { color: '#999' },
        splitLine: { lineStyle: { color: ['#CEEDFF'], type: [5, 8], dashOffset: 3 } },
    },
    yAxis: {
        type: 'category',
        data: ['苏州市', '杭州市', '佛⼭市', '南京市', '⻘岛市', '济南市', '厦⻔市', '沈阳市', '徐州市', '邯郸市', '临沂市', '唐⼭市', '宜宾市', '连云港市', '淄博市', '乐⼭市'],
        axisLine: { show: true, lineStyle: { color: '#ccc' } },
        axisTick: { length: 3 },
        axisLabel: { fontSize: 14, color: '#666', margin: 16, padding: 0 },
        inverse: true,
    },
    series: [
        {
            name: '数量',
            type: 'bar',
            showBackground: true,
            backgroundStyle: { color: 'rgba(82, 168, 255, 0.1)', borderRadius: [0, 8, 8, 0] },
            itemStyle: {
                color: '#52A8FF',
                normal: {
                    borderRadius: [0, 8, 8, 0],
                    color: function (params) {
                        // 定义一个颜色集合
                        let colorList = [
                            '#d36b4f',
                            '#ec6415',
                            '#fb8718',
                            '#eb8855',
                            '#fca835',
                            '#f7bf0d',
                            '#f7b336',
                            '#f8af5b',
                            '#f8ac69',
                            '#fdb279',
                            '#fdc88c',
                            '#f5cb9b',
                            '#fcd9a1',
                            '#f2dbb9',
                            '#f6df81',
                            '#fce1a0'
                        ];
                        // 对每个bar显示一种颜色
                        return colorList[params.dataIndex];
                    },
                },
            },
            barMaxWidth: 16,
            label: { show: true, position: 'insideRight', offset: [-5, 2], color: '#fff' },
            data: [7.345, 6.54, 5.607, 3.641, 2.879, 2.74, 2.241, 1.989, 1.822, 1.648, 1.527, 1.192, 1.107, 1.099, 0.871, 0.656],
        },
    ],
};
myChart.setOption(option);