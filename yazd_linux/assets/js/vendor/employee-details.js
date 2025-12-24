(function () {
    'use strict'

    // مدیریت شماره حساب
    document.addEventListener("DOMContentLoaded", function () {
        const accountNumberSpan = document.getElementById("accountNumber");

        if (accountNumberSpan) {
            const toggleBtn = document.getElementById("toggleAccount");
            const eyeIcon = document.getElementById("eyeIcon");

            const fullAccount = accountNumberSpan.getAttribute("data-full");
            const maskedAccount = `•••• •••• ${fullAccount.slice(-4)}`;
            let isMasked = true;

            toggleBtn.addEventListener("click", () => {
                if (isMasked) {
                    accountNumberSpan.textContent = fullAccount;
                    eyeIcon.classList.replace("ri-eye-line", "ri-eye-off-line");
                } else {
                    accountNumberSpan.textContent = maskedAccount;
                    eyeIcon.classList.replace("ri-eye-off-line", "ri-eye-line");
                }
                isMasked = !isMasked;
            });
        }
    });

    // تابع کپی به کلیپ‌بورد
    document.addEventListener('DOMContentLoaded', function () {
        const copyBtn = document.getElementById('copyBankDetails');

        if (copyBtn) {
            copyBtn.addEventListener('click', function () {
                const bankDetails = Array.from(document.querySelectorAll('.اطلاعات-بانک li'))
                    .map(li => {
                        const label = li.querySelector('.برچسب-اطلاعات span')?.textContent || '';
                        const value = li.querySelector('.مقدار-اطلاعات')?.textContent.replace(/\•/g, '').trim() || '';
                        return `${label} ${value}`;
                    })
                    .join('\n');

                navigator.clipboard.writeText(bankDetails).then(() => {
                    const originalText = this.innerHTML;
                    this.innerHTML = '<i class="ri-check-line me-1"></i> کپی شد!';
                    setTimeout(() => {
                        this.innerHTML = originalText;
                    }, 2000);
                });
            });
        }
    });

    // مدیریت تمام عناصر تعاملی از طریق کلیک سند
    document.addEventListener('click', function (e) {
        // تغییر رمز
        if (e.target.closest('.تغییر-رمز')) {
            const passwordDisplay = document.querySelector('.password-display');
            const icon = e.target.closest('.تغییر-رمز').querySelector('i');

            if (passwordDisplay.textContent.includes('•')) {
                passwordDisplay.textContent = 's3cur3p@ss';
                icon.classList.replace('ri-eye-line', 'ri-eye-off-line');
            } else {
                passwordDisplay.textContent = '••••••••';
                icon.classList.replace('ri-eye-off-line', 'ri-eye-line');
            }
        }

        // کپی ایمیل
        if (e.target.closest('.دکمه-آیکون .ri-file-copy-line')) {
            const email = 'esmaeil.mohammadi@misal.com';
            navigator.clipboard.writeText(email);

            const btn = e.target.closest('.دکمه-آیکون');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="ri-check-line"></i> کپی شد!';
            setTimeout(() => {
                btn.innerHTML = originalHTML;
            }, 2000);
        }
    });

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
            height: 391,
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

})();