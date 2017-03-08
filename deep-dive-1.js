function initMap () {
	var sistine = new.google.maps.LatLng(41.902887,14.454441);
	var colosseum = new.google.maps.LatLng(41.890218,14.492252);
	var pantheon = new google.maps.LatLng(41.898615,12.476819);
	var fountatin = new.google.maps.LatLng(41.900917,12.483337);
	var steps = new.google.maps.LatLng(41.905989,12.482787);
	
	
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
	});

	var sistineMarker = new.google.maps.Marker({
		position: sistine,
		title: "Sistine Chapel"
	});
	var colosseumMarker = new.google.maps.Marker({
		position: colosseum,
		title: "Colosseum"
	});
	var pantheonMarker = new.google.maps.Marker({
		position: pantheon,
		title: "Pantheon"
	});
	var fountatinMarker = new.google.maps.Marker({
		position: fountatin,
		title: "Trevi Fountain"
	});
	var stepsMarker = new.google.maps.Marker ({
		position: steps
		title: "Spanish Steps"
	});
	
	
	}
