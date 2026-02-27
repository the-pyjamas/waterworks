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