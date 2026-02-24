(function () {
    "use strict";

    /* Persian digit conversion function */
    var persianDigits = function(str) {
        var persianNumbers = [/0/g, /1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g],
            persianNumbers0 = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        if (str === null || str === undefined) {
            return '';
        }
        str = str.toString();
        for (var i = 0; i < 10; i++) {
            str = str.replace(persianNumbers[i], persianNumbers0[i]);
        }
        return str;
    };

    /* Persian days of the week */
    var persianDays = ['دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه'];

    // 1. Line Chart
    var lineChart = echarts.init(document.getElementById('lineChart'));
    lineChart.setOption({
        color: ['#4F46E5'],
        title: {
            text: 'نمودار خطی',
            textAlign: 'right',
            right: '5%',
            textStyle: { fontFamily: 'IRANYekanX', fontSize: 14 }
        },
        xAxis: {
            type: 'category',
            data: persianDays,
            axisLabel: {
                formatter: function(value) { return persianDigits(value); },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: function(value) { return persianDigits(value); },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            }
        },
        series: [{
            data: [150, 230, 224, 218, 135],
            type: 'line'
        }],
        tooltip: {
            textStyle: { fontFamily: 'IRANYekanX' },
            formatter: function(params) {
                return persianDigits(params.name) + ': ' + persianDigits(params.value);
            }
        }
    });

    // 2. Stacked Line Chart
    var stackedLineChart = echarts.init(document.getElementById('stackedLineChart'));
    stackedLineChart.setOption({
        color: ['#4F46E5', '#FEBB7B', '#FF830F'],
        title: {
            text: 'نمودار خطی انباشته',
            textAlign: 'right',
            right: '5%',
            textStyle: { fontFamily: 'IRANYekanX', fontSize: 14 }
        },
        legend: {
            data: ['ایمیل', 'وابسته', 'تبلیغات ویدئویی'],
            right: '5%',
            textStyle: { fontFamily: 'IRANYekanX', fontSize: 12 }
        },
        xAxis: {
            type: 'category',
            data: persianDays,
            axisLabel: {
                formatter: function(value) { return persianDigits(value); },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: function(value) { return persianDigits(value); },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            }
        },
        series: [
            { name: 'ایمیل', type: 'line', stack: 'total', data: [120, 132, 101, 134, 90] },
            { name: 'وابسته', type: 'line', stack: 'total', data: [220, 182, 191, 234, 290] },
            { name: 'تبلیغات ویدئویی', type: 'line', stack: 'total', data: [150, 232, 201, 154, 190] }
        ],
        tooltip: {
            textStyle: { fontFamily: 'IRANYekanX' },
            formatter: function(params) {
                return persianDigits(params.name) + '<br/>' + persianDigits(params.seriesName) + ': ' + persianDigits(params.value);
            }
        }
    });

    // 3. Area Chart
    var areaChart = echarts.init(document.getElementById('areaChart'));
    areaChart.setOption({
        color: ['#4F46E5'],
        title: {
            text: 'نمودار ناحیه‌ای',
            textAlign: 'right',
            right: '5%',
            textStyle: { fontFamily: 'IRANYekanX', fontSize: 14 }
        },
        xAxis: {
            type: 'category',
            data: persianDays,
            axisLabel: {
                formatter: function(value) { return persianDigits(value); },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: function(value) { return persianDigits(value); },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            }
        },
        series: [{
            data: [120, 132, 101, 134, 90],
            type: 'line',
            areaStyle: {}
        }],
        tooltip: {
            textStyle: { fontFamily: 'IRANYekanX' },
            formatter: function(params) {
                return persianDigits(params.name) + ': ' + persianDigits(params.value);
            }
        }
    });

    // 4. Stacked Area Chart
    var stackedAreaChart = echarts.init(document.getElementById('stackedAreaChart'));
    stackedAreaChart.setOption({
        color: ['#4F46E5', '#FEBB7B', '#FF830F'],
        title: {
            text: 'نمودار ناحیه‌ای انباشته',
            textAlign: 'right',
            right: '5%',
            textStyle: { fontFamily: 'IRANYekanX', fontSize: 14 }
        },
        legend: {
            data: ['ایمیل', 'وابسته', 'تبلیغات ویدئویی'],
            right: '5%',
            textStyle: { fontFamily: 'IRANYekanX', fontSize: 12 }
        },
        xAxis: {
            type: 'category',
            data: persianDays,
            axisLabel: {
                formatter: function(value) { return persianDigits(value); },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: function(value) { return persianDigits(value); },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            }
        },
        series: [
            { name: 'ایمیل', type: 'line', stack: 'total', areaStyle: {}, data: [120, 132, 101, 134, 90] },
            { name: 'وابسته', type: 'line', stack: 'total', areaStyle: {}, data: [220, 182, 191, 234, 290] },
            { name: 'تبلیغات ویدئویی', type: 'line', stack: 'total', areaStyle: {}, data: [150, 232, 201, 154, 190] }
        ],
        tooltip: {
            textStyle: { fontFamily: 'IRANYekanX' },
            formatter: function(params) {
                return persianDigits(params.name) + '<br/>' + persianDigits(params.seriesName) + ': ' + persianDigits(params.value);
            }
        }
    });

    // 5. Step Line Chart
    var stepLineChart = echarts.init(document.getElementById('stepLineChart'));
    stepLineChart.setOption({
        color: ['#4F46E5'],
        title: {
            text: 'نمودار خطی پله‌ای',
            textAlign: 'right',
            right: '5%',
            textStyle: { fontFamily: 'IRANYekanX', fontSize: 14 }
        },
        xAxis: {
            type: 'category',
            data: persianDays,
            axisLabel: {
                formatter: function(value) { return persianDigits(value); },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: function(value) { return persianDigits(value); },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            }
        },
        series: [{
            data: [150, 230, 224, 218, 135],
            type: 'line',
            step: 'middle'
        }],
        tooltip: {
            textStyle: { fontFamily: 'IRANYekanX' },
            formatter: function(params) {
                return persianDigits(params.name) + ': ' + persianDigits(params.value);
            }
        }
    });

    // 6. Line Y Category
    var lineYCategory = echarts.init(document.getElementById('lineYCategory'));
    lineYCategory.setOption({
        color: ['#4F46E5'],
        title: {
            text: 'نمودار خطی با محور Y دسته‌ای',
            textAlign: 'right',
            right: '5%',
            textStyle: { fontFamily: 'IRANYekanX', fontSize: 14 }
        },
        xAxis: {
            type: 'value',
            axisLabel: {
                formatter: function(value) { return persianDigits(value); },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            }
        },
        yAxis: {
            type: 'category',
            data: persianDays,
            axisLabel: {
                formatter: function(value) { return persianDigits(value); },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            }
        },
        series: [{
            data: [150, 230, 224, 218, 135],
            type: 'line'
        }],
        tooltip: {
            textStyle: { fontFamily: 'IRANYekanX' },
            formatter: function(params) {
                return persianDigits(params.name) + ': ' + persianDigits(params.value);
            }
        }
    });

    // 7. Basic Bar Chart
    var basicBarChart = echarts.init(document.getElementById('basicBarChart'));
    basicBarChart.setOption({
        color: ['#4F46E5'],
        title: {
            text: 'نمودار ستونی پایه',
            textAlign: 'right',
            right: '5%',
            textStyle: { fontFamily: 'IRANYekanX', fontSize: 14 }
        },
        xAxis: {
            type: 'category',
            data: persianDays,
            axisLabel: {
                formatter: function(value) { return persianDigits(value); },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: function(value) { return persianDigits(value); },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            }
        },
        series: [{
            data: [120, 200, 150, 80, 70],
            type: 'bar'
        }],
        tooltip: {
            textStyle: { fontFamily: 'IRANYekanX' },
            formatter: function(params) {
                return persianDigits(params.name) + ': ' + persianDigits(params.value);
            }
        }
    });

    // 8. Bar Label Chart
    var barLabelChart = echarts.init(document.getElementById('barLabelChart'));
    barLabelChart.setOption({
        color: ['#4F46E5'],
        title: {
            text: 'نمودار ستونی با برچسب',
            textAlign: 'right',
            right: '5%',
            textStyle: { fontFamily: 'IRANYekanX', fontSize: 14 }
        },
        xAxis: {
            type: 'category',
            data: persianDays,
            axisLabel: {
                formatter: function(value) { return persianDigits(value); },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: function(value) { return persianDigits(value); },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            }
        },
        series: [{
            data: [120, 200, 150, 80, 70],
            type: 'bar',
            label: {
                show: true,
                position: 'top',
                formatter: function(params) { return persianDigits(params.value); },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            }
        }],
        tooltip: {
            textStyle: { fontFamily: 'IRANYekanX' },
            formatter: function(params) {
                return persianDigits(params.name) + ': ' + persianDigits(params.value);
            }
        }
    });

    // 9. Horizontal Bar Chart
    var horizontalBarChart = echarts.init(document.getElementById('horizontalBarChart'));
    horizontalBarChart.setOption({
        color: ['#4F46E5'],
        title: {
            text: 'نمودار ستونی افقی',
            textAlign: 'right',
            right: '5%',
            textStyle: { fontFamily: 'IRANYekanX', fontSize: 14 }
        },
        xAxis: {
            type: 'value',
            axisLabel: {
                formatter: function(value) { return persianDigits(value); },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            }
        },
        yAxis: {
            type: 'category',
            data: persianDays,
            axisLabel: {
                formatter: function(value) { return persianDigits(value); },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            }
        },
        series: [{
            data: [120, 200, 150, 80, 70],
            type: 'bar'
        }],
        tooltip: {
            textStyle: { fontFamily: 'IRANYekanX' },
            formatter: function(params) {
                return persianDigits(params.name) + ': ' + persianDigits(params.value);
            }
        }
    });

    // 10. Stacked Horizontal Bar Chart
    var stackedHorizontalBarChart = echarts.init(document.getElementById('stackedHorizontalBarChart'));
    stackedHorizontalBarChart.setOption({
        color: ['#4F46E5', '#FEBB7B', '#FF830F'],
        title: {
            text: 'نمودار ستونی افقی انباشته',
            textAlign: 'right',
            right: '5%',
            textStyle: { fontFamily: 'IRANYekanX', fontSize: 14 }
        },
        legend: {
            data: ['ایمیل', 'وابسته', 'تبلیغات ویدئویی'],
            right: '5%',
            textStyle: { fontFamily: 'IRANYekanX', fontSize: 12 }
        },
        xAxis: {
            type: 'value',
            axisLabel: {
                formatter: function(value) { return persianDigits(value); },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            }
        },
        yAxis: {
            type: 'category',
            data: persianDays,
            axisLabel: {
                formatter: function(value) { return persianDigits(value); },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            }
        },
        series: [
            { name: 'ایمیل', type: 'bar', stack: 'total', data: [120, 132, 101, 134, 90] },
            { name: 'وابسته', type: 'bar', stack: 'total', data: [220, 182, 191, 234, 290] },
            { name: 'تبلیغات ویدئویی', type: 'bar', stack: 'total', data: [150, 232, 201, 154, 190] }
        ],
        tooltip: {
            textStyle: { fontFamily: 'IRANYekanX' },
            formatter: function(params) {
                return persianDigits(params.name) + '<br/>' + persianDigits(params.seriesName) + ': ' + persianDigits(params.value);
            }
        }
    });

    // 11. Pie Chart
    var pieChart = echarts.init(document.getElementById('pieChart'));
    pieChart.setOption({
        color: ['#4F46E5', '#FEBB7B', '#FF830F', '#1493FF', '#E63232'],
        title: {
            text: 'نمودار دایره‌ای',
            textAlign: 'right',
            right: '5%',
            textStyle: { fontFamily: 'IRANYekanX', fontSize: 14 }
        },
        series: [{
            type: 'pie',
            radius: '50%',
            data: [
                { value: 335, name: 'مستقیم' },
                { value: 310, name: 'ایمیل' },
                { value: 234, name: 'وابسته' },
                { value: 135, name: 'تبلیغات ویدئویی' },
                { value: 1548, name: 'موتور جستجو' }
            ],
            label: {
                formatter: function(params) {
                    return persianDigits(params.name) + ': ' + persianDigits(params.value);
                },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            }
        }],
        tooltip: {
            textStyle: { fontFamily: 'IRANYekanX' },
            formatter: function(params) {
                return persianDigits(params.name) + ': ' + persianDigits(params.value);
            }
        }
    });

    // 12. Doughnut Chart
    var doughnutChart = echarts.init(document.getElementById('doughnutChart'));
    doughnutChart.setOption({
        color: ['#4F46E5', '#FEBB7B', '#FF830F', '#1493FF', '#E63232'],
        title: {
            text: 'نمودار دونات',
            textAlign: 'right',
            right: '5%',
            textStyle: { fontFamily: 'IRANYekanX', fontSize: 14 }
        },
        series: [{
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center',
                formatter: function(params) {
                    return persianDigits(params.name) + '\n' + persianDigits(params.value);
                },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold',
                    formatter: function(params) {
                        return persianDigits(params.name) + '\n' + persianDigits(params.value);
                    },
                    fontFamily: 'IRANYekanX'
                }
            },
            labelLine: { show: false },
            data: [
                { value: 335, name: 'مستقیم' },
                { value: 310, name: 'ایمیل' },
                { value: 234, name: 'وابسته' },
                { value: 135, name: 'تبلیغات ویدئویی' },
                { value: 1548, name: 'موتور جستجو' }
            ]
        }],
        tooltip: {
            textStyle: { fontFamily: 'IRANYekanX' },
            formatter: function(params) {
                return persianDigits(params.name) + ': ' + persianDigits(params.value);
            }
        }
    });

    // 13. Basic Scatter Chart
    var scatterChart = echarts.init(document.getElementById('scatterChart'));
    scatterChart.setOption({
        color: ['#4F46E5'],
        title: {
            text: 'نمودار پراکندگی پایه',
            textAlign: 'right',
            right: '5%',
            textStyle: { fontFamily: 'IRANYekanX', fontSize: 14 }
        },
        xAxis: {
            axisLabel: {
                formatter: function(value) { return persianDigits(value); },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            }
        },
        yAxis: {
            axisLabel: {
                formatter: function(value) { return persianDigits(value); },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            }
        },
        series: [{
            symbolSize: 20,
            data: [
                [10, 20], [20, 30], [30, 40], [40, 50], [50, 60]
            ],
            type: 'scatter'
        }],
        tooltip: {
            textStyle: { fontFamily: 'IRANYekanX' },
            formatter: function(params) {
                return '(' + persianDigits(params.value[0]) + ', ' + persianDigits(params.value[1]) + ')';
            }
        }
    });

    // 14. Candlestick Chart
    var candlestickChart = echarts.init(document.getElementById('candlestickChart'));
    candlestickChart.setOption({
        color: ['#4F46E5', '#FEBB7B'],
        title: {
            text: 'نمودار شمعی',
            textAlign: 'right',
            right: '5%',
            textStyle: { fontFamily: 'IRANYekanX', fontSize: 14 }
        },
        xAxis: {
            data: persianDays,
            axisLabel: {
                formatter: function(value) { return persianDigits(value); },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            }
        },
        yAxis: {
            axisLabel: {
                formatter: function(value) { return persianDigits(value); },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            }
        },
        series: [{
            type: 'candlestick',
            data: [
                [20, 30, 10, 35],
                [40, 35, 30, 55],
                [33, 38, 33, 40],
                [40, 40, 32, 42],
                [30, 30, 20, 35]
            ]
        }],
        tooltip: {
            textStyle: { fontFamily: 'IRANYekanX' },
            formatter: function(params) {
                return persianDigits(params.name) + '<br/>' +
                    'باز: ' + persianDigits(params.data[0]) + '<br/>' +
                    'بسته: ' + persianDigits(params.data[1]) + '<br/>' +
                    'کمترین: ' + persianDigits(params.data[2]) + '<br/>' +
                    'بیشترین: ' + persianDigits(params.data[3]);
            }
        }
    });

    // 15. Graph Chart (Force-Directed)
    var graphChart = echarts.init(document.getElementById('graphChart'));
    graphChart.setOption({
        color: ['#4F46E5'],
        title: {
            text: 'نمودار گرافی',
            textAlign: 'right',
            right: '5%',
            textStyle: { fontFamily: 'IRANYekanX', fontSize: 14 }
        },
        series: [{
            type: 'graph',
            layout: 'force',
            roam: true,
            data: [
                { name: 'گره ۱', value: 100 },
                { name: 'گره ۲', value: 200 },
                { name: 'گره ۳', value: 300 }
            ],
            links: [
                { source: 'گره ۱', target: 'گره ۲' },
                { source: 'گره ۲', target: 'گره ۳' }
            ],
            label: {
                show: true,
                formatter: function(params) { return persianDigits(params.name); },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            }
        }],
        tooltip: {
            textStyle: { fontFamily: 'IRANYekanX' },
            formatter: function(params) {
                return persianDigits(params.name) + ': ' + persianDigits(params.value);
            }
        }
    });

    // 16. Treemap Chart
    var treemapChart = echarts.init(document.getElementById('treemapChart'));
    treemapChart.setOption({
        color: ['#4F46E5', '#FEBB7B', '#FF830F', '#1493FF'],
        title: {
            text: 'نمودار درختی',
            textAlign: 'right',
            right: '5%',
            textStyle: { fontFamily: 'IRANYekanX', fontSize: 14 }
        },
        series: [{
            type: 'treemap',
            data: [
                { name: 'الف', value: 6 },
                { name: 'ب', value: 4 },
                { name: 'ج', value: 3 },
                { name: 'د', value: 2 }
            ],
            label: {
                formatter: function(params) {
                    return persianDigits(params.name) + ': ' + persianDigits(params.value);
                },
                fontFamily: 'IRANYekanX',
                fontSize: 12
            }
        }],
        tooltip: {
            textStyle: { fontFamily: 'IRANYekanX' },
            formatter: function(params) {
                return persianDigits(params.name) + ': ' + persianDigits(params.value);
            }
        }
    });

})();