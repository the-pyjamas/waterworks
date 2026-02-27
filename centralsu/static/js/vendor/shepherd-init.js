(function () {
    "use strict";

    const tour = new Shepherd.Tour({
        defaultStepOptions: {
            cancelIcon: {
                enabled: true
            },
            classes: 'class-1 class-2',
            scrollTo: { behavior: 'smooth', block: 'center' }
        },
        useModalOverlay: {
            enabled: true,
        }
    });

    tour.addStep({
        id: 'step-1',
        title: "به تجربه تور لوکس ما خوش آمدید",
        text: 'کشف کنید که چگونه پلتفرم مسافرتی ما با برنامه‌ریزی‌های شخصی‌سازی‌شده، رویاهای تعطیلات شما را به واقعیتی بی‌نظیر تبدیل می‌کند.',
        attachTo: {
            element: '#step-1',
            on: 'bottom',
        },
        buttons: [
            {
                text: 'بعدی',
                action: tour.next,
            },
        ],
    });

    tour.addStep({
        id: 'step-2',
        title: "مقصد رویایی خود را انتخاب کنید",
        text: 'مجموعه‌ای از مقاصد جهانی دست‌چین‌شده را مرور کنید که هر کدام تجربه‌های فرهنگی، طبیعی و لوکس منحصربه‌فردی ارائه می‌دهند.',
        attachTo: {
            element: '#step-2',
            on: 'bottom',
        },
        buttons: [
            {
                text: 'بعدی',
                action: tour.next,
            },
        ],
    });

    tour.addStep({
        id: 'step-3',
        title: "بودجه سفر خود را شخصی‌سازی کنید",
        text: 'محدوده سرمایه‌گذاری ایده‌آل خود را تنظیم کنید و اجازه دهید سیستم ما تجربه‌های لوکسی را پیشنهاد دهد که ارزشی استثنایی ارائه می‌کنند.',
        attachTo: {
            element: '#step-3',
            on: 'bottom',
        },
        buttons: [
            {
                text: 'بعدی',
                action: tour.next,
            },
        ],
    });

    tour.addStep({
        id: 'step-4',
        title: "گزینه‌های حمل‌ونقل لوکس",
        text: 'از شبکه انحصاری ما از شرکت‌های حمل‌ونقل لوکس و خدمات انتقال خصوصی برای سفری بی‌وقفه انتخاب کنید.',
        attachTo: {
            element: '#step-4',
            on: 'bottom',
        },
        buttons: [
            {
                text: 'بعدی',
                action: tour.next,
            },
        ],
    });

    tour.addStep({
        id: 'step-5',
        title: "برنامه سفر خود را طراحی کنید",
        text: 'برنامه‌ای بی‌نقص با دسترسی ویژه به جاذبه‌ها، تورهای خصوصی و تجربه‌های محلی اصیل بسازید.',
        attachTo: {
            element: '#step-5',
            on: 'bottom',
        },
        buttons: [
            {
                text: 'بعدی',
                action: tour.next,
            },
        ],
    });

    tour.addStep({
        id: 'step-6',
        title: "جزئیات سفر خود را نهایی کنید",
        text: 'همه ترتیبات را با تیم اختصاصی کنسیرژ ما که به‌صورت 24 ساعته در دسترس است، بررسی و تأیید کنید.',
        attachTo: {
            element: '#step-6',
            on: 'bottom',
        },
        buttons: [
            {
                text: 'بعدی',
                action: tour.next,
            },
        ],
    });

    tour.addStep({
        id: 'step-7',
        title: "ماجراجویی فراموش‌نشدنی خود را آغاز کنید",
        text: 'تجربه سفری شخصی‌سازی‌شده برای شما آماده است - سفری که به‌طور انحصاری برای شما طراحی شده را آغاز کنید.',
        attachTo: {
            element: '#step-7',
            on: 'bottom',
        },
        buttons: [
            {
                text: 'پایان',
                action: tour.next,
            },
        ],
    });

    tour.start();

})();