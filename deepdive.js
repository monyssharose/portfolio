function initMap(){
 var sistine = new google.maps.LatLng(41.902887,12.454441);
 var colosseum = new google.maps.LatLng(41.890218,12.492252);
 var pantheon = new google.maps.LatLng(41.898615,12.476819);
 var fountain = new google.maps.LatLng(41.900917,12.483337);
 var steps = new google.maps.LatLng(41.905989,12.482787);
 
 var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 41.890333, lng: 12.491887},
  zoom: 13,
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

 var sistineMarker = new google.maps.Marker({
  position: sistine,
  title: "Sistine Chapel"
  });
 var colosseumMarker = new google.maps.Marker({
  position: colosseum,
  title: "Sistine Chapel"
  });
 
 sistineMarker.setMap(map);
 colosseumMarker.setMap(map);
 
 var sistineContentString = '<div id="infoboxcontent">'+
  '<h3>Sistine Chapel</h3>'+
  '<p><i>Cappella Sistina</i></p>'+
  '<p>Latitude: 41.905, Longitude: 12.455</p>'+
  '<p><a href="https://en.wikipedia.org/wiki/Sistine_Chapel">https://en.wikipedia.org/wiki/Sistine_Chapel</a></p>'+
  '</div>';
 var colosseumContentString = '<div id="infoboxcontent">'+
  '<h3>Sistine Chapel</h3>'+
  '<p><i>Cappella Sistina</i></p>'+
  '<p>Latitude: 41.905, Longitude: 12.455</p>'+
  '<p><a href="https://en.wikipedia.org/wiki/Sistine_Chapel">https://en.wikipedia.org/wiki/Sistine_Chapel</a></p>'+
  '</div>';
 
 var sistineInfoWindow = new google.maps.InfoWindow ({
  content: sistineContentString
  });
 var colosseumInfoWindow = new google.maps.InfoWindow ({
  content: colosseumContentString
  });
 
 google.maps.event.addListener(sistineMarker, 'click', function() {
  sistineInfoWindow.open(map, sistineMarker);
  });
 google.maps.event.addListener(colosseumMarker, 'click', function() {
  colosseumInfoWindow.open(map, colosseumMarker);
  });

}
