(function () {
    "use strict";

    /* ورودی شماره تلفن پایه */
    const input = document.querySelector("#phone");
    window.intlTelInput(input, {
        initialCountry: "us",
        utilsScript: "assets/js/plugins/utils.js"
    });
    /* ورودی شماره تلفن پایه */

    /* ورودی شماره تلفن با اعتبارسنجی */
    const input1 = document.querySelector("#phone-validation");
    const button = document.querySelector("#btn");
    const errorMsg = document.querySelector("#error-msg");
    const validMsg = document.querySelector("#valid-msg");

    // اینجا، اندیس به کد خطای بازگشتی از getValidationError نگاشت می‌شود - به readme مراجعه کنید
    const errorMap = ["شماره نامعتبر", "کد کشور نامعتبر", "بیش از حد کوتاه", "بیش از حد بلند", "شماره نامعتبر"];

    // مقداردهی اولیه افزونه
    const iti = window.intlTelInput(input1, {
        initialCountry: "us",
        utilsScript: "assets/js/plugins/utils.js"
    });

    const reset = () => {
        input1.classList.remove("error");
        errorMsg.innerHTML = "";
        errorMsg.classList.add("hide");
        validMsg.classList.add("hide");
    };

    const showError = (msg) => {
        input1.classList.add("error");
        errorMsg.innerHTML = msg;
        errorMsg.classList.remove("hide");
    };

    // با کلیک روی دکمه: اعتبارسنجی
    button.addEventListener('click', () => {
        reset();
        if (!input1.value.trim()) {
            showError("الزامی");
        } else if (iti.isValidNumberPrecise()) {
            validMsg.classList.remove("hide");
        } else {
            const errorCode = iti.getValidationError();
            const msg = errorMap[errorCode] || "شماره نامعتبر";
            showError(msg);
        }
    });

    // در رویداد keyup / change پرچم: بازنشانی
    input1.addEventListener('change', reset);
    input1.addEventListener('keyup', reset);
    /* ورودی شماره تلفن با اعتبارسنجی */

    /* ورودی شماره تلفن با ورودی مخفی */
    const input4 = document.querySelector("#phone-hidden-input");
    const form = document.querySelector("#form");
    const message = document.querySelector("#message");

    const iti1 = window.intlTelInput(input4, {
        initialCountry: "us",
        hiddenInput: () => "full_phone",
        utilsScript: "assets/js/plugins/utils.js" // صرفاً برای قالب‌بندی/جای‌نگهدارها و غیره
    });

    form.onsubmit = () => {
        if (!iti1.isValidNumber()) {
            message.innerHTML = "شماره نامعتبر. لطفاً دوباره تلاش کنید.";
            return false;
        }
    };

    const urlParams = new URLSearchParams(window.location.search);
    const fullPhone = urlParams.get('full_phone');
    if (fullPhone) {
        message.innerHTML = `مقدار ورودی مخفی ارسال‌شده: ${fullPhone}`;
    }
    /* ورودی شماره تلفن با ورودی مخفی */

    /* ورودی شماره تلفن با شماره موجود */
    const input5 = document.querySelector("#phone-existing-number");
    window.intlTelInput(input5, {
        initialCountry: "us",
        utilsScript: "assets/js/plugins/utils.js" // صرفاً برای قالب‌بندی/جای‌نگهدارها و غیره
    });
    /* ورودی شماره تلفن با شماره موجود */
})();