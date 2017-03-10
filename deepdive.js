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
 sistineMarker.setMap(map);
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
 
 var sistineContentString = '<div id="infoboxcontent">'+
  '<h3>Sistine Chapel</h3>'+
  '<p><i>Cappella Sistina</i></p>'+
  '<p>Latitude: 41.905, Longitude: 12.455</p>'+
  '<p><a href="https://en.wikipedia.org/wiki/Sistine_Chapel">https://en.wikipedia.org/wiki/Sistine_Chapel</a></p>'+
  '</div>';
 var sistineInfoWindow = new google.maps.InfoWindow ({
  content: sistineContentString
  });
 google.maps.event.addListener(sistineMarker, 'click', function() {
  sistineInfoWindow.open(map, sistineMarker);
  });
 var colosseumContentString = '<div id="infoboxcontent">'+
  '<h3>Colosseum</h3>'+
  '<p><i>Colosseo</i></p>'+
  '<p>Latitude: 41.890, Longitude: 12.492</p>'+
  '<p><a href="https://en.wikipedia.org/wiki/Colosseum">https://en.wikipedia.org/wiki/Colosseum</a></p>'+
  '</div>';
 var colosseumInfoWindow = new google.maps.InfoWindow ({
  content: colosseumContentString
  });
 google.maps.event.addListener(colosseumMarker, 'click', function() {
  colosseumInfoWindow.open(map, colosseumMarker);
  });
 var pantheonContentString = '<div id="infoboxcontent">'+
  '<h3>Pantheon</h3>'+
  '<p><i>Pantheon</i></p>'+
  '<p>Latitude: 41.899, Longitude: 12.477</p>'+
  '<p><a href="https://en.wikipedia.org/wiki/Pantheon,_Rome">https://en.wikipedia.org/wiki/Pantheon,_Rome</a></p>'+
  '</div>';
 var pantheonInfoWindow = new google.maps.InfoWindow ({
  content: pantheonContentString
  });
 google.maps.event.addListener(pantheonMarker, 'click', function() {
  pantheonInfoWindow.open(map, pantheonMarker);
  });
 var fountainContentString = '<div id="infoboxcontent">'+
  '<h3>Trevi Fountain</h3>'+
  '<p><i>Fontana di Trevi</i></p>'+
  '<p>Latitude: 41.901, Longitude: 12.483</p>'+
  '<p><a href="https://en.wikipedia.org/wiki/Trevi_Fountain">https://en.wikipedia.org/wiki/Trevi_Fountain</a></p>'+
  '</div>';
 var fountainInfoWindow = new google.maps.InfoWindow ({
  content: fountainContentString
  });
 google.maps.event.addListener(fountainMarker, 'click', function() {
  fountainInfoWindow.open(map, fountainMarker);
  });
 var stepsContentString = '<div id="infoboxcontent">'+
  '<h3>Spanish Steps</h3>'+
  '<p><i>Scalinata di Trinita dei Monti</i></p>'+
  '<p>Latitude: 41.906, Longitude: 12.483</p>'+
  '<p><a href="https://en.wikipedia.org/wiki/Spanish_Steps">https://en.wikipedia.org/wiki/Spanish_Steps</a></p>'+
  '</div>';
 var stepsInfoWindow = new google.maps.InfoWindow ({
  content: stepsContentString
  });
 google.maps.event.addListener(stepsMarker, 'click', function() {
  stepsInfoWindow.open(map, stepsMarker);
  });
}
