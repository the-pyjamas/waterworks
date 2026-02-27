
/* Quantity Incases */
$(document).ready(function () {
    $(".increase").on("click", function () {
        if ($(this).prev().val() < 999) {
            $(this)
                .prev()
                .val(+$(this).prev().val() + 1);
        }
    });
    $(".decrease").on("click", function () {
        if ($(this).next().val() > 0) {
            if ($(this).next().val() > 0)
                $(this)
                    .next()
                    .val(+$(this).next().val() - 1);
        }
    });
});