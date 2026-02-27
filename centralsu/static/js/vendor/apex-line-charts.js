(function () {
    "use strict";

    /* Apex Line Chart start */

    var options = {
        series: [{
            name: "رایانه‌های رومیزی",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        colors: ['#4F46E5'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        title: {
            text: 'روند محصولات بر اساس ماه',
            align: 'right' // تغییر به راست برای هماهنگی با زبان فارسی
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
            },
        },
        xaxis: {
            categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر'],
        }
    };
    
    var chart = new ApexCharts(document.querySelector("#lineChart1"), options);
    chart.render();

    var options = {
        series: [
            {
                name: "بالاترین - 1392",
                data: [28, 29, 33, 36, 32, 32, 33]
            },
            {
                name: "پایین‌ترین - 1392",
                data: [12, 11, 14, 18, 17, 13, 13]
            }
        ],
        chart: {
            height: 350,
            type: 'line',
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.5
            },
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false
            }
        },
        colors: ['#4F46E5', '#FEBB7B'],
        dataLabels: {
            enabled: true,
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: 'میانگین دمای بالا و پایین',
            align: 'right' // تغییر به راست برای هماهنگی با زبان فارسی
        },
        grid: {
            borderColor: '#e7e7e7',
            row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
            },
        },
        markers: {
            size: 1
        },
        xaxis: {
            categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'],
            title: {
                text: 'ماه'
            }
        },
        yaxis: {
            title: {
                text: 'دما'
            },
            min: 5,
            max: 40
        },
        legend: {
            position: 'top',
            horizontalAlign: 'left', // تغییر به چپ برای هماهنگی با زبان فارسی
            floating: true,
            offsetY: -25,
            offsetX: 5 // تنظیم افست برای هماهنگی با جهت راست به چپ
        }
    };
    
    var chart = new ApexCharts(document.querySelector("#lineChart2"), options);
    chart.render();


/* zoomable time series */
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
        persianNumbers0 = ['۰' ,'۱' ,'۲' ,'۳' ,'۴' ,'۵' ,'۶' ,'۷' ,'۸' ,'۹'];
    if (typeof str === 'string') {
        for(var i=0; i<10; i++){
            str = str.replace(persianNumbers[i], persianNumbers0[i]);
        }
    }
    return str;
};

var ts2 = 1484418600000;
var dates = [];
var spikes = [5, -5, 3, -3, 8, -8]
for (var i = 0; i < 120; i++) {
    ts2 = ts2 + 86400000;
    var innerArr = [ts2, dataSeries[1][i].value];
    dates.push(innerArr)
}
var options = {
    series: [{
        name: 'موتورهای XYZ',
        data: dates
    }],
    chart: {
        type: 'area',
        stacked: false,
        height: 350,
        zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
        },
        toolbar: {
            autoSelected: 'zoom'
        }
    },
    dataLabels: {
        enabled: false
    },
    markers: {
        size: 0,
    },
    title: {
        text: 'روند حرکت قیمت سهام',
        align: 'right',
        style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
        },
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
        },
    },
    grid: {
        borderColor: '#f2f5f7',
    },
    colors: ["#4F46E5"],
    yaxis: {
        labels: {
            formatter: function (val) {
                return persianDigits((val / 1000000).toFixed(0));
            },
            show: true,
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
        title: {
            text: 'قیمت',
            fontSize: '13px',
            fontWeight: 'bold',
            style: {
                color: "#8c9097"
            }
        },
    },
    xaxis: {
        type: 'datetime',
        labels: {
            show: true,
            formatter: function(value) {
                var date = new Date(value);
                var gy = date.getFullYear();
                var gm = date.getMonth() + 1;
                var gd = date.getDate();
                var jDate = gregorianToJalali(gy, gm, gd);
                var formatted = jDate[0] + '/' + jDate[1].toString().padStart(2, '0') + '/' + jDate[2].toString().padStart(2, '0');
                return persianDigits(formatted);
            },
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        },
    },
    tooltip: {
        shared: false,
        y: {
            formatter: function (val) {
                return persianDigits((val / 1000000).toFixed(0))
            }
        }
    }
};
var chart = new ApexCharts(document.querySelector("#lineChart3"), options);
chart.render();

    /* Line Chart with Annotations */
