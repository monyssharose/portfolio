var myMap = new ol.Map({
	target: 'map',
	layers: [
  		new ol.layer.Tile({
            source: new ol.source.OSM()
        })
	],
	view: new ol.View({
		center: ol.proj.fromLonLat([40.766328,-73.977639]),
		zoom: 14
		})
	});
