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

    /* Basic Polar Area Chart */
    var options = {
        series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
        chart: {
            type: 'polarArea',
            width: 500,
        },
        labels: ['دسته الف', 'دسته ب', 'دسته ج', 'دسته د', 'دسته ه', 'دسته و', 'دسته ز', 'دسته ح', 'دسته ط'],
        stroke: {
            colors: ['#fff']
        },
        fill: {
            opacity: 0.8
        },
        dataLabels: {
            formatter: function(val, opts) {
                return persianDigits(val.toFixed(1)) + '%';
            }
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return persianDigits(val);
                }
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 350
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    var chart = new ApexCharts(document.querySelector("#basicPolarAreaCharts"), options);
    chart.render();

    /* Monochrome Polar Area Chart */
    var options = {
        series: [42, 47, 52, 58, 65],
        chart: {
            width: 455,
            type: 'polarArea'
        },
        labels: ['رز الف', 'رز ب', 'رز ج', 'رز د', 'رز ه'],
        fill: {
            opacity: 1
        },
        stroke: {
            width: 1,
            colors: undefined
        },
        yaxis: {
            show: false
        },
        legend: {
            position: 'bottom',
            formatter: function(val, opts) {
                return persianDigits(val + " - " + opts.w.globals.series[opts.seriesIndex]);
            }
        },
        plotOptions: {
            polarArea: {
                rings: {
                    strokeWidth: 0
                },
                spokes: {
                    strokeWidth: 0
                },
            }
        },
        theme: {
            monochrome: {
                enabled: true,
                shadeTo: 'light',
                shadeIntensity: 0.6
            }
        },
        dataLabels: {
            formatter: function(val, opts) {
                return persianDigits(val.toFixed(1)) + '%';
            }
        },
        tooltip: {
            y: {
                formatter: function(val) {
                    return persianDigits(val);
                }
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 350
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    var chart = new ApexCharts(document.querySelector("#monochromePolarAreaCharts"), options);
    chart.render();

})();