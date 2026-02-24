(function () {
    "use strict";

    /* Persian digit conversion function */
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

    /* Funnel Chart */
    var options = {
        series: [
            {
                name: "سری قیف",
                data: [1380, 1100, 990, 880, 740, 548, 330, 200],
            },
        ],
        chart: {
            type: 'bar',
            height: 350,
            dropShadow: {
                enabled: true,
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 0,
                horizontal: true,
                barHeight: '80%',
                isFunnel: true,
            },
        },
        dataLabels: {
            enabled: true,
            formatter: function (val, opt) {
                return persianDigits(opt.w.globals.labels[opt.dataPointIndex] + ': ' + val);
            },
            dropShadow: {
                enabled: true,
            },
        },
        title: {
            text: 'قیف استخدام',
            align: 'right',
        },
        xaxis: {
            categories: [
                'شناسایی‌شده',
                'غربال‌شده',
                'ارزیابی‌شده',
                'مصاحبه منابع انسانی',
                'فنی',
                'تأیید',
                'پیشنهادشده',
                'استخدام‌شده',
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
            },
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
                },
            },
        },
        legend: {
            show: false,
        },
        colors: ['#4f46e5'],
        tooltip: {
            y: {
                formatter: function(val) {
                    return persianDigits(val);
                },
            },
        },
    };

    var chart = new ApexCharts(document.querySelector("#funnelCharts"), options);
    chart.render();

    /* Pyramid Chart */
    var options = {
        series: [
            {
                name: "",
                data: [200, 330, 548, 740, 880, 990, 1100, 1380],
            },
        ],
        chart: {
            type: 'bar',
            height: 350,
            dropShadow: {
                enabled: true,
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 0,
                horizontal: true,
                distributed: true,
                barHeight: '80%',
                isFunnel: true,
            },
        },
        colors: [
            '#4f46e5',
            '#febb7b',
            '#28A745',
            '#1493FF',
            '#FF830F',
            '#E63232',
            '#800080',
            '#008080',
        ],
        dataLabels: {
            enabled: true,
            formatter: function (val, opt) {
                return persianDigits(opt.w.globals.labels[opt.dataPointIndex]);
            },
            dropShadow: {
                enabled: true,
            },
        },
        title: {
            text: 'نمودار هرمی',
            align: 'right',
        },
        xaxis: {
            categories: [
                'شیرینی‌جات',
                'غذاهای فرآوری‌شده',
                'چربی‌های سالم',
                'گوشت',
                'حبوبات',
                'لبنیات',
                'میوه‌ها و سبزیجات',
                'غلات',
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
            },
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
                },
            },
        },
        legend: {
            show: false,
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return persianDigits(val);
                },
            },
        },
    };

    var chart = new ApexCharts(document.querySelector("#pyramidFunnelCharts"), options);
    chart.render();

})();