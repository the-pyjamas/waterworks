/* گزارش درآمد */
var options = {
    chart: {
        height: 368,
        type: 'line',
        stacked: false,
        toolbar: { show: false }
    },
    series: [
        {
            name: 'سفارش‌ها',
            type: 'area',
            data: [68, 63, 55, 75, 43, 45, 60, 55, 70, 50, 65, 35],
            color: "#4F46E5"
        },
        {
            name: 'درآمد',
            type: 'column',
            data: [35, 85, 40, 95, 30, 60, 85, 80, 110, 70, 100, 90],
            color: "var(--color-success)"
        },
        {
            name: 'بازپرداخت‌ها',
            type: 'line',
            data: [18, 14, 15, 10, 9, 15, 10, 18, 14, 9, 15, 10],
            color: "var(--color-warning)",
            stroke: {
                dashArray: 5,
                width: 2
            }
        }
    ],
    stroke: {
        width: [2, 0, 2],
        curve: 'smooth'
    },
    plotOptions: {
        bar: {
            columnWidth: '45%'
        }
    },
    fill: {
        opacity: [0.2, 1, 1]
    },
    labels: ['آذر', 'آبان', 'مهر', 'شهریور', 'مرداد', 'تیر', 'خرداد', 'اردیبهشت', 'فروردین', 'اسفند', 'بهمن', 'دی'],
    markers: {
        size: 5
    },
    xaxis: {
        type: 'category',
        labels: {
            style: {
                colors: 'var(--color-body)',
                fontSize: '12px',
                fontFamily: 'var(--ff-body)',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            },
        },
    },
    yaxis: {
        labels: {
            style: {
                colors: 'var(--color-body)',
                fontSize: '12px',
                fontFamily: 'var(--ff-body)',
                fontWeight: 400,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
    },
    legend: {
        position: "bottom"
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (val) {
                return val + " تومان";
            }
        }
    }
};
var chart = new ApexCharts(document.querySelector("#revenueReport"), options);
chart.render();

/* خلاصه سفارش */
var options = {
    series: [{
        name: 'کل سفارش‌ها',
        type: 'column',
        data: [72, 68, 55, 62, 48, 60, 58, 42, 55, 38, 52, 45]
    }, {
        name: 'تحویل‌شده',
        type: 'column',
        data: [65, 60, 48, 55, 42, 52, 50, 36, 48, 32, 45, 38]
    }, {
        name: 'لغوشده',
        type: 'line',
        data: [7, 8, 7, 7, 6, 8, 8, 6, 7, 6, 7, 7]
    }],
    chart: {
        toolbar: {
            show: false
        },
        height: 328,
        type: 'line',
        stacked: false,
        fontFamily: 'Poppins, Arial, sans-serif',
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    dataLabels: {
        enabled: false
    },
    title: {
        text: undefined,
    },
    xaxis: {
        categories: ['آذر', 'آبان', 'مهر', 'شهریور', 'مرداد', 'تیر', 'خرداد', 'اردیبهشت', 'فروردین', 'اسفند', 'بهمن', 'دی'],
        labels: {
            style: {
                colors: 'var(--color-body)',
                fontSize: '12px',
                fontFamily: 'var(--ff-body)',
                fontWeight: 400,
                cssClass: 'apexcharts-xaxis-label',
            },
        },
    },
    yaxis: [
        {
            show: true,
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: false,
                color: '#4eb6d0'
            },
            labels: {
                style: {
                    colors: 'var(--color-body)',
                    fontSize: '12px',
                    fontFamily: 'var(--ff-body)',
                    fontWeight: 400,
                    cssClass: 'apexcharts-yaxis-label',
                }
            },
            title: {
                text: undefined,
            },
            tooltip: {
                enabled: true
            }
        },
        {
            seriesName: 'پروژه‌ها',
            opposite: true,
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                style: {
                    colors: 'var(--color-body)',
                    fontSize: '12px',
                    fontFamily: 'var(--ff-body)',
                    fontWeight: 400,
                    cssClass: 'apexcharts-yaxis-label',
                }
            },
            title: {
                text: undefined,
            },
        },
        {
            seriesName: 'درآمد',
            opposite: true,
            axisTicks: {
                show: true,
            },
            axisBorder: {
                show: false,
            },
            labels: {
                show: false,
            },
            title: {
                text: undefined,
            }
        },
    ],
    tooltip: {
        enabled: true,
    },
    legend: {
        show: true,
        position: 'bottom',
        offsetX: 40,
        fontSize: '13px',
        fontWeight: 'normal',
        labels: {
            colors: '#acb1b1',
        },
        markers: {
            width: 10,
            height: 10,
        },
    },
    stroke: {
        width: [2, 2, 1.5],
        curve: 'smooth',
        lineCap: 'round',
        dashArray: [0, 0, 0],
    },
    plotOptions: {
        bar: {
            columnWidth: "40%",
            borderRadius: 2
        }
    },
    colors: ["var(--color-primary)", "var(--color-success)", "var(--color-warning)"]
};

var chart1 = new ApexCharts(document.querySelector("#order-summary"), options);
chart1.render();