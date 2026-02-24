function basicToast() {
    Toastify({ text: "این یک اعلان ساده است" }).showToast();
}

function bgColorToast() {
    Toastify({
        text: "رنگ پس‌زمینه سفارشی",
        backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    }).showToast();
}

function linkToast() {
    Toastify({
        text: "برای بازدید از گوگل اینجا کلیک کنید",
        destination: "https://google.com",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
    }).showToast();
}

function durationToast() {
    Toastify({
        text: "به مدت ۵ ثانیه قابل مشاهده است",
        duration: 5000,
    }).showToast();
}

function closeButtonToast() {
    Toastify({
        text: "اعلان قابل بستن",
        close: true,
    }).showToast();
}

function bottomLeftToast() {
    Toastify({
        text: "اعلان پایین-راست",
        gravity: "bottom",
        position: "left",
    }).showToast();
}

function noAutoCloseToast() {
    Toastify({
        text: "برای بستن روی دکمه بستن کلیک کنید",
        duration: -1,
        close: true,
    }).showToast();
}

function stopOnFocusToast() {
    Toastify({
        text: "اعلان در صورت تمرکز باقی می‌ماند",
        duration: 4000,
        stopOnFocus: true,
    }).showToast();
}

function callbackToast() {
    Toastify({
        text: "اعلان با تابع بازگشتی",
        duration: 3000,
        callback: function () {
            alert("اعلان بسته شد");
        }
    }).showToast();
}

function avatarToast() {
    Toastify({
        text: "اعلان با آواتار",
        avatar: "assets/images/avatar/avatar-thumb-001.webp",
    }).showToast();
}

function showToast(message, gravity, position) {
    Toastify({
        text: message,
        gravity: gravity,
        position: position,
        duration: 3000,
        close: true,
    }).showToast();
}

function middleToast(message, alignment) {
    const toast = Toastify({
        text: message,
        duration: 3000,
        close: true,
        className: `toast-middle ${alignment}`
    });

    toast.showToast();
}