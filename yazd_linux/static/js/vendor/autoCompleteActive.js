(function () {
    "use strict";

    /* تکمیل خودکار پایه */
    const autoCompleteJS = new autoComplete({
        selector: "#autoComplete",
        placeHolder: "جستجو برای ترکیب غذا و نوشیدنی",
        data: {
            src: [
                'پیتزا، نوشابه',
                'برگر، میلک‌شیک',
                'تاکو، مارگاریتا',
                'پاستا، شراب قرمز',
                'سوشی، چای سبز',
                'استیک، ویسکی',
                'سالاد، آب گازدار',
                'بال مرغ، آبجو',
                'ماهی و چیپس، لیموناد',
                'بوریتو، چای سرد'
            ],
            cache: true,
        },
        resultItem: {
            highlight: true
        },
        events: {
            input: {
                selection: (event) => {
                    const selection = event.detail.selection.value;
                    autoCompleteJS.input.value = selection;
                }
            }
        }
    });
    /* تکمیل خودکار پایه */

    /* تکمیل خودکار پیشرفته */
    const autoCompleteJS1 = new autoComplete({
        selector: "#autoComplete-color",
        placeHolder: "جستجو برای رنگ‌های پیشرفته...",
        data: {
            src: [
                'اسطوخودوس',
                'فیروزه‌ای',
                'مرجانی',
                'یاقوت کبود',
                'زمرد',
                'رز گلد',
                'آبی آسمانی',
                'زرد طلایی',
                'آمیتیست',
                'زرشکی',
                'آبی کم‌رنگ',
                'سبز نعنایی',
                'نارنجی تند',
                'زغالی',
                'شامپاینی',
                'آبی دریایی',
                'یاقوت سرخ',
                'توپاز',
                'فیروزه‌ای تیره',
                'مروارید'
            ],
            cache: true,
        },
        resultsList: {
            element: (list, data) => {
                const info = document.createElement("p");
                if (data.results.length > 0) {
                    info.innerHTML = `نمایش <strong>${data.results.length}</strong> از <strong>${data.matches.length}</strong> نتیجه`;
                } else {
                    info.innerHTML = `یافتن <strong>${data.matches.length}</strong> نتیجه مطابق با <strong>"${data.query}"</strong>`;
                }
                list.prepend(info);
            },
            noResults: true,
            maxResults: 15,
            tabSelect: true
        },
        resultItem: {
            highlight: true
        },
        events: {
            input: {
                selection: (event) => {
                    const selection = event.detail.selection.value;
                    autoCompleteJS1.input.value = selection;
                }
            }
        }
    });
    /* تکمیل خودکار پیشرفته */
})();