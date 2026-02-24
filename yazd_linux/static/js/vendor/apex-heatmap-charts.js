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

    /* Basic Heatmap Chart */
    function generateData(count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = 'هفته' + persianDigits(i + 1); // Localized x labels to "هفته ۱", "هفته ۲", etc.
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            series.push({
                x: x,
                y: y
            });
            i++;
        }
        return series;
    }
    var options = {
        series: [{
            name: 'معیار ۱',
            data: generateData(18, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'معیار ۲',
            data: generateData(18, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'معیار ۳',
            data: generateData(18, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'معیار ۴',
            data: generateData(18, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'معیار ۵',
            data: generateData(18, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'معیار ۶',
            data: generateData(18, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'معیار ۷',
            data: generateData(18, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'معیار ۸',
            data: generateData(18, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'معیار ۹',
            data: generateData(18, {
                min: 0,
                max: 90
            })
        }],
        chart: {
            height: 350,
            type: 'heatmap',
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#546dfe"],
        grid: {
            borderColor: '#f2f5f7',
        },
        title: {
            text: 'نقشه حرارتی (تک رنگ)',
            align: 'right',
            style: {
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#8c9097'
            },
        },
        xaxis: {
            labels: {
                show: true,
                formatter: function(val) {
                    return persianDigits(val);
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                },
            }
        },
        yaxis: {
            labels: {
                show: true,
                formatter: function(val) {
                    return persianDigits(val);
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                },
            }
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return persianDigits(val);
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#basicHeatmapCharts"), options);
    chart.render();

    /* Multiple Colors Heatmap Chart */
    function generateData(count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = persianDigits(i + 1); // Localized x labels to "۱", "۲", etc.
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            series.push({
                x: x,
                y: y
            });
            i++;
        }
        return series;
    }
    var data = [
        {
            name: 'هفته ۱',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'هفته ۲',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'هفته ۳',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'هفته ۴',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'هفته ۵',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'هفته ۶',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'هفته ۷',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'هفته ۸',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'هفته ۹',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'هفته ۱۰',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'هفته ۱۱',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'هفته ۱۲',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'هفته ۱۳',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'هفته ۱۴',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'هفته ۱۵',
            data: generateData(8, {
                min: 0,
                max: 90
            })
        }
    ];
    data.reverse();
    var colors = ["#546dfe", "#F27036", "#663F59", "#6A6E94", "#4E88B4", "#00A7C6", "#18D8D8", '#A9D794', '#46AF78', '#A93F55', '#8C5E58', '#2176FF', '#33A1FD', '#7A918D', '#BAFF29'];
    colors.reverse();
    var options = {
        series: data,
        chart: {
            height: 350,
            type: 'heatmap',
        },
        dataLabels: {
            enabled: false
        },
        colors: colors,
        xaxis: {
            type: 'category',
            categories: ['۱۰:۰۰', '۱۰:۳۰', '۱۱:۰۰', '۱۱:۳۰', '۱۲:۰۰', '۱۲:۳۰', '۰۱:۰۰', '۰۱:۳۰'],
            labels: {
                formatter: function(val) {
                    return persianDigits(val);
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                },
            }
        },
        title: {
            text: 'نقشه حرارتی (سایه‌های رنگی متفاوت برای هر سری)',
            align: 'right',
            style: {
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#8c9097'
            },
        },
        grid: {
            padding: {
                right: 20
            },
            borderColor: '#f2f5f7',
        },
        yaxis: {
            labels: {
                show: true,
                formatter: function(val) {
                    return persianDigits(val);
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                },
            }
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return persianDigits(val);
                }
            }
        }
    };
    var chart = new ApexCharts(document.querySelector("#multipleColorsHeatmapCharts"), options);
    chart.render();

    /* Color Range Heatmap Chart */
    function generateData(count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = persianDigits(i + 1); // Localized x labels to "۱", "۲", etc.
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            series.push({
                x: x,
                y: y
            });
            i++;
        }
        return series;
    }
    var options = {
        series: [{
            name: 'دی',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'بهمن',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'اسفند',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'فروردین',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'اردیبهشت',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'خرداد',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'تیر',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'مرداد',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        },
        {
            name: 'شهریور',
            data: generateData(20, {
                min: -30,
                max: 55
            })
        }],
        chart: {
            height: 350,
            type: 'heatmap',
        },
        plotOptions: {
            heatmap: {
                shadeIntensity: 0.5,
                radius: 0,
                useFillColorAsStroke: true,
                colorScale: {
                    ranges: [{
                        from: -30,
                        to: 5,
                        name: 'کم',
                        color: '#546dfe'
                    },
                    {
                        from: 6,
                        to: 20,
                        name: 'متوسط',
                        color: '#d77cf7'
                    },
                    {
                        from: 21,
                        to: 45,
                        name: 'بالا',
                        color: '#f4a742'
                    },
                    {
                        from: 46,
                        to: 55,
                        name: 'شدید',
                        color: '#0ca3e7'
                    }]
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            borderColor: '',
        },
        stroke: {
            width: 1
        },
        title: {
            text: 'نقشه حرارتی با مقیاس رنگی',
            align: 'right',
            style: {
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#8c9097'
            },
        },
        xaxis: {
            labels: {
                show: true,
                formatter: function(val) {
                    return persianDigits(val);
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                },
            }
        },
        yaxis: {
            labels: {
                show: true,
                formatter: function(val) {
                    return persianDigits(val);
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                },
            }
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return persianDigits(val);
                }
            }
        }
    };
    var chart = new ApexCharts(document.querySelector("#colorRangeHeatmapCharts"), options);
    chart.render();

    /* Rounded Heatmap Chart */
    var options = {
        series: [{
            name: 'معیار ۱',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'معیار ۲',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'معیار ۳',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'معیار ۴',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'معیار ۵',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'معیار ۶',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'معیار ۷',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'معیار ۸',
            data: generateData(20, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'معیار ۹', // Fixed duplicate "Metric8" to "Metric9"
            data: generateData(20, {
                min: 0,
                max: 90
            })
        }],
        chart: {
            height: 350,
            type: 'heatmap',
        },
        stroke: {
            width: 0
        },
        plotOptions: {
            heatmap: {
                radius: 30,
                enableShades: false,
                colorScale: {
                    ranges: [{
                        from: 0,
                        to: 50,
                        color: '#008FFB'
                    },
                    {
                        from: 51,
                        to: 100,
                        color: '#00E396'
                    }],
                },
            }
        },
        dataLabels: {
            enabled: true,
            style: {
                colors: ['#fff']
            },
            formatter: function(val) {
                return persianDigits(val);
            }
        },
        xaxis: {
            type: 'category',
            labels: {
                formatter: function(val) {
                    return persianDigits(val);
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                },
            }
        },
        yaxis: {
            labels: {
                formatter: function(val) {
                    return persianDigits(val);
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                },
            }
        },
        title: {
            text: 'نقشه حرارتی گرد (محدوده بدون سایه)',
            align: 'right'
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return persianDigits(val);
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#roundedHeatmapCharts"), options);
    chart.render();

})();