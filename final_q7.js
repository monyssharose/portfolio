var projection = ol.proj.get('EPSG:4269');


var raster_one = new ol.layer.Tile({
	opacity: 0.5,
	visible: true,
	source: new ol.source.TileWMS({
		params: {'LAYERS':'monyssharose_ws:35106-A5_styled'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/monyssharose_ws/wms?',
		serverType: 'geoserver',
		projection: projection
	})
});

var raster_two = new ol.layer.Tile({
	opacity: 0.5,
	visible: true,
	source: new ol.source.TileWMS({
		params: {'LAYERS':'monyssharose_ws:35106-A6_styled'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/monyssharose_ws/wms?',
		serverType: 'geoserver',
		projection: projection
	})
});

var vector_one = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		params: {'LAYERS':'monyssharose_ws:35106-A5_CONT'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/monyssharose_ws/wms?',
		serverType: 'geoserver',
		projection: projection
	})
});

var vector_two = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		params: {'LAYERS':'monyssharose_ws:35106-A6_CONT'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/monyssharose_ws/wms?',
		serverType: 'geoserver',
		projection: projection
	})
});

var vector_three = new ol.layer.Tile({
	source: new ol.source.TileWMS({
		params: {'LAYERS':'monyssharose_ws:tgr2006se_bern_lka'},
		url: 'http://mapper.internetmapping.net:8081/geoserver/monyssharose_ws/wms?',
		serverType: 'geoserver',
		projection: projection
	})
});


var myMap = new ol.Map({
	target: 'map',
	layers: [
		raster_one,raster_two,vector_one,vector_two,vector_three
	],
	view: new ol.View({
		center: ol.proj.fromLonLat([-106.586374,35.077869]),
		zoom: 13
	})
});
