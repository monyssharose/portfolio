var myMap = new ol.Map({
	target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.Stamen({layer: 'terrain'})
    })
	view: new ol.View({
		center: ol.proj.fromLonLat([-106.621694,35.095104]),
		zoom: 12
		})
	});
