var projection = ol.proj.get('EPSG:3857');



var museum_point_color = [204,153,204,1]
var subway_line_color = [172,108,172,1]

var museum_point_style = new ol.style.Style({
        image: new ol.style.Circle({
          radius: 5,
          stroke: new ol.style.Stroke({
            color: 'black',
            width: 1
          }),
          fill: new ol.style.Fill({
            color: museum_point_color,
          })
        })
});

var subway_style = new ol.style.Style({
	fill: new ol.style.Fill({
	  color: subway_line_color,
	}),
	stroke: new ol.style.Stroke({
	  color: subway_line_color,
	  width: 1.5
	}),
});



var METCoord = [-73.963228,40.779664]
var AMNHCoord = [-73.973913,40.781535]
var MoMACoord = [-73.977611,40.761628]
var GuggenheimCoord = [-73.959024,40.783240]
var NineElevenCoord = [-74.012758,40.711516]

var METPoint = new ol.geom.Point(ol.proj.fromLonLat(METCoord, projection));
var AMNHPoint = new ol.geom.Point(ol.proj.fromLonLat(AMNHCoord, projection));
var MoMAPoint = new ol.geom.Point(ol.proj.fromLonLat(MoMACoord, projection));
var GuggenheimPoint = new ol.geom.Point(ol.proj.fromLonLat(GuggenheimCoord, projection));
var NineElevenPoint = new ol.geom.Point(ol.proj.fromLonLat(NineElevenCoord, projection));

var METFeature = new ol.Feature({
	geometry: METPoint
})
var AMNHFeature = new ol.Feature({
	geometry: AMNHPoint
})
var MoMAFeature = new ol.Feature({
	geometry: MoMAPoint
})
var GuggenheimFeature = new ol.Feature({
	geometry: GuggenheimPoint
})
var NineElevenFeature = new ol.Feature({
	geometry: NineElevenPoint
})



var subway_kml = new ol.layer.Vector({
	source: new ol.source.Vector({
		url: 'https://monyssharose.github.io/portfolio/NewYorkSubwayKML.kml',
		projection: projection,
		format: new ol.format.KML({
			extractStyles: false,
			extractAttributes: false,
		})
	}),
	style: subway_style
});

var museum_points= new ol.layer.Vector({
	source: new ol.source.Vector({
		projection: projection,
		features: [METFeature,AMNHFeature,MoMAFeature,GuggenheimFeature,NineElevenFeature]
	}),
	style: museum_point_style
});

var toner_map = new ol.Group({
	layers: [
  		new ol.layer.Tile({
			source: new ol.source.Stamen({layer: 'toner'})
    	})
	],
});

var myMap = new ol.Map({
	target: 'map',
	layers: [subway_kml,museum_points,toner_map],
	view: new ol.View({
		center: ol.proj.fromLonLat([-73.977,40.766]),
		zoom: 12
		projection: projection
	})
});
