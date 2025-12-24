// اعلان ساده
document.getElementById("sa-basic").addEventListener("click", function () {
    Swal.fire(
        {
            title: 'این یک نمونه اعلان ساده است.',
            confirmButtonColor: 'var(--color-primary)',
        }
    )
});

// عنوان با متن زیر آن
document.getElementById("sa-title").addEventListener("click", function () {
    Swal.fire(
        {
            title: "اینترنت؟",
            text: 'آیا می‌خواهید اطلاعات بیشتری بدانید؟',
            icon: 'question',
            confirmButtonColor: 'var(--color-primary)'
        }
    )
});

// پیام موفقیت
document.getElementById("sa-success").addEventListener("click", function () {
    Swal.fire(
        {
            title: 'موفقیت!',
            text: 'شما روی دکمه کلیک کردید!',
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: 'var(--color-primary)',
            cancelButtonColor: "var(--color-danger)"
        }
    )
});

// پیام هشدار
document.getElementById("sa-warning").addEventListener("click", function () {
    Swal.fire({
        title: "آیا مطمئن هستید؟",
        text: "آیا مطمئن هستید که می‌خواهید ادامه دهید؟ این عملیات قابل بازگشت نیست.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "var(--color-success)",
        cancelButtonColor: "var(--color-danger)",
        confirmButtonText: "بله، حذف کنید!"
    }).then(function (result) {
        if (result.value) {
            Swal.fire("حذف شد!", "فایل شما با موفقیت حذف شد.", "success");
        }
    });
});

// پارامترها
document.getElementById("sa-params").addEventListener("click", function () {
    Swal.fire({
        title: 'نیاز به تأیید',
        text: "این عملیات غیرقابل بازگشت است. آیا مطمئن هستید؟",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'بله، حذف کنید!',
        cancelButtonText: 'خیر، لغو کنید!',
        customClass: {
            confirmButtonClass: 'btn btn-success mt-2',
            cancelButtonClass: 'btn btn-danger ms-2 mt-2',
        },
        buttonsStyling: true,
    }).then(function (result) {
        if (result.value) {
            Swal.fire({
                title: 'حذف شد!',
                text: 'آیتم حذف شد.',
                icon: 'success',
                confirmButtonColor: 'var(--color-primary)',
            })
        } else if (
            // اطلاعات بیشتر درباره مدیریت لغوها
            result.dismiss === Swal.DismissReason.cancel
        ) {
            Swal.fire({
                title: 'لغو شد',
                text: 'هیچ تغییری اعمال نشد.',
                icon: 'error',
                confirmButtonColor: 'var(--color-primary)',
            })
        }
    });
});

// تصویر سفارشی
document.getElementById("sa-image").addEventListener("click", function () {
    Swal.fire({
        title: 'عالی!',
        text: 'این مودال یک تصویر سفارشی نمایش می‌دهد.',
        imageUrl: 'assets/images/logo/favicon.svg',
        imageHeight: 50,
        confirmButtonColor: "var(--color-primary)",
        animation: false
    })
});

// تایمر بسته شدن خودکار
document.getElementById("sa-close").addEventListener("click", function () {
    var timerInterval;
    Swal.fire({
        title: 'اعلان بسته شدن خودکار!',
        html: 'این اعلان در <b></b> ثانیه بسته می‌شود.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: function () {
            Swal.showLoading()
            timerInterval = setInterval(function () {
                var content = Swal.getHtmlContainer()
                if (content) {
                    var b = content.querySelector('b')
                    if (b) {
                        b.textContent = Swal.getTimerLeft()
                    }
                }
            }, 100)
        },
        onClose: function () {
            clearInterval(timerInterval)
        }
    }).then(function (result) {
        /* اطلاعات بیشتر درباره مدیریت لغوها در زیر */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log('من توسط تایمر بسته شدم')
        }
    })
});

// اعلان HTML سفارشی
document.getElementById("custom-html-alert").addEventListener("click", function () {
    Swal.fire({
        title: '<i>HTML</i> <u>نمونه</u>',
        icon: 'info',
        html: 'می‌توانید از <b>متن پررنگ</b>، ' +
            '<a href="//Pichforest.in/">لینک‌ها</a> ' +
            'و سایر تگ‌های HTML استفاده کنید',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonClass: 'btn btn-success',
        cancelButtonClass: 'btn btn-danger ms-1',
        confirmButtonColor: "#47bd9a",
        cancelButtonColor: "var(--color-danger)",
        confirmButtonText: '<i class="ri-thumb-up-fill me-1"></i> عالی!',
        cancelButtonText: '<i class="ri-thumb-down-fill"></i> رد کردن'
    })
});

// موقعیت
document.getElementById("sa-position").addEventListener("click", function () {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'تنظیمات شما به‌روزرسانی شد.',
        showConfirmButton: false,
        timer: 1500
    })
});

// عرض و فاصله سفارشی
document.getElementById("custom-padding-width-alert").addEventListener("click", function () {
    Swal.fire({
        title: 'این اعلان عرض و فاصله سفارشی دارد.',
        width: 600,
        padding: 100,
        confirmButtonColor: "var(--color-primary)",
        background: 'var(--color-body-bg)'
    })
});

// Ajax
document.getElementById("ajax-alert").addEventListener("click", function () {
    Swal.fire({
        title: 'ایمیل را برای اجرای درخواست Ajax وارد کنید',
        input: 'email',
        showCancelButton: true,
        confirmButtonText: 'ارسال',
        showLoaderOnConfirm: true,
        confirmButtonColor: "var(--color-primary)",
        cancelButtonColor: "var(--color-danger)",
        preConfirm: function (email) {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    if (email === 'taken@example.com') {
                        reject('این ایمیل قبلاً استفاده شده است.')
                    } else {
                        resolve()
                    }
                }, 2000)
            })
        },
        allowOutsideClick: false
    }).then(function (email) {
        Swal.fire({
            icon: 'success',
            title: 'درخواست Ajax به پایان رسید!',
            confirmButtonColor: "var(--color-primary)",
            html: 'ایمیل ارسالی: ' + email
        })
    })
});