/* zoomable time series with annotations */
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

var options = {
    series: [{
        data: series.monthDataSeries1.prices
    }],
    chart: {
        height: 350,
        type: 'line',
        id: 'areachart-2'
    },
    colors: ['#4F46E5'],
    annotations: {
        yaxis: [{
            y: 8200,
            borderColor: '#00E396',
            label: {
                borderColor: '#00E396',
                style: {
                    color: '#fff',
                    background: '#00E396',
                },
                text: 'پشتیبانی',
            }
        }, {
            y: 8600,
            y2: 9000,
            borderColor: '#000',
            fillColor: '#FEB019',
            opacity: 0.2,
            label: {
                borderColor: '#333',
                style: {
                    fontSize: '10px',
                    color: '#333',
                    background: '#FEB019',
                },
                text: 'محدوده محور Y',
            }
        }],
        xaxis: [{
            x: new Date('23 Nov 2017').getTime(),
            strokeDashArray: 0,
            borderColor: '#775DD0',
            label: {
                borderColor: '#775DD0',
                style: {
                    color: '#fff',
                    background: '#775DD0',
                },
                text: 'تست حاشیه‌نویسی',
            }
        }, {
            x: new Date('26 Nov 2017').getTime(),
            x2: new Date('28 Nov 2017').getTime(),
            fillColor: '#B3F7CA',
            opacity: 0.4,
            label: {
                borderColor: '#B3F7CA',
                style: {
                    fontSize: '10px',
                    color: '#fff',
                    background: '#00E396',
                },
                offsetY: -10,
                text: 'محدوده محور X',
            }
        }],
        points: [{
            x: new Date('01 Dec 2017').getTime(),
            y: 8607.55,
            marker: {
                size: 8,
                fillColor: '#fff',
                strokeColor: 'red',
                radius: 2,
                cssClass: 'apexcharts-custom-class'
            },
            label: {
                borderColor: '#FF4560',
                offsetY: 0,
                style: {
                    color: '#fff',
                    background: '#FF4560',
                },
                text: 'حاشیه‌نویسی نقطه‌ای',
            }
        }, {
            x: new Date('08 Dec 2017').getTime(),
            y: 9340.85,
            marker: {
                size: 0
            },
            image: {
                path: 'assets/images/icon/instagram.png'
            }
        }]
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    grid: {
        padding: {
            right: 30,
            left: 20
        }
    },
    title: {
        text: 'خط با حاشیه‌نویسی',
        align: 'right'
    },
    labels: series.monthDataSeries1.dates,
    xaxis: {
        type: 'datetime',
        labels: {
            formatter: function(value) {
                var date = new Date(value);
                var gy = date.getFullYear();
                var gm = date.getMonth() + 1;
                var gd = date.getDate();
                var jDate = gregorianToJalali(gy, gm, gd);
                var formatted = jDate[0] + '/' + jDate[1].toString().padStart(2, '0') + '/' + jDate[2].toString().padStart(2, '0');
                return persianDigits(formatted);
            }
        }
    },
};

var chart = new ApexCharts(document.querySelector("#lineChart4"), options);
chart.render();


    /* syncing charts */
    // Replace Math.random() with a pseudo-random number generator to get reproducible results in e2e tests
    // Based on https://gist.github.com/blixt/f17b47c62508be59987b
    Apex = {
        chart: {
            height: 160,
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight'
        },
        toolbar: {
            tools: {
                selection: false
            }
        },
        markers: {
            size: 6,
            hover: {
                size: 10
            }
        },
        tooltip: {
            followCursor: false,
            theme: 'dark',
            x: {
                show: false
            },
            marker: {
                show: false
            },
            y: {
                title: {
                    formatter: function () {
                        return ''
                    }
                }
            }
        },
        grid: {
            clipMarkers: false
        },
        yaxis: {
            tickAmount: 2
        },
        xaxis: {
            type: 'datetime'
        },
    }
/* generate day-wise time series with Persian calendar support */
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

function generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push([x, y]);
        baseval += 86400000;
        i++;
    }
    return series;
}

