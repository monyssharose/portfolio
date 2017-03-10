function initMap () {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 36.060574, lng: -107.961692},
		zoom: 18,
		draggable: false,
		scrollwheel: false,
    });
}
