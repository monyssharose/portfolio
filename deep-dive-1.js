function initMap() {
 var sistine = {lat: 41.903, lng: 14.454};
 var colosseum = {lat: 41.890, lng: 14.492};
 var pantheon = {lat: 41.899, lng: 12.477};
 var fountain = {lat: 41.901, lng: 12.483};
 var steps = {lat: 41.906, lng: 12.483};

 var map = new google.maps.Map(document.getElementByID('map'), {
  zoom: 13,
  center: colosseum
 });

 var sistinemarker = new google.maps.Marker({
  position: sistine,
  map: map,
  title: 'Sistine Chapel'
  });
 var colosseummarker = new google.maps.Marker({
  position: colosseum,
  map: map,
  title: 'Colosseum'
  });
 var pantheonmarker = new google.maps.Marker({
  position: pantheon,
  map: map,
  title: 'Pantheon'
  });
 var fountainmarker = new google.maps.Marker({
  position: fountain,
  map: map,
  title: 'Trevi Fountain'
  });
 var stepsmarker = new google.maps.Marker({
  position: steps,
  map: map,
  title: 'Spanish Steps'})
}
