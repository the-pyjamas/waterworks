(function () {
    "use strict";

    // تنظیم پیش‌فرض فونت برای تمام نمودارها
    Chart.defaults.font.family = 'IRANYekanX';

    // نمودار خطی
    new Chart(document.getElementById("lineChart"), {
        type: "line",
        data: {
            labels: ["اردیبهشت", "فروردین", "اسفند", "بهمن", "دی"],
            datasets: [
                {
                    label: "فروش ۱۴۰۳",
                    data: [30, 25, 15, 20, 10],
                    borderColor: "#1C4B42",
                    backgroundColor: "rgba(28, 75, 66, 0.1)",
                    fill: true,
                    tension: 0.4
                },
                {
                    label: "فروش ۱۴۰۴",
                    data: [35, 22, 20, 18, 15],
                    borderColor: "#FEBB7B",
                    backgroundColor: "rgba(180, 231, 23, 0.1)",
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: {
                            family: 'IRANYekanX'
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // نمودار ستونی
    new Chart(document.getElementById("barChart"), {
        type: "bar",
        data: {
            labels: ["د", "ج", "ب", "الف"],
            datasets: [{
                label: "آرا",
                data: [5, 3, 19, 12],
                backgroundColor: ["#4F46E5"]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        font: {
                            family: 'IRANYekanX'
                        }
                    }
                }
            }
        }
    });

    // نمودار دایره‌ای
    new Chart(document.getElementById("pieChart"), {
        type: "pie",
        data: {
            labels: ["زرد", "آبی", "قرمز"],
            datasets: [{
                data: [100, 50, 300],
                backgroundColor: ["#4F46E5", "#FEBB7B", "#FF830F"]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        font: {
                            family: 'IRANYekanX'
                        }
                    }
                }
            }
        }
    });

    // نمودار دونات
    new Chart(document.getElementById("donutChart"), {
        type: "doughnut",
        data: {
            labels: ["هواوی", "سامسونگ", "اپل"],
            datasets: [{
                data: [250, 150, 100],
                backgroundColor: ["#4F46E5", "#FEBB7B", "#FF830F"]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        font: {
                            family: 'IRANYekanX'
                        }
                    }
                }
            }
        }
    });

    // نمودار ناحیه قطبی
    new Chart(document.getElementById("polarChart"), {
        type: "polarArea",
        data: {
            labels: ["غرب", "شرق", "جنوب", "شمال"],
            datasets: [{
                data: [3, 7, 16, 11],
                backgroundColor: ["#4F46E5", "#FEBB7B", "#FF830F", "#E63232"]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        font: {
                            family: 'IRANYekanX'
                        }
                    }
                }
            }
        }
    });

    // نمودار راداری
    new Chart(document.getElementById("radarChart"), {
        type: "radar",
        data: {
            labels: ["دوچرخه‌سواری", "خوردن", "شنا", "دویدن"],
            datasets: [{
                label: "شخص الف",
                data: [2, 4, 10, 20],
                borderColor: "#4F46E5",
                backgroundColor: "rgba(28, 75, 66, 0.1)"
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        font: {
                            family: 'IRANYekanX'
                        }
                    }
                }
            }
        }
    });

})();