var options = {
    series: [{
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
            min: 10,
            max: 60
        })
    }],
    chart: {
        id: 'fb',
        group: 'social',
        type: 'line',
        height: 160
    },
    colors: ['#4F46E5'],
    stroke: {
        curve: 'straight',
        width: 3,
    },
    grid: {
        borderColor: '#f2f5f7',
    },
    xaxis: {
        type: 'datetime',
        labels: {
            show: true,
            formatter: function(value) {
                var date = new Date(value);
                var gy = date.getFullYear();
                var gm = date.getMonth() + 1;
                var gd = date.getDate();
                var jDate = gregorianToJalali(gy, gm, gd);
                var formatted = jDate[0] + '/' + jDate[1].toString().padStart(2, '0') + '/' + jDate[2].toString().padStart(2, '0');
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
            show: true,
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

var chart = new ApexCharts(document.querySelector("#chart-line"), options);
chart.render();

/* generate day-wise time series with Persian calendar support */
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

function generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push([x, y]);
        baseval += 86400000;
        i++;
    }
    return series;
}

var optionsLine2 = {
    series: [{
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
            min: 10,
            max: 30
        })
    }],
    chart: {
        id: 'tw',
        group: 'social',
        type: 'line',
        height: 160
    },
    stroke: {
        curve: 'straight',
        width: 3,
    },
    colors: ['#d77cf7'],
    grid: {
        borderColor: '#f2f5f7',
    },
    xaxis: {
        type: 'datetime',
        labels: {
            show: true,
            formatter: function(value) {
                var date = new Date(value);
                var gy = date.getFullYear();
                var gm = date.getMonth() + 1;
                var gd = date.getDate();
                var jDate = gregorianToJalali(gy, gm, gd);
                var formatted = jDate[0] + '/' + jDate[1].toString().padStart(2, '0') + '/' + jDate[2].toString().padStart(2, '0');
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
            show: true,
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

var chartLine2 = new ApexCharts(document.querySelector("#chart-line2"), optionsLine2);
chartLine2.render();

var optionsArea = {
    series: [{
        data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
            min: 10,
            max: 60
        })
    }],
    chart: {
        id: 'yt',
        group: 'social',
        type: 'area',
        height: 160
    },
    stroke: {
        curve: 'straight',
        width: 3,
    },
    colors: ['#f4a742'],
    grid: {
        borderColor: '#f2f5f7',
    },
    xaxis: {
        type: 'datetime',
        labels: {
            show: true,
            formatter: function(value) {
                var date = new Date(value);
                var gy = date.getFullYear();
                var gm = date.getMonth() + 1;
                var gd = date.getDate();
                var jDate = gregorianToJalali(gy, gm, gd);
                var formatted = jDate[0] + '/' + jDate[1].toString().padStart(2, '0') + '/' + jDate[2].toString().padStart(2, '0');
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
            show: true,
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

var chartArea = new ApexCharts(document.querySelector("#chart-area"), optionsArea);
chartArea.render();


    /* brush chart */
/* generate day-wise time series with Persian calendar support */
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

function generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push([x, y]);
        baseval += 86400000;
        i++;
    }
    return series;
}

var data = generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 185, {
    min: 30,
    max: 90
});

var options = {
    series: [{
        data: data
    }],
    chart: {
        id: 'chart2',
        type: 'line',
        height: 250,
        toolbar: {
            autoSelected: 'pan',
            show: false
        }
    },
    colors: ['#4F46E5'],
    stroke: {
        width: 3
    },
    fill: {
        opacity: 1,
    },
    markers: {
        size: 0
    },
    grid: {
        borderColor: '#f2f5f7',
    },
    xaxis: {
        type: 'datetime',
        labels: {
            show: true,
            formatter: function(value) {
                var date = new Date(value);
                var gy = date.getFullYear();
                var gm = date.getMonth() + 1;
                var gd = date.getDate();
                var jDate = gregorianToJalali(gy, gm, gd);
                var formatted = jDate[0] + '/' + jDate[1].toString().padStart(2, '0') + '/' + jDate[2].toString().padStart(2, '0');
                return persianDigits(formatted);
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
            show: true,
            formatter: function(val) {
                return persianDigits(val.toFixed(0));
            },
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
    }
};

var chart = new ApexCharts(document.querySelector("#brush-chart1"), options);
chart.render();

var optionsLine = {
    series: [{
        data: data
    }],
    chart: {
        id: 'chart1',
        height: 245,
        type: 'area',
        brush: {
            target: 'chart2',
            enabled: true
        },
        selection: {
            enabled: true,
            xaxis: {
                min: new Date('19 Jun 2017').getTime(),
                max: new Date('14 Aug 2017').getTime()
            }
        },
    },
    dataLabels: {
        enabled: false,
    },
    colors: ['#d77cf7'],
    fill: {
        type: 'gradient',
        gradient: {
            opacityFrom: 0.91,
            opacityTo: 0.1,
        }
    },
    grid: {
        borderColor: '#f2f5f7',
    },
    markers: {
        size: 0
    },
    xaxis: {
        type: 'datetime',
        labels: {
            show: true,
            formatter: function(value) {
                var date = new Date(value);
                var gy = date.getFullYear();
                var gm = date.getMonth() + 1;
                var gd = date.getDate();
                var jDate = gregorianToJalali(gy, gm, gd);
                var formatted = jDate[0] + '/' + jDate[1].toString().padStart(2, '0') + '/' + jDate[2].toString().padStart(2, '0');
                return persianDigits(formatted);
            },
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        },
        tooltip: {
            enabled: false
        }
    },
    yaxis: {
        tickAmount: 2,
        labels: {
            show: true,
            formatter: function(val) {
                return persianDigits(val.toFixed(0));
            },
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
    }
};

var chartLine = new ApexCharts(document.querySelector("#brush-chart"), optionsLine);
chartLine.render();

    /* Stepline */

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

/* Stepline Chart */
var options = {
    series: [{
        data: [34, 44, 54, 21, 12, 43, 33, 23, 66, 66, 58]
    }],
    chart: {
        type: 'line',
        height: 345
    },
    stroke: {
        curve: 'stepline',
    },
    grid: {
        borderColor: '#f2f5f7',
    },
    dataLabels: {
        enabled: false
    },
    colors: ["#4F46E5"],
    title: {
        text: 'نمودار پله‌ای',
        align: 'right'
    },
    markers: {
        hover: {
            sizeOffset: 4
        }
    },
    xaxis: {
        labels: {
            show: true,
            formatter: function(val, index) {
                var months = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن'];
                return persianDigits(months[index % months.length]);
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
            show: true,
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

var chart2 = new ApexCharts(document.querySelector("#steplineChart"), options);
chart2.render();

/* Gradient Chart */
var options = {
    series: [{
        name: 'فروش',
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
    }],
    chart: {
        height: 350,
        type: 'line',
    },
    forecastDataPoints: {
        count: 7
    },
    stroke: {
        width: 5,
        curve: 'smooth'
    },
    xaxis: {
        type: 'datetime',
        categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
        tickAmount: 10,
        labels: {
            formatter: function(value, timestamp, opts) {
                var date = new Date(timestamp);
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
    title: {
        text: 'پیش‌بینی',
        align: 'right',
        style: {
            fontSize: "16px",
            color: '#666'
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            gradientToColors: ['#4F46E5'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100]
        },
    },
    yaxis: {
        labels: {
            show: true,
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

var chart = new ApexCharts(document.querySelector("#gradientChart"), options);
chart.render();


/* Persian digit conversion function */
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

/* Null Values Chart */
var options = {
    series: [{
        name: 'پتر',
        data: [5, 5, 10, 8, 7, 5, 4, null, null, null, 10, 10, 7, 8, 6, 9]
    }, {
        name: 'جانی',
        data: [10, 15, null, 12, null, 10, 12, 15, null, null, 12, null, 14, null, null, null]
    }, {
        name: 'دیوید',
        data: [null, null, null, null, 3, 4, 1, 3, 4, 6, 7, 9, 5, null, null, null]
    }],
    colors: ['#4F46E5', '#FEBB7B', '#1493FF'],
    chart: {
        height: 350,
        type: 'line',
        zoom: {
            enabled: false
        },
        animations: {
            enabled: false
        }
    },
    stroke: {
        width: [5, 5, 4],
        curve: 'smooth'
    },
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    title: {
        text: 'داده‌های گمشده (مقادیر تهی)',
        align: 'right'
    },
    xaxis: {
        labels: {
            formatter: function(val) {
                // Safeguard against undefined or null values
                return val ? persianDigits(val.toString()) : '';
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
                return val ? persianDigits(val.toFixed(0)) : '';
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

var chart = new ApexCharts(document.querySelector("#nullValuesChart"), options);
chart.render();


    /* Dashed */

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

/* Dashed Chart */
var options = {
    series: [{
        name: "مدت زمان جلسه",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
    }, {
        name: "نمایش صفحات",
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
    }, {
        name: 'کل بازدیدها',
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
    }],
    chart: {
        height: 350,
        type: 'line',
        zoom: {
            enabled: false
        },
    },
    colors: ['#4F46E5', '#FEBB7B', '#1493FF'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [5, 7, 5],
        curve: 'straight',
        dashArray: [0, 8, 5]
    },
    title: {
        text: 'آمار صفحات',
        align: 'right'
    },
    legend: {
        tooltipHoverFormatter: function(val, opts) {
            return persianDigits(val + ' - <strong>' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + '</strong>');
        }
    },
    markers: {
        size: 0,
        hover: {
            sizeOffset: 6
        }
    },
    xaxis: {
        categories: ['11 دی 1395', '12 دی 1395', '13 دی 1395', '14 دی 1395', '15 دی 1395', '16 دی 1395', '17 دی 1395', '18 دی 1395', '19 دی 1395', '20 دی 1395', '21 دی 1395', '22 دی 1395'],
        labels: {
            formatter: function(val) {
                // Safeguard against undefined or null values
                if (!val || typeof val !== 'string') {
                    return '';
                }
                var parts = val.split(' ');
                var day = parts[0];
                var month = parts[1];
                return persianDigits(day + ' ' + month);
            },
            style: {
                colors: "#8c9097",
                fontSize: '11px',
                fontWeight: 600,
                cssClass: 'apexcharts-xaxis-label',
            },
        }
    },
    tooltip: {
        y: [
            {
                title: {
                    formatter: function(val) {
                        return persianDigits(val + " (دقیقه)");
                    }
                }
            },
            {
                title: {
                    formatter: function(val) {
                        return persianDigits(val + " به ازای هر جلسه");
                    }
                }
            },
            {
                title: {
                    formatter: function(val) {
                        return persianDigits(val);
                    }
                }
            }
        ]
    },
    grid: {
        borderColor: '#f1f1f1',
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

var chart = new ApexCharts(document.querySelector("#dashedChart"), options);
chart.render();



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

/* Realtime Chart */
var lastDate = 0;
var data = [];
var TICKINTERVAL = 86400000;
let XAXISRANGE = 777600000;

function getDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    while (i < count) {
        var x = baseval;
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        data.push({
            x, y
        });
        lastDate = baseval;
        baseval += TICKINTERVAL;
        i++;
    }
}

getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
    min: 10,
    max: 90
});

function getNewSeries(baseval, yrange) {
    var newDate = baseval + TICKINTERVAL;
    lastDate = newDate;
    for (var i = 0; i < data.length - 10; i++) {
        data[i].x = newDate - XAXISRANGE - TICKINTERVAL;
        data[i].y = 0;
    }
    data.push({
        x: newDate,
        y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    });
}

function resetData() {
    data = data.slice(data.length - 10, data.length);
}

var options = {
    series: [{
        data: data.slice()
    }],
    chart: {
        id: 'dynamic-chart',
        height: 350,
        type: 'line',
        animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
                speed: 1000
            }
        },
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ["#4F46E5"],
    stroke: {
        curve: 'smooth',
        width: 3,
    },
    title: {
        text: 'نمودار به‌روزرسانی پویا',
        align: 'right',
        style: {
            fontSize: '13px',
            fontWeight: 'bold',
            color: '#8c9097'
        },
    },
    markers: {
        size: 0
    },
    xaxis: {
        type: 'datetime',
        range: XAXISRANGE,
        labels: {
            show: true,
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
        max: 100,
        labels: {
            show: true,
            formatter: function(val) {
                return val ? persianDigits(val.toFixed(0)) : '';
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
        show: false
    },
};

var chart = new ApexCharts(document.querySelector("#realtimeChart"), options);
chart.render();
    chart.render();
    window.setInterval(function () {
        getNewSeries(lastDate, {
            min: 10,
            max: 90
        })
        chart.updateSeries([{
            data: data
        }])
    }, 1000)

    /* Apex Line Chart end */

})();