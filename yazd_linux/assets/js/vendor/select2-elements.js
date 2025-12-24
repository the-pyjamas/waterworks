(function () {
    "use strict";

    /* انتخاب تک پایه */
    $(".js-example-basic-single").select2({
        dir: "rtl", // تغییر به راست‌چین برای زبان پارسی
    });

    /* انتخاب تک با جای‌نگهدار */
    $(".js-example-placeholder-single").select2({
        placeholder: "یک ایالت انتخاب کنید",
        allowClear: true,
        dir: "rtl",
    });

    /* انتخاب تک پایه */
    $(".js-example-basic-single").select2({
        dir: "rtl",
    });

    /* انتخاب چندگانه */
    $(".js-example-basic-multiple").select2({
        dir: "rtl",
    });

    /* انتخاب تک با جای‌نگهدار */
    $(".js-example-placeholder-single").select2({
        placeholder: "یک ایالت انتخاب کنید",
        allowClear: true,
        dir: "rtl",
    });

    /* انتخاب چندگانه با جای‌نگهدار */
    $(".js-example-placeholder-multiple").select2({
        placeholder: "یک ایالت انتخاب کنید",
        dir: "rtl",
    });

    /* قالب‌بندی */
    function formatState(state) {
        if (!state.id) {
            return state.text;
        }
        var baseUrl = "assets/images/select2/";
        var $state = $(
            '<span><img src="' +
            baseUrl +
            "/" +
            state.element.value.toLowerCase() +
            '.webp" class="img-flag" /> ' +
            state.text +
            "</span>"
        );
        return $state;
    }
    $(".js-example-templating").select2({
        templateResult: formatState,
        placeholder: "مشتری را انتخاب کنید",
        dir: "rtl",
    });

    /* با تصاویر */
    function selectClient(client) {
        if (!client.id) {
            return client.text;
        }
        var $client = $(
            '<span><img src="assets/images/select2/' +
            client.element.value.toLowerCase() +
            '.webp" /> ' +
            client.text +
            "</span>"
        );
        return $client;
    }
    $(".select2-client-search").select2({
        templateResult: selectClient,
        templateSelection: selectClient,
        placeholder: "انتخاب مشتریان",
        dir: "rtl",
        escapeMarkup: function (m) {
            return m;
        },
    });

    /* محدودیت حداکثر انتخاب‌ها */
    $(".js-example-basic-multiple-limit-max").select2({
        maximumSelectionLength: 3,
        placeholder: "شخص را انتخاب کنید",
        dir: "rtl",
    });

    /* غیرفعال کردن کنترل‌های Select2 */
    $(".js-example-disabled").select2({
        dir: "rtl",
    });
    $(".js-example-disabled-multi").select2({
        dir: "rtl",
    });

    $(".js-programmatic-enable").on("click", function () {
        $(".js-example-disabled").prop("disabled", false);
        $(".js-example-disabled-multi").prop("disabled", false);
    });
    $(".js-programmatic-disable").on("click", function () {
        $(".js-example-disabled").prop("disabled", true);
        $(".js-example-disabled-multi").prop("disabled", true);
    });
})();