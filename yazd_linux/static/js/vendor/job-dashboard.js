document.addEventListener('DOMContentLoaded', function () {
    var options = {
        series: [{
            name: 'موقعیت‌های شغلی',
            data: [42, 38, 40, 35, 27, 30, 32, 28, 20, 25, 22, 18]
        }, {
            name: 'درخواست‌ها',
            data: [950, 880, 920, 850, 780, 820, 750, 600, 520, 480, 420, 350]
        }, {
            name: 'استخدام‌ها',
            data: [40, 38, 35, 32, 27, 30, 28, 25, 22, 20, 18, 15]
        }],
        chart: {
            type: 'area',
            height: 359,
            stacked: false,
            toolbar: {
                show: false,
                tools: {
                    download: true,
                    selection: true,
                    zoom: true,
                    zoomin: true,
                    zoomout: true,
                    pan: true,
                    reset: true
                }
            },
            zoom: {
                enabled: true
            }
        },
        colors: ['#29DA82', '#1493FF', '#FF830F'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: 2
        },
        fill: {
            type: 'gradient',
            gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.6,
                opacityTo: 0.1,
                stops: [0, 90, 100]
            },
        },
        legend: {
            position: 'top',
            horizontalAlign: 'center',
            markers: {
                radius: 2
            }
        },
        xaxis: {
            categories: ['آذر', 'آبان', 'مهر', 'شهریور', 'مرداد', 'تیر', 'خرداد', 'اردیبهشت', 'فروردین', 'اسفند', 'بهمن', 'دی'],
            labels: {
                style: {
                    colors: 'var(--color-body)',
                    fontSize: '12px'
                }
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: [
            {
                seriesName: 'موقعیت‌های شغلی',
                axisTicks: {
                    show: false
                },
                axisBorder: {
                    show: true,
                    color: '#3b82f6'
                },
                labels: {
                    style: {
                        colors: '#3b82f6'
                    }
                },
            },
            {
                seriesName: 'درخواست‌ها',
                show: false
            },
            {
                seriesName: 'استخدام‌ها',
                opposite: true,
                axisTicks: {
                    show: false
                },
                axisBorder: {
                    show: true,
                    color: '#6366f1'
                },
                labels: {
                    style: {
                        colors: '#6366f1'
                    }
                },
            }
        ],
        tooltip: {
            shared: true,
            intersect: false,
            show: false,
            y: {
                formatter: function (value, { series, seriesIndex, dataPointIndex, w }) {
                    if (seriesIndex === 1) {
                        return value.toLocaleString() + ' درخواست';
                    } else {
                        return value + (seriesIndex === 2 ? ' استخدام' : ' شغل');
                    }
                }
            },
            style: {
                fontSize: '14px'
            }
        },
        grid: {
            borderColor: '#f3f4f6',
            strokeDashArray: 4,
            padding: {
                top: 0,
                right: 20,
                bottom: 0,
                left: 20
            }
        },
        responsive: [{
            breakpoint: 768,
            options: {
                chart: {
                    height: 300
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    };

    var chart = new ApexCharts(document.querySelector("#recruitment-analytics-chart"), options);
    chart.render();
});

// بازدیدکنندگان بر اساس کشور
var markers = [
    {
        name: "ایالات متحده",
        coords: [37.0902, -95.7129],
    },
    {
        name: "فلسطین",
        coords: [31.5, 34.4667],
    },
    {
        name: "ایرلند",
        coords: [53.1424, -7.6921],
    },
    {
        name: "برزیل",
        coords: [-14.2350, -51.9253],
    },
];
var map = new jsVectorMap({
    map: "world_merc",
    selector: "#seles-countries",
    markersSelectable: true,
    zoomOnScroll: false,
    zoomButtons: false,

    onMarkerSelected(index, isSelected, selectedMarkers) {
        console.log(index, isSelected, selectedMarkers);
    },

    // برچسب‌ها
    labels: {
        markers: {
            render: function (marker) {
                return marker.name;
            },
        },
    },

    // سبک نشانگر و برچسب
    markers: markers,
    markerStyle: {
        hover: {
            stroke: "#DDD",
            strokeWidth: 3,
            fill: "#FFF",
        },
        selected: {
            fill: "#ff525d",
        },
    },
    regionStyle: {
        initial: {
            stroke: "var(--primary01)",
            strokeWidth: 1.5,
        }
    },
    markerLabelStyle: {
        initial: {
            fontFamily: 'Nunito Sans, sans-serif',
            fontSize: 13,
            fontWeight: 500,
            fill: "#35373e",
        },
    },
});