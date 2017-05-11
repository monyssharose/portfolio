var myMap = new ol.Map({
	target: 'map',
	layers: [
		new ol.layer.Tile({
			source: new ol.source.Stamen({layer: 'terrain'})
		})
	],
	view: new ol.View({
		center: ol.proj.fromLonLat([-106.586374,35.077869]),
		zoom: 14
	})
});
