function initMap(){
 var center = new google.maps.LatLng(36.060574,-107.961692);
	
 var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 36.060574, lng: -107.961692},
  zoom: 18,
  mapTypeId: 'satellite'
 });

 var marker = new google.maps.Marker({
  position: center,
  title: "You Are Here"
  });
 
 marker.setMap(map);
 
 var contentString = '<div id="infoboxcontent">'+
  '<h3>You Are Here</h3>'+
  '<p>Latitude: 36.060574, Longitude: -107.961692</p>'+
  '</div>';
 
 var infoWindow = new google.maps.InfoWindow ({
  content: contentString
  });
 
 google.maps.event.addListener(marker, 'click', function() {
  infoWindow.open(map, marker);
  });
}
