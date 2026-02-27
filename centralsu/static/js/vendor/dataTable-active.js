(function () {
    'use strict';

    function initDataTable(selector, options) {
        if ($.fn.DataTable && $(selector).length) {
            $(selector).DataTable(options);
        }
    }

    // Initialize all your tables safely
    initDataTable('#datatable-basic', {
        language: {
            searchPlaceholder: 'جستجو...',
            sSearch: '',
            sLengthMenu: 'نمایش _MENU_ مورد',
            sZeroRecords: 'هیچ رکوردی یافت نشد',
            sInfo: 'نمایش _START_ تا _END_ از _TOTAL_ مورد',
            sInfoEmpty: 'نمایش 0 تا 0 از 0 مورد',
            sInfoFiltered: '(فیلتر شده از _MAX_ مورد)',
            oPaginate: {
                sFirst: 'اولین',
                sPrevious: 'قبلی',
                sNext: 'بعدی',
                sLast: 'آخرین'
            },
            sProcessing: 'در حال پردازش...',
            sLoadingRecords: 'در حال بارگذاری...',
            sEmptyTable: 'هیچ داده‌ای در جدول موجود نیست'
        },
        pageLength: 10
    });

    initDataTable('#responsiveDataTable', {
        responsive: true,
        language: {
            searchPlaceholder: 'جستجو...',
            sSearch: '',
            sLengthMenu: 'نمایش _MENU_ مورد',
            sZeroRecords: 'هیچ رکوردی یافت نشد',
            sInfo: 'نمایش _START_ تا _END_ از _TOTAL_ مورد',
            sInfoEmpty: 'نمایش 0 تا 0 از 0 مورد',
            sInfoFiltered: '(فیلتر شده از _MAX_ مورد)',
            oPaginate: {
                sFirst: 'اولین',
                sPrevious: 'قبلی',
                sNext: 'بعدی',
                sLast: 'آخرین'
            },
            sProcessing: 'در حال پردازش...',
            sLoadingRecords: 'در حال بارگذاری...',
            sEmptyTable: 'هیچ داده‌ای در جدول موجود نیست'
        },
        pageLength: 5,
        lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "همه"]]
    });

    initDataTable('#responsiveDataTableTwo', {
        responsive: true,
        language: {
            searchPlaceholder: 'جستجو...',
            sSearch: '',
            sLengthMenu: 'نمایش _MENU_ مورد',
            sZeroRecords: 'هیچ رکوردی یافت نشد',
            sInfo: 'نمایش _START_ تا _END_ از _TOTAL_ مورد',
            sInfoEmpty: 'نمایش 0 تا 0 از 0 مورد',
            sInfoFiltered: '(فیلتر شده از _MAX_ مورد)',
            oPaginate: {
                sFirst: 'اولین',
                sPrevious: 'قبلی',
                sNext: 'بعدی',
                sLast: 'آخرین'
            },
            sProcessing: 'در حال پردازش...',
            sLoadingRecords: 'در حال بارگذاری...',
            sEmptyTable: 'هیچ داده‌ای در جدول موجود نیست'
        },
        pageLength: 5,
        lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "همه"]]
    });

    $(document).ready(function () {
        const table = $('#contactsDataTable').DataTable({
            columnDefs: [
                {
                    orderable: false,
                    searchable: false,
                    targets: [0]
                }
            ],
            responsive: false,
            language: {
                searchPlaceholder: 'جستجو...',
                sSearch: '',
                sLengthMenu: 'نمایش _MENU_ مورد',
                sZeroRecords: 'هیچ رکوردی یافت نشد',
                sInfo: 'نمایش _START_ تا _END_ از _TOTAL_ مورد',
                sInfoEmpty: 'نمایش 0 تا 0 از 0 مورد',
                sInfoFiltered: '(فیلتر شده از _MAX_ مورد)',
                oPaginate: {
                    sFirst: 'اولین',
                    sPrevious: 'قبلی',
                    sNext: 'بعدی',
                    sLast: 'آخرین'
                },
                sProcessing: 'در حال پردازش...',
                sLoadingRecords: 'در حال بارگذاری...',
                sEmptyTable: 'هیچ داده‌ای در جدول موجود نیست'
            },
            pageLength: 10,
            lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "همه"]]
        });

        // Handle custom sorting
        $('.sorting-dropdown').on('change', function () {
            const val = $(this).val();
            if (val) {
                const [colIndex, dir] = val.split('_'); // Split into index and direction
                table.order([parseInt(colIndex), dir]).draw();
            } else {
                table.order([]).draw(); // Reset sorting
            }
        });
    });

    $(document).ready(function () {
        const table = $('#companiesDataTable').DataTable({
            columnDefs: [
                {
                    orderable: false,
                    searchable: false,
                    targets: [0]
                }
            ],
            responsive: false,
            language: {
                searchPlaceholder: 'جستجو...',
                sSearch: '',
                sLengthMenu: 'نمایش _MENU_ مورد',
                sZeroRecords: 'هیچ رکوردی یافت نشد',
                sInfo: 'نمایش _START_ تا _END_ از _TOTAL_ مورد',
                sInfoEmpty: 'نمایش 0 تا 0 از 0 مورد',
                sInfoFiltered: '(فیلتر شده از _MAX_ مورد)',
                oPaginate: {
                    sFirst: 'اولین',
                    sPrevious: 'قبلی',
                    sNext: 'بعدی',
                    sLast: 'آخرین'
                },
                sProcessing: 'در حال پردازش...',
                sLoadingRecords: 'در حال بارگذاری...',
                sEmptyTable: 'هیچ داده‌ای در جدول موجود نیست'
            },
            pageLength: 10,
            lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "همه"]]
        });

        // Handle custom sorting
        $('.sorting-dropdown').on('change', function () {
            const val = $(this).val();
            if (val) {
                const [colIndex, dir] = val.split('_'); // Split into index and direction
                table.order([parseInt(colIndex), dir]).draw();
            } else {
                table.order([]).draw(); // Reset sorting
            }
        });
    });

    $(document).ready(function () {
        const table = $('#dealDataTable').DataTable({
            columnDefs: [
                {
                    orderable: false,
                    searchable: false,
                    targets: [0, 1, 12]
                }
            ],
            responsive: false,
            language: {
                searchPlaceholder: 'جستجو...',
                sSearch: '',
                sLengthMenu: 'نمایش _MENU_ مورد',
                sZeroRecords: 'هیچ رکوردی یافت نشد',
                sInfo: 'نمایش _START_ تا _END_ از _TOTAL_ مورد',
                sInfoEmpty: 'نمایش 0 تا 0 از 0 مورد',
                sInfoFiltered: '(فیلتر شده از _MAX_ مورد)',
                oPaginate: {
                    sFirst: 'اولین',
                    sPrevious: 'قبلی',
                    sNext: 'بعدی',
                    sLast: 'آخرین'
                },
                sProcessing: 'در حال پردازش...',
                sLoadingRecords: 'در حال بارگذاری...',
                sEmptyTable: 'هیچ داده‌ای در جدول موجود نیست'
            },
            pageLength: 10,
            lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "همه"]]
        });

        // Handle custom sorting
        $('.sorting-dropdown').on('change', function () {
            const val = $(this).val();
            if (val) {
                const [colIndex, dir] = val.split('_'); // Split into index and direction
                table.order([parseInt(colIndex), dir]).draw();
            } else {
                table.order([]).draw(); // Reset sorting
            }
        });
    });

    $(document).ready(function () {
        $('#dataTableDefault').DataTable({
            bFilter: true,
            ordering: true,
            lengthChange: true,
            columnDefs: [
                {
                    orderable: false,
                    searchable: false,
                    targets: [0]
                }
            ],
            language: {
                searchPlaceholder: 'جستجو...',
                sSearch: '',
                sLengthMenu: 'نمایش _MENU_ مورد',
                sZeroRecords: 'هیچ رکوردی یافت نشد',
                sInfo: 'نمایش _START_ تا _END_ از _TOTAL_ مورد',
                sInfoEmpty: 'نمایش 0 تا 0 از 0 مورد',
                sInfoFiltered: '(فیلتر شده از _MAX_ مورد)',
                oPaginate: {
                    sFirst: 'اولین',
                    sPrevious: 'قبلی',
                    sNext: 'بعدی',
                    sLast: 'آخرین'
                },
                sProcessing: 'در حال پردازش...',
                sLoadingRecords: 'در حال بارگذاری...',
                sEmptyTable: 'هیچ داده‌ای در جدول موجود نیست'
            },
            pageLength: 10
        });
    });

    $(document).ready(function () {
        $('#dataTableDefaultTwo').DataTable({
            bFilter: true,
            ordering: true,
            lengthChange: true,
            columnDefs: [
                {
                    orderable: false,
                    searchable: false,
                    targets: [0]
                }
            ],
            language: {
                searchPlaceholder: 'جستجو...',
                sSearch: '',
                sLengthMenu: 'نمایش _MENU_ مورد',
                sZeroRecords: 'هیچ رکوردی یافت نشد',
                sInfo: 'نمایش _START_ تا _END_ از _TOTAL_ مورد',
                sInfoEmpty: 'نمایش 0 تا 0 از 0 مورد',
                sInfoFiltered: '(فیلتر شده از _MAX_ مورد)',
                oPaginate: {
                    sFirst: 'اولین',
                    sPrevious: 'قبلی',
                    sNext: 'بعدی',
                    sLast: 'آخرین'
                },
                sProcessing: 'در حال پردازش...',
                sLoadingRecords: 'در حال بارگذاری...',
                sEmptyTable: 'هیچ داده‌ای در جدول موجود نیست'
            },
            pageLength: 5,
            lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "همه"]]
        });
    });

    $(document).ready(function () {
        $('#attendanceTable').DataTable({
            bFilter: true,
            ordering: false, // 👈 غیرفعال کردن مرتب‌سازی
            lengthChange: true,
            pageLength: 10,
            lengthMenu: [[10, 25, 50, -1], [10, 25, 50, "همه"]],
            language: {
                searchPlaceholder: 'جستجو...',
                sSearch: '',
                sLengthMenu: 'نمایش _MENU_ مورد',
                sZeroRecords: 'هیچ رکوردی یافت نشد',
                sInfo: 'نمایش _START_ تا _END_ از _TOTAL_ مورد',
                sInfoEmpty: 'نمایش 0 تا 0 از 0 مورد',
                sInfoFiltered: '(فیلتر شده از _MAX_ مورد)',
                oPaginate: {
                    sFirst: 'اولین',
                    sPrevious: 'قبلی',
                    sNext: 'بعدی',
                    sLast: 'آخرین'
                },
                sProcessing: 'در حال پردازش...',
                sLoadingRecords: 'در حال بارگذاری...',
                sEmptyTable: 'هیچ داده‌ای در جدول موجود نیست'
            }
        });
    });

    $(document).ready(function () {
        $('#employeeAttendanceTable').DataTable({
            bFilter: true,
            ordering: true,
            lengthChange: true,
            pageLength: 10,
            language: {
                searchPlaceholder: 'جستجو...',
                sSearch: '',
                sLengthMenu: 'نمایش _MENU_ مورد',
                sZeroRecords: 'هیچ رکوردی یافت نشد',
                sInfo: 'نمایش _START_ تا _END_ از _TOTAL_ مورد',
                sInfoEmpty: 'نمایش 0 تا 0 از 0 مورد',
                sInfoFiltered: '(فیلتر شده از _MAX_ مورد)',
                oPaginate: {
                    sFirst: 'اولین',
                    sPrevious: 'قبلی',
                    sNext: 'بعدی',
                    sLast: 'آخرین'
                },
                sProcessing: 'در حال پردازش...',
                sLoadingRecords: 'در حال بارگذاری...',
                sEmptyTable: 'هیچ داده‌ای در جدول موجود نیست'
            }
        });
    });

    $(document).ready(function () {
        $('#commonTable').DataTable({
            bFilter: true,
            ordering: true,
            lengthChange: true,
            pageLength: 10,
            language: {
                searchPlaceholder: 'جستجو...',
                sSearch: '',
                sLengthMenu: 'نمایش _MENU_ مورد',
                sZeroRecords: 'هیچ رکوردی یافت نشد',
                sInfo: 'نمایش _START_ تا _END_ از _TOTAL_ مورد',
                sInfoEmpty: 'نمایش 0 تا 0 از 0 مورد',
                sInfoFiltered: '(فیلتر شده از _MAX_ مورد)',
                oPaginate: {
                    sFirst: 'اولین',
                    sPrevious: 'قبلی',
                    sNext: 'بعدی',
                    sLast: 'آخرین'
                },
                sProcessing: 'در حال پردازش...',
                sLoadingRecords: 'در حال بارگذاری...',
                sEmptyTable: 'هیچ داده‌ای در جدول موجود نیست'
            }
        });
    });

    // جدول پاسخ‌گو با مودال
    $('#responsivemodal-DataTable').DataTable({
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function (row) {
                        var data = row.data();
                        return data[0] + ' ' + data[1];
                    }
                }),
                renderer: $.fn.dataTable.Responsive.renderer.tableAll({
                    tableClass: 'table'
                })
            }
        },
        language: {
            searchPlaceholder: 'جستجو...',
            sSearch: '',
            sLengthMenu: 'نمایش _MENU_ مورد',
            sZeroRecords: 'هیچ رکوردی یافت نشد',
            sInfo: 'نمایش _START_ تا _END_ از _TOTAL_ مورد',
            sInfoEmpty: 'نمایش 0 تا 0 از 0 مورد',
            sInfoFiltered: '(فیلتر شده از _MAX_ مورد)',
            oPaginate: {
                sFirst: 'اولین',
                sPrevious: 'قبلی',
                sNext: 'بعدی',
                sLast: 'آخرین'
            },
            sProcessing: 'در حال پردازش...',
            sLoadingRecords: 'در حال بارگذاری...',
            sEmptyTable: 'هیچ داده‌ای در جدول موجود نیست'
        },
        pageLength: 10
    });
    // جدول پاسخ‌گو با مودال

    // جدول با قابلیت خروجی فایل
    $('#file-export').DataTable({
        dom: 'Bfrtip',
        buttons: [
            {
                extend: 'copy',
                text: 'کپی',
                title: 'داده‌های جدول'
            },
            {
                extend: 'csv',
                text: 'CSV',
                title: 'داده‌های جدول'
            },
            {
                extend: 'excel',
                text: 'اکسل',
                title: 'داده‌های جدول'
            },
            {
                extend: 'pdf',
                text: 'PDF',
                title: 'داده‌های جدول'
            },
            {
                extend: 'print',
                text: 'چاپ',
                title: 'داده‌های جدول'
            }
        ],
        language: {
            searchPlaceholder: 'جستجو...',
            sSearch: '',
            sLengthMenu: 'نمایش _MENU_ مورد',
            sZeroRecords: 'هیچ رکوردی یافت نشد',
            sInfo: 'نمایش _START_ تا _END_ از _TOTAL_ مورد',
            sInfoEmpty: 'نمایش 0 تا 0 از 0 مورد',
            sInfoFiltered: '(فیلتر شده از _MAX_ مورد)',
            oPaginate: {
                sFirst: 'اولین',
                sPrevious: 'قبلی',
                sNext: 'بعدی',
                sLast: 'آخرین'
            },
            sProcessing: 'در حال پردازش...',
            sLoadingRecords: 'در حال بارگذاری...',
            sEmptyTable: 'هیچ داده‌ای در جدول موجود نیست'
        },
        pageLength: 10
    });
    // جدول با قابلیت خروجی فایل

    // جدول با قابلیت حذف ردیف
    var table = $('#delete-datatable').DataTable({
        language: {
            searchPlaceholder: 'جستجو...',
            sSearch: '',
            sLengthMenu: 'نمایش _MENU_ مورد',
            sZeroRecords: 'هیچ رکوردی یافت نشد',
            sInfo: 'نمایش _START_ تا _END_ از _TOTAL_ مورد',
            sInfoEmpty: 'نمایش 0 تا 0 از 0 مورد',
            sInfoFiltered: '(فیلتر شده از _MAX_ مورد)',
            oPaginate: {
                sFirst: 'اولین',
                sPrevious: 'قبلی',
                sNext: 'بعدی',
                sLast: 'آخرین'
            },
            sProcessing: 'در حال پردازش...',
            sLoadingRecords: 'در حال بارگذاری...',
            sEmptyTable: 'هیچ داده‌ای در جدول موجود نیست'
        },
        pageLength: 10
    });
    $('#delete-datatable tbody').on('click', 'tr', function () {
        if ($(this).hasClass('selected')) {
            $(this).removeClass('selected');
        } else {
            table.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
        }
    });
    $('#button').on("click", function () {
        table.row('.selected').remove().draw(false);
    });
    // جدول با قابلیت حذف ردیف

    // جدول با اسکرول عمودی
    $('#scroll-vertical').DataTable({
        scrollY: '265px',
        scrollCollapse: true,
        paging: false,
        scrollX: true,
        language: {
            searchPlaceholder: 'جستجو...',
            sSearch: '',
            sLengthMenu: 'نمایش _MENU_ مورد',
            sZeroRecords: 'هیچ رکوردی یافت نشد',
            sInfo: 'نمایش _START_ تا _END_ از _TOTAL_ مورد',
            sInfoEmpty: 'نمایش 0 تا 0 از 0 مورد',
            sInfoFiltered: '(فیلتر شده از _MAX_ مورد)',
            oPaginate: {
                sFirst: 'اولین',
                sPrevious: 'قبلی',
                sNext: 'بعدی',
                sLast: 'آخرین'
            },
            sProcessing: 'در حال پردازش...',
            sLoadingRecords: 'در حال بارگذاری...',
            sEmptyTable: 'هیچ داده‌ای در جدول موجود نیست'
        }
    });
    // جدول با اسکرول عمودی

    // جدول با ستون‌های مخفی
    $('#hidden-columns').DataTable({
        columnDefs: [
            {
                target: 2,
                visible: false,
                searchable: false
            },
            {
                target: 3,
                visible: false
            }
        ],
        language: {
            searchPlaceholder: 'جستجو...',
            sSearch: '',
            sLengthMenu: 'نمایش _MENU_ مورد',
            sZeroRecords: 'هیچ رکوردی یافت نشد',
            sInfo: 'نمایش _START_ تا _END_ از _TOTAL_ مورد',
            sInfoEmpty: 'نمایش 0 تا 0 از 0 مورد',
            sInfoFiltered: '(فیلتر شده از _MAX_ مورد)',
            oPaginate: {
                sFirst: 'اولین',
                sPrevious: 'قبلی',
                sNext: 'بعدی',
                sLast: 'آخرین'
            },
            sProcessing: 'در حال پردازش...',
            sLoadingRecords: 'در حال بارگذاری...',
            sEmptyTable: 'هیچ داده‌ای در جدول موجود نیست'
        },
        pageLength: 10
    });
    // جدول با ستون‌های مخفی

    // جدول با قابلیت افزودن ردیف
    var t = $('#add-row').DataTable({
        language: {
            searchPlaceholder: 'جستجو...',
            sSearch: '',
            sLengthMenu: 'نمایش _MENU_ مورد',
            sZeroRecords: 'هیچ رکوردی یافت نشد',
            sInfo: 'نمایش _START_ تا _END_ از _TOTAL_ مورد',
            sInfoEmpty: 'نمایش 0 تا 0 از 0 مورد',
            sInfoFiltered: '(فیلتر شده از _MAX_ مورد)',
            oPaginate: {
                sFirst: 'اولین',
                sPrevious: 'قبلی',
                sNext: 'بعدی',
                sLast: 'آخرین'
            },
            sProcessing: 'در حال پردازش...',
            sLoadingRecords: 'در حال بارگذاری...',
            sEmptyTable: 'هیچ داده‌ای در جدول موجود نیست'
        },
        pageLength: 10
    });
    var counter = 1;
    $('#addRow').on('click', function () {
        t.row.add([counter + '.1', counter + '.2', counter + '.3', counter + '.4', counter + '.5']).draw(false);
        counter++;
    });
    // جدول با قابلیت افزودن ردیف

    $('#alternativePagination').DataTable({
        pagingType: 'full_numbers',
        language: {
            searchPlaceholder: 'جستجو...',
            sSearch: '',
            sLengthMenu: 'نمایش _MENU_ مورد',
            sZeroRecords: 'هیچ رکوردی یافت نشد',
            sInfo: 'نمایش _START_ تا _END_ از _TOTAL_ مورد',
            sInfoEmpty: 'نمایش 0 تا 0 از 0 مورد',
            sInfoFiltered: '(فیلتر شده از _MAX_ مورد)',
            oPaginate: {
                sFirst: 'اولین',
                sPrevious: 'قبلی',
                sNext: 'بعدی',
                sLast: 'آخرین'
            },
            sProcessing: 'در حال پردازش...',
            sLoadingRecords: 'در حال بارگذاری...',
            sEmptyTable: 'هیچ داده‌ای در جدول موجود نیست'
        }
    });

    $('#complexHeaders').DataTable({
        language: {
            searchPlaceholder: 'جستجو...',
            sSearch: '',
            sLengthMenu: 'نمایش _MENU_ مورد',
            sZeroRecords: 'هیچ رکوردی یافت نشد',
            sInfo: 'نمایش _START_ تا _END_ از _TOTAL_ مورد',
            sInfoEmpty: 'نمایش 0 تا 0 از 0 مورد',
            sInfoFiltered: '(فیلتر شده از _MAX_ مورد)',
            oPaginate: {
                sFirst: 'اولین',
                sPrevious: 'قبلی',
                sNext: 'بعدی',
                sLast: 'آخرین'
            },
            sProcessing: 'در حال پردازش...',
            sLoadingRecords: 'در حال بارگذاری...',
            sEmptyTable: 'هیچ داده‌ای در جدول موجود نیست'
        }
    });
})();