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

    /* Basic Candlestick Chart */
    var options = {
        series: [{
            data: [
                { x: new Date(1538778600000), y: [6629.81, 6650.5, 6623.04, 6633.33] },
                { x: new Date(1538780400000), y: [6632.01, 6643.59, 6620, 6630.11] },
                { x: new Date(1538782200000), y: [6630.71, 6648.95, 6623.34, 6635.65] },
                { x: new Date(1538784000000), y: [6635.65, 6651, 6629.67, 6638.24] },
                { x: new Date(1538785800000), y: [6638.24, 6640, 6620, 6624.47] },
                { x: new Date(1538787600000), y: [6624.53, 6636.03, 6621.68, 6624.31] },
                { x: new Date(1538789400000), y: [6624.61, 6632.2, 6617, 6626.02] },
                { x: new Date(1538791200000), y: [6627, 6627.62, 6584.22, 6603.02] },
                { x: new Date(1538793000000), y: [6605, 6608.03, 6598.95, 6604.01] },
                { x: new Date(1538794800000), y: [6604.5, 6614.4, 6602.26, 6608.02] },
                { x: new Date(1538796600000), y: [6608.02, 6610.68, 6601.99, 6608.91] },
                { x: new Date(1538798400000), y: [6608.91, 6618.99, 6608.01, 6612] },
                { x: new Date(1538800200000), y: [6612, 6615.13, 6605.09, 6612] },
                { x: new Date(1538802000000), y: [6612, 6624.12, 6608.43, 6622.95] },
                { x: new Date(1538803800000), y: [6623.91, 6623.91, 6615, 6615.67] },
                { x: new Date(1538805600000), y: [6618.69, 6618.74, 6610, 6610.4] },
                { x: new Date(1538807400000), y: [6611, 6622.78, 6610.4, 6614.9] },
                { x: new Date(1538809200000), y: [6614.9, 6626.2, 6613.33, 6623.45] },
                { x: new Date(1538811000000), y: [6623.48, 6627, 6618.38, 6620.35] },
                { x: new Date(1538812800000), y: [6619.43, 6620.35, 6610.05, 6615.53] },
                { x: new Date(1538814600000), y: [6615.53, 6617.93, 6610, 6615.19] },
                { x: new Date(1538816400000), y: [6615.19, 6621.6, 6608.2, 6620] },
                { x: new Date(1538818200000), y: [6619.54, 6625.17, 6614.15, 6620] },
                { x: new Date(1538820000000), y: [6620.33, 6634.15, 6617.24, 6624.61] },
                { x: new Date(1538821800000), y: [6625.95, 6626, 6611.66, 6617.58] },
                { x: new Date(1538823600000), y: [6619, 6625.97, 6595.27, 6598.86] },
                { x: new Date(1538825400000), y: [6598.86, 6598.88, 6570, 6587.16] },
                { x: new Date(1538827200000), y: [6588.86, 6600, 6580, 6593.4] },
                { x: new Date(1538829000000), y: [6593.99, 6598.89, 6585, 6587.81] },
                { x: new Date(1538830800000), y: [6587.81, 6592.73, 6567.14, 6578] },
                { x: new Date(1538832600000), y: [6578.35, 6581.72, 6567.39, 6579] },
                { x: new Date(1538834400000), y: [6579.38, 6580.92, 6566.77, 6575.96] },
                { x: new Date(1538836200000), y: [6575.96, 6589, 6571.77, 6588.92] },
                { x: new Date(1538838000000), y: [6588.92, 6594, 6577.55, 6589.22] },
                { x: new Date(1538839800000), y: [6589.3, 6598.89, 6589.1, 6596.08] },
                { x: new Date(1538841600000), y: [6597.5, 6600, 6588.39, 6596.25] },
                { x: new Date(1538843400000), y: [6598.03, 6600, 6588.73, 6595.97] },
                { x: new Date(1538845200000), y: [6595.97, 6602.01, 6588.17, 6602] },
                { x: new Date(1538847000000), y: [6602, 6607, 6596.51, 6599.95] },
                { x: new Date(1538848800000), y: [6600.63, 6601.21, 6590.39, 6591.02] },
                { x: new Date(1538850600000), y: [6591.02, 6603.08, 6591, 6591] },
                { x: new Date(1538852400000), y: [6591, 6601.32, 6585, 6592] },
                { x: new Date(1538854200000), y: [6593.13, 6596.01, 6590, 6593.34] },
                { x: new Date(1538856000000), y: [6593.34, 6604.76, 6582.63, 6593.86] },
                { x: new Date(1538857800000), y: [6593.86, 6604.28, 6586.57, 6600.01] },
                { x: new Date(1538859600000), y: [6601.81, 6603.21, 6592.78, 6596.25] },
                { x: new Date(1538861400000), y: [6596.25, 6604.2, 6590, 6602.99] },
                { x: new Date(1538863200000), y: [6602.99, 6606, 6584.99, 6587.81] },
                { x: new Date(1538865000000), y: [6587.81, 6595, 6583.27, 6591.96] },
                { x: new Date(1538866800000), y: [6591.97, 6596.07, 6585, 6588.39] },
                { x: new Date(1538868600000), y: [6587.6, 6598.21, 6587.6, 6594.27] },
                { x: new Date(1538870400000), y: [6596.44, 6601, 6590, 6596.55] },
                { x: new Date(1538872200000), y: [6598.91, 6605, 6596.61, 6600.02] },
                { x: new Date(1538874000000), y: [6600.55, 6605, 6589.14, 6593.01] },
                { x: new Date(1538875800000), y: [6593.15, 6605, 6592, 6603.06] },
                { x: new Date(1538877600000), y: [6603.07, 6604.5, 6599.09, 6603.89] },
                { x: new Date(1538879400000), y: [6604.44, 6604.44, 6600, 6603.5] },
                { x: new Date(1538881200000), y: [6603.5, 6603.99, 6597.5, 6603.86] },
                { x: new Date(1538883000000), y: [6603.85, 6605, 6600, 6604.07] },
                { x: new Date(1538884800000), y: [6604.98, 6606, 6604.07, 6606] },
            ]
        }],
        colors: ['#28A745', '#E63232'],
        chart: {
            type: 'candlestick',
            height: 415,
        },
        title: {
            text: 'نمودار کندل',
            align: 'right'
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
            tooltip: {
                enabled: true
            },
            labels: {
                formatter: function(val) {
                    return persianDigits(val.toFixed(2));
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
                    return persianDigits(val.toFixed(2));
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#basicCandlestickCharts"), options);
    chart.render();

    /* Combo Candlestick and Bar Chart */
    var seriesData = [
        { x: new Date("2023-01-01").getTime(), y: [120, 130, 115, 125] },
        { x: new Date("2023-01-02").getTime(), y: [125, 140, 120, 135] },
        { x: new Date("2023-01-03").getTime(), y: [135, 145, 130, 140] },
        { x: new Date("2023-01-04").getTime(), y: [140, 150, 135, 145] },
        { x: new Date("2023-01-05").getTime(), y: [145, 155, 140, 150] }
    ];

    var seriesDataLinear = [
        { x: new Date("2023-01-01").getTime(), y: 2000 },
        { x: new Date("2023-01-02").getTime(), y: 3000 },
        { x: new Date("2023-01-03").getTime(), y: 2500 },
        { x: new Date("2023-01-04").getTime(), y: 4000 },
        { x: new Date("2023-01-05").getTime(), y: 3500 }
    ];

    var options = {
        series: [{ data: seriesData }],
        chart: {
            type: 'candlestick',
            height: 250,
            id: 'candles',
            toolbar: {
                autoSelected: 'pan',
                show: false
            },
            zoom: {
                enabled: false
            },
        },
        plotOptions: {
            candlestick: {
                colors: {
                    upward: '#4F46E5',
                    downward: '#28A745'
                }
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
                    return persianDigits(val.toFixed(2));
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
                    return persianDigits(val.toFixed(2));
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#comboCandlestickCharts"), options);
    chart.render();

    var optionsBar = {
        series: [{
            name: 'حجم',
            data: seriesDataLinear
        }],
        chart: {
            height: 150,
            type: 'bar',
            brush: {
                enabled: true,
                target: 'candles'
            },
            selection: {
                enabled: true,
                xaxis: {
                    min: new Date("2023-01-01").getTime(),
                    max: new Date("2023-01-05").getTime()
                },
                fill: {
                    color: '#ccc',
                    opacity: 0.4
                },
                stroke: {
                    color: '#0D47A1',
                }
            },
        },
        dataLabels: {
            enabled: false
        },
        plotOptions: {
            bar: {
                columnWidth: '80%',
                colors: {
                    ranges: [
                        { from: -1000, to: 0, color: '#28A745' },
                        { from: 1, to: 10000, color: '#28A745' }
                    ],
                },
            }
        },
        stroke: {
            width: 0
        },
        xaxis: {
            type: 'datetime',
            axisBorder: {
                offsetX: 13
            },
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
                show: false
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

    var chartBar = new ApexCharts(document.querySelector("#comboBarCandlestickCharts"), optionsBar);
    chartBar.render();

    /* Category X-Axis Candlestick Chart */
    var options = {
        series: [{
            name: 'کندل',
            data: [
                { x: new Date(1538778600000), y: [6629.81, 6650.5, 6623.04, 6633.33] },
                { x: new Date(1538780400000), y: [6632.01, 6643.59, 6620, 6630.11] },
                { x: new Date(1538782200000), y: [6630.71, 6648.95, 6623.34, 6635.65] },
                { x: new Date(1538784000000), y: [6635.65, 6651, 6629.67, 6638.24] },
                { x: new Date(1538785800000), y: [6638.24, 6640, 6620, 6624.47] },
                { x: new Date(1538787600000), y: [6624.53, 6636.03, 6621.68, 6624.31] },
                { x: new Date(1538789400000), y: [6624.61, 6632.2, 6617, 6626.02] },
                { x: new Date(1538791200000), y: [6627, 6627.62, 6584.22, 6603.02] },
                { x: new Date(1538793000000), y: [6605, 6608.03, 6598.95, 6604.01] },
                { x: new Date(1538794800000), y: [6604.5, 6614.4, 6602.26, 6608.02] },
                { x: new Date(1538796600000), y: [6608.02, 6610.68, 6601.99, 6608.91] },
                { x: new Date(1538798400000), y: [6608.91, 6618.99, 6608.01, 6612] },
                { x: new Date(1538800200000), y: [6612, 6615.13, 6605.09, 6612] },
                { x: new Date(1538802000000), y: [6612, 6624.12, 6608.43, 6622.95] },
                { x: new Date(1538803800000), y: [6623.91, 6623.91, 6615, 6615.67] },
                { x: new Date(1538805600000), y: [6618.69, 6618.74, 6610, 6610.4] },
                { x: new Date(1538807400000), y: [6611, 6622.78, 6610.4, 6614.9] },
                { x: new Date(1538809200000), y: [6614.9, 6626.2, 6613.33, 6623.45] },
                { x: new Date(1538811000000), y: [6623.48, 6627, 6618.38, 6620.35] },
                { x: new Date(1538812800000), y: [6619.43, 6620.35, 6610.05, 6615.53] },
                { x: new Date(1538814600000), y: [6615.53, 6617.93, 6610, 6615.19] },
                { x: new Date(1538816400000), y: [6615.19, 6621.6, 6608.2, 6620] },
                { x: new Date(1538818200000), y: [6619.54, 6625.17, 6614.15, 6620] },
                { x: new Date(1538820000000), y: [6620.33, 6634.15, 6617.24, 6624.61] },
                { x: new Date(1538821800000), y: [6625.95, 6626, 6611.66, 6617.58] },
                { x: new Date(1538823600000), y: [6619, 6625.97, 6595.27, 6598.86] },
                { x: new Date(1538825400000), y: [6598.86, 6598.88, 6570, 6587.16] },
                { x: new Date(1538827200000), y: [6588.86, 6600, 6580, 6593.4] },
                { x: new Date(1538829000000), y: [6593.99, 6598.89, 6585, 6587.81] },
                { x: new Date(1538830800000), y: [6587.81, 6592.73, 6567.14, 6578] },
                { x: new Date(1538832600000), y: [6578.35, 6581.72, 6567.39, 6579] },
                { x: new Date(1538834400000), y: [6579.38, 6580.92, 6566.77, 6575.96] },
                { x: new Date(1538836200000), y: [6575.96, 6589, 6571.77, 6588.92] },
                { x: new Date(1538838000000), y: [6588.92, 6594, 6577.55, 6589.22] },
                { x: new Date(1538839800000), y: [6589.3, 6598.89, 6589.1, 6596.08] },
                { x: new Date(1538841600000), y: [6597.5, 6600, 6588.39, 6596.25] },
                { x: new Date(1538843400000), y: [6598.03, 6600, 6588.73, 6595.97] },
                { x: new Date(1538845200000), y: [6595.97, 6602.01, 6588.17, 6602] },
                { x: new Date(1538847000000), y: [6602, 6607, 6596.51, 6599.95] },
                { x: new Date(1538848800000), y: [6600.63, 6601.21, 6590.39, 6591.02] },
                { x: new Date(1538850600000), y: [6591.02, 6603.08, 6591, 6591] },
                { x: new Date(1538852400000), y: [6591, 6601.32, 6585, 6592] },
                { x: new Date(1538854200000), y: [6593.13, 6596.01, 6590, 6593.34] },
                { x: new Date(1538856000000), y: [6593.34, 6604.76, 6582.63, 6593.86] },
                { x: new Date(1538857800000), y: [6593.86, 6604.28, 6586.57, 6600.01] },
                { x: new Date(1538859600000), y: [6601.81, 6603.21, 6592.78, 6596.25] },
                { x: new Date(1538861400000), y: [6596.25, 6604.2, 6590, 6602.99] },
                { x: new Date(1538863200000), y: [6602.99, 6606, 6584.99, 6587.81] },
                { x: new Date(1538865000000), y: [6587.81, 6595, 6583.27, 6591.96] },
                { x: new Date(1538866800000), y: [6591.97, 6596.07, 6585, 6588.39] },
                { x: new Date(1538868600000), y: [6587.6, 6598.21, 6587.6, 6594.27] },
                { x: new Date(1538870400000), y: [6596.44, 6601, 6590, 6596.55] },
                { x: new Date(1538872200000), y: [6598.91, 6605, 6596.61, 6600.02] },
                { x: new Date(1538874000000), y: [6600.55, 6605, 6589.14, 6593.01] },
                { x: new Date(1538875800000), y: [6593.15, 6605, 6592, 6603.06] },
                { x: new Date(1538877600000), y: [6603.07, 6604.5, 6599.09, 6603.89] },
                { x: new Date(1538879400000), y: [6604.44, 6604.44, 6600, 6603.5] },
                { x: new Date(1538881200000), y: [6603.5, 6603.99, 6597.5, 6603.86] },
                { x: new Date(1538883000000), y: [6603.85, 6605, 6600, 6604.07] },
                { x: new Date(1538884800000), y: [6604.98, 6606, 6604.07, 6606] },
            ]
        }],
        chart: {
            height: 350,
            type: 'candlestick',
        },
        colors: ['#28A745', '#E63232'],
        title: {
            text: 'نمودار کندل - محور X دسته‌بندی',
            align: 'right'
        },
        annotations: {
            xaxis: [
                {
                    x: '14 مهر 22:30',
                    borderColor: '#00E396',
                    label: {
                        borderColor: '#00E396',
                        style: {
                            fontSize: '12px',
                            color: '#fff',
                            background: '#00E396'
                        },
                        orientation: 'horizontal',
                        offsetY: 7,
                        text: 'آزمایش حاشیه‌نویسی'
                    }
                }
            ]
        },
        tooltip: {
            enabled: true,
            y: {
                formatter: function(val) {
                    return persianDigits(val.toFixed(2));
                }
            }
        },
        xaxis: {
            type: 'category',
            labels: {
                formatter: function(val) {
                    if (!val || isNaN(val)) return '';
                    var date = new Date(val);
                    if (isNaN(date.getTime())) return persianDigits(val);
                    var jDate = gregorianToJalali(date.getFullYear(), date.getMonth() + 1, date.getDate());
                    var hours = date.getHours().toString().padStart(2, '0');
                    var minutes = date.getMinutes().toString().padStart(2, '0');
                    var formatted = persianDigits(jDate[2].toString().padStart(2, '0') + ' ' + ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'][jDate[1] - 1] + ' ' + hours + ':' + minutes);
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
            tooltip: {
                enabled: true
            },
            labels: {
                formatter: function(val) {
                    return persianDigits(val.toFixed(2));
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

    var chart = new ApexCharts(document.querySelector("#categoryXAxisCandlestickCharts"), options);
    chart.render();

    /* Line and Candlestick Chart */
    var options = {
        series: [{
            name: 'خط',
            type: 'line',
            data: [
                { x: new Date(1538778600000), y: 6604 },
                { x: new Date(1538782200000), y: 6602 },
                { x: new Date(1538814600000), y: 6607 },
                { x: new Date(1538884800000), y: 6620 }
            ]
        }, {
            name: 'کندل',
            type: 'candlestick',
            data: [
                { x: new Date(1538778600000), y: [6629.81, 6650.5, 6623.04, 6633.33] },
                { x: new Date(1538780400000), y: [6632.01, 6643.59, 6620, 6630.11] },
                { x: new Date(1538782200000), y: [6630.71, 6648.95, 6623.34, 6635.65] },
                { x: new Date(1538784000000), y: [6635.65, 6651, 6629.67, 6638.24] },
                { x: new Date(1538785800000), y: [6638.24, 6640, 6620, 6624.47] },
                { x: new Date(1538787600000), y: [6624.53, 6636.03, 6621.68, 6624.31] },
                { x: new Date(1538789400000), y: [6624.61, 6632.2, 6617, 6626.02] },
                { x: new Date(1538791200000), y: [6627, 6627.62, 6584.22, 6603.02] },
                { x: new Date(1538793000000), y: [6605, 6608.03, 6598.95, 6604.01] },
                { x: new Date(1538794800000), y: [6604.5, 6614.4, 6602.26, 6608.02] },
                { x: new Date(1538796600000), y: [6608.02, 6610.68, 6601.99, 6608.91] },
                { x: new Date(1538798400000), y: [6608.91, 6618.99, 6608.01, 6612] },
                { x: new Date(1538800200000), y: [6612, 6615.13, 6605.09, 6612] },
                { x: new Date(1538802000000), y: [6612, 6624.12, 6608.43, 6622.95] },
                { x: new Date(1538803800000), y: [6623.91, 6623.91, 6615, 6615.67] },
                { x: new Date(1538805600000), y: [6618.69, 6618.74, 6610, 6610.4] },
                { x: new Date(1538807400000), y: [6611, 6622.78, 6610.4, 6614.9] },
                { x: new Date(1538809200000), y: [6614.9, 6626.2, 6613.33, 6623.45] },
                { x: new Date(1538811000000), y: [6623.48, 6627, 6618.38, 6620.35] },
                { x: new Date(1538812800000), y: [6619.43, 6620.35, 6610.05, 6615.53] },
                { x: new Date(1538814600000), y: [6615.53, 6617.93, 6610, 6615.19] },
                { x: new Date(1538816400000), y: [6615.19, 6621.6, 6608.2, 6620] },
                { x: new Date(1538818200000), y: [6619.54, 6625.17, 6614.15, 6620] },
                { x: new Date(1538820000000), y: [6620.33, 6634.15, 6617.24, 6624.61] },
                { x: new Date(1538821800000), y: [6625.95, 6626, 6611.66, 6617.58] },
                { x: new Date(1538823600000), y: [6619, 6625.97, 6595.27, 6598.86] },
                { x: new Date(1538825400000), y: [6598.86, 6598.88, 6570, 6587.16] },
                { x: new Date(1538827200000), y: [6588.86, 6600, 6580, 6593.4] },
                { x: new Date(1538829000000), y: [6593.99, 6598.89, 6585, 6587.81] },
                { x: new Date(1538830800000), y: [6587.81, 6592.73, 6567.14, 6578] },
                { x: new Date(1538832600000), y: [6578.35, 6581.72, 6567.39, 6579] },
                { x: new Date(1538834400000), y: [6579.38, 6580.92, 6566.77, 6575.96] },
                { x: new Date(1538836200000), y: [6575.96, 6589, 6571.77, 6588.92] },
                { x: new Date(1538838000000), y: [6588.92, 6594, 6577.55, 6589.22] },
                { x: new Date(1538839800000), y: [6589.3, 6598.89, 6589.1, 6596.08] },
                { x: new Date(1538841600000), y: [6597.5, 6600, 6588.39, 6596.25] },
                { x: new Date(1538843400000), y: [6598.03, 6600, 6588.73, 6595.97] },
                { x: new Date(1538845200000), y: [6595.97, 6602.01, 6588.17, 6602] },
                { x: new Date(1538847000000), y: [6602, 6607, 6596.51, 6599.95] },
                { x: new Date(1538848800000), y: [6600.63, 6601.21, 6590.39, 6591.02] },
                { x: new Date(1538850600000), y: [6591.02, 6603.08, 6591, 6591] },
                { x: new Date(1538852400000), y: [6591, 6601.32, 6585, 6592] },
                { x: new Date(1538854200000), y: [6593.13, 6596.01, 6590, 6593.34] },
                { x: new Date(1538856000000), y: [6593.34, 6604.76, 6582.63, 6593.86] },
                { x: new Date(1538857800000), y: [6593.86, 6604.28, 6586.57, 6600.01] },
                { x: new Date(1538859600000), y: [6601.81, 6603.21, 6592.78, 6596.25] },
                { x: new Date(1538861400000), y: [6596.25, 6604.2, 6590, 6602.99] },
                { x: new Date(1538863200000), y: [6602.99, 6606, 6584.99, 6587.81] },
                { x: new Date(1538865000000), y: [6587.81, 6595, 6583.27, 6591.96] },
                { x: new Date(1538866800000), y: [6591.97, 6596.07, 6585, 6588.39] },
                { x: new Date(1538868600000), y: [6587.6, 6598.21, 6587.6, 6594.27] },
                { x: new Date(1538870400000), y: [6596.44, 6601, 6590, 6596.55] },
                { x: new Date(1538872200000), y: [6598.91, 6605, 6596.61, 6600.02] },
                { x: new Date(1538874000000), y: [6600.55, 6605, 6589.14, 6593.01] },
                { x: new Date(1538875800000), y: [6593.15, 6605, 6592, 6603.06] },
                { x: new Date(1538877600000), y: [6603.07, 6604.5, 6599.09, 6603.89] },
                { x: new Date(1538879400000), y: [6604.44, 6604.44, 6600, 6603.5] },
                { x: new Date(1538881200000), y: [6603.5, 6603.99, 6597.5, 6603.86] },
                { x: new Date(1538883000000), y: [6603.85, 6605, 6600, 6604.07] },
                { x: new Date(1538884800000), y: [6604.98, 6606, 6604.07, 6606] },
            ]
        }],
        chart: {
            height: 350,
            type: 'line',
        },
        colors: ['#4F46E5', '#28A745'],
        title: {
            text: 'نمودار کندل و خطی',
            align: 'right'
        },
        stroke: {
            width: [3, 1]
        },
        tooltip: {
            shared: true,
            custom: [
                function ({ seriesIndex, dataPointIndex, w }) {
                    return persianDigits(w.globals.series[seriesIndex][dataPointIndex].toFixed(2));
                },
                function ({ seriesIndex, dataPointIndex, w }) {
                    var o = w.globals.seriesCandleO[seriesIndex][dataPointIndex];
                    var h = w.globals.seriesCandleH[seriesIndex][dataPointIndex];
                    var l = w.globals.seriesCandleL[seriesIndex][dataPointIndex];
                    var c = w.globals.seriesCandleC[seriesIndex][dataPointIndex];
                    return (
                        '<div class="apexcharts-tooltip-candlestick">' +
                        '<div>باز: <span class="value">' +
                        persianDigits(o.toFixed(2)) +
                        '</span></div>' +
                        '<div>بالاترین: <span class="value">' +
                        persianDigits(h.toFixed(2)) +
                        '</span></div>' +
                        '<div>پایین‌ترین: <span class="value">' +
                        persianDigits(l.toFixed(2)) +
                        '</span></div>' +
                        '<div>بسته: <span class="value">' +
                        persianDigits(c.toFixed(2)) +
                        '</span></div>' +
                        '</div>'
                    );
                }
            ]
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
                    return persianDigits(val.toFixed(2));
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

    var chart = new ApexCharts(document.querySelector("#lineCandlestickCharts"), options);
    chart.render();

})();