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

    /* Range Area Charts > Basic */
    var options = {
        series: [
            {
                name: 'دمای نیویورک',
                data: [
                    { x: 'فروردین', y: [-2, 4] },
                    { x: 'اردیبهشت', y: [-1, 6] },
                    { x: 'خرداد', y: [3, 10] },
                    { x: 'تیر', y: [8, 16] },
                    { x: 'مرداد', y: [13, 22] },
                    { x: 'شهریور', y: [18, 26] },
                    { x: 'مهر', y: [21, 29] },
                    { x: 'آبان', y: [21, 28] },
                    { x: 'آذر', y: [17, 24] },
                    { x: 'دی', y: [11, 18] },
                    { x: 'بهمن', y: [6, 12] },
                    { x: 'اسفند', y: [1, 7] }
                ]
            }
        ],
        chart: {
            height: 350,
            type: 'rangeArea'
        },
        colors: ['#4F46E5'],
        stroke: {
            curve: 'monotoneCubic'
        },
        title: {
            text: 'دمای نیویورک (کل سال)',
            align: 'right'
        },
        markers: {
            hover: {
                sizeOffset: 5
            }
        },
        dataLabels: {
            enabled: false
        },
        yaxis: {
            labels: {
                formatter: function(val) {
                    return persianDigits(val) + '°C';
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
        tooltip: {
            y: {
                formatter: function(val) {
                    return persianDigits(val) + '°C';
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#rangeAreaBasicCharts"), options);
    chart.render();

    /* Range Area Combo Chart */
    var options = {
        series: [
            {
                type: 'rangeArea',
                name: 'دامنه تیم ب',
                data: [
                    { x: 'فروردین', y: [1100, 1900] },
                    { x: 'اردیبهشت', y: [1200, 1800] },
                    { x: 'خرداد', y: [900, 2900] },
                    { x: 'تیر', y: [1400, 2700] },
                    { x: 'مرداد', y: [2600, 3900] },
                    { x: 'شهریور', y: [500, 1700] },
                    { x: 'مهر', y: [1900, 2300] },
                    { x: 'آبان', y: [1000, 1500] }
                ]
            },
            {
                type: 'rangeArea',
                name: 'دامنه تیم الف',
                data: [
                    { x: 'فروردین', y: [3100, 3400] },
                    { x: 'اردیبهشت', y: [4200, 5200] },
                    { x: 'خرداد', y: [3900, 4900] },
                    { x: 'تیر', y: [3400, 3900] },
                    { x: 'مرداد', y: [5100, 5900] },
                    { x: 'شهریور', y: [5400, 6700] },
                    { x: 'مهر', y: [4300, 4600] },
                    { x: 'آبان', y: [2100, 2900] }
                ]
            },
            {
                type: 'line',
                name: 'میانه تیم ب',
                data: [
                    { x: 'فروردین', y: 1500 },
                    { x: 'اردیبهشت', y: 1700 },
                    { x: 'خرداد', y: 1900 },
                    { x: 'تیر', y: 2200 },
                    { x: 'مرداد', y: 3000 },
                    { x: 'شهریور', y: 1000 },
                    { x: 'مهر', y: 2100 },
                    { x: 'آبان', y: 1200 },
                    { x: 'آذر', y: 1800 },
                    { x: 'دی', y: 2000 }
                ]
            },
            {
                type: 'line',
                name: 'میانه تیم الف',
                data: [
                    { x: 'فروردین', y: 3300 },
                    { x: 'اردیبهشت', y: 4900 },
                    { x: 'خرداد', y: 4300 },
                    { x: 'تیر', y: 3700 },
                    { x: 'مرداد', y: 5500 },
                    { x: 'شهریور', y: 5900 },
                    { x: 'مهر', y: 4500 },
                    { x: 'آبان', y: 2400 },
                    { x: 'آذر', y: 2100 },
                    { x: 'دی', y: 1500 }
                ]
            }
        ],
        chart: {
            height: 350,
            type: 'rangeArea',
            animations: {
                speed: 500
            }
        },
        colors: ['#4F46E5', '#FEBB7B', '#4F46E5', '#FEBB7B'],
        dataLabels: {
            enabled: false
        },
        fill: {
            opacity: [0.24, 0.24, 1, 1]
        },
        forecastDataPoints: {
            count: 2
        },
        stroke: {
            curve: 'straight',
            width: [0, 0, 2, 2]
        },
        legend: {
            show: true,
            customLegendItems: ['تیم ب', 'تیم الف'],
            inverseOrder: true,
            horizontalAlign: 'right'
        },
        title: {
            text: 'ناحیه دامنه با خط پیش‌بینی (ترکیبی)',
            align: 'right'
        },
        markers: {
            hover: {
                sizeOffset: 5
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
        xaxis: {
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
        tooltip: {
            y: {
                formatter: function(val) {
                    return persianDigits(val);
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#rangeAreaComboCharts"), options);
    chart.render();

})();