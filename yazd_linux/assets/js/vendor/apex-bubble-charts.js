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

    /* Persian month names for formatting */
    var persianMonths = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

    /* Generate data with Jalali dates */
    function generateData(baseval, count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
            var x = baseval + i * 86400000; // Increment by one day
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
            var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

            series.push([x, y, z]);
            i++;
        }
        return series;
    }

    /* Simple Bubble Chart */
    var options = {
        series: [{
            name: 'حباب ۱',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'حباب ۲',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'حباب ۳',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'حباب ۴',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        }],
        chart: {
            height: 320,
            type: 'bubble',
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            opacity: 0.8
        },
        grid: {
            borderColor: '#f2f5f7',
        },
        title: {
            text: 'نمودار حبابی ساده',
            align: 'right',
            style: {
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#8c9097'
            },
        },
        colors: ['#4F46E5', '#FEBB7B', '#FF830F'],
        xaxis: {
            tickAmount: 12,
            type: 'datetime',
            labels: {
                formatter: function(val) {
                    var date = new Date(val);
                    var jalali = gregorianToJalali(date.getFullYear(), date.getMonth() + 1, date.getDate());
                    return persianDigits(jalali[2]) + ' ' + persianMonths[jalali[1] - 1] + ' ' + persianDigits(jalali[0]);
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                },
            }
        },
        yaxis: {
            max: 70,
            labels: {
                formatter: function(val) {
                    return persianDigits(val.toFixed(0));
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                },
            }
        },
        tooltip: {
            x: {
                formatter: function(val) {
                    var date = new Date(val);
                    var jalali = gregorianToJalali(date.getFullYear(), date.getMonth() + 1, date.getDate());
                    return persianDigits(jalali[2]) + ' ' + persianMonths[jalali[1] - 1] + ' ' + persianDigits(jalali[0]);
                }
            },
            y: {
                formatter: function(val) {
                    return persianDigits(val);
                }
            },
            z: {
                formatter: function(val) {
                    return persianDigits(val);
                }
            }
        }
    };
    var chart = new ApexCharts(document.querySelector("#simpleBubbleCharts"), options);
    chart.render();

    /* 3D Bubble Chart */
    var options = {
        series: [{
            name: 'حباب ۱',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'حباب ۲',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'حباب ۳',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'حباب ۴',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        }],
        chart: {
            height: 320,
            type: 'bubble',
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: ['#4F46E5', '#FEBB7B', '#FF830F'],
                inverseColors: true,
                opacityFrom: 0.8,
                opacityTo: 0.8,
                stops: [0, 100]
            }
        },
        grid: {
            borderColor: '#f2f5f7',
        },
        title: {
            text: 'نمودار حبابی سه‌بعدی',
            align: 'right',
            style: {
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#8c9097'
            },
        },
        colors: ['#4F46E5', '#FEBB7B', '#FF830F'],
        xaxis: {
            tickAmount: 12,
            type: 'datetime',
            labels: {
                formatter: function(val) {
                    var date = new Date(val);
                    var jalali = gregorianToJalali(date.getFullYear(), date.getMonth() + 1, date.getDate());
                    return persianDigits(jalali[2]) + ' ' + persianMonths[jalali[1] - 1] + ' ' + persianDigits(jalali[0]);
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                },
            }
        },
        yaxis: {
            max: 70,
            labels: {
                formatter: function(val) {
                    return persianDigits(val.toFixed(0));
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                },
            }
        },
        tooltip: {
            x: {
                formatter: function(val) {
                    var date = new Date(val);
                    var jalali = gregorianToJalali(date.getFullYear(), date.getMonth() + 1, date.getDate());
                    return persianDigits(jalali[2]) + ' ' + persianMonths[jalali[1] - 1] + ' ' + persianDigits(jalali[0]);
                }
            },
            y: {
                formatter: function(val) {
                    return persianDigits(val);
                }
            },
            z: {
                formatter: function(val) {
                    return persianDigits(val);
                }
            }
        }
    };
    var chart = new ApexCharts(document.querySelector("#threeDBubbleCharts"), options);
    chart.render();

})();