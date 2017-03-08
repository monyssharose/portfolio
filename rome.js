function initialize () {
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
  	  "featureType": "landscape.man_made",
  	  "stylers": [
   		  {
     	  "color": "#d4d4d4"
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
    "featureType": "water",
    "stylers": [
      {
        "color": "#2fb6ff"
      }
    ]
  }
]
