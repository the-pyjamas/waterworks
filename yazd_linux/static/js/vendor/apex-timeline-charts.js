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

    /* Basic Timeline Chart */
    var options = {
        series: [
            {
                data: [
                    { x: 'کدنویسی', y: [new Date('2019-03-02').getTime(), new Date('2019-03-04').getTime()] },
                    { x: 'آزمایش', y: [new Date('2019-03-04').getTime(), new Date('2019-03-08').getTime()] },
                    { x: 'اعتبارسنجی', y: [new Date('2019-03-08').getTime(), new Date('2019-03-12').getTime()] },
                    { x: 'استقرار', y: [new Date('2019-03-12').getTime(), new Date('2019-03-18').getTime()] }
                ]
            }
        ],
        chart: {
            height: 350,
            type: 'rangeBar'
        },
        colors: ['#4F46E5'],
        plotOptions: {
            bar: {
                horizontal: true
            }
        },
        xaxis: {
            type: 'datetime',
            labels: {
                formatter: function(value) {
                    if (!value || isNaN(value)) return '';
                    var date = new Date(value);
                    if (isNaN(date.getTime())) return persianDigits(value);
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
            x: {
                formatter: function(value) {
                    if (!value || isNaN(value)) return '';
                    var date = new Date(value);
                    if (isNaN(date.getTime())) return persianDigits(value);
                    var gy = date.getFullYear();
                    var gm = date.getMonth() + 1;
                    var gd = date.getDate();
                    var jDate = gregorianToJalali(gy, gm, gd);
                    return persianDigits(jDate[2].toString().padStart(2, '0') + ' ' + ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'][jDate[1] - 1] + ' ' + jDate[0]);
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#basicTimelineCharts"), options);
    chart.render();

    /* Distributed Timeline Chart */
    var options = {
        series: [
            {
                data: [
                    { x: 'تحلیل', y: [new Date('2019-02-27').getTime(), new Date('2019-03-04').getTime()], fillColor: '#008FFB' },
                    { x: 'طراحی', y: [new Date('2019-03-04').getTime(), new Date('2019-03-08').getTime()], fillColor: '#00E396' },
                    { x: 'کدنویسی', y: [new Date('2019-03-07').getTime(), new Date('2019-03-10').getTime()], fillColor: '#775DD0' },
                    { x: 'آزمایش', y: [new Date('2019-03-08').getTime(), new Date('2019-03-12').getTime()], fillColor: '#FEB019' },
                    { x: 'استقرار', y: [new Date('2019-03-12').getTime(), new Date('2019-03-17').getTime()], fillColor: '#FF4560' }
                ]
            }
        ],
        chart: {
            height: 350,
            type: 'rangeBar'
        },
        colors: ['#008FFB', '#00E396', '#775DD0', '#FEB019', '#FF4560'],
        plotOptions: {
            bar: {
                horizontal: true,
                distributed: true,
                dataLabels: {
                    hideOverflowingLabels: false
                }
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val, opts) {
                var label = opts.w.globals.labels[opts.dataPointIndex];
                var a = moment(val[0]);
                var b = moment(val[1]);
                var diff = b.diff(a, 'days');
                return persianDigits(label + ': ' + diff + (diff > 1 ? ' روز' : ' روز'));
            },
            style: {
                colors: ['#f3f4f5', '#fff']
            }
        },
        xaxis: {
            type: 'datetime',
            labels: {
                formatter: function(value) {
                    if (!value || isNaN(value)) return '';
                    var date = new Date(value);
                    if (isNaN(date.getTime())) return persianDigits(value);
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
                }
            }
        },
        yaxis: {
            show: false
        },
        grid: {
            row: {
                colors: ['#f3f4f5', '#fff'],
                opacity: 1
            }
        },
        tooltip: {
            x: {
                formatter: function(value) {
                    if (!value || isNaN(value)) return '';
                    var date = new Date(value);
                    if (isNaN(date.getTime())) return persianDigits(value);
                    var gy = date.getFullYear();
                    var gm = date.getMonth() + 1;
                    var gd = date.getDate();
                    var jDate = gregorianToJalali(gy, gm, gd);
                    return persianDigits(jDate[2].toString().padStart(2, '0') + ' ' + ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'][jDate[1] - 1] + ' ' + jDate[0]);
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#distributedTimelineCharts"), options);
    chart.render();

    /* Multi-Series Timeline Chart */
    var options = {
        series: [
            {
                name: 'باب',
                data: [
                    { x: 'طراحی', y: [new Date('2019-03-05').getTime(), new Date('2019-03-08').getTime()] },
                    { x: 'کدنویسی', y: [new Date('2019-03-08').getTime(), new Date('2019-03-11').getTime()] },
                    { x: 'آزمایش', y: [new Date('2019-03-11').getTime(), new Date('2019-03-16').getTime()] }
                ]
            },
            {
                name: 'جو',
                data: [
                    { x: 'طراحی', y: [new Date('2019-03-02').getTime(), new Date('2019-03-05').getTime()] },
                    { x: 'کدنویسی', y: [new Date('2019-03-06').getTime(), new Date('2019-03-09').getTime()] },
                    { x: 'آزمایش', y: [new Date('2019-03-10').getTime(), new Date('2019-03-19').getTime()] }
                ]
            }
        ],
        chart: {
            height: 350,
            type: 'rangeBar'
        },
        colors: ["#4F46E5", "#FEBB7B"],
        plotOptions: {
            bar: {
                borderRadius: 10,
                horizontal: true
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                var a = moment(val[0]);
                var b = moment(val[1]);
                var diff = b.diff(a, 'days');
                return persianDigits(diff + (diff > 1 ? ' روز' : ' روز'));
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: 'vertical',
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [50, 0, 100, 100]
            }
        },
        xaxis: {
            type: 'datetime',
            labels: {
                formatter: function(value) {
                    if (!value || isNaN(value)) return '';
                    var date = new Date(value);
                    if (isNaN(date.getTime())) return persianDigits(value);
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
        legend: {
            position: 'top',
            horizontalAlign: 'right'
        },
        tooltip: {
            x: {
                formatter: function(value) {
                    if (!value || isNaN(value)) return '';
                    var date = new Date(value);
                    if (isNaN(date.getTime())) return persianDigits(value);
                    var gy = date.getFullYear();
                    var gm = date.getMonth() + 1;
                    var gd = date.getDate();
                    var jDate = gregorianToJalali(gy, gm, gd);
                    return persianDigits(jDate[2].toString().padStart(2, '0') + ' ' + ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'][jDate[1] - 1] + ' ' + jDate[0]);
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#multiSeriesTimelineCharts"), options);
    chart.render();

    /* Advanced Timeline Chart */
    var options = {
        series: [
            {
                name: 'باب',
                data: [
                    { x: 'طراحی', y: [new Date('2019-03-05').getTime(), new Date('2019-03-08').getTime()] },
                    { x: 'کدنویسی', y: [new Date('2019-03-02').getTime(), new Date('2019-03-05').getTime()] },
                    { x: 'کدنویسی', y: [new Date('2019-03-05').getTime(), new Date('2019-03-07').getTime()] },
                    { x: 'آزمایش', y: [new Date('2019-03-03').getTime(), new Date('2019-03-09').getTime()] },
                    { x: 'آزمایش', y: [new Date('2019-03-08').getTime(), new Date('2019-03-11').getTime()] },
                    { x: 'اعتبارسنجی', y: [new Date('2019-03-11').getTime(), new Date('2019-03-16').getTime()] },
                    { x: 'طراحی', y: [new Date('2019-03-01').getTime(), new Date('2019-03-03').getTime()] }
                ]
            },
            {
                name: 'جو',
                data: [
                    { x: 'طراحی', y: [new Date('2019-03-02').getTime(), new Date('2019-03-05').getTime()] },
                    { x: 'آزمایش', y: [new Date('2019-03-06').getTime(), new Date('2019-03-16').getTime()], goals: [{ name: 'وقفه', value: new Date('2019-03-10').getTime(), strokeColor: '#CD2F2A' }] },
                    { x: 'کدنویسی', y: [new Date('2019-03-03').getTime(), new Date('2019-03-07').getTime()] },
                    { x: 'استقرار', y: [new Date('2019-03-20').getTime(), new Date('2019-03-22').getTime()] },
                    { x: 'طراحی', y: [new Date('2019-03-10').getTime(), new Date('2019-03-16').getTime()] }
                ]
            },
            {
                name: 'دان',
                data: [
                    { x: 'کدنویسی', y: [new Date('2019-03-10').getTime(), new Date('2019-03-17').getTime()] },
                    { x: 'اعتبارسنجی', y: [new Date('2019-03-05').getTime(), new Date('2019-03-09').getTime()], goals: [{ name: 'وقفه', value: new Date('2019-03-07').getTime(), strokeColor: '#CD2F2A' }] }
                ]
            }
        ],
        chart: {
            height: 450,
            type: 'rangeBar'
        },
        colors: ["#4F46E5", "#FEBB7B"],
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '80%'
            }
        },
        xaxis: {
            type: 'datetime',
            labels: {
                formatter: function(value) {
                    if (!value || isNaN(value)) return '';
                    var date = new Date(value);
                    if (isNaN(date.getTime())) return persianDigits(value);
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
        stroke: {
            width: 1
        },
        fill: {
            type: 'solid',
            opacity: 0.6
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right'
        },
        tooltip: {
            x: {
                formatter: function(value) {
                    if (!value || isNaN(value)) return '';
                    var date = new Date(value);
                    if (isNaN(date.getTime())) return persianDigits(value);
                    var gy = date.getFullYear();
                    var gm = date.getMonth() + 1;
                    var gd = date.getDate();
                    var jDate = gregorianToJalali(gy, gm, gd);
                    return persianDigits(jDate[2].toString().padStart(2, '0') + ' ' + ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'][jDate[1] - 1] + ' ' + jDate[0]);
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#advancedTimelineCharts"), options);
    chart.render();

    /* Multiple Series – Group Rows Timeline Chart */
    var options = {
        series: [
            {
                name: 'جرج واشنگتن',
                data: [
                    { x: 'رئیس‌جمهور', y: [new Date(1789, 3, 30).getTime(), new Date(1797, 2, 4).getTime()] }
                ]
            },
            {
                name: 'جان آدامز',
                data: [
                    { x: 'رئیس‌جمهور', y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()] },
                    { x: 'معاون رئیس‌جمهور', y: [new Date(1789, 3, 21).getTime(), new Date(1797, 2, 4).getTime()] }
                ]
            },
            {
                name: 'توماس جفرسون',
                data: [
                    { x: 'رئیس‌جمهور', y: [new Date(1801, 2, 4).getTime(), new Date(1809, 2, 4).getTime()] },
                    { x: 'معاون رئیس‌جمهور', y: [new Date(1797, 2, 4).getTime(), new Date(1801, 2, 4).getTime()] },
                    { x: 'وزیر امور خارجه', y: [new Date(1790, 2, 22).getTime(), new Date(1793, 11, 31).getTime()] }
                ]
            },
            {
                name: 'آرون بور',
                data: [
                    { x: 'معاون رئیس‌جمهور', y: [new Date(1801, 2, 4).getTime(), new Date(1805, 2, 4).getTime()] }
                ]
            },
            {
                name: 'جرج کلینتون',
                data: [
                    { x: 'معاون رئیس‌جمهور', y: [new Date(1805, 2, 4).getTime(), new Date(1812, 3, 20).getTime()] }
                ]
            },
            {
                name: 'جان جی',
                data: [
                    { x: 'وزیر امور خارجه', y: [new Date(1789, 8, 25).getTime(), new Date(1790, 2, 22).getTime()] }
                ]
            },
            {
                name: 'ادموند راندولف',
                data: [
                    { x: 'وزیر امور خارجه', y: [new Date(1794, 0, 2).getTime(), new Date(1795, 7, 20).getTime()] }
                ]
            },
            {
                name: 'تیموتی پیکرینگ',
                data: [
                    { x: 'وزیر امور خارجه', y: [new Date(1795, 7, 20).getTime(), new Date(1800, 4, 12).getTime()] }
                ]
            },
            {
                name: 'چارلز لی',
                data: [
                    { x: 'وزیر امور خارجه', y: [new Date(1800, 4, 13).getTime(), new Date(1800, 5, 5).getTime()] }
                ]
            },
            {
                name: 'جان مارشال',
                data: [
                    { x: 'وزیر امور خارجه', y: [new Date(1800, 5, 13).getTime(), new Date(1801, 2, 4).getTime()] }
                ]
            },
            {
                name: 'لوی لینکلن',
                data: [
                    { x: 'وزیر امور خارجه', y: [new Date(1801, 2, 5).getTime(), new Date(1801, 4, 1).getTime()] }
                ]
            },
            {
                name: 'جیمز مدیسون',
                data: [
                    { x: 'وزیر امور خارجه', y: [new Date(1801, 4, 2).getTime(), new Date(1809, 2, 3).getTime()] }
                ]
            },
        ],
        chart: {
            height: 350,
            type: 'rangeBar'
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '50%',
                rangeBarGroupRows: true
            }
        },
        colors: [
            "#4F46E5", "#FEBB7B", "#28A745", "#1493FF", "#FF830F",
            "#E63232", "#546E7A", "#D4526E", "#8D5B4C", "#F86624",
            "#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"
        ],
        fill: {
            type: 'solid'
        },
        xaxis: {
            type: 'datetime',
            labels: {
                formatter: function(value) {
                    if (!value || isNaN(value)) return '';
                    var date = new Date(value);
                    if (isNaN(date.getTime())) return persianDigits(value);
                    var gy = date.getFullYear();
                    var gm = date.getMonth() + 1;
                    var gd = date.getDate();
                    var jDate = gregorianToJalali(gy, gm, gd);
                    var formatted = persianDigits(jDate[0]); // Year only for historical dates
                    return formatted;
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
        legend: {
            position: 'right',
            horizontalAlign: 'right'
        },
        tooltip: {
            custom: function (opts) {
                const fromYear = new Date(opts.y1);
                const toYear = new Date(opts.y2);
                const fromJDate = gregorianToJalali(fromYear.getFullYear(), fromYear.getMonth() + 1, fromYear.getDate());
                const toJDate = gregorianToJalali(toYear.getFullYear(), toYear.getMonth() + 1, toYear.getDate());
                const w = opts.ctx.w;
                let ylabel = w.config.series[opts.seriesIndex].data?.[opts.dataPointIndex]?.x;
                let seriesName = w.config.series[opts.seriesIndex].name ? w.config.series[opts.seriesIndex].name : '';
                const color = w.globals.colors[opts.seriesIndex];

                return (
                    '<div class="apexcharts-tooltip-rangebar">' +
                    '<div> <span class="series-name" style="color: ' +
                    color +
                    '">' +
                    persianDigits(seriesName) +
                    '</span></div>' +
                    '<div> <span class="category">' +
                    persianDigits(ylabel) +
                    ' </span> <span class="value start-value">' +
                    persianDigits(fromJDate[0]) +
                    '</span> <span class="separator">-</span> <span class="value end-value">' +
                    persianDigits(toJDate[0]) +
                    '</span></div>' +
                    '</div>'
                );
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#multiSeriesGroupRowsTimelineCharts"), options);
    chart.render();

    /* Dumbbell Horizontal Timeline Chart */
    var options = {
        series: [
            {
                data: [
                    { x: 'عملیات', y: [2800, 4500] },
                    { x: 'موفقیت مشتری', y: [3200, 4100] },
                    { x: 'مهندسی', y: [2950, 7800] },
                    { x: 'بازاریابی', y: [3000, 4600] },
                    { x: 'محصول', y: [3500, 4100] },
                    { x: 'علم داده', y: [4500, 6500] },
                    { x: 'فروش', y: [4100, 5600] }
                ]
            }
        ],
        chart: {
            height: 390,
            type: 'rangeBar',
            zoom: {
                enabled: false
            }
        },
        colors: ['#4F46E5', '#FEBB7B'],
        plotOptions: {
            bar: {
                horizontal: true,
                isDumbbell: true,
                dumbbellColors: [['#4F46E5', '#FEBB7B']]
            }
        },
        title: {
            text: 'نابرابری دستمزد',
            align: 'right'
        },
        legend: {
            show: true,
            showForSingleSeries: true,
            position: 'top',
            horizontalAlign: 'right',
            customLegendItems: ['زنان', 'مردان']
        },
        fill: {
            type: 'gradient',
            gradient: {
                gradientToColors: ['#FEBB7B'],
                inverseColors: false,
                stops: [0, 100]
            }
        },
        grid: {
            xaxis: {
                lines: {
                    show: true
                }
            },
            yaxis: {
                lines: {
                    show: false
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
                    return persianDigits(val);
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#dumbbellHorizontalTimelineCharts"), options);
    chart.render();

})();