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

    /* Line Column Mixed Chart */
    var options = {
        series: [{
            name: 'وبلاگ وب‌سایت',
            type: 'column',
            data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        }, {
            name: 'رسانه‌های اجتماعی',
            type: 'line',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }],
        chart: {
            height: 350,
            type: 'line',
        },
        colors: ['#4F46E5', '#FEBB7B'],
        stroke: {
            width: [0, 4]
        },
        title: {
            text: 'منابع ترافیک',
            align: 'right'
        },
        dataLabels: {
            enabled: true,
            enabledOnSeries: [1],
            formatter: function(val) {
                return persianDigits(val);
            }
        },
        labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
        xaxis: {
            labels: {
                formatter: function(value) {
                    if (!value || typeof value !== 'string') return '';
                    var date = new Date(value);
                    if (isNaN(date.getTime())) return persianDigits(value); // Fallback to raw value
                    var gy = date.getFullYear();
                    var gm = date.getMonth() + 1;
                    var gd = date.getDate();
                    var jDate = gregorianToJalali(gy, gm, gd);
                    var formatted = persianDigits(jDate[2].toString().padStart(2, '0') + ' ' + ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'][jDate[1] - 1] + ' ' + jDate[0]);
                    return formatted;
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        yaxis: [{
            title: {
                text: 'وبلاگ وب‌سایت'
            },
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
        }, {
            opposite: true,
            title: {
                text: 'رسانه‌های اجتماعی'
            },
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
        }],
        tooltip: {
            y: {
                formatter: function(val) {
                    return persianDigits(val);
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#lineColumnMixedCharts"), options);
    chart.render();

    /* Multiple Y-Axis Mixed Chart */
    var options = {
        series: [{
            name: 'درآمد',
            type: 'column',
            data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
        }, {
            name: 'جریان نقدی',
            type: 'column',
            data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
        }, {
            name: 'فروش',
            type: 'line',
            data: [20, 29, 37, 36, 44, 45, 50, 58]
        }],
        chart: {
            height: 350,
            type: 'line',
            stacked: false
        },
        colors: ['#4F46E5', '#FEBB7B', '#1493FF'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [1, 1, 4]
        },
        title: {
            text: 'تحلیل سهام XYZ (۱۳۸۸ - ۱۳۹۵)',
            align: 'right',
            offsetX: 0
        },
        xaxis: {
            categories: ['1388', '1389', '1390', '1391', '1392', '1393', '1394', '1395'],
            labels: {
                formatter: function(val) {
                    return persianDigits(val);
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        yaxis: [
            {
                seriesName: 'درآمد',
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                    color: '#4F46E5'
                },
                labels: {
                    style: {
                        colors: '#4F46E5',
                    },
                    formatter: function(val) {
                        return persianDigits(val.toFixed(1));
                    }
                },
                title: {
                    text: "درآمد (هزار کرور)",
                    style: {
                        color: '#4F46E5',
                    }
                },
                tooltip: {
                    enabled: true
                }
            },
            {
                seriesName: 'جریان نقدی',
                opposite: true,
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                    color: '#FEBB7B'
                },
                labels: {
                    style: {
                        colors: '#FEBB7B',
                    },
                    formatter: function(val) {
                        return persianDigits(val.toFixed(1));
                    }
                },
                title: {
                    text: "جریان نقدی عملیاتی (هزار کرور)",
                    style: {
                        color: '#FEBB7B',
                    }
                },
            },
            {
                seriesName: 'فروش',
                opposite: true,
                axisTicks: {
                    show: true,
                },
                axisBorder: {
                    show: true,
                    color: '#1493FF'
                },
                labels: {
                    style: {
                        colors: '#1493FF',
                    },
                    formatter: function(val) {
                        return persianDigits(val.toFixed(0));
                    }
                },
                title: {
                    text: "فروش (هزار کرور)",
                    style: {
                        color: '#1493FF',
                    }
                }
            },
        ],
        tooltip: {
            fixed: {
                enabled: true,
                position: 'topRight',
                offsetY: 30,
                offsetX: 60
            },
            y: {
                formatter: function(val) {
                    return persianDigits(val);
                }
            }
        },
        legend: {
            horizontalAlign: 'right',
            offsetX: 0
        }
    };

    var chart = new ApexCharts(document.querySelector("#multipleYAxisMixedCharts"), options);
    chart.render();

    /* Line & Area Mixed Chart */
    var options = {
        series: [{
            name: 'تیم الف',
            type: 'area',
            data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33]
        }, {
            name: 'تیم ب',
            type: 'line',
            data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43]
        }],
        chart: {
            height: 350,
            type: 'line',
        },
        colors: ['#4F46E5', '#FEBB7B'],
        stroke: {
            curve: 'smooth'
        },
        fill: {
            type: 'solid',
            opacity: [0.35, 1],
        },
        labels: ['Dec 01', 'Dec 02', 'Dec 03', 'Dec 04', 'Dec 05', 'Dec 06', 'Dec 07', 'Dec 08', 'Dec 09 ', 'Dec 10', 'Dec 11'],
        xaxis: {
            labels: {
                formatter: function(value) {
                    if (!value || typeof value !== 'string') return '';
                    var parts = value.split(' ');
                    if (parts.length < 2) return persianDigits(value); // Fallback to raw value
                    var day = parseInt(parts[1]);
                    if (isNaN(day)) return persianDigits(value); // Fallback if day is invalid
                    var jDate = gregorianToJalali(2003, 12, day); // Assuming December 2003
                    var formatted = persianDigits(jDate[2].toString().padStart(2, '0') + ' ' + ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'][jDate[1] - 1]);
                    return formatted;
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        markers: {
            size: 0
        },
        yaxis: [
            {
                title: {
                    text: 'سری الف'
                },
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
            {
                opposite: true,
                title: {
                    text: 'سری ب'
                },
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
        ],
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function (y) {
                    if (typeof y !== "undefined") {
                        return persianDigits(y.toFixed(0)) + " امتیاز";
                    }
                    return '';
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#lineAreaMixedCharts"), options);
    chart.render();

    /* Line Column Area Mixed Chart */
    var options = {
        series: [{
            name: 'تیم الف',
            type: 'column',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
        }, {
            name: 'تیم ب',
            type: 'area',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        }, {
            name: 'تیم ج',
            type: 'line',
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        }],
        chart: {
            height: 350,
            type: 'line',
            stacked: false,
        },
        colors: ['#4F46E5', '#FEBB7B', '#1493FF'],
        stroke: {
            width: [0, 2, 5],
            curve: 'smooth'
        },
        plotOptions: {
            bar: {
                columnWidth: '50%'
            }
        },
        fill: {
            opacity: [0.85, 0.25, 1],
            gradient: {
                inverseColors: false,
                shade: 'light',
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100]
            }
        },
        labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
        xaxis: {
            type: 'datetime',
            labels: {
                formatter: function(value) {
                    if (!value || typeof value !== 'string') return '';
                    var date = new Date(value);
                    if (isNaN(date.getTime())) return persianDigits(value); // Fallback to raw value
                    var gy = date.getFullYear();
                    var gm = date.getMonth() + 1;
                    var gd = date.getDate();
                    var jDate = gregorianToJalali(gy, gm, gd);
                    var formatted = persianDigits(jDate[2].toString().padStart(2, '0') + ' ' + ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'][jDate[1] - 1] + ' ' + jDate[0]);
                    return formatted;
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
            title: {
                text: 'امتیاز'
            },
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
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function (y) {
                    if (typeof y !== "undefined") {
                        return persianDigits(y.toFixed(0)) + " امتیاز";
                    }
                    return '';
                }
            }
        },
        markers: {
            size: 0
        }
    };

    var chart = new ApexCharts(document.querySelector("#lineColumnAreaMixedCharts"), options);
    chart.render();

})();