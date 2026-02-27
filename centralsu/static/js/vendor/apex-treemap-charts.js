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

    /* Basic Treemap Chart */
    var options = {
        series: [
            {
                data: [
                    { x: 'نیویورک', y: 218 },
                    { x: 'لس‌آنجلس', y: 149 },
                    { x: 'شیکاگو', y: 184 },
                    { x: 'هیوستون', y: 55 },
                    { x: 'فینیکس', y: 84 },
                    { x: 'فیلادلفیا', y: 31 },
                    { x: 'سن آنتونیو', y: 70 },
                    { x: 'سن دیگو', y: 30 },
                    { x: 'دالاس', y: 44 },
                    { x: 'سن خوزه', y: 68 },
                    { x: 'آستین', y: 28 },
                    { x: 'جکسونویل', y: 19 },
                    { x: 'فورت ورث', y: 29 }
                ]
            }
        ],
        legend: {
            show: false
        },
        chart: {
            height: 350,
            type: 'treemap'
        },
        title: {
            text: 'نقشه درختی پایه',
            align: 'right'
        },
        dataLabels: {
            enabled: true,
            formatter: function(text, op) {
                return [persianDigits(text), persianDigits(op.value)];
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

    var chart = new ApexCharts(document.querySelector("#basicTreemapCharts"), options);
    chart.render();

    /* Multiple Series Treemap Chart */
    var options = {
        series: [
            {
                name: 'رایانه‌های رومیزی',
                data: [
                    { x: 'الف ب ج', y: 10 },
                    { x: 'د ه ف', y: 60 },
                    { x: 'ایکس وای زد', y: 41 }
                ]
            },
            {
                name: 'موبایل',
                data: [
                    { x: 'الف ب ج د', y: 10 },
                    { x: 'د ه ف گ', y: 20 },
                    { x: 'وای ایکس وای زد', y: 51 },
                    { x: 'پ ق ر', y: 30 },
                    { x: 'م ن و', y: 20 },
                    { x: 'ج د ه', y: 30 }
                ]
            }
        ],
        legend: {
            show: false
        },
        chart: {
            height: 350,
            type: 'treemap'
        },
        title: {
            text: 'نقشه درختی چند بعدی',
            align: 'right'
        },
        dataLabels: {
            enabled: true,
            formatter: function(text, op) {
                return [persianDigits(text), persianDigits(op.value)];
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

    var chart = new ApexCharts(document.querySelector("#multipleSeriesTreemapCharts"), options);
    chart.render();

    /* Distributed Treemap Chart */
    var options = {
        series: [
            {
                data: [
                    { x: 'داکا', y: 218 },
                    { x: 'چیتاگونگ', y: 149 },
                    { x: 'خولنا', y: 184 },
                    { x: 'راجشاهی', y: 55 },
                    { x: 'سیلهت', y: 84 },
                    { x: 'باریشال', y: 31 },
                    { x: 'رنگپور', y: 70 },
                    { x: 'مایمن‌سینگ', y: 30 },
                    { x: 'کومیلا', y: 44 },
                    { x: 'نارایان‌گنج', y: 68 },
                    { x: 'گازی‌پور', y: 28 },
                    { x: 'بوگرا', y: 19 },
                    { x: 'جسور', y: 29 }
                ]
            }
        ],
        legend: {
            show: false
        },
        chart: {
            height: 350,
            type: 'treemap'
        },
        title: {
            text: 'نقشه درختی توزیع‌شده (رنگ متفاوت برای هر سلول)',
            align: 'right'
        },
        colors: [
            '#3B93A5',
            '#F7B844',
            '#ADD8C7',
            '#EC3C65',
            '#CDD7B6',
            '#C1F666',
            '#D43F97',
            '#1E5D8C',
            '#421243',
            '#7F94B0',
            '#EF6537',
            '#C0ADDB'
        ],
        plotOptions: {
            treemap: {
                distributed: true,
                enableShades: false
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function(text, op) {
                return [persianDigits(text), persianDigits(op.value)];
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

    var chart = new ApexCharts(document.querySelector("#distributedTreemapCharts"), options);
    chart.render();

    /* Color Range Treemap Chart */
    var options = {
        series: [
            {
                data: [
                    { x: 'اینتل', y: 1.2 },
                    { x: 'گلدمن ساکس', y: 0.4 },
                    { x: 'شورون', y: -1.4 },
                    { x: 'جنرال الکتریک', y: 2.7 },
                    { x: 'کاترپیلار', y: -0.3 },
                    { x: 'رایتون', y: 5.1 },
                    { x: 'سیسکو', y: -2.3 },
                    { x: 'جانسون و جانسون', y: 2.1 },
                    { x: 'پروکتر اند گمبل', y: 0.3 },
                    { x: 'تراولرز', y: 0.12 },
                    { x: 'تری‌ام', y: -2.31 },
                    { x: 'نایک', y: 3.98 },
                    { x: 'آی‌وای‌تی', y: 1.67 }
                ]
            }
        ],
        legend: {
            show: false
        },
        chart: {
            height: 350,
            type: 'treemap'
        },
        title: {
            text: 'نقشه درختی با مقیاس رنگی',
            align: 'right'
        },
        dataLabels: {
            enabled: true,
            style: {
                fontSize: '12px',
            },
            formatter: function(text, op) {
                return [persianDigits(text), persianDigits(op.value)];
            },
            offsetY: -4
        },
        plotOptions: {
            treemap: {
                enableShades: true,
                shadeIntensity: 0.5,
                reverseNegativeShade: true,
                colorScale: {
                    ranges: [
                        {
                            from: -6,
                            to: 0,
                            color: '#CD363A'
                        },
                        {
                            from: 0.001,
                            to: 6,
                            color: '#52B12C'
                        }
                    ]
                }
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

    var chart = new ApexCharts(document.querySelector("#colorRangeTreemapCharts"), options);
    chart.render();

})();