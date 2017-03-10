function initMap(){
 var center = new google.maps.LatLng(36.060574,-107.961692);
	
 var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 36.060574, lng: -107.961692},
  zoom: 18,
  mapTypeId: 'satellite'
 });

 var marker = new google.maps.Marker({
  position: center,
  title: "Pueblo Bonito"
  });
 
 marker.setMap(map);
 
 var contentString = '<div id="infobox">'+
  '<p><b>Pueblo Bonito</b></p>'+
  '<p>Peñasco Blanco Trail</p>'+
  '<p>Nageezi, NM 87037</p>'+
  '<p>Latitude: 36.060574, Longitude: -107.961692</p>'+
  '</div>';
 
 var infoWindow = new google.maps.InfoWindow ({
  content: contentString
  });
 
 google.maps.event.addListener(marker, 'click', function() {
  infoWindow.open(map, marker);
  });
}
