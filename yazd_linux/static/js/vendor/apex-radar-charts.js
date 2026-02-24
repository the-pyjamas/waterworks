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

    /* Basic Radar Chart */
    var options = {
        series: [{
            name: 'سری ۱',
            data: [80, 50, 30, 40, 100, 20],
        }],
        chart: {
            height: 350,
            type: 'radar',
        },
        colors: ['#4F46E5'],
        title: {
            text: 'نمودار راداری پایه',
            align: 'right'
        },
        yaxis: {
            stepSize: 20,
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
        xaxis: {
            categories: ['دی', 'بهمن', 'اسفند', 'فروردین', 'اردیبهشت', 'خرداد'],
            labels: {
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
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

    var chart = new ApexCharts(document.querySelector("#basicRadarCharts"), options);
    chart.render();

    /* Multiple Series Radar Chart */
    var options = {
        series: [{
            name: 'سری ۱',
            data: [80, 50, 30, 40, 100, 20],
        }, {
            name: 'سری ۲',
            data: [20, 30, 40, 80, 20, 80],
        }, {
            name: 'سری ۳',
            data: [44, 76, 78, 13, 43, 10],
        }],
        chart: {
            height: 350,
            type: 'radar',
            dropShadow: {
                enabled: true,
                blur: 1,
                left: 1,
                top: 1
            }
        },
        colors: ['#4F46E5', '#FEBB7B', '#FF830F'],
        title: {
            text: 'نمودار راداری چند سری',
            align: 'right'
        },
        stroke: {
            width: 2
        },
        fill: {
            opacity: 0.1
        },
        markers: {
            size: 0
        },
        yaxis: {
            stepSize: 20,
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
        xaxis: {
            categories: [
                persianDigits(gregorianToJalali(2011, 1, 1)[0]),
                persianDigits(gregorianToJalali(2012, 1, 1)[0]),
                persianDigits(gregorianToJalali(2013, 1, 1)[0]),
                persianDigits(gregorianToJalali(2014, 1, 1)[0]),
                persianDigits(gregorianToJalali(2015, 1, 1)[0]),
                persianDigits(gregorianToJalali(2016, 1, 1)[0])
            ],
            labels: {
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
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

    var chart = new ApexCharts(document.querySelector("#multipleSeriesRadarCharts"), options);
    chart.render();

    /* Radar with Polygon Fill */
    var options = {
        series: [{
            name: 'سری ۱',
            data: [20, 100, 40, 30, 50, 80, 33],
        }],
        chart: {
            height: 350,
            type: 'radar',
        },
        dataLabels: {
            enabled: true,
            formatter: function(val) {
                return persianDigits(val.toFixed(0));
            }
        },
        plotOptions: {
            radar: {
                size: 140,
                polygons: {
                    strokeColors: '#e9e9e9',
                    fill: {
                        colors: ['#f8f8f8', '#fff']
                    }
                }
            }
        },
        title: {
            text: 'نمودار راداری با پرشدگی چندضلعی',
            align: 'right'
        },
        colors: ['#4F46E5'],
        markers: {
            size: 4,
            colors: ['#fff'],
            strokeColor: '#4F46E5',
            strokeWidth: 2,
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return persianDigits(val);
                }
            }
        },
        xaxis: {
            categories: ['یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنج‌شنبه', 'جمعه', 'شنبه'],
            labels: {
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
                formatter: function(val, i) {
                    if (i % 2 === 0) {
                        return persianDigits(val.toFixed(0));
                    } else {
                        return '';
                    }
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#polygonFillRadarCharts"), options);
    chart.render();

})();