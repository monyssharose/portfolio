var map = new ol.Map({
	layers: [
  		new ol.layer.Tile({
            source: new ol.source.OSM()
        })
	],
	view: new ol.View({
		center: [40.766328,-73.977639],
		zoom: 14
		})
	});
