(function () {
    "use strict";

    /* Persian digit conversion function */
    var persianDigits = function(str) {
        var persianNumbers = [/0/g, /1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g],
            persianNumbers0 = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
        if (str === null || str === undefined) {
            return '';
        }
        str = str.toString();
        for (var i = 0; i < 10; i++) {
            str = str.replace(persianNumbers[i], persianNumbers0[i]);
        }
        return str;
    };

    /* Basic Vector Map */
    var map = new jsVectorMap({
        selector: "#world-map",
        map: "world_merc",
        backgroundColor: "var(--color-white)",

        // Continent labels (manually placed)
        labels: {
            markers: {
                render: function (marker) {
                    // Define continent names and their coordinates in Persian
                    const continents = [
                        { name: "آمریکای شمالی", coords: [45, -100] },
                        { name: "آمریکای جنوبی", coords: [-20, -60] },
                        { name: "اروپا", coords: [55, 20] },
                        { name: "آفریقا", coords: [0, 20] },
                        { name: "آسیا", coords: [45, 100] },
                        { name: "استرالیا", coords: [-25, 135] },
                        { name: "قطب جنوب", coords: [-80, 0] }
                    ];

                    // Find matching continent
                    const continent = continents.find(c => c.name === marker.name);
                    return continent ? persianDigits(continent.name) : "";
                }
            }
        },

        // Markers for continent labels
        markers: [
            { name: "آمریکای شمالی", coords: [45, -100] },
            { name: "آمریکای جنوبی", coords: [-20, -60] },
            { name: "اروپا", coords: [55, 20] },
            { name: "آفریقا", coords: [0, 20] },
            { name: "آسیا", coords: [45, 100] },
            { name: "استرالیا", coords: [-25, 135] },
            { name: "قطب جنوب", coords: [-80, 0] }
        ],

        // Style for continent labels
        markerLabelStyle: {
            initial: {
                fontFamily: "IRANYekanX",
                fontSize: 12,
                fontWeight: "bold",
                fill: "#333",
                textAnchor: "end" // RTL support
            }
        },

        // Basic map styling
        regionStyle: {
            initial: {
                fill: "#e9ecef",
                stroke: "var(--color-white)",
                strokeWidth: 0.5
            }
        }
    });

    /* Map with Markers */
    var markers = [
        {
            name: 'روسیه',
            coords: [61, 105],
            style: { fill: '#F5F5F5' }
        },
        {
            name: 'گرینلند',
            coords: [72, -42],
            style: { fill: '#ff9251' }
        },
        {
            name: 'کانادا',
            coords: [56, -106],
            style: { fill: '#56de80' }
        },
        {
            name: 'فلسطین',
            coords: [31.5, 34.8],
            style: { fill: 'yellow' }
        },
        {
            name: 'برزیل',
            coords: [-14.2350, -51.9253],
            style: { fill: '#000' }
        }
    ];

    var map = new jsVectorMap({
        map: 'world_merc',
        selector: '#marker-map',
        markersSelectable: true,

        onMarkerSelected(index, isSelected, selectedMarkers) {
            console.log(index, isSelected, selectedMarkers);
        },

        // Labels for markers
        labels: {
            markers: {
                render: function (marker) {
                    return persianDigits(marker.name);
                }
            }
        },

        // Marker and label style
        markers: markers,
        markerStyle: {
            hover: {
                stroke: "#DDD",
                strokeWidth: 3,
                fill: '#FFF'
            },
            selected: {
                fill: '#ff525d'
            }
        },
        markerLabelStyle: {
            initial: {
                fontFamily: 'IRANYekanX',
                fontSize: 13,
                fontWeight: 500,
                fill: '#35373e',
                textAnchor: 'end' // RTL support
            }
        }
    });

    /* Map with Image Markers */
    var markers = [
        { name: 'فلسطین', coords: [31.5, 34.8] },
        { name: 'روسیه', coords: [61, 105] },
        { name: 'گرینلند', coords: [72, -42] },
        { name: 'کانادا', coords: [56, -106] }
    ];
    var map = new jsVectorMap({
        map: 'world_merc',
        selector: '#marker-image-map',

        labels: {
            markers: {
                render: function (marker) {
                    return persianDigits(marker.name);
                }
            }
        },
        markers: markers,
        markerStyle: {
            initial: {
                image: true
            }
        },
        series: {
            markers: [{
                attribute: 'image',
                scale: {
                    marker1title: {
                        url: 'assets/images/logo/favicon.svg',
                        offset: [10, 0]
                    },
                    marker2title: {
                        url: 'assets/images/logo/favicon.svg',
                        offset: [10, 0]
                    }
                },
                values: {
                    0: 'marker1title',
                    1: 'marker2title',
                    2: 'marker2title',
                    3: 'marker1title'
                }
            }]
        },
        markerLabelStyle: {
            initial: {
                fontFamily: 'IRANYekanX',
                fontSize: 13,
                fontWeight: 500,
                fill: '#35373e',
                textAnchor: 'end' // RTL support
            }
        }
    });

    /* Map with Lines */
    var markers = [
        { name: 'برزیل', coords: [-14.2350, -51.9253], offsets: [0, 5], style: { fill: 'green' } },
        { name: 'ایالات متحده', coords: [37.0902, -95.7129], offsets: [0, 5], style: { fill: 'blue' } },
        { name: 'روسیه', coords: [61.5240, 105.3188], offsets: [0, 5], style: { fill: 'red' } },
        { name: 'استرالیا', coords: [-25.2744, 133.7751], offsets: [0, 5], style: { fill: 'yellow' } },
        { name: 'فلسطین', coords: [31.9522, 35.2332], offsets: [0, 5], style: { fill: 'black' } }
    ];
    var lines = [
        { from: 'برزیل', to: 'ایالات متحده', style: { stroke: '#abb0b7', strokeWidth: 1.5 } },
        { from: 'ایالات متحده', to: 'روسیه', style: { stroke: '#abb0b7', strokeWidth: 1.5 } },
        { from: 'روسیه', to: 'استرالیا', style: { stroke: '#abb0b7', strokeWidth: 1.5 } },
        { from: 'استرالیا', to: 'فلسطین', style: { stroke: '#abb0b7', strokeWidth: 1.5 } }
    ];

    new jsVectorMap({
        map: 'world_merc',
        selector: document.querySelector('#lines-map'),
        labels: {
            markers: {
                render: function (marker) {
                    return persianDigits(marker.name);
                },
                offsets: function (index) {
                    return markers[index].offsets || [0, 0];
                }
            }
        },
        markers: markers,
        lines: lines,
        lineStyle: {
            animation: true,
            strokeDasharray: "6 3 6"
        },
        markerStyle: {
            initial: {
                r: 6,
                fill: '#1266f1',
                stroke: '#fff',
                strokeWidth: 3
            }
        },
        markerLabelStyle: {
            initial: {
                fontFamily: 'IRANYekanX',
                fontSize: 13,
                fontWeight: 500,
                fill: '#35373e',
                textAnchor: 'end' // RTL support
            }
        }
    });

    /* US Vector Map */
    var map = new jsVectorMap({
        selector: "#us-map",
        map: "us_merc_en",
        regionStyle: {
            initial: {
                stroke: "#e9e9e9",
                strokeWidth: 0.15,
                fill: "var(--color-info)",
                fillOpacity: 1
            }
        },
        regionLabelStyle: {
            initial: {
                fontFamily: 'IRANYekanX',
                fontSize: 12,
                fill: '#35373e',
                textAnchor: 'end' // RTL support
            }
        }
    });

    /* Russia Vector Map */
    var map = new jsVectorMap({
        selector: "#russia-map",
        map: "russia",
        regionStyle: {
            initial: {
                stroke: "#e9e9e9",
                strokeWidth: 0.15,
                fill: "var(--color-danger)",
                fillOpacity: 1
            }
        },
        regionLabelStyle: {
            initial: {
                fontFamily: 'IRANYekanX',
                fontSize: 12,
                fill: '#35373e',
                textAnchor: 'end' // RTL support
            }
        }
    });

    /* Brazil Vector Map */
    var map = new jsVectorMap({
        selector: "#brasil-map",
        map: "brasil",
        regionStyle: {
            initial: {
                stroke: "#e9e9e9",
                strokeWidth: 0.15,
                fill: "var(--color-success)",
                fillOpacity: 1
            }
        },
        regionLabelStyle: {
            initial: {
                fontFamily: 'IRANYekanX',
                fontSize: 12,
                fill: '#35373e',
                textAnchor: 'end' // RTL support
            }
        }
    });

})();