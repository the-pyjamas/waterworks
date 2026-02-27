document.addEventListener("DOMContentLoaded", function () {
    var options = {
        series: [{
            name: 'حاضر',
            data: [27, 29, 31, 30, 28, 24, 25, 26, 27, 30, 29, 28]
        }, {
            name: 'غایب',
            data: [4, 2, 0, 1, 3, 7, 6, 5, 4, 1, 2, 3]
        }, {
            name: 'دیرکرد',
            data: [2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2]
        }],
        chart: {
            type: 'bar',
            height: 369,
            stacked: true,
            toolbar: {
                show: false
            }
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        colors: ['#4CAF50', '#F44336', '#FFC107'],
        xaxis: {
            categories: ['آذر', 'آبان', 'مهر', 'شهریور', 'مرداد', 'تیر', 'خرداد', 'اردیبهشت', 'فروردین', 'اسفند', 'بهمن', 'دی'],
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + " روز"
                }
            }
        },
        legend: {
            position: 'top',
        }
    };

    var chart = new ApexCharts(document.querySelector("#attendanceChart"), options);
    chart.render();
});

// نمودار وضعیت کارکنان
document.addEventListener("DOMContentLoaded", function () {
    const options = {
        series: [{
            name: 'کارکنان',
            data: [25, 30, 35, 45, 55, 125]
        }],
        chart: {
            type: 'bar',
            height: 369,
            toolbar: { show: false },
            fontFamily: 'Nunito Sans, sans-serif',
            foreColor: '#6B7280'
        },
        plotOptions: {
            bar: {
                borderRadius: 0,
                horizontal: true,
                barHeight: '70%',
                distributed: true,
                dataLabels: {
                    position: 'center'
                }
            }
        },
        dataLabels: {
            enabled: true,
            formatter: (val) => `${val}`,
            style: {
                fontSize: '12px',
                fontWeight: 600,
                colors: ['#fff']
            },
            offsetX: 10
        },
        colors: ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'],
        xaxis: {
            categories: ['خاتمه‌یافته', 'دورکاری', 'قراردادی', 'آزمایشی', 'در مرخصی', 'فعال'],
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: {
                style: {
                    fontSize: '13px',
                    fontWeight: 500
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    fontSize: '13px',
                    fontWeight: 500
                }
            }
        },
        grid: {
            borderColor: '#F3F4F6',
            strokeDashArray: 4,
            padding: {
                top: 0,
                right: 20,
                bottom: 0,
                left: 20
            }
        },
        tooltip: {
            style: {
                fontSize: '12px',
                fontFamily: 'Nunito Sans, sans-serif',
            },
            y: {
                formatter: (val) => `${val} کارمند`
            }
        },
        responsive: [{
            breakpoint: 640,
            options: {
                chart: { height: 280 },
                plotOptions: {
                    bar: { barHeight: '60%' }
                },
                dataLabels: { enabled: false }
            }
        }]
    };

    const chart = new ApexCharts(document.querySelector("#employeeStatusChart"), options);
    chart.render();
});

// نمای کلی وظایف
var options = {
    series: [83, 67, 55, 46],
    chart: {
        height: 338,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            dataLabels: {
                name: {
                    fontSize: '22px',
                },
                value: {
                    fontSize: '16px',
                },
                total: {
                    show: true,
                    label: 'مجموع',
                    colors: '#000',
                    formatter: function (w) {
                        return 250
                    }
                }
            }
        },
    },
    labels: ['تحویل', 'سررسید گذشته', 'در انتظار', 'در حال انجام'],
    colors: ["var(--color-primary)", "var(--color-info)", "var(--color-warning)", "var(--color-success)"],
    legend: {
        show: true,
        position: 'bottom',
        fontFamily: 'Nunito Sans, sans-serif',
    },
    stroke: {
        colors: ['var(--color-black)'],
    },
    fill: {
        opacity: 1,
    },
    markers: {
        strokeWidth: 0,
    },
    responsive: [{
        breakpoint: 640,
        options: {
            chart: { height: 280 },
            plotOptions: {
                bar: { barHeight: '60%' }
            },
            dataLabels: { enabled: false }
        }
    }]
};
var chart = new ApexCharts(document.querySelector("#taskOverview"), options);
chart.render();

// اسلایدر تولد
var swiper = new Swiper(".birthdaySlider", {
    spaceBetween: 25,
    autoplay: true,
    loop: true,
    pagination: {
        el: ".صفحه‌بندی-تولد",
        clickable: true,
    },
});

// جدول جلسات
$(document).ready(function () {
    $('#meetingTable').DataTable({
        "bFilter": true,
        ordering: true,
        lengthChange: true,
        columnDefs: [
            {
                orderable: false,
                searchable: false,
                targets: [0]
            }
        ],
        pageLength: 5,
        lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "همه"]]
    });
});

// جدول فعالیت کارکنان
$(document).ready(function () {
    $('#employeeActivityTable').DataTable({
        "bFilter": true,
        ordering: true,
        lengthChange: true,
        columnDefs: [
            {
                orderable: false,
                searchable: false,
                targets: [0]
            }
        ],
        pageLength: 5,
        lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "همه"]]
    });
});