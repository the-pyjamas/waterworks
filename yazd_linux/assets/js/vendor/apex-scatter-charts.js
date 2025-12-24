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

    /* Basic Scatter Chart */
    var options = {
        series: [{
            name: "نمونه الف",
            data: [
                [16.4, 5.4], [21.7, 2], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7.4], [10.9, 0], [10.9, 8.2], [16.4, 0], [16.4, 1.8], [13.6, 0.3], [13.6, 0], [29.9, 0], [27.1, 2.3], [16.4, 0], [13.6, 3.7], [10.9, 5.2], [16.4, 6.5], [10.9, 0], [24.5, 7.1], [10.9, 0], [8.1, 4.7], [19, 0], [21.7, 1.8], [27.1, 0], [24.5, 0], [27.1, 0], [29.9, 1.5], [27.1, 0.8], [22.1, 2]
            ]
        }, {
            name: "نمونه ب",
            data: [
                [36.4, 13.4], [1.7, 11], [5.4, 8], [9, 17], [1.9, 4], [3.6, 12.2], [1.9, 14.4], [1.9, 9], [1.9, 13.2], [1.4, 7], [6.4, 8.8], [3.6, 4.3], [1.6, 10], [9.9, 2], [7.1, 15], [1.4, 0], [3.6, 13.7], [1.9, 15.2], [6.4, 16.5], [0.9, 10], [4.5, 17.1], [10.9, 10], [0.1, 14.7], [9, 10], [12.7, 11.8], [2.1, 10], [2.5, 10], [27.1, 10], [2.9, 11.5], [7.1, 10.8], [2.1, 12]
            ]
        }, {
            name: "نمونه ج",
            data: [
                [21.7, 3], [23.6, 3.5], [24.6, 3], [29.9, 3], [21.7, 20], [23, 2], [10.9, 3], [28, 4], [27.1, 0.3], [16.4, 4], [13.6, 0], [19, 5], [22.4, 3], [24.5, 3], [32.6, 3], [27.1, 4], [29.6, 6], [31.6, 8], [21.6, 5], [20.9, 4], [22.4, 0], [32.6, 10.3], [29.7, 20.8], [24.5, 0.8], [21.4, 0], [21.7, 6.9], [28.6, 7.7], [15.4, 0], [18.1, 0], [33.4, 0], [16.4, 0]
            ]
        }],
        chart: {
            height: 350,
            type: 'scatter',
            zoom: {
                enabled: true,
                type: 'xy'
            }
        },
        colors: ['#4F46E5', '#FEBB7B', '#FF830F'],
        xaxis: {
            tickAmount: 10,
            labels: {
                formatter: function(val) {
                    return persianDigits(parseFloat(val).toFixed(1));
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                }
            }
        },
        yaxis: {
            tickAmount: 7,
            labels: {
                formatter: function(val) {
                    return persianDigits(val.toFixed(1));
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                }
            }
        },
        title: {
            text: 'نمودار پراکندگی پایه',
            align: 'right',
            style: {
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#8c9097'
            }
        },
        tooltip: {
            x: {
                formatter: function(val) {
                    return persianDigits(val.toFixed(1));
                }
            },
            y: {
                formatter: function(val) {
                    return persianDigits(val.toFixed(1));
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#basicScatterCharts"), options);
    chart.render();

    /* Datetime Scatter Chart */
    function generateDayWiseTimeSeries(baseval, count, yrange) {
        var i = 0;
        var series = [];
        while (i < count) {
            var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            series.push([baseval, y]);
            baseval += 86400000;
            i++;
        }
        return series;
    }
    var options = {
        series: [{
            name: 'تیم ۱',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'تیم ۲',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'تیم ۳',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'تیم ۴',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'تیم ۵',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
                min: 10,
                max: 60
            })
        }],
        chart: {
            height: 320,
            type: 'scatter',
            zoom: {
                type: 'xy'
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#4F46E5', '#FEBB7B', '#FF830F', '#1493FF', '#E63232'],
        grid: {
            borderColor: '#f2f5f7',
        },
        xaxis: {
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
                    cssClass: 'apexcharts-xaxis-label',
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
                    cssClass: 'apexcharts-yaxis-label',
                },
            }
        },
        title: {
            text: 'نمودار پراکندگی مبتنی بر تاریخ',
            align: 'right',
            style: {
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#8c9097'
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
            }
        }
    };
    var chart = new ApexCharts(document.querySelector("#datetimeScatterCharts"), options);
    chart.render();

    /* Images Scatter Chart */
    var options = {
        series: [{
            name: 'مسنجر',
            data: [
                [16.4, 5.4], [21.7, 4], [25.4, 3], [19, 2], [10.9, 1], [13.6, 3.2], [10.9, 7], [10.9, 8.2], [16.4, 4], [13.6, 4.3], [13.6, 12], [29.9, 3], [10.9, 5.2], [16.4, 6.5], [10.9, 8], [24.5, 7.1], [10.9, 7], [8.1, 4.7], [19, 10], [27.1, 10], [24.5, 8], [27.1, 3], [29.9, 11.5], [27.1, 0.8], [22.1, 2]
            ]
        }, {
            name: 'اینستاگرام',
            data: [
                [6.4, 5.4], [11.7, 4], [15.4, 3], [9, 2], [10.9, 11], [20.9, 7], [12.9, 8.2], [6.4, 14], [11.6, 12]
            ]
        }],
        chart: {
            height: 350,
            type: 'scatter',
            animations: {
                enabled: false,
            },
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false
            }
        },
        colors: ['#4F46E5', '#FEBB7B'],
        xaxis: {
            tickAmount: 10,
            min: 0,
            max: 40,
            labels: {
                formatter: function(val) {
                    return persianDigits(val.toFixed(1));
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                }
            }
        },
        yaxis: {
            tickAmount: 7,
            labels: {
                formatter: function(val) {
                    return persianDigits(val.toFixed(1));
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                }
            }
        },
        title: {
            text: 'نمودار پراکندگی با تصاویر',
            align: 'right',
            style: {
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#8c9097'
            }
        },
        markers: {
            size: 20
        },
        fill: {
            type: 'image',
            opacity: 1,
            image: {
                src: ['assets/images/icon/messenger.png', 'assets/images/icon/instagram.png'],
                width: 40,
                height: 40
            }
        },
        legend: {
            labels: {
                useSeriesColors: true
            },
            markers: {
                customHTML: [
                    function () {
                        return '<span><i class="ri-messenger-line"></i> مسنجر</span>'
                    }, function () {
                        return '<span><i class="ri-instagram-line"></i> اینستاگرام</span>'
                    }
                ]
            }
        },
        tooltip: {
            x: {
                formatter: function(val) {
                    return persianDigits(val.toFixed(1));
                }
            },
            y: {
                formatter: function(val) {
                    return persianDigits(val.toFixed(1));
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#imagesScatterCharts"), options);
    chart.render();

})();