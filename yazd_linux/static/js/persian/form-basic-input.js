$(document).ready(function() {
    // Initialize Persian Datepicker for date input
    $("#html5-date-input").attr('type', 'text').persianDatepicker({
        format: 'YYYY/MM/DD',
        autoClose: true,
        initialValue: true,
        initialValueType: 'gregorian',
        setDate: new Date('2024-12-28'), // Gregorian date
        calendar: {
            persian: true,
            locale: 'fa'
        }
    });

    // Initialize Persian Datepicker for datetime-local input
    $("#datetime-local").attr('type', 'text').persianDatepicker({
        format: 'YYYY/MM/DD HH:mm:ss',
        autoClose: true,
        initialValue: true,
        initialValueType: 'gregorian',
        setDate: new Date('2024-12-28T12:30:00'), // Gregorian datetime
        timePicker: {
            enabled: true,
            second: {
                enabled: true
            }
        },
        calendar: {
            persian: true,
            locale: 'fa'
        }
    });

    // Initialize Persian Datepicker for week input with custom week handling
    $("#week").attr('type', 'text').persianDatepicker({
        format: 'YYYY/WW',
        autoClose: true,
        initialValue: true,
        initialValueType: 'gregorian',
        setDate: new Date('2024-12-01'), // Approximate start of Gregorian week 49 (2024)
        calendar: {
            persian: true,
            locale: 'fa'
        },
        onSelect: function(unix) {
            // Use 'new' to instantiate persianDate class
            var pDate = new persianDate(unix);
            var persianYear = pDate.year();
            var persianWeek = pDate.week();
            // Format as YYYY/WW (e.g., 1403/W49)
            var weekFormat = persianYear + '/W' + (persianWeek < 10 ? '0' + persianWeek : persianWeek);
            $("#week").val(weekFormat);
        }
    });

    // Initialize Persian Datepicker for month input
    $("#month").attr('type', 'text').persianDatepicker({
        format: 'YYYY/MM',
        autoClose: true,
        initialValue: true,
        initialValueType: 'gregorian',
        setDate: new Date('2024-12-01'), // Gregorian month December 2024
        calendar: {
            persian: true,
            locale: 'fa'
        },
        onlySelectMonth: true
    });
});