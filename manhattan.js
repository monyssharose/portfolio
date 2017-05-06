var myMap = new ol.Map({
	target: 'map',
	layers: [
  		new ol.layer.Tile({
            source: new ol.source.Stamen({layer: 'watercolor'})
        })
	],
	view: new ol.View({
		center: ol.proj.fromLonLat([-73.977,40.766]),
		zoom: 12
		})
	});
