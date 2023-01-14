function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.441517, lng: -79.994784},
    zoom: 13
  });

setMarker(map);

 
function setMarker(map) {
 
  	 var image = {
     	  url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    	  // This marker is 20 pixels wide by 32 pixels high.
   	  size: new google.maps.Size(20, 32),
   	  // The origin for this image is (0, 0).
   	  origin: new google.maps.Point(0, 0),
    	  // The anchor for this image is the base of the flagpole at (0, 32).
   	  anchor: new google.maps.Point(0, 32)
   };

   var shape = {
     coords: [1, 1, 1, 20, 18, 20, 18, 1],
     type: 'poly'
   };
 
 var marker = new google.maps.Marker({
       position: {lat: 40.486212, lng: -79.116607},
       map: map,
       icon: image,
       shape: shape
     });
}


  var input = document.getElementById('pac-input');

  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo('bounds', map);

  // Specify just the place data fields that you need.
  autocomplete.setFields(
      ['place_id', 'geometry', 'name', 'formatted_address']);

  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  var infowindow = new google.maps.InfoWindow();
  var infowindowContent = document.getElementById('infowindow-content');
  infowindow.setContent(infowindowContent);

  var marker = new google.maps.Marker({map: map});

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  autocomplete.addListener('place_changed', function() {
    infowindow.close();

    var place = autocomplete.getPlace();

    if (!place.geometry) {
      return;
    }

    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }

    // Set the position of the marker using the place ID and location.
    marker.setPlace({
      placeId: place.place_id,
      location: place.geometry.location
    });

    marker.setVisible(true);

    infowindowContent.children['place-name'].textContent = place.name;
    infowindowContent.children['place-id'].textContent = place.place_id;
    infowindowContent.children['place-address'].textContent =
        place.formatted_address;
    infowindow.open(map, marker);
  });
}