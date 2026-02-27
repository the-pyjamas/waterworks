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

    /* Simple Pie Chart */
    var options = {
        series: [44, 55, 13, 43, 22],
        chart: {
            width: 400,
            type: 'pie',
        },
        labels: ['تیم الف', 'تیم ب', 'تیم ج', 'تیم د', 'تیم ه'],
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
        }],
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
        }
    };

    var chart = new ApexCharts(document.querySelector("#simplePieCharts"), options);
    chart.render();

    /* Simple Donut Chart */
    var options = {
        series: [44, 55, 41, 17, 15],
        chart: {
            type: 'donut',
            width: 400, // Fixed typo: 'with' to 'width'
        },
        labels: ['تیم الف', 'تیم ب', 'تیم ج', 'تیم د', 'تیم ه'],
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
        }],
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
        }
    };

    var chart = new ApexCharts(document.querySelector("#simpleDonutPieCharts"), options);
    chart.render();

    /* Donut Update Chart */
    var options = {
        series: [44, 55, 13, 33],
        chart: {
            width: 380,
            type: 'donut',
        },
        dataLabels: {
            enabled: false
        },
        labels: ['تیم الف', 'تیم ب', 'تیم ج', 'تیم د'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 350
                },
                legend: {
                    show: false
                }
            }
        }],
        legend: {
            position: 'right',
            offsetY: 0,
            height: 230,
            formatter: function(val, opts) {
                return persianDigits(val + " - " + opts.w.globals.series[opts.seriesIndex]);
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

    var chart = new ApexCharts(document.querySelector("#simpleDonutUpdatePieCharts"), options);
    chart.render();

    function appendData() {
        var arr = chart.w.globals.series.slice();
        arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
        // Update labels to include a new team
        var newLabels = chart.w.globals.labels.slice();
        newLabels.push('تیم ' + String.fromCharCode(1776 + newLabels.length)); // Generates تیم و, تیم ز, etc.
        chart.updateOptions({ labels: newLabels });
        return arr;
    }

    function removeData() {
        var arr = chart.w.globals.series.slice();
        arr.pop();
        // Update labels to remove the last team
        var newLabels = chart.w.globals.labels.slice();
        newLabels.pop();
        chart.updateOptions({ labels: newLabels });
        return arr;
    }

    function randomize() {
        return chart.w.globals.series.map(function () {
            return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
        });
    }

    function reset() {
        chart.updateOptions({ labels: ['تیم الف', 'تیم ب', 'تیم ج', 'تیم د'] });
        return options.series;
    }

    document.querySelector("#randomize").addEventListener("click", function () {
        chart.updateSeries(randomize());
    });

    document.querySelector("#add").addEventListener("click", function () {
        chart.updateSeries(appendData());
    });

    document.querySelector("#remove").addEventListener("click", function () {
        chart.updateSeries(removeData());
    });

    document.querySelector("#reset").addEventListener("click", function () {
        chart.updateSeries(reset());
    });

    /* Monochrome Pie Chart */
    var options = {
        series: [25, 15, 44, 55, 41, 17],
        chart: {
            width: '400px',
            height: '400px',
            type: 'pie',
        },
        labels: [
            'دوشنبه',
            'سه‌شنبه',
            'چهارشنبه',
            'پنج‌شنبه',
            'جمعه',
            'شنبه',
        ],
        theme: {
            monochrome: {
                enabled: true,
            },
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    offset: -5,
                },
            },
        },
        grid: {
            padding: {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
            },
        },
        dataLabels: {
            formatter: function(val, opts) {
                const name = opts.w.globals.labels[opts.seriesIndex];
                return [persianDigits(name), persianDigits(val.toFixed(1)) + '%'];
            },
        },
        legend: {
            show: false,
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 320
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

    var chart = new ApexCharts(document.querySelector("#monochromePieCharts"), options);
    chart.render();

    /* Gradient Donut Chart */
    var options = {
        series: [44, 55, 41, 17, 15],
        chart: {
            width: 400,
            type: 'donut',
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 270
            }
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'gradient',
        },
        labels: ['تیم الف', 'تیم ب', 'تیم ج', 'تیم د', 'تیم ه'],
        legend: {
            formatter: function(val, opts) {
                return persianDigits(val + " - " + opts.w.globals.series[opts.seriesIndex]);
            }
        },
        title: {
            text: 'نمودار دوناتی گرادیان با زاویه شروع سفارشی',
            align: 'right'
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
        }],
        tooltip: {
            y: {
                formatter: function(val) {
                    return persianDigits(val);
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#gradientDonutPieCharts"), options);
    chart.render();

    /* Donut with Pattern */
    var options = {
        series: [44, 55, 41, 17, 15],
        chart: {
            width: 380,
            type: 'donut',
            dropShadow: {
                enabled: true,
                color: '#111',
                top: -1,
                left: 3,
                blur: 3,
                opacity: 0.5
            }
        },
        stroke: {
            width: 0,
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        total: {
                            showAlways: true,
                            show: true,
                            formatter: function(w) {
                                return persianDigits(w.globals.seriesTotals.reduce((a, b) => a + b, 0));
                            }
                        }
                    }
                }
            }
        },
        labels: ["کمدی", "اکشن", "علمی-تخیلی", "درام", "ترسناک"],
        dataLabels: {
            dropShadow: {
                blur: 3,
                opacity: 1
            },
            formatter: function(val, opts) {
                return persianDigits(val.toFixed(1)) + '%';
            }
        },
        fill: {
            type: 'pattern',
            opacity: 1,
            pattern: {
                enabled: true,
                style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
            },
        },
        states: {
            hover: {
                filter: 'none'
            }
        },
        theme: {
            palette: 'palette2'
        },
        title: {
            text: "نوع فیلم مورد علاقه",
            align: 'right'
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
        }],
        tooltip: {
            y: {
                formatter: function(val) {
                    return persianDigits(val);
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#donutPatternPieCharts"), options);
    chart.render();

    /* Pie with Image */
    var options = {
        series: [44, 33, 54, 45],
        chart: {
            width: 380,
            type: 'pie',
        },
        colors: ['#93C3EE', '#E5C6A0', '#669DB5', '#94A74A'],
        fill: {
            type: 'image',
            opacity: 0.85,
            image: {
                src: ['assets/images/bg/bar-chart-bg.webp', 'assets/images/bg/bar-chart-bg2.webp', 'assets/images/bg/bar-chart-bg.webp', 'assets/images/bg/bar-chart-bg2.webp'],
                width: 25,
                imagedHeight: 25
            },
        },
        stroke: {
            width: 4
        },
        labels: ['تیم الف', 'تیم ب', 'تیم ج', 'تیم د'],
        dataLabels: {
            enabled: true,
            style: {
                colors: ['#111']
            },
            background: {
                enabled: true,
                foreColor: '#fff',
                borderWidth: 0
            },
            formatter: function(val, opts) {
                return persianDigits(val.toFixed(1)) + '%';
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
        }],
        tooltip: {
            y: {
                formatter: function(val) {
                    return persianDigits(val);
                }
            }
        }
    };

    var chart = new ApexCharts(document.querySelector("#imagePieCharts"), options);
    chart.render();

})();