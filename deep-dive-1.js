function initMap () {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 41.890333, lng: 12.491887},
		zoom: 13,
		draggable: false,
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
    "featureType": "road",
    "elementType": "labels.icon",
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
	var sistine = {lat: 41.902887, lng: 14.454441};
	var colosseum = {lat: 41.890218, lng: 14.492252};
	var pantheon = {lat: 41.898615, lng: 12.476819};
	var fountatin = {lat: 41.900917, lng: 12.483337};
	var steps = {lat: 41.905989, lng: 12.482787};	

	var sistinemarker = new google.maps.Marker({
		position: sistine,
		map: map,
		title: "Sistine Chapel"
	});
	var colosseummarker = new google.maps.Marker({
		position: colosseum,
		map: map;
		title: "Colosseum"
	});
	var pantheonmarker = new google.maps.Marker({
		position: pantheon,
		map: map;
		title: "Pantheon"
	});
	var fountatinmarker = new google.maps.Marker({
		position: fountatin,
		map: map;
		title: "Trevi Fountain"
	});
	var stepsmarker = new google.maps.Marker ({
		position: steps
		map: map;
		title: "Spanish Steps"
	});
}
