"use strict";

// نمودار ۲
var options2 = {
    series: [{
        name: 'سری ۱',
        data: [45, 52, 38, 45, 49, 55, 60]
    }],
    chart: {
        height: 150,
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
        },
        direction: 'rtl' // پشتیبانی از راست‌به‌چپ
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
            "1404/06/28 00:00",
            "1404/06/28 01:30",
            "1404/06/28 02:30",
            "1404/06/28 03:30",
            "1404/06/28 04:30",
            "1404/06/28 05:30",
            "1404/06/28 06:30"
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
                fontFamily: 'Vazir, IRANSans, sans-serif' // فونت مناسب فارسی
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
                fontFamily: 'Vazir, IRANSans, sans-serif'
            }
        }
    },
    yaxis: {
        show: false,
    },
    tooltip: {
        x: {
            format: 'dd MMMM yyyy HH:mm' // فرمت تاریخ شمسی
        },
        style: {
            fontFamily: 'Vazir, IRANSans, sans-serif'
        }
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
var chart2 = new ApexCharts(document.querySelector("#profileChart2"), options2);
chart2.render();

// نمودار ۳
var options3 = {
    series: [{
        name: 'سری ۲',
        data: [72, 68, 70, 65, 62, 70, 75]
    }],
    chart: {
        height: 150,
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
        },
        direction: 'rtl'
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
            "1404/06/28 00:00",
            "1404/06/28 01:30",
            "1404/06/28 02:30",
            "1404/06/28 03:30",
            "1404/06/28 04:30",
            "1404/06/28 05:30",
            "1404/06/28 06:30"
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
                fontFamily: 'Vazir, IRANSans, sans-serif'
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
                fontFamily: 'Vazir, IRANSans, sans-serif'
            }
        }
    },
    yaxis: {
        show: false,
    },
    tooltip: {
        x: {
            format: 'dd MMMM yyyy HH:mm'
        },
        style: {
            fontFamily: 'Vazir, IRANSans, sans-serif'
        }
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
var chart3 = new ApexCharts(document.querySelector("#profileChart3"), options3);
chart3.render();

// نمودار ۴
var options4 = {
    series: [{
        name: 'سری ۳',
        data: [30, 40, 35, 50, 49, 45, 55]
    }],
    chart: {
        height: 150,
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
        },
        direction: 'rtl'
    },
    colors: ['#28A745'],
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
            "1404/06/28 00:00",
            "1404/06/28 01:30",
            "1404/06/28 02:30",
            "1404/06/28 03:30",
            "1404/06/28 04:30",
            "1404/06/28 05:30",
            "1404/06/28 06:30"
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
                fontFamily: 'Vazir, IRANSans, sans-serif'
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
                fontFamily: 'Vazir, IRANSans, sans-serif'
            }
        }
    },
    yaxis: {
        show: false,
    },
    tooltip: {
        x: {
            format: 'dd MMMM yyyy HH:mm'
        },
        style: {
            fontFamily: 'Vazir, IRANSans, sans-serif'
        }
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
var chart4 = new ApexCharts(document.querySelector("#profileChart4"), options4);
chart4.render();

// نمودار ۵
var options5 = {
    series: [{
        name: 'سری ۴',
        data: [80, 75, 82, 78, 75, 80, 85]
    }],
    chart: {
        height: 150,
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
        },
        direction: 'rtl'
    },
    colors: ['#1493FF'],
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
            "1404/06/28 00:00",
            "1404/06/28 01:30",
            "1404/06/28 02:30",
            "1404/06/28 03:30",
            "1404/06/28 04:30",
            "1404/06/28 05:30",
            "1404/06/28 06:30"
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
                fontFamily: 'Vazir, IRANSans, sans-serif'
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
                fontFamily: 'Vazir, IRANSans, sans-serif'
            }
        }
    },
    yaxis: {
        show: false,
    },
    tooltip: {
        x: {
            format: 'dd MMMM yyyy HH:mm'
        },
        style: {
            fontFamily: 'Vazir, IRANSans, sans-serif'
        }
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
var chart5 = new ApexCharts(document.querySelector("#profileChart5"), options5);
chart5.render();

// نمودار ۶
var options6 = {
    series: [{
        name: 'سری ۵',
        data: [50, 55, 45, 60, 55, 50, 65]
    }],
    chart: {
        height: 150,
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
        },
        direction: 'rtl'
    },
    colors: ['#FF830F'],
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
            "1404/06/28 00:00",
            "1404/06/28 01:30",
            "1404/06/28 02:30",
            "1404/06/28 03:30",
            "1404/06/28 04:30",
            "1404/06/28 05:30",
            "1404/06/28 06:30"
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
                fontFamily: 'Vazir, IRANSans, sans-serif'
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
                fontFamily: 'Vazir, IRANSans, sans-serif'
            }
        }
    },
    yaxis: {
        show: false,
    },
    tooltip: {
        x: {
            format: 'dd MMMM yyyy HH:mm'
        },
        style: {
            fontFamily: 'Vazir, IRANSans, sans-serif'
        }
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
var chart6 = new ApexCharts(document.querySelector("#profileChart6"), options6);
chart6.render();

// نمودار ۷
var options7 = {
    series: [{
        name: 'سری ۶',
        data: [35, 42, 38, 45, 50, 48, 55]
    }],
    chart: {
        height: 150,
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
        },
        direction: 'rtl'
    },
    colors: ['#E63232'],
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
            "1404/06/28 00:00",
            "1404/06/28 01:30",
            "1404/06/28 02:30",
            "1404/06/28 03:30",
            "1404/06/28 04:30",
            "1404/06/28 05:30",
            "1404/06/28 06:30"
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
                fontFamily: 'Vazir, IRANSans, sans-serif'
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
                fontFamily: 'Vazir, IRANSans, sans-serif'
            }
        }
    },
    yaxis: {
        show: false,
    },
    tooltip: {
        x: {
            format: 'dd MMMM yyyy HH:mm'
        },
        style: {
            fontFamily: 'Vazir, IRANSans, sans-serif'
        }
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
var chart7 = new ApexCharts(document.querySelector("#profileChart7"), options7);
chart7.render();

// نمودار ۸
var options8 = {
    series: [{
        name: 'سری ۷',
        data: [60, 65, 70, 65, 60, 68, 72]
    }],
    chart: {
        height: 150,
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
        },
        direction: 'rtl'
    },
    colors: ['#800080'],
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
            "1404/06/28 00:00",
            "1404/06/28 01:30",
            "1404/06/28 02:30",
            "1404/06/28 03:30",
            "1404/06/28 04:30",
            "1404/06/28 05:30",
            "1404/06/28 06:30"
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
                fontFamily: 'Vazir, IRANSans, sans-serif'
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
                fontFamily: 'Vazir, IRANSans, sans-serif'
            }
        }
    },
    yaxis: {
        show: false,
    },
    tooltip: {
        x: {
            format: 'dd MMMM yyyy HH:mm'
        },
        style: {
            fontFamily: 'Vazir, IRANSans, sans-serif'
        }
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
var chart8 = new ApexCharts(document.querySelector("#profileChart8"), options8);
chart8.render();

// نمودار ۹
var options9 = {
    series: [{
        name: 'سری ۸',
        data: [40, 45, 50, 55, 50, 45, 60]
    }],
    chart: {
        height: 150,
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
        },
        direction: 'rtl'
    },
    colors: ['#6A5ACD'],
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
            "1404/06/28 00:00",
            "1404/06/28 01:30",
            "1404/06/28 02:30",
            "1404/06/28 03:30",
            "1404/06/28 04:30",
            "1404/06/28 05:30",
            "1404/06/28 06:30"
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
                fontFamily: 'Vazir, IRANSans, sans-serif'
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
                fontFamily: 'Vazir, IRANSans, sans-serif'
            }
        }
    },
    yaxis: {
        show: false,
    },
    tooltip: {
        x: {
            format: 'dd MMMM yyyy HH:mm'
        },
        style: {
            fontFamily: 'Vazir, IRANSans, sans-serif'
        }
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
var chart9 = new ApexCharts(document.querySelector("#profileChart9"), options9);
chart9.render();