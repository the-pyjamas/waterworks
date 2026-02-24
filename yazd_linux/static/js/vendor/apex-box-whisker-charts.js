(function () {
    "use strict";

    /* Persian calendar and digit conversion functions */
    var gregorianToJalali = function(gy, gm, gd) {
        var g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        gy = gy - 1600;
        gm = gm - 1;
        var g_day_no = 365 * gy + parseInt((gy + 3) / 4) - parseInt((gy + 99) / 100) + parseInt((gy + 399) / 400) - 80 + g_d_m[gm] + gd;
        var j_day_no = g_day_no - 79;
        var j_np = parseInt(j_day_no / 12053);
        j_day_no %= 12053;
        var jy = 979 + 33 * j_np + 4 * parseInt(j_day_no / 1461);
        j_day_no %= 1461;
        if (j_day_no >= 366) {
            jy += parseInt((j_day_no - 1) / 365);
            j_day_no = (j_day_no - 1) % 365;
        }
        var i = 0;
        var j_pm = [31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29];
        for (i = 0; i < 11 && j_day_no >= j_pm[i]; ++i) {
            j_day_no -= j_pm[i];
        }
        var jm = i + 1;
        var jd = j_day_no + 1;
        return [jy, jm, jd];
    };

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

    /* Basic Box Plot Chart */
    var options = {
        series: [
            {
                type: 'boxPlot',
                data: [
                    { x: 'دی ۱۳۹۳', y: [54, 66, 69, 75, 88] },
                    { x: 'دی ۱۳۹۴', y: [43, 65, 69, 76, 81] },
                    { x: 'دی ۱۳۹۵', y: [31, 39, 45, 51, 59] },
                    { x: 'دی ۱۳۹۶', y: [39, 46, 55, 65, 71] },
                    { x: 'دی ۱۳۹۷', y: [29, 31, 35, 39, 44] },
                    { x: 'دی ۱۳۹۸', y: [41, 49, 58, 61, 67] },
                    { x: 'دی ۱۳۹۹', y: [54, 59, 66, 71, 88] }
                ]
            }
        ],
        chart: {
            type: 'boxPlot',
            height: 350
        },
        title: {
            text: 'نمودار جعبه‌ای پایه',
            align: 'right'
        },
        plotOptions: {
            boxPlot: {
                colors: {
                    upper: '#4F46E5',
                    lower: '#FEBB7B'
                }
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
                    cssClass: 'apexcharts-xaxis-label',
                }
            }
        },
        yaxis: {
            labels: {
                formatter: function(val) {
                    return persianDigits(val.toFixed(0));
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                }
            }
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return persianDigits(val.toFixed(0));
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#basicBoxWhiskerCharts"), options);
    chart.render();

    /* Box Plot with Outliers */
    var options = {
        series: [
            {
                name: 'جعبه',
                type: 'boxPlot',
                data: [
                    {
                        x: 'علی',
                        y: [54, 66, 69, 75, 88],
                        goals: [
                            {
                                value: 32,
                                strokeWidth: 0,
                                strokeHeight: 13,
                                strokeLineCap: 'round',
                                strokeColor: '#FEB019',
                            },
                        ],
                    },
                    {
                        x: 'بابک',
                        y: [43, 65, 69, 76, 81],
                        goals: [
                            {
                                value: 35,
                                strokeWidth: 0,
                                strokeHeight: 13,
                                strokeLineCap: 'round',
                                strokeColor: '#FEB019',
                            },
                            {
                                value: 95,
                                strokeWidth: 0,
                                strokeHeight: 13,
                                strokeLineCap: 'round',
                                strokeColor: '#FEB019',
                            },
                        ],
                    },
                    {
                        x: 'چنگیز',
                        y: [31, 39, 45, 51, 59],
                        goals: [
                            {
                                value: 64,
                                strokeWidth: 0,
                                strokeHeight: 13,
                                strokeLineCap: 'round',
                                strokeColor: '#FEB019',
                            },
                            {
                                value: 75,
                                strokeWidth: 0,
                                strokeHeight: 13,
                                strokeLineCap: 'round',
                                strokeColor: '#FEB019',
                            },
                        ],
                    },
                    {
                        x: 'داوود',
                        y: [39, 46, 55, 65, 71],
                        goals: [
                            {
                                value: 27,
                                strokeWidth: 0,
                                strokeHeight: 13,
                                strokeLineCap: 'round',
                                strokeColor: '#FEB019',
                            },
                            {
                                value: 77,
                                strokeWidth: 0,
                                strokeHeight: 13,
                                strokeLineCap: 'round',
                                strokeColor: '#FEB019',
                            },
                        ],
                    },
                    {
                        x: 'احمد',
                        y: [29, 31, 35, 39, 44],
                        goals: [
                            {
                                value: 10,
                                strokeWidth: 0,
                                strokeHeight: 13,
                                strokeLineCap: 'round',
                                strokeColor: '#FEB019',
                            },
                            {
                                value: 56,
                                strokeWidth: 0,
                                strokeHeight: 13,
                                strokeLineCap: 'round',
                                strokeColor: '#FEB019',
                            },
                            {
                                value: 62,
                                strokeWidth: 0,
                                strokeHeight: 13,
                                strokeLineCap: 'round',
                                strokeColor: '#FEB019',
                            },
                            {
                                value: 98,
                                strokeWidth: 0,
                                strokeHeight: 13,
                                strokeLineCap: 'round',
                                strokeColor: '#FEB019',
                            },
                        ],
                    },
                ],
            },
        ],
        chart: {
            type: 'boxPlot',
            height: 350,
        },
        colors: ['#1E2C29', '#FEBB7B'],
        title: {
            text: 'نمودار جعبه‌ای با نقاط پرت',
            align: 'right',
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
                    cssClass: 'apexcharts-xaxis-label',
                }
            }
        },
        yaxis: {
            labels: {
                formatter: function(val) {
                    return persianDigits(val.toFixed(0));
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                }
            }
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return persianDigits(val.toFixed(0));
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#boxplotScatterBoxWhiskerCharts"), options);
    chart.render();

    /* Horizontal Box Plot with Outliers */
    var options = {
        series: [
            {
                data: [
                    {
                        x: 'دسته الف',
                        y: [54, 66, 69, 75, 88],
                        goals: [
                            {
                                value: 90,
                                strokeWidth: 10,
                                strokeHeight: 0,
                                strokeLineCap: 'round',
                                strokeColor: '#F283B6',
                            },
                            {
                                value: 93,
                                strokeWidth: 10,
                                strokeHeight: 0,
                                strokeLineCap: 'round',
                                strokeColor: '#F283B6',
                            },
                        ],
                    },
                    {
                        x: 'دسته ب',
                        y: [43, 65, 69, 76, 81],
                    },
                    {
                        x: 'دسته ج',
                        y: [31, 39, 45, 51, 59],
                    },
                    {
                        x: 'دسته د',
                        y: [39, 46, 55, 65, 71],
                        goals: [
                            {
                                value: 30,
                                strokeWidth: 10,
                                strokeHeight: 0,
                                strokeLineCap: 'round',
                                strokeColor: '#F283B6',
                            },
                            {
                                value: 32,
                                strokeWidth: 10,
                                strokeHeight: 0,
                                strokeLineCap: 'round',
                                strokeColor: '#F283B6',
                            },
                            {
                                value: 76,
                                strokeWidth: 10,
                                strokeHeight: 0,
                                strokeLineCap: 'round',
                                strokeColor: '#F283B6',
                            },
                        ],
                    },
                    {
                        x: 'دسته ه',
                        y: [41, 49, 58, 61, 67],
                    },
                ],
            },
        ],
        chart: {
            type: 'boxPlot',
            height: 350
        },
        title: {
            text: 'نمودار جعبه‌ای افقی با نقاط پرت',
            align: 'right'
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '40%'
            },
            boxPlot: {
                colors: {
                    upper: '#1E2C29',
                    lower: '#FEBB7B'
                }
            }
        },
        stroke: {
            colors: ['#333']
        },
        xaxis: {
            type: 'category',
            labels: {
                formatter: function(val) {
                    return persianDigits(val.toFixed(0));
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                }
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
                    cssClass: 'apexcharts-yaxis-label',
                }
            }
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return persianDigits(val.toFixed(0));
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#horizontalBoxWhiskerCharts"), options);
    chart.render();

})();