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
        if (typeof str === 'string') {
            for (var i = 0; i < 10; i++) {
                str = str.replace(persianNumbers[i], persianNumbers0[i]);
            }
        }
        return str;
    };

    /* Basic Column Chart */
    var options = {
        series: [{
            name: 'سود خالص',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: 'درآمد',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
            name: 'جریان نقدی آزاد',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
        chart: {
            type: 'bar',
            height: 350
        },
        colors: ['#4F46E5', '#FEBB7B', '#FF830F'],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                borderRadius: 5,
                borderRadiusApplication: 'end'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['بهمن', 'اسفند', 'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'],
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
        yaxis: {
            title: {
                text: 'هزار دلار'
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
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return persianDigits(val.toString()) + " هزار دلار";
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#basicColumnChart"), options);
    chart.render();

    /* Column with Data Labels Chart */
    var options = {
        series: [{
            name: 'تورم',
            data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
        }],
        chart: {
            height: 350,
            type: 'bar',
        },
        colors: ['#4F46E5'],
        plotOptions: {
            bar: {
                borderRadius: 10,
                dataLabels: {
                    position: 'top',
                },
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return persianDigits(val.toString()) + "%";
            },
            offsetY: -20,
            style: {
                fontSize: '12px',
                colors: ["#304758"]
            }
        },
        xaxis: {
            categories: ["دی", "بهمن", "اسفند", "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر"],
            position: 'top',
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            crosshairs: {
                fill: {
                    type: 'gradient',
                    gradient: {
                        colorFrom: '#D8E3F0',
                        colorTo: '#BED1E6',
                        stops: [0, 100],
                        opacityFrom: 0.4,
                        opacityTo: 0.5,
                    }
                }
            },
            tooltip: {
                enabled: true,
            },
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
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false,
            },
            labels: {
                show: false,
                formatter: function (val) {
                    return persianDigits(val.toString()) + "%";
                }
            }
        },
        title: {
            text: 'تورم ماهانه در آرژانتین، ۲۰۰۲',
            floating: true,
            offsetY: 330,
            align: 'center',
            style: {
                color: '#444'
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#columnWithDataLabelsChart"), options);
    chart.render();

    /* Column Stacked Chart */
    var options = {
        series: [{
            name: 'محصول الف',
            data: [44, 55, 41, 67, 22, 43]
        }, {
            name: 'محصول ب',
            data: [13, 23, 20, 8, 13, 27]
        }, {
            name: 'محصول ج',
            data: [11, 17, 15, 15, 21, 14]
        }, {
            name: 'محصول د',
            data: [21, 7, 25, 13, 22, 8]
        }],
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            toolbar: {
                show: true
            },
            zoom: {
                enabled: true
            }
        },
        colors: ['#4F46E5', '#FEBB7B', '#FF830F', '#E63232'],
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        plotOptions: {
            bar: {
                horizontal: false,
                borderRadius: 10,
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'last',
                dataLabels: {
                    total: {
                        enabled: true,
                        style: {
                            fontSize: '13px',
                            fontWeight: 900
                        },
                        formatter: function(val) {
                            return persianDigits(val.toString());
                        }
                    }
                }
            },
        },
        xaxis: {
            type: 'datetime',
            categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT'],
            labels: {
                formatter: function(value) {
                    if (!value) return '';
                    var date = new Date(value);
                    var gy = date.getFullYear();
                    var gm = date.getMonth() + 1;
                    var gd = date.getDate();
                    var jDate = gregorianToJalali(gy, gm, gd);
                    var formatted = jDate[2].toString().padStart(2, '0') + ' ' + ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'][jDate[1] - 1];
                    return persianDigits(formatted);
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
        legend: {
            position: 'right',
            offsetY: 40
        },
        fill: {
            opacity: 1
        }
    };

    var chart = new ApexCharts(document.querySelector("#columnStackedChart"), options);
    chart.render();

    /* Column Stacked 100% Chart */
    var options = {
        series: [{
            name: 'محصول الف',
            data: [44, 55, 41, 67, 22, 43, 21, 49]
        }, {
            name: 'محصول ب',
            data: [13, 23, 20, 8, 13, 27, 33, 12]
        }, {
            name: 'محصول ج',
            data: [11, 17, 15, 15, 21, 14, 15, 13]
        }],
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            stackType: '100%'
        },
        colors: ['#4F46E5', '#FEBB7B', '#FF830F'],
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
        xaxis: {
            categories: ['سه‌ماهه اول ۲۰۱۱', 'سه‌ماهه دوم ۲۰۱۱', 'سه‌ماهه سوم ۲۰۱۱', 'سه‌ماهه چهارم ۲۰۱۱', 'سه‌ماهه اول ۲۰۱۲', 'سه‌ماهه دوم ۲۰۱۲', 'سه‌ماهه سوم ۲۰۱۲', 'سه‌ماهه چهارم ۲۰۱۲'],
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
        yaxis: {
            labels: {
                formatter: function(val) {
                    return persianDigits(val.toFixed(0)) + "%";
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            }
        },
        fill: {
            opacity: 1
        },
        legend: {
            position: 'right',
            offsetX: 0,
            offsetY: 50
        },
    };

    var chart = new ApexCharts(document.querySelector("#columnStacked100Chart"), options);
    chart.render();

    /* Grouped Stacked Chart */
    var options = {
        series: [
            {
                name: 'بودجه سه‌ماهه اول',
                group: 'budget',
                data: [44000, 55000, 41000, 67000, 22000, 43000]
            },
            {
                name: 'واقعی سه‌ماهه اول',
                group: 'actual',
                data: [48000, 50000, 40000, 65000, 25000, 40000]
            },
            {
                name: 'بودجه سه‌ماهه دوم',
                group: 'budget',
                data: [13000, 36000, 20000, 8000, 13000, 27000]
            },
            {
                name: 'واقعی سه‌ماهه دوم',
                group: 'actual',
                data: [20000, 40000, 25000, 10000, 12000, 28000]
            }
        ],
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        dataLabels: {
            formatter: (val) => {
                return persianDigits((val / 1000).toFixed(0)) + 'هزار';
            }
        },
        plotOptions: {
            bar: {
                horizontal: false
            }
        },
        xaxis: {
            categories: [
                'تبلیغات آنلاین',
                'آموزش فروش',
                'تبلیغات چاپی',
                'کاتالوگ‌ها',
                'جلسات',
                'روابط عمومی'
            ],
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
        yaxis: {
            labels: {
                formatter: (val) => {
                    return persianDigits((val / 1000).toFixed(0)) + 'هزار';
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            }
        },
        fill: {
            opacity: 1
        },
        colors: ['#4F46E5', '#FEBB7B', '#FF830F', '#E63232'],
        legend: {
            position: 'top',
            horizontalAlign: 'right'
        }
    };

    var chart = new ApexCharts(document.querySelector("#groupedStackedChart"), options);
    chart.render();

    /* Column Dumbbell Chart */
    var options = {
        series: [
            {
                data: [
                    { x: '2008', y: [2800, 4500] },
                    { x: '2009', y: [3200, 4100] },
                    { x: '2010', y: [2950, 7800] },
                    { x: '2011', y: [3000, 4600] },
                    { x: '2012', y: [3500, 4100] },
                    { x: '2013', y: [4500, 6500] },
                    { x: '2014', y: [4100, 5600] }
                ]
            }
        ],
        chart: {
            height: 350,
            type: 'rangeBar',
            zoom: {
                enabled: false
            }
        },
        colors: ['#4F46E5', '#FEBB7B'],
        plotOptions: {
            bar: {
                isDumbbell: true,
                columnWidth: 3,
                dumbbellColors: [['#4F46E5', '#FEBB7B']]
            }
        },
        legend: {
            show: true,
            showForSingleSeries: true,
            position: 'top',
            horizontalAlign: 'right',
            customLegendItems: ['محصول الف', 'محصول ب']
        },
        fill: {
            type: 'gradient',
            gradient: {
                type: 'vertical',
                gradientToColors: ['#00E396'],
                inverseColors: true,
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
            tickPlacement: 'on',
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
                },
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#columnDumbbellChart"), options);
    chart.render();

    /* Column with Markers Chart */
    var options = {
        series: [{
            name: 'واقعی',
            data: [
                { x: '2011', y: 1292, goals: [{ name: 'انتظاری', value: 1400, strokeHeight: 5, strokeColor: '#FEBB7B' }] },
                { x: '2012', y: 4432, goals: [{ name: 'انتظاری', value: 5400, strokeHeight: 5, strokeColor: '#FEBB7B' }] },
                { x: '2013', y: 5423, goals: [{ name: 'انتظاری', value: 5200, strokeHeight: 5, strokeColor: '#FEBB7B' }] },
                { x: '2014', y: 6653, goals: [{ name: 'انتظاری', value: 6500, strokeHeight: 5, strokeColor: '#FEBB7B' }] },
                { x: '2015', y: 8133, goals: [{ name: 'انتظاری', value: 6600, strokeHeight: 13, strokeWidth: 0, strokeLineCap: 'round', strokeColor: '#FEBB7B' }] },
                { x: '2016', y: 7132, goals: [{ name: 'انتظاری', value: 7500, strokeHeight: 5, strokeColor: '#FEBB7B' }] },
                { x: '2017', y: 7332, goals: [{ name: 'انتظاری', value: 8700, strokeHeight: 5, strokeColor: '#FEBB7B' }] },
                { x: '2018', y: 6553, goals: [{ name: 'انتظاری', value: 7300, strokeHeight: 2, strokeDashArray: 2, strokeColor: '#FEBB7B' }] }
            ]
        }],
        chart: {
            height: 350,
            type: 'bar'
        },
        plotOptions: {
            bar: {
                columnWidth: '60%'
            }
        },
        colors: ['#4F46E5', '#FEBB7B'],
        dataLabels: {
            enabled: false
        },
        legend: {
            show: true,
            showForSingleSeries: true,
            customLegendItems: ['واقعی', 'انتظاری'],
            markers: {
                fillColors: ['#4F46E5', '#FEBB7B'],
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
                },
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
                },
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#columnWithMarkersChart"), options);
    chart.render();

    /* Column with Group Label Chart */
    var options = {
        series: [{
            name: "فروش",
            data: [
                { x: '2019/01/01', y: 400 },
                { x: '2019/04/01', y: 430 },
                { x: '2019/07/01', y: 448 },
                { x: '2019/10/01', y: 470 },
                { x: '2020/01/01', y: 540 },
                { x: '2020/04/01', y: 580 },
                { x: '2020/07/01', y: 690 },
                { x: '2020/10/01', y: 690 }
            ]
        }],
        chart: {
            type: 'bar',
            height: 380
        },
        colors: ['#4F46E5'],
        xaxis: {
            type: 'category',
            labels: {
                formatter: function (val) {
                    var date = new Date(val);
                    var quarter = Math.floor((date.getMonth() + 3) / 3);
                    return persianDigits('سه‌ماهه ' + quarter);
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            },
            group: {
                style: {
                    fontSize: '10px',
                    fontWeight: 700
                },
                groups: [
                    { title: persianDigits('1398'), cols: 4 },
                    { title: persianDigits('1399'), cols: 4 }
                ]
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
                },
            }
        },
        title: {
            text: 'برچسب‌های گروه‌بندی‌شده در محور افقی',
            align: 'right'
        },
        tooltip: {
            x: {
                formatter: function (val) {
                    var date = new Date(val);
                    var gy = date.getFullYear();
                    var gm = date.getMonth() + 1;
                    var gd = date.getDate();
                    var jDate = gregorianToJalali(gy, gm, gd);
                    var quarter = Math.floor((date.getMonth() + 3) / 3);
                    var formatted = 'سه‌ماهه ' + quarter + ' ' + jDate[0];
                    return persianDigits(formatted);
                }
            }
        },
    };

    var chart = new ApexCharts(document.querySelector("#columnWithGroupLabel"), options);
    chart.render();

    /* Column Rotated Labels Chart */
    var options = {
        series: [{
            name: 'وعده‌های غذایی',
            data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35]
        }],
        annotations: {
            points: [{
                x: 'موز',
                seriesIndex: 0,
                label: {
                    borderColor: '#FEBB7B',
                    offsetY: 0,
                    style: {
                        color: '#fff',
                        background: '#FEBB7B',
                    },
                    text: 'موزها خوب هستند',
                }
            }]
        },
        chart: {
            height: 350,
            type: 'bar',
        },
        colors: ['#4F46E5'],
        plotOptions: {
            bar: {
                borderRadius: 10,
                columnWidth: '50%',
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 0
        },
        grid: {
            row: {
                colors: ['#fff', '#f2f2f2']
            }
        },
        xaxis: {
            labels: {
                rotate: -45,
                formatter: function(val) {
                    return persianDigits(val);
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            },
            categories: ['سیب', 'پرتقال', 'توت‌فرنگی', 'آناناس', 'انبه', 'موز', 'توت‌سیاه', 'گلابی', 'هندوانه', 'گیلاس', 'انار', 'نارنگی', 'پاپایا'],
            tickPlacement: 'on'
        },
        yaxis: {
            title: {
                text: 'وعده‌های غذایی'
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
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'light',
                type: "horizontal",
                shadeIntensity: 0.25,
                gradientToColors: undefined,
                inverseColors: true,
                opacityFrom: 0.85,
                opacityTo: 0.85,
                stops: [50, 0, 100]
            },
        }
    };

    var chart = new ApexCharts(document.querySelector("#columnRotatedLabelsChart"), options);
    chart.render();

    /* Column Negative Values Chart */
    var options = {
        series: [{
            name: 'جریان نقدی',
            data: [1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
                5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6,
                -48.6, -41.1, -39.6, -37.6, -29.4, -21.4, -2.4]
        }],
        chart: {
            type: 'bar',
            height: 350
        },
        colors: ['#4F46E5', '#FEBB7B', '#FF830F'],
        plotOptions: {
            bar: {
                colors: {
                    ranges: [{
                        from: -100,
                        to: -46,
                        color: '#E63232'
                    }, {
                        from: -45,
                        to: 0,
                        color: '#FEBB7B'
                    }]
                },
                columnWidth: '80%',
            }
        },
        dataLabels: {
            enabled: false,
        },
        yaxis: {
            title: {
                text: 'رشد'
            },
            labels: {
                formatter: function (y) {
                    return persianDigits(y.toFixed(0)) + "%";
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-yaxis-label',
                },
            }
        },
        xaxis: {
            type: 'datetime',
            categories: [
                '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
                '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
                '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
                '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
                '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
                '2013-07-01', '2013-08-01', '2013-09-01'
            ],
            labels: {
                rotate: -90,
                formatter: function(value) {
                    if (!value) return '';
                    var date = new Date(value);
                    var gy = date.getFullYear();
                    var gm = date.getMonth() + 1;
                    var gd = date.getDate();
                    var jDate = gregorianToJalali(gy, gm, gd);
                    var formatted = jDate[2].toString().padStart(2, '0') + ' ' + ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'][jDate[1] - 1];
                    return persianDigits(formatted);
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '11px',
                    fontWeight: 600,
                    cssClass: 'apexcharts-xaxis-label',
                },
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#columnNegativeValuesChart"), options);
    chart.render();

    /* Range Column Chart */
    var options = {
        series: [{
            data: [
                { x: 'تیم الف', y: [1, 5] },
                { x: 'تیم ب', y: [4, 6] },
                { x: 'تیم ج', y: [5, 8] },
                { x: 'تیم د', y: [3, 11] }
            ]
        }, {
            data: [
                { x: 'تیم الف', y: [2, 6] },
                { x: 'تیم ب', y: [1, 3] },
                { x: 'تیم ج', y: [7, 8] },
                { x: 'تیم د', y: [5, 9] }
            ]
        }],
        chart: {
            type: 'rangeBar',
            height: 350
        },
        colors: ['#4F46E5', '#FEBB7B'],
        plotOptions: {
            bar: {
                horizontal: false
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function(val) {
                return persianDigits(val.toString());
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
                },
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
                },
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#rangeColumnChart"), options);
    chart.render();

    /* Distributed Columns Chart */
    var options = {
        series: [{
            data: [21, 22, 10, 28, 16, 21, 13, 30]
        }],
        chart: {
            height: 350,
            type: 'bar',
            events: {
                click: function (chart, w, e) {
                    // console.log(chart, w, e)
                }
            }
        },
        colors: ['#4F46E5', '#FEBB7B', '#FF830F', '#1493FF', '#E63232'],
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        xaxis: {
            categories: [
                ['جان', 'دو'],
                ['جو', 'اسمیت'],
                ['جیک', 'ویلیامز'],
                'امبر',
                ['پیتر', 'براون'],
                ['مری', 'اوانز'],
                ['دیوید', 'ویلسون'],
                ['لیلی', 'رابرتز'],
            ],
            labels: {
                formatter: function(val) {
                    return persianDigits(Array.isArray(val) ? val.join(' ') : val);
                },
                style: {
                    colors: "#8c9097",
                    fontSize: '12px',
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
                },
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#distributedColumnsChart"), options);
    chart.render();

    /* Dynamic Loaded Column Chart */
    var yearlyData = [500, 350, 400, 450, 300, 600];

    var options = {
        series: [{
            name: 'نتایج',
            data: yearlyData
        }],
        chart: {
            type: 'bar',
            height: 350,
            events: {
                click: function (event, chartContext, config) {
                    if (config.dataPointIndex !== undefined) {
                        var year = 2011 + config.dataPointIndex;
                        var value = yearlyData[config.dataPointIndex];
                        alert(`سال: ${persianDigits(year.toString())}\nمقدار: ${persianDigits(value.toString())}`);
                    }
                }
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: false,
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#4F46E5'],
        xaxis: {
            categories: ['1390', '1391', '1392', '1393', '1394', '1395'],
            title: {
                text: 'سال'
            },
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
        yaxis: {
            title: {
                text: 'مقدار'
            },
            labels: {
                formatter: function (val) {
                    return persianDigits(Math.floor(val).toString());
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
            y: {
                formatter: function (val) {
                    return persianDigits(val.toString());
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#dynamicLoadedColumnChart"), options);
    chart.render();

})();