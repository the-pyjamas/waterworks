/* وضعیت سفارش‌ها */
var options = {
    chart: {
        height: 352,
        type: 'line',
        stacked: false,
        toolbar: { show: false }
    },
    series: [
        {
            name: 'سفارش‌ها',
            type: 'area',
            data: [68, 63, 55, 75, 43, 45, 60, 55, 70, 50, 65, 35],
            color: "#FEBB7B"
        },
        {
            name: 'درآمدها',
            type: 'column',
            data: [35, 85, 40, 95, 30, 60, 85, 80, 110, 70, 100, 90],
            color: "#4F46E5",
        },
        {
            name: 'بازپرداخت‌ها',
            type: 'line',
            data: [20, 14, 25, 10, 8, 5, 10, 18, 20, 12, 15, 10],
            color: "var(--color-success)",
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
        position: "top",
        labels: {
            colors: "var(--color-body)",
        },
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: function (val) {
                return val + " ریال";
            }
        },
    },
};
var chart = new ApexCharts(document.querySelector("#order-status"), options);
chart.render();
/* وضعیت سفارش‌ها */

/* نقشه بازدیدکنندگان */
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
    labels: {
        markers: {
            render: function (marker) {
                return marker.name;
            },
        },
    },
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
            stroke: "#e9e9e9",
            strokeWidth: .15,
            fill: "var(--gray-3)",
            fillOpacity: 1
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
/* نقشه بازدیدکنندگان */

/* فعال‌سازی کارت */
var swiper = new Swiper(".trendingProduct", {
    pagination: {
        el: ".pagination-bd",
        clickable: true,
    },
});

var options = {
    series: [{
        name: 'سری ۱',
        data: [50, 95, 85, 95, 60, 50, 80]
    }],
    chart: {
        height: 161,
        width: '100%',
        type: 'area',
        offsetY: 2,
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false
        },
        sparkline: {
            enabled: true
        }
    },
    colors: ['#4F46E5'],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0.5,
            stops: [0, 90, 100]
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false,
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: [
            "1397/06/28 06:30:00",
            "1397/06/28 05:30:00",
            "1397/06/28 04:30:00",
            "1397/06/28 03:30:00",
            "1397/06/28 02:30:00",
            "1397/06/28 01:30:00",
            "1397/06/28 00:00:00"
        ],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        },
        labels: {
            show: false,
            style: {
                fontSize: '12px',
            }
        },
        crosshairs: {
            show: false,
            position: 'front',
            stroke: {
                width: 1,
                dashArray: 3
            }
        },
        tooltip: {
            enabled: false,
            formatter: undefined,
            offsetY: 0,
            style: {
                fontSize: '12px',
            }
        }
    },
    yaxis: {
        show: false,
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
    grid: {
        show: false,
        borderColor: '#eee',
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    },
};
var chart = new ApexCharts(document.querySelector("#widgetChartYear"), options);
chart.render();

var options = {
    series: [{
        name: 'سری ۱',
        data: [50, 95, 85, 95, 60, 50, 80]
    }],
    chart: {
        height: 161,
        width: '100%',
        type: 'area',
        offsetY: 2,
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false
        },
        sparkline: {
            enabled: true
        }
    },
    colors: ['#FEBB7B'],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0.5,
            stops: [0, 90, 100]
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false,
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: [
            "1397/06/28 06:30:00",
            "1397/06/28 05:30:00",
            "1397/06/28 04:30:00",
            "1397/06/28 03:30:00",
            "1397/06/28 02:30:00",
            "1397/06/28 01:30:00",
            "1397/06/28 00:00:00"
        ],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        },
        labels: {
            show: false,
            style: {
                fontSize: '12px',
            }
        },
        crosshairs: {
            show: false,
            position: 'front',
            stroke: {
                width: 1,
                dashArray: 3
            }
        },
        tooltip: {
            enabled: false,
            formatter: undefined,
            offsetY: 0,
            style: {
                fontSize: '12px',
            }
        }
    },
    yaxis: {
        show: false,
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
    grid: {
        show: false,
        borderColor: '#eee',
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    },
};
var chart = new ApexCharts(document.querySelector("#widgetChartYear2"), options);
chart.render();

