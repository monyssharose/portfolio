var myMap = new ol.Map({
	target: 'map',
	layers: [
		new ol.layer.Tile({
			source: new ol.source.Stamen({layer: 'terrain'})
		})
	],
	view: new ol.View({
		center: ol.proj.fromLonLat([-106.629137,35.106808]),
		zoom: 12
	})
});
