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
        } else {
            str = str.toString();
            for (var i = 0; i < 10; i++) {
                str = str.replace(persianNumbers[i], persianNumbers0[i]);
            }
        }
        return str;
    };

    /* Bar Basic Chart */
    var options = {
        series: [{
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
        chart: {
            type: 'bar',
            height: 430
        },
        colors: ['#4F46E5'],
        plotOptions: {
            bar: {
                borderRadius: 4,
                borderRadiusApplication: 'end',
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['کره جنوبی', 'کانادا', 'بریتانیا', 'هلند', 'ایتالیا', 'فرانسه', 'ژاپن', 'ایالات متحده', 'چین', 'آلمان'],
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
                    return persianDigits(val.toString());
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

    var chart = new ApexCharts(document.querySelector("#basicChart"), options);
    chart.render();

    /* Bar Grouped Chart */
    var options = {
        series: [{
            data: [44, 55, 41, 64, 22, 43, 21]
        }, {
            data: [53, 32, 33, 52, 13, 44, 32]
        }],
        chart: {
            type: 'bar',
            height: 430
        },
        colors: ['#4F46E5', '#FEBB7B'],
        plotOptions: {
            bar: {
                horizontal: true,
                dataLabels: {
                    position: 'top',
                },
            }
        },
        dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
                fontSize: '12px',
                colors: ['#fff']
            },
            formatter: function(val) {
                return persianDigits(val.toString());
            }
        },
        stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
        },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: function(val) {
                    return persianDigits(val.toString());
                }
            }
        },
        xaxis: {
            categories: ['1380', '1381', '1382', '1383', '1384', '1385', '1386'],
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
                    return persianDigits(val.toString());
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

    var chart = new ApexCharts(document.querySelector("#barGroupedChart"), options);
    chart.render();

    /* Bar Stacked Chart */
    var options = {
        series: [{
            name: 'اسپریت دریایی',
            data: [44, 55, 41, 37, 22, 43, 21]
        }, {
            name: 'گوساله چشمگیر',
            data: [53, 32, 33, 52, 13, 43, 32]
        }, {
            name: 'تصویر تانک',
            data: [12, 17, 11, 9, 15, 11, 20]
        }, {
            name: 'شیب سطل',
            data: [9, 7, 5, 8, 6, 9, 4]
        }, {
            name: 'کودک باززایی‌شده',
            data: [25, 12, 19, 32, 25, 24, 10]
        }],
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
        },
        colors: ['#4F46E5', '#FEBB7B', '#FF830F', '#1493FF', '#E63232'],
        plotOptions: {
            bar: {
                horizontal: true,
                dataLabels: {
                    total: {
                        enabled: true,
                        offsetX: 0,
                        style: {
                            fontSize: '13px',
                            fontWeight: 900
                        },
                        formatter: function(val) {
                            return persianDigits(val.toString()) + "هزار";
                        }
                    }
                }
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        title: {
            text: 'فروش کتاب‌های تخیلی',
            align: 'right'
        },
        xaxis: {
            categories: ['1387', '1388', '1389', '1390', '1391', '1392', '1393'],
            labels: {
                formatter: function (val) {
                    return persianDigits(val.toString()) + "هزار";
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
                text: undefined
            },
            labels: {
                formatter: function(val) {
                    return persianDigits(val.toString());
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
                    return persianDigits(val.toString()) + "هزار";
                }
            }
        },
        fill: {
            opacity: 1
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            offsetX: 40
        }
    };

    var chart = new ApexCharts(document.querySelector("#barStackedChart"), options);
    chart.render();

    /* Bar Stacked 100% Chart */
    var options = {
        series: [{
            name: 'اسپریت دریایی',
            data: [44, 55, 41, 37, 22, 43, 21]
        }, {
            name: 'گوساله چشمگیر',
            data: [53, 32, 33, 52, 13, 43, 32]
        }, {
            name: 'تصویر تانک',
            data: [12, 17, 11, 9, 15, 11, 20]
        }, {
            name: 'شیب سطل',
            data: [9, 7, 5, 8, 6, 9, 4]
        }, {
            name: 'کودک باززایی‌شده',
            data: [25, 12, 19, 32, 25, 24, 10]
        }],
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            stackType: '100%'
        },
        colors: ['#4F46E5', '#FEBB7B', '#FF830F', '#1493FF', '#E63232'],
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        title: {
            text: 'نوار صددرصدی پشته‌شده',
            align: 'right'
        },
        xaxis: {
            categories: ['1387', '1388', '1389', '1390', '1391', '1392', '1393'],
            labels: {
                formatter: function(val) {
                    return persianDigits(val.toString()) + "%";
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
                    return persianDigits(val.toString());
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
                    return persianDigits(val.toString()) + "هزار";
                }
            }
        },
        fill: {
            opacity: 1
        },
        legend: {
            position: 'top',
            horizontalAlign: 'right',
            offsetX: 40
        }
    };

    var chart = new ApexCharts(document.querySelector("#barStacked100Chart"), options);
    chart.render();

    /* Grouped Stacked Bars Chart */
    var options = {
        series: [
            {
                name: 'بودجه سه‌ماهه اول',
                group: 'budget',
                data: [44000, 55000, 41000, 67000, 22000]
            },
            {
                name: 'واقعی سه‌ماهه اول',
                group: 'actual',
                data: [48000, 50000, 40000, 65000, 25000]
            },
            {
                name: 'بودجه سه‌ماهه دوم',
                group: 'budget',
                data: [13000, 36000, 20000, 8000, 13000]
            },
            {
                name: 'واقعی سه‌ماهه دوم',
                group: 'actual',
                data: [20000, 40000, 25000, 10000, 12000]
            }
        ],
        chart: {
            type: 'bar',
            height: 440,
            stacked: true,
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        dataLabels: {
            formatter: (val) => {
                return persianDigits((val / 1000).toString()) + 'هزار';
            }
        },
        plotOptions: {
            bar: {
                horizontal: true
            }
        },
        xaxis: {
            categories: [
                'تبلیغات آنلاین',
                'آموزش فروش',
                'تبلیغات چاپی',
                'کاتالوگ‌ها',
                'جلسات'
            ],
            labels: {
                formatter: (val) => {
                    return persianDigits((val / 1000).toString()) + 'هزار';
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
                    return persianDigits(val.toString());
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
            opacity: 1,
        },
        colors: ['#4F46E5', '#FEBB7B', '#FF830F', '#1493FF'],
        legend: {
            position: 'top',
            horizontalAlign: 'right'
        }
    };

    var chart = new ApexCharts(document.querySelector("#barGroupedStackedChart"), options);
    chart.render();

    /* Bar with Negative Values Chart */
    var options = {
        series: [{
            name: 'مردان',
            data: [0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2, 4.5, 3.9, 3.5, 3]
        }, {
            name: 'زنان',
            data: [-0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3, -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8]
        }],
        chart: {
            type: 'bar',
            height: 440,
            stacked: true
        },
        colors: ['#28A745', '#E63232'],
        plotOptions: {
            bar: {
                borderRadius: 5,
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'all',
                horizontal: true,
                barHeight: '80%',
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 1,
            colors: ["#fff"]
        },
        grid: {
            xaxis: {
                lines: {
                    show: false
                }
            }
        },
        yaxis: {
            stepSize: 1,
            labels: {
                formatter: function(val) {
                    return persianDigits(val.toString());
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
            shared: false,
            x: {
                formatter: function (val) {
                    return persianDigits(val.toString());
                }
            },
            y: {
                formatter: function (val) {
                    return persianDigits(Math.abs(val).toString()) + "%";
                }
            }
        },
        title: {
            text: 'هرم جمعیتی موریس ۱۳۹۰',
            align: 'right'
        },
        xaxis: {
            categories: ['۸۵+', '۸۰-۸۴', '۷۵-۷۹', '۷۰-۷۴', '۶۵-۶۹', '۶۰-۶۴', '۵۵-۵۹', '۵۰-۵۴', '۴۵-۴۹', '۴۰-۴۴', '۳۵-۳۹', '۳۰-۳۴', '۲۵-۲۹', '۲۰-۲۴', '۱۵-۱۹', '۱۰-۱۴', '۵-۹', '۰-۴'],
            title: {
                text: 'درصد'
            },
            labels: {
                formatter: function (val) {
                    return persianDigits(Math.abs(Math.round(val)).toString()) + "%";
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

    var chart = new ApexCharts(document.querySelector("#barNegativeValuesChart"), options);
    chart.render();

    /* Bar with Markers Chart */
    var options = {
        series: [
            {
                name: 'واقعی',
                data: [
                    { x: '1390', y: 12, goals: [{ name: 'انتظاری', value: 14, strokeWidth: 2, strokeDashArray: 2, strokeColor: '#FEBB7B' }] },
                    { x: '1391', y: 44, goals: [{ name: 'انتظاری', value: 54, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FEBB7B' }] },
                    { x: '1392', y: 54, goals: [{ name: 'انتظاری', value: 52, strokeWidth: 10, strokeHeight: 0, strokeLineCap: 'round', strokeColor: '#FEBB7B' }] },
                    { x: '1393', y: 66, goals: [{ name: 'انتظاری', value: 61, strokeWidth: 10, strokeHeight: 0, strokeLineCap: 'round', strokeColor: '#FEBB7B' }] },
                    { x: '1394', y: 81, goals: [{ name: 'انتظاری', value: 66, strokeWidth: 10, strokeHeight: 0, strokeLineCap: 'round', strokeColor: '#FEBB7B' }] },
                    { x: '1395', y: 67, goals: [{ name: 'انتظاری', value: 70, strokeWidth: 5, strokeHeight: 10, strokeColor: '#FEBB7B' }] }
                ]
            }
        ],
        chart: {
            height: 350,
            type: 'bar'
        },
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
        colors: ['#4F46E5'],
        dataLabels: {
            formatter: function (val, opt) {
                const goals = opt.w.config.series[opt.seriesIndex].data[opt.dataPointIndex].goals;
                if (goals && goals.length) {
                    return `${persianDigits(val.toString())} / ${persianDigits(goals[0].value.toString())}`;
                }
                return persianDigits(val.toString());
            }
        },
        legend: {
            show: true,
            showForSingleSeries: true,
            customLegendItems: ['واقعی', 'انتظاری'],
            markers: {
                fillColors: ['#4F46E5', '#FEBB7B']
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
                    return persianDigits(val.toString());
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

    var chart = new ApexCharts(document.querySelector("#barMarkersChart"), options);
    chart.render();

    /* Reversed Bar Chart */
    var options = {
        series: [{
            data: [400, 430, 448, 470, 540, 580, 690]
        }],
        chart: {
            type: 'bar',
            height: 350
        },
        colors: ['#4F46E5'],
        annotations: {
            xaxis: [{
                x: 500,
                borderColor: '#00E396',
                label: {
                    borderColor: '#00E396',
                    style: {
                        color: '#fff',
                        background: '#00E396',
                    },
                    text: 'توضیح محور افقی',
                }
            }],
            yaxis: [{
                y: 'تیر',
                y2: 'شهریور',
                label: {
                    text: 'توضیح محور عمودی'
                }
            }]
        },
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function(val) {
                return persianDigits(val.toString());
            }
        },
        xaxis: {
            categories: ['خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر'],
            labels: {
                formatter: function(val) {
                    return persianDigits(val.toString());
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
            reversed: true,
            axisTicks: {
                show: true
            },
            labels: {
                formatter: function(val) {
                    return persianDigits(val.toString());
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

    var chart = new ApexCharts(document.querySelector("#reversedBarChart"), options);
    chart.render();

    /* Custom DataLabels Bar Chart */
    var options = {
        series: [{
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
        }],
        chart: {
            type: 'bar',
            height: 380
        },
        plotOptions: {
            bar: {
                barHeight: '100%',
                distributed: true,
                horizontal: true,
                dataLabels: {
                    position: 'bottom'
                },
            }
        },
        colors: ['#4F46E5', '#FEBB7B', '#FF830F', '#1493FF', '#E63232', '#2b908f', '#f9a3a4', '#90ee7e', '#f48024', '#69d2e7'],
        dataLabels: {
            enabled: true,
            textAnchor: 'start',
            style: {
                colors: ['#fff']
            },
            formatter: function (val, opt) {
                return persianDigits(opt.w.globals.labels[opt.dataPointIndex] + ": " + val);
            },
            offsetX: 0,
            dropShadow: {
                enabled: true
            }
        },
        stroke: {
            width: 1,
            colors: ['#fff']
        },
        xaxis: {
            categories: ['کره جنوبی', 'کانادا', 'بریتانیا', 'هلند', 'ایتالیا', 'فرانسه', 'ژاپن', 'ایالات متحده', 'چین', 'هند'],
            labels: {
                formatter: function(val) {
                    return persianDigits(val.toString());
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
                show: false,
                formatter: function(val) {
                    return persianDigits(val.toString());
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
            text: 'برچسب‌های داده سفارشی',
            align: 'center'
        },
        subtitle: {
            text: 'نام دسته‌ها به‌عنوان برچسب‌های داده در داخل نوارها',
            align: 'center',
        },
        tooltip: {
            theme: 'dark',
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function () {
                        return ''
                    }
                },
                formatter: function(val) {
                    return persianDigits(val.toString());
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#customDataLabelsBarChart"), options);
    chart.render();

    /* Patterned Bar Chart */
    var options = {
        series: [{
            name: 'اسپریت دریایی',
            data: [44, 55, 41, 37, 22, 43, 21]
        }, {
            name: 'گوساله چشمگیر',
            data: [53, 32, 33, 52, 13, 43, 32]
        }, {
            name: 'تصویر تانک',
            data: [12, 17, 11, 9, 15, 11, 20]
        }, {
            name: 'شیب سطل',
            data: [9, 7, 5, 8, 6, 9, 4]
        }],
        chart: {
            type: 'bar',
            height: 350,
            stacked: true,
            dropShadow: {
                enabled: true,
                blur: 1,
                opacity: 0.5
            }
        },
        colors: ['#4F46E5', '#FF830F', '#1493FF', '#E63232'],
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '60%',
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 2,
        },
        title: {
            text: 'مقایسه استراتژی فروش',
            align: 'right'
        },
        xaxis: {
            categories: ['1387', '1388', '1389', '1390', '1391', '1392', '1393'],
            labels: {
                formatter: function(val) {
                    return persianDigits(val.toString());
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
                text: undefined
            },
            labels: {
                formatter: function(val) {
                    return persianDigits(val.toString());
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
            shared: false,
            y: {
                formatter: function (val) {
                    return persianDigits(val.toString()) + "هزار";
                }
            }
        },
        fill: {
            type: 'pattern',
            opacity: 1,
            pattern: {
                style: ['circles', 'slantedLines', 'verticalLines', 'horizontalLines'],
            }
        },
        states: {
            hover: {
                filter: 'none'
            }
        },
        legend: {
            position: 'right',
            offsetY: 40
        }
    };

    var chart = new ApexCharts(document.querySelector("#barPatternedChart"), options);
    chart.render();

    /* Bar with Images Chart */
    var options = {
        series: [{
            name: 'سکه‌ها',
            data: [2, 4, 3, 4, 3, 5, 5, 6.5, 6, 5, 4, 5, 8, 7, 7, 8, 8, 10, 9, 9, 12, 12, 11, 12, 13, 14, 16, 14, 15, 17, 19, 21]
        }],
        chart: {
            type: 'bar',
            height: 410,
            animations: {
                enabled: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '100%',
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 1,
            colors: ['#000'],
        },
        labels: Array.apply(null, { length: 32 }).map(function (el, index) {
            return persianDigits((index + 1).toString());
        }),
        yaxis: {
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            },
            labels: {
                show: false
            },
            title: {
                text: 'وزن'
            },
        },
        grid: {
            position: 'back'
        },
        title: {
            text: 'مسیرهای پرشده با تصویر برش‌خورده',
            align: 'right',
            offsetY: 30
        },
        fill: {
            type: 'image',
            opacity: 0.87,
            image: {
                src: './assets/images/bg/bar-chart-bg.webp', // Ensure this path is correct
                width: 600,
                height: 600,
            },
        },
    };

    var chart = new ApexCharts(document.querySelector("#barChartWithImages"), options);
    chart.render();

})();