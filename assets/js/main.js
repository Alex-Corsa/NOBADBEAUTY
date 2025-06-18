document.querySelectorAll('div').forEach(div => {
    const children = div.children;
    if (
        children.length === 1 &&
        children[0].tagName.toLowerCase() === 'img'
    ) {
        div.style.borderRadius = '5px';
    }
});

// function initMap() {
//     const styledMapType = new google.maps.StyledMapType(
//       [
//         {
//           "featureType": "landscape.natural",
//           "elementType": "geometry.fill",
//           "stylers": [
//             { "visibility": "on" },
//             { "color": "#e0efef" }
//           ]
//         },
//         {
//           "featureType": "poi",
//           "elementType": "geometry.fill",
//           "stylers": [
//             { "visibility": "on" },
//             { "hue": "#1900ff" },
//             { "color": "#c0e8e8" }
//           ]
//         },
//         {
//           "featureType": "road",
//           "elementType": "geometry",
//           "stylers": [
//             { "lightness": 100 },
//             { "visibility": "simplified" }
//           ]
//         },
//         {
//           "featureType": "road",
//           "elementType": "labels",
//           "stylers": [
//             { "visibility": "off" }
//           ]
//         },
//         {
//           "featureType": "transit.line",
//           "elementType": "geometry",
//           "stylers": [
//             { "visibility": "on" },
//             { "lightness": 700 }
//           ]
//         },
//         {
//           "featureType": "water",
//           "elementType": "all",
//           "stylers": [
//             { "color": "#7dcdcd" }
//           ]
//         }
//       ],
//       { name: "Styled Map" }
//     );

//     const map = new google.maps.Map(document.getElementById("map"), {
//       center: { lat: 50.4501, lng: 30.5234 }, // Київ
//       zoom: 12,
//       mapTypeControlOptions: {
//         mapTypeIds: ["roadmap", "satellite", "styled_map"]
//       }
//     });

//     map.mapTypes.set("styled_map", styledMapType);
//     map.setMapTypeId("styled_map");
//   }