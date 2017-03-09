function initMap(){
 var sistine = new google.maps.LatLng(41.902887,14.454441);
 var colosseum = new google.maps.LatLng(41.890218,14.492252);
 var pantheon = new google.maps.LatLng(41.898615,12.476819);
 var fountain = new google.maps.LatLng(41.900917,12.483337);
 var steps = new google.maps.LatLng(41.905989,12.482787);
 
 var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 41.890333, lng: 12.491887},
  zoom: 13,
  sraggable: false,
  scrollwheel: false,
  styles: [
  {
    "featureType": "administrative.country",
    "stylers": [
      {
        "color": "#d9ccb9"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "stylers": [
      {
        "color": "#d4d4d4"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.attraction",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.government",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.medical",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "stylers": [
      {
        "color": "#95cca3"
      }
    ]
  },
  {
    "featureType": "poi.place_of_worship",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.school",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "stylers": [
      {
        "color": "#2fb6ff"
      }
    ]
  }
]
});

 var sistinemarker = new google.maps.Marker({
  position: sistine,
  title: "Sistine Chapel"
  });
 sistinemarker.setMap(map);
 
 var colosseummarker = new google.maps.Marker({
  position: colosseum,
  title: "Colosseum"
  });
 colosseummarker.setMap(map);
 
 var pantheonmarker = new google.maps.Marker({
  position: pantheon,
  title: "Pantheon"
  });
 pantheonmarker.setMap(map);
 
 var fountainmarker = new google.maps.Marker({
  position: fountain,
  title: "Trevi Fountain"
  });
 fountainmarker.setMap(map);
 
 var stepsmarker = new google.maps.Marker({
  position: steps,
  title: "Spanish Steps"
  });
 stepsmarker.setMap(map);
 
}
