function initMap() {
    const styledMap = [
        {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [
                {
                "visibility": "on"
                },
                {
                "color": "#e0efef"
                }
            ]
        },
        {
            featureType: "poi",
            elementType: "geometry.fill",
            stylers: [
                {
                "visibility": "on"
                },
                {
                "hue": "#1900ff"
                },
                {
                "color": "#c0e8e8"
                }
            ]
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                {
                "lightness": 100
                },
                {
                "visibility": "simplified"
                }
            ]
        },
        {
            featureType: "road",
            elementType: "labels",
            stylers: [
                {
                "visibility": "off"
                }
            ]
        },
        {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [
                {
                "visibility": "on"
                },
                {
                "lightness": 700
                }
            ]
        },
        {
            featureType: "water",
            elementType: "all",
            stylers: [
                {
                "color": "#7dcdcd"
                }
            ]
        }
    ];

    const mapOptions = {
        center: { lat: 52.06857, lng: 21.02346 }, // Piaseczno, PL - центр карти
        zoom: 15,
        styles: styledMap
    };

    const map = new google.maps.Map(document.getElementById("map"), mapOptions);

    // --- Додаємо маркер ---
    const markerPosition = { lat: 52.06857, lng: 21.02346 }; // <<< ВСТАВТЕ СЮДИ ТОЧНІ КООРДИНАТИ Wojska Polskiego 58/U6 <<<

    const marker = new google.maps.Marker({
        position: markerPosition,
        map: map,
        title: 'Wojska Polskiego 58/U6, 05-500 Piaseczno' // Текст підказки при наведенні
    });

    // --- Додаємо інформаційне вікно, яке з'явиться при кліку на маркер ---
    const infoWindowContent = '<div id="content">' +
        '<h1 id="firstHeading" class="firstHeading">Наша локація</h1>' +
        '<div id="bodyContent">' +
        '<p><b>Адреса:</b> Wojska Polskiego 58/U6, 05-500, Piaseczno</p>' +
        '</div>' +
        '</div>';

    const infoWindow = new google.maps.InfoWindow({
        content: infoWindowContent
    });

    marker.addListener("click", () => {
        infoWindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
        });
    });
}

window.initMap = initMap;