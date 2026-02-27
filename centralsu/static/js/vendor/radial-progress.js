/* radial-progress activation */
$(document).ready(function () {
    $(window).scroll(function () {
        $('.radial-progress').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).easyPieChart({
                    lineWidth: 10,
                    scaleLength: 0,
                    rotate: 0,
                    trackColor: false,
                    lineCap: 'round',
                    size: 150,
                    onStep: function (from, to, percent) {
                        $(this.el).find('.count').text(Math.round(percent));
                    }
                });
            }
        });
    });
    $(window).scroll();
});