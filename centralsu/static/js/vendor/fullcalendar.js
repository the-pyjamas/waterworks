(function () {
    "use strict";
    // Calendar Events Initializations

    // Get current Jalali year and month using persian-date
    var currentDate = new persianDate();
    var curYear = currentDate.year(); // e.g., 1404
    var curMonth = String(currentDate.month()).padStart(2, '0'); // e.g., 06 for Shahrivar

    // Helper function to convert Jalali date to Gregorian
    function jalaliToGregorian(jalaliYear, jalaliMonth, jalaliDay) {
        var jalaliDate = new persianDate([parseInt(jalaliYear), parseInt(jalaliMonth), parseInt(jalaliDay)]);
        jalaliDate.toCalendar('gregorian'); // Switch to Gregorian calendar
        var gregorianDate = jalaliDate.toDate(); // Get Gregorian date
        return gregorianDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    }

    // Helper function to format time for events
    function formatDateTime(jalaliYear, jalaliMonth, jalaliDay, time) {
        var jalaliDate = new persianDate([parseInt(jalaliYear), parseInt(jalaliMonth), parseInt(jalaliDay)]);
        jalaliDate.toCalendar('gregorian');
        var gregorianDate = jalaliDate.toDate();
        var [hours, minutes, seconds] = time.split(':').map(Number);
        gregorianDate.setHours(hours, minutes, seconds);
        return gregorianDate.toISOString();
    }

    // Calendar Event Source
    var bdCalendarEvents = {
        id: 1,
        events: [{
            id: '1',
            start: jalaliToGregorian(curYear, curMonth, '02'),
            end: jalaliToGregorian(curYear, curMonth, '03'),
            title: 'کنفرانس فناوری استرالیا',
            className: "bg-secondary-transparent",
            description: 'کارشناسان فناوری در سراسر استرالیا گرد هم می‌آیند و همکاری می‌کنند.'
        }, {
            id: '2',
            start: jalaliToGregorian(curYear, curMonth, '17'),
            end: jalaliToGregorian(curYear, curMonth, '17'),
            title: 'بازبینی طراحی آمریکا',
            className: "bg-info-transparent",
            description: 'بازبینی سیستم‌های طراحی آینده در بازار آمریکا.'
        }, {
            id: '3',
            start: jalaliToGregorian(curYear, curMonth, '13'),
            end: jalaliToGregorian(curYear, curMonth, '13'),
            title: 'نمایشگاه سبک زندگی چین',
            className: "bg-primary-transparent",
            description: 'نمایش نوآوری‌های سبک زندگی در چین.'
        }, {
            id: '4',
            start: jalaliToGregorian(curYear, curMonth, '21'),
            end: jalaliToGregorian(curYear, curMonth, '21'),
            title: 'جلسه تیمی استرالیا',
            className: "bg-warning-transparent",
            description: 'جلسه استراتژی هفتگی برای تیم استرالیا.'
        }, {
            id: '5',
            start: formatDateTime(curYear, curMonth, '04', '10:00:00'),
            end: formatDateTime(curYear, curMonth, '06', '15:00:00'),
            title: 'کارناوال موسیقی آمریکا',
            className: "bg-success-transparent",
            description: 'اجراهای زنده و جشن فرهنگ موسیقی در آمریکا.'
        }, {
            id: '6',
            start: formatDateTime(curYear, curMonth, '23', '13:00:00'),
            end: formatDateTime(curYear, curMonth, '25', '18:30:00'),
            title: 'عروسی سنتی چین',
            className: "bg-success-transparent",
            description: 'شرکت در جشن عروسی سنتی در چین.'
        }]
    };

    // Birthday Events Source
    var bdBirthdayEvents = {
        id: 2,
        className: "bg-info-transparent",
        textColor: '#fff',
        events: [{
            id: '7',
            start: jalaliToGregorian(curYear, curMonth, '04'),
            end: jalaliToGregorian(curYear, curMonth, '04'),
            title: 'تولد لیام (استرالیا)',
            description: 'جشن تولد لیام در سیدنی.'
        }, {
            id: '8',
            start: jalaliToGregorian(curYear, curMonth, '28'),
            end: jalaliToGregorian(curYear, curMonth, '28'),
            title: 'تولد امیلی (آمریکا)',
            description: 'جشن تولد در نیویورک.'
        }, {
            id: '9',
            start: jalaliToGregorian(curYear, curMonth, '30'),
            end: jalaliToGregorian(curYear, curMonth, '30'),
            title: 'تولد وی چن (چین)',
            description: 'جشن تولد در پکن.'
        }, {
            id: '10',
            start: jalaliToGregorian(curYear, '08', '11'), // Aban (next month)
            end: jalaliToGregorian(curYear, '08', '11'),
            title: 'تولد شیاومینگ (چین)',
            description: 'جمع سنتی تولد.'
        }]
    };

    // Holiday Events Source
    var bdHolidayEvents = {
        id: 3,
        className: "bg-danger-transparent",
        textColor: '#fff',
        events: [{
            id: '10',
            start: jalaliToGregorian(curYear, curMonth, '05'),
            end: jalaliToGregorian(curYear, curMonth, '08'),
            title: 'روزهای جشنواره استرالیا'
        }, {
            id: '11',
            start: jalaliToGregorian(curYear, curMonth, '18'),
            end: jalaliToGregorian(curYear, curMonth, '19'),
            title: 'یادبود آمریکا'
        }, {
            id: '12',
            start: jalaliToGregorian(curYear, curMonth, '25'),
            end: jalaliToGregorian(curYear, curMonth, '26'),
            title: 'جشن دیوالی چین'
        }]
    };

    // Other Events Source
    var bdOtherEvents = {
        id: 4,
        className: "bg-info-transparent",
        textColor: '#fff',
        events: [{
            id: '13',
            start: jalaliToGregorian(curYear, curMonth, '07'),
            end: jalaliToGregorian(curYear, curMonth, '09'),
            title: 'روزهای استراحت عمومی استرالیا'
        }, {
            id: '13',
            start: jalaliToGregorian(curYear, curMonth, '29'),
            end: jalaliToGregorian(curYear, curMonth, '30'),
            title: 'تعطیلات ملی چین'
        }]
    };

    // FullCalendar Draggable
    var containerEl = document.getElementById('external-events');
    new FullCalendar.Draggable(containerEl, {
        itemSelector: '.fc-event',
        eventData: function (eventEl) {
            return {
                title: eventEl.innerText.trim(),
                className: eventEl.className + ' overflow-hidden '
            };
        }
    });

    // FullCalendar Initialization
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        locale: 'fa', // Persian localization
        direction: 'rtl', // Right-to-left for Persian
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        buttonText: {
            today: 'امروز',
            prev: 'قبلی',
            next: 'بعدی',
            month: 'ماه',
            week: 'هفته',
            day: 'روز',
            list: 'لیست'
        },
        defaultView: 'dayGridMonth',
        navLinks: true, // Can click day/week names to navigate views
        businessHours: true, // Display business hours
        editable: true,
        selectable: true,
        selectMirror: true,
        droppable: true, // Allows things to be dropped onto the calendar
        firstDay: 6, // Set Saturday as the first day of the week (common in Iran)

        // Custom date formatting for Jalali calendar
        titleFormat: function (date) {
            var gregorianDate = new Date(date.start.year, date.start.month, date.start.day);
            var jalaliDate = new persianDate(gregorianDate);
            return jalaliDate.format('MMMM YYYY', { locale: 'fa' }); // e.g., "شهریور ۱۴۰۴"
        },
        dayHeaderFormat: function (date) {
            var jalaliDate = new persianDate([date.date.year, date.date.month + 1, date.date.day]);
            return jalaliDate.format('dddd', { locale: 'fa' }); // e.g., "شنبه"
        },
        dayCellContent: function (info) {
            var gregorianDate = new Date(info.date);
            var jalaliDate = new persianDate(gregorianDate);
            return jalaliDate.format('D', { locale: 'fa' }); // Display Jalali day number with Persian numerals
        },

        select: function (arg) {
            var title = prompt('عنوان رویداد:');
            if (title) {
                calendar.addEvent({
                    title: title,
                    start: arg.start,
                    end: arg.end,
                    allDay: arg.allDay
                });
            }
            calendar.unselect();
        },
        eventClick: function (arg) {
            if (confirm('آیا مطمئن هستید که می‌خواهید این رویداد را حذف کنید؟')) {
                arg.event.remove();
            }
        },
        editable: true,
        dayMaxEvents: true, // Allow "more" link when too many events
        eventSources: [bdCalendarEvents, bdBirthdayEvents, bdHolidayEvents, bdOtherEvents],

        // Convert Gregorian dates to Jalali for event rendering
        eventContent: function (arg) {
            var gregorianStart = new Date(arg.event.start);
            var jalaliStart = new persianDate(gregorianStart);
            var formattedDate = jalaliStart.format('YYYY/MM/DD', { locale: 'fa' }); // Format Jalali date with Persian numerals
            return {
                html: `<div class="fc-content">
                    <span class="fc-title">${arg.event.title}</span>
                    <br/>
                    <span class="fc-date">${formattedDate}</span>
                </div>`
            };
        }
    });

    calendar.render();
})();