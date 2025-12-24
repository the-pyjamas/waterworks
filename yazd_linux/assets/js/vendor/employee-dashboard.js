// نمودار کل ساعت‌ها
var options = {
    chart: {
        height: 160,
        type: "radialBar"
    },
    series: [70], // % از 100
    colors: ["var(--color-success)"],
    plotOptions: {
        radialBar: {
            hollow: {
                size: "65%"
            },
            dataLabels: {
                name: {
                    offsetY: -10,
                    color: "var(--color-heading)",
                    fontSize: "14px"
                },
                value: {
                    offsetY: 5,
                    formatter: function () {
                        return "3:55:30";
                    },
                    color: "var(--color-heading)",
                    fontSize: "18px",
                    show: true
                }
            }
        }
    },
    labels: ["ساعت"]
};

var chart = new ApexCharts(document.querySelector("#totalHoursChart"), options);
chart.render();

// نمودار روزهای کاری
var options = {
    series: [
        { name: "کار", data: [0, 2.1, 6.3, 5.5, 4.8, 6.0, 5.2] },
        { name: "مولد", data: [0, 1.5, 4.8, 4.0, 3.5, 4.2, 3.1] },
        { name: "جلسه", data: [0, 0.3, 1.0, 1.2, 0.8, 1.0, 1.5] },
        { name: "استراحت", data: [0, 0.3, 0.5, 0.3, 0.3, 0.5, 0.5] },
        { name: "اضافه‌کاری", data: [8, 0, 1.2, 0.8, 0.2, 0.3, 0.7] }
    ],
    chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        stackType: '100%',
        toolbar: { show: false }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            borderRadius: 2,
            columnWidth: '85%',
        },
    },
    colors: ['var(--color-primary)', 'var(--color-success)', 'var(--color-info)', 'var(--color-warning)', 'var(--color-danger)'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 1,
        colors: ['#fff']
    },
    xaxis: {
        categories: ['جمعه', 'پنج‌شنبه', 'چهارشنبه', 'سه‌شنبه', 'دوشنبه', 'یکشنبه', 'شنبه'],
        axisBorder: { show: false },
        axisTicks: { show: false },
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
            formatter: function (val) { return val + '٪'; },
            style: {
                colors: 'var(--color-body)',
                fontSize: '12px',
                fontFamily: 'var(--ff-body)',
                fontWeight: 400,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
        max: 100
    },
    tooltip: {
        y: {
            formatter: function (val, { series, seriesIndex, dataPointIndex }) {
                const totalHours = series.reduce((sum, s) => sum + s[dataPointIndex], 0);
                const hours = (val / 100 * totalHours).toFixed(1);
                return `${hours} ساعت (${val.toFixed(0)}٪)`;
            }
        }
    },
    legend: {
        position: 'top',
        markers: { radius: 8 }
    },
    grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 3
    },
    responsive: [{
        breakpoint: 768,
        options: {
            chart: { height: 500 },
            plotOptions: { bar: { columnWidth: '70%' } }
        }
    }]
};

var chart = new ApexCharts(document.querySelector("#workday-chart"), options);
chart.render();

// نمودار عملکرد
var options = {
    series: [
        {
            name: "بهره‌وری",
            data: [75, 82, 94, 88, 78, 92, 85]
        },
        {
            name: "کیفیت",
            data: [93, 90, 82, 88, 95, 90, 92]
        },
        {
            name: "حضور",
            data: [0, 100, 100, 100, 80, 100, 100]
        }
    ],
    chart: {
        type: 'radar',
        height: 410,
        toolbar: { show: false },
        dropShadow: {
            enabled: true,
            blur: 2,
            opacity: 0.2
        }
    },
    colors: ['#4F46E5', '#29DA82', '#FF830F'],
    dataLabels: {
        enabled: true,
        background: {
            enabled: true,
            borderRadius: 5,
            padding: 4
        }
    },
    plotOptions: {
        radar: {
            size: 130,
            polygons: {
                strokeColors: '#e5e7eb',
                connectorColors: '#e5e7eb'
            }
        }
    },
    markers: {
        size: 6,
        hover: { size: 8 }
    },
    xaxis: {
        categories: ['جمعه', 'پنج‌شنبه', 'چهارشنبه', 'سه‌شنبه', 'دوشنبه', 'یکشنبه', 'شنبه'],
        labels: {
            style: { fontSize: '12px' }
        }
    },
    yaxis: {
        min: 0,
        max: 100,
        tickAmount: 5,
        labels: {
            formatter: function (val) { return val + '٪'; }
        }
    },
    tooltip: {
        y: { formatter: function (val) { return val + '٪'; } }
    },
    legend: {
        position: 'bottom',
        markers: { radius: 4 }
    },
    responsive: [{
        breakpoint: 768,
        options: { chart: { height: 400 } }
    }]
};

var chart = new ApexCharts(document.querySelector("#performance-chart"), options);
chart.render();

// اسلایدر تولد
var swiper = new Swiper(".birthdaySlider", {
    spaceBetween: 25,
    autoplay: {
        delay: 7000,
    },
    loop: true,
    pagination: {
        el: ".صفحه‌بندی-تولد",
        clickable: true,
    },
});