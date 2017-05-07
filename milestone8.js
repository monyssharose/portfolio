var terrain = new ol.layer.Group({
	layers: [
		new ol.layer.Tile({
			source: new ol.source.Stamen({layer: 'terrain'})
		})
	]
});

var toner = new ol.layer.Group({
	layers: [
		new ol.layer.Tile({
			source: new ol.source.Stamen({layer: 'toner'})
		})
	]
});

var watercolor = new ol.layer.Group({
	layers: [
		new ol.layer.Tile({
			source: new ol.source.Stamen({layer: 'watercolor'})
		})
	]
});

var myMap = new ol.Map({
	target: 'map',
	view: new ol.View({
		center: ol.proj.fromLonLat([-73.977,40.766]),
		zoom: 12
		})
	});
	
function setMapType(newType) {
    if(newType == 'OSM') {
        myMap.setLayerGroup(Layer_OSM);
    } else if (newType == 'Watercolor') {
        myMap.setLayerGroup(watercolor);
    } else if (newType == 'Toner') {
        myMap.setLayerGroup(toner);
    } else if (newType == 'Terrain') {
        myMap.setLayerGroup(terrain);
	}
}

setMapType('Watercolor')
