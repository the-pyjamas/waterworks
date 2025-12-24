(function () {
    'use strict'

    // انتخابگر تاریخ و زمان هدف
    $("#targetDateTime").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD HH:mm",
        timePicker: { enabled: true },
        autoClose: true,
        
    });

    // انتخابگر دوم تاریخ و زمان هدف
    $("#targetDateTimeTwo").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD HH:mm",
        timePicker: { enabled: true },
        autoClose: true,
        
    });

    // انتخابگر تاریخ هدف
        $("#targetDate").attr('type', 'text').persianDatepicker({
            format: "DD MMMM YYYY",
            viewMode: "month",
            autoClose: true
        });

    // انتخابگر دوم تاریخ هدف
    $("#targetDateTwo").attr('type', 'text').persianDatepicker({
        format: "MMMM YYYY",
        viewMode: "month",
        autoClose: true,
        
    });

    // انتخابگر تاریخ شروع
    $("#startDate").attr('type', 'text').persianDatepicker({
        format: "DD MMMM YYYY",
        autoClose: true,
        
    });

    // انتخابگر دوم تاریخ شروع
    $("#startDateTwo").attr('type', 'text').persianDatepicker({
        format: "DD MMMM YYYY",
        autoClose: true,
        
    });

    // انتخابگر تاریخ پایان
    $("#endDate").attr('type', 'text').persianDatepicker({
        format: "DD MMMM YYYY",
        autoClose: true,
        
    });

    // انتخابگر دوم تاریخ پایان
    $("#endDateTwo").attr('type', 'text').persianDatepicker({
        format: "DD MMMM YYYY",
        autoClose: true,
        
    });

    // انتخابگر تاریخ تعطیلات
    $("#holidayDate").attr('type', 'text').persianDatepicker({
        format: "DD MMMM YYYY",
        autoClose: true,
        
    });

    // انتخابگر روز تعطیل
    $("#holidayDay").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD",
        autoClose: true,
        onSelect: function (unix) {
            const date = new persianDate(unix);
            const persianDays = ["شنبه", "یکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنج‌شنبه", "جمعه"];
            $(this).val(persianDays[date.day()]);
        }
    });

    // انتخابگر تاریخ برگه زمانی
    $("#timesheetDate").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD",
        autoClose: true,
        
    });

    // انتخابگر تاریخ پرداخت
    $("#payDate").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD",
        autoClose: true,
        
    });

    // انتخابگر تاریخ برنامه
    $("#scheduleDate").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD",
        autoClose: true,
        
    });

    // انتخابگر دوم تاریخ برنامه
    $("#scheduleDateTwo").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD",
        autoClose: true,
        
    });

    // انتخابگر زمان شروع
    $("#startTime").attr('type', 'text').persianDatepicker({
        onlyTimePicker: true,
        format: "HH:mm",
        autoClose: true,
        
    });

    // انتخابگر دوم زمان شروع
    $("#startTimeTwo").attr('type', 'text').persianDatepicker({
        onlyTimePicker: true,
        format: "HH:mm",
        autoClose: true,
        
    });

    // انتخابگر زمان پایان
    $("#endTime").attr('type', 'text').persianDatepicker({
        onlyTimePicker: true,
        format: "HH:mm",
        autoClose: true,
        
    });

    // انتخابگر دوم زمان پایان
    $("#endTimeTwo").attr('type', 'text').persianDatepicker({
        onlyTimePicker: true,
        format: "HH:mm",
        autoClose: true,
        
    });

    // انتخابگر بازه تاریخ
    $("#dateRange").attr('type', 'text').persianDatepicker({
        toolbox: { calendarSwitch: { enabled: true } },
        format: "YYYY-MM-DD",
        autoClose: true,
        
    });

    // انتخابگر دوره پرداخت
    $("#payPeriod").attr('type', 'text').persianDatepicker({
        toolbox: { calendarSwitch: { enabled: true } },
        format: "YYYY-MM-DD",
        autoClose: true,
        
    });

    // انتخابگر تاریخ فاکتور
    $("#invoiceDate").attr('type', 'text').persianDatepicker({
        format: "DD MMMM YYYY",
        autoClose: true,
        
    });

    // انتخابگر تاریخ سررسید
    $("#dueDate").attr('type', 'text').persianDatepicker({
        format: "DD MMMM YYYY",
        autoClose: true,
        
    });

    // ورودی پایه
    $("#basicInput").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD",
        autoClose: true,
        
    });

    // تاریخ و زمان
    $("#dateTime").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD HH:mm",
        timePicker: { enabled: true },
        autoClose: true,
        
    });

    // تاریخ‌های کاربرپسند
    $("#humanFriendlyDates").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD",
        altField: "#humanFriendlyDates_alt",
        altFormat: "MMMM DD, YYYY",
        autoClose: true,
        
    });

    // تاریخ دوم کاربرپسند
    $("#humanFriendlyDate2").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD",
        altField: "#humanFriendlyDate2_alt",
        altFormat: "MMMM DD, YYYY",
        autoClose: true,
        
    });

    // تاریخ شروع
    $("#startingDate").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD",
        altField: "#startingDate_alt",
        altFormat: "MMMM DD, YYYY",
        autoClose: true,
        
    });

    // تاریخ دوم شروع
    $("#startingDate2").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD",
        altField: "#startingDate2_alt",
        altFormat: "MMMM DD, YYYY",
        autoClose: true,
        
    });

    // تاریخ سوم شروع
    $("#startingDate3").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD",
        altField: "#startingDate3_alt",
        altFormat: "MMMM DD, YYYY",
        autoClose: true,
        
    });

    // تاریخ تکمیل
    $("#completeDate").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD",
        altField: "#completeDate_alt",
        altFormat: "MMMM DD, YYYY",
        autoClose: true,
        
    });

    // تاریخ دوم تکمیل
    $("#completeDate2").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD",
        altField: "#completeDate2_alt",
        altFormat: "MMMM DD, YYYY",
        autoClose: true,
        
    });

    // تاریخ سوم تکمیل
    $("#completeDate3").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD",
        altField: "#completeDate3_alt",
        altFormat: "MMMM DD, YYYY",
        autoClose: true,
        
    });

    // دوره تا
    $("#periodTo").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD",
        altField: "#periodTo_alt",
        altFormat: "MMMM DD, YYYY",
        autoClose: true,
        
    });

    // دوره دوم تا
    $("#periodTo2").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD",
        altField: "#periodTo2_alt",
        altFormat: "MMMM DD, YYYY",
        autoClose: true,
        
    });

    // دوره سوم تا
    $("#periodTo3").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD",
        altField: "#periodTo3_alt",
        altFormat: "MMMM DD, YYYY",
        autoClose: true,
        
    });

    // دوره از
    $("#periodFrom").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD",
        altField: "#periodFrom_alt",
        altFormat: "MMMM DD, YYYY",
        autoClose: true,
        
    });

    // دوره دوم از
    $("#periodFrom2").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD",
        altField: "#periodFrom2_alt",
        altFormat: "MMMM DD, YYYY",
        autoClose: true,
        
    });

    // دوره سوم از
    $("#periodFrom3").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD",
        altField: "#periodFrom3_alt",
        altFormat: "MMMM DD, YYYY",
        autoClose: true,
        
    });

    // تاریخ صدور
    $("#issueDate").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD",
        altField: "#issueDate_alt",
        altFormat: "MMMM DD, YYYY",
        autoClose: true,
        
    });

    // تاریخ انقضا
    $("#expiryDate").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD",
        altField: "#expiryDate_alt",
        altFormat: "MMMM DD, YYYY",
        autoClose: true,
        
    });

    // تاریخ خرید
    $("#purchaseDate").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD",
        altField: "#purchaseDate_alt",
        altFormat: "MMMM DD, YYYY",
        autoClose: true,
        
    });

    // تاریخ دوم خرید
    $("#purchaseDate2").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD",
        altField: "#purchaseDate2_alt",
        altFormat: "MMMM DD, YYYY",
        autoClose: true,
        
    });

    // تاریخ وام
    $("#loanDate").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM",
        altField: "#loanDate_alt",
        altFormat: "MMMM, YYYY",
        viewMode: "month",
        autoClose: true,
        
    });

    // بازه تاریخ
    $("#dateDuration").attr('type', 'text').persianDatepicker({
        toolbox: { calendarSwitch: { enabled: true } },
        format: "MMMM YYYY",
        autoClose: true,
        
    });

    // حداقل تاریخ‌ها
    $("#minimumDates").attr('type', 'text').persianDatepicker({
        minDate: new persianDate([1400, 1]).valueOf(),
        format: "YYYY-MM",
        autoClose: true,
        
    });

    // حداکثر تاریخ‌ها
    $("#maximumDates").attr('type', 'text').persianDatepicker({
        maxDate: new persianDate([1402, 12, 2]).valueOf(),
        format: "DD.MM.YYYY",
        autoClose: true,
        
    });

    // حداقل و حداکثر تاریخ‌ها
    $("#miniMaxDates").attr('type', 'text').persianDatepicker({
        minDate: new persianDate().valueOf(),
        maxDate: new persianDate().add("day", 14).valueOf(),
        format: "YYYY-MM-DD",
        autoClose: true,
        
    });

    // غیرفعال کردن تاریخ‌های خاص
    $("#disablingSpecificDates").attr('type', 'text').persianDatepicker({
        disabledDates: [
            new persianDate([1402, 10, 24]).valueOf(),
            new persianDate([1402, 9, 24]).valueOf(),
            new persianDate([1403, 12, 18]).valueOf(),
            new persianDate([1403, 4, 19]).valueOf()
        ],
        format: "YYYY-MM-DD",
        autoClose: true,
        
    });

    // انتخاب چندین تاریخ
    $("#selectingMultipleDates").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD",
        autoClose: true,
        onSelect: function (unix) {
            let selected = $(this).data("selectedDates") || [];
            selected.push(new persianDate(unix).format("YYYY-MM-DD"));
            $(this).data("selectedDates", selected);
        }
    });

    // پیش‌بارگذاری چندین تاریخ
    $("#preloadingMultipleDates").attr('type', 'text').persianDatepicker({
        format: "YYYY-MM-DD",
        initialValue: [new persianDate([1402, 9, 25]).valueOf(), new persianDate([1402, 9, 26]).valueOf()],
        autoClose: true,
        onSelect: function (unix) {
            let selected = $(this).data("selectedDates") || [];
            selected.push(new persianDate(unix).format("YYYY-MM-DD"));
            $(this).data("selectedDates", selected);
        }
    });

    // تقویم بازه‌ای
    $("#rangeCalendar").attr('type', 'text').persianDatepicker({
        toolbox: { calendarSwitch: { enabled: true } },
        format: "YYYY-MM-DD",
        autoClose: true,
        
    });

    // تقویم بازه‌ای با پیش‌بارگذاری
    $("#preloadingRangeCalendar").attr('type', 'text').persianDatepicker({
        toolbox: { calendarSwitch: { enabled: true } },
        format: "YYYY-MM-DD",
        initialValue: [new persianDate([1402, 9, 20]).valueOf(), new persianDate([1402, 9, 25]).valueOf()],
        autoClose: true,
        
    });

    // انتخابگر زمان
    $("#timePicker").attr('type', 'text').persianDatepicker({
        onlyTimePicker: true,
        format: "HH:mm",
        autoClose: true,
        
    });

    // انتخابگر زمان 24 ساعته
    $("#timePicker24").attr('type', 'text').persianDatepicker({
        onlyTimePicker: true,
        format: "HH:mm",
        autoClose: true,
        
    });

    // انتخابگر زمان با پیش‌بارگذاری
    $("#preloadingTimePicker").attr('type', 'text').persianDatepicker({
        onlyTimePicker: true,
        format: "HH:mm",
        initialValue: "01:45",
        autoClose: true,
        
    });

    // زمان جلسه
    $("#meetingTime").attr('type', 'text').persianDatepicker({
        onlyTimePicker: true,
        format: "HH:mm",
        autoClose: true,
        
    });

    // زمان دوم جلسه
    $("#meetingTime2").attr('type', 'text').persianDatepicker({
        onlyTimePicker: true,
        format: "HH:mm",
        autoClose: true,
        
    });

    // نمایش شماره هفته‌ها
    $("#displayWeekNumbers").attr('type', 'text').persianDatepicker({
        showWeekNumber: true,
        format: "YYYY-MM-DD",
        autoClose: true,
        
    });

    // انتخابگر تاریخ با تابع
    $("#functionDate").attr('type', 'text').persianDatepicker({
        enable: function (date) {
            const pDate = new persianDate(date);
            return (pDate.month() % 2 === 0 && pDate.date() < 15);
        },
        format: "YYYY-MM-DD",
        autoClose: true,
        
    });

    // غیرفعال کردن تاریخ‌ها با تابع
    $("#functionDisablingDate").attr('type', 'text').persianDatepicker({
        disabled: function (date) {
            const pDate = new persianDate(date);
            return (pDate.day() === 0 || pDate.day() === 6); // غیرفعال کردن شنبه و جمعه
        },
        format: "YYYY-MM-DD",
        autoClose: true,
        
    });

    // تقویم درون‌خطی
    $("#inlineCalendar").persianDatepicker({
        inline: true,
        format: "YYYY-MM-DD",
        
    });
})();