var options = {
    series: [{
        name: 'سری ۱',
        data: [90, 95, 85, 90, 70, 80, 50]
    }],
    chart: {
        height: 161,
        width: '100%',
        type: 'area',
        offsetY: 2,
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false
        },
        sparkline: {
            enabled: true
        }
    },
    colors: ['#35BE5E'],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0.5,
            stops: [0, 90, 100]
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false,
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: [
            "1397/06/28 06:30:00",
            "1397/06/28 05:30:00",
            "1397/06/28 04:30:00",
            "1397/06/28 03:30:00",
            "1397/06/28 02:30:00",
            "1397/06/28 01:30:00",
            "1397/06/28 00:00:00"
        ],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        },
        labels: {
            show: false,
            style: {
                fontSize: '12px',
            }
        },
        crosshairs: {
            show: false,
            position: 'front',
            stroke: {
                width: 1,
                dashArray: 3
            }
        },
        tooltip: {
            enabled: false,
            formatter: undefined,
            offsetY: 0,
            style: {
                fontSize: '12px',
            }
        }
    },
    yaxis: {
        show: false,
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
    grid: {
        show: false,
        borderColor: '#eee',
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    },
};
var chart = new ApexCharts(document.querySelector("#widgetChartYear3"), options);
chart.render();

var options = {
    series: [{
        name: 'سری ۱',
        data: [90, 95, 85, 90, 70, 80, 50]
    }],
    chart: {
        height: 161,
        width: '100%',
        type: 'area',
        offsetY: 2,
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false
        },
        sparkline: {
            enabled: true
        }
    },
    colors: ['#93E7FE'],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0.5,
            stops: [0, 90, 100]
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false,
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: [
            "1397/06/28 06:30:00",
            "1397/06/28 05:30:00",
            "1397/06/28 04:30:00",
            "1397/06/28 03:30:00",
            "1397/06/28 02:30:00",
            "1397/06/28 01:30:00",
            "1397/06/28 00:00:00"
        ],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        },
        labels: {
            show: false,
            style: {
                fontSize: '12px',
            }
        },
        crosshairs: {
            show: false,
            position: 'front',
            stroke: {
                width: 1,
                dashArray: 3
            }
        },
        tooltip: {
            enabled: false,
            formatter: undefined,
            offsetY: 0,
            style: {
                fontSize: '12px',
            }
        }
    },
    yaxis: {
        show: false,
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
    grid: {
        show: false,
        borderColor: '#eee',
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    },
};
var chart = new ApexCharts(document.querySelector("#widgetChartYear4"), options);
chart.render();

var options = {
    series: [{
        name: 'سری ۱',
        data: [90, 95, 85, 90, 70, 80, 50]
    }],
    chart: {
        height: 161,
        width: '100%',
        type: 'area',
        offsetY: 2,
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false
        },
        sparkline: {
            enabled: true
        }
    },
    colors: ['#F991DC'],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0.5,
            stops: [0, 90, 100]
        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: false,
    },
    stroke: {
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: [
            "1397/06/28 06:30:00",
            "1397/06/28 05:30:00",
            "1397/06/28 04:30:00",
            "1397/06/28 03:30:00",
            "1397/06/28 02:30:00",
            "1397/06/28 01:30:00",
            "1397/06/28 00:00:00"
        ],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false
        },
        labels: {
            show: false,
            style: {
                fontSize: '12px',
            }
        },
        crosshairs: {
            show: false,
            position: 'front',
            stroke: {
                width: 1,
                dashArray: 3
            }
        },
        tooltip: {
            enabled: false,
            formatter: undefined,
            offsetY: 0,
            style: {
                fontSize: '12px',
            }
        }
    },
    yaxis: {
        show: false,
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
    grid: {
        show: false,
        borderColor: '#eee',
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }
    },
};
var chart = new ApexCharts(document.querySelector("#widgetChartYear5"), options);
chart.render();