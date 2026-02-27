(function () {
    'use strict'

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
                            return "3:55:30"; // ساعت:دقیقه:ثانیه
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

})();