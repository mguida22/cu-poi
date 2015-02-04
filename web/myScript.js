/**
 * Created by michael on 2/3/15.
 */

var map;
var markers = [];

google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(40.007921, -105.265934),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    setPOI();
}

function setPOI() {
    //parse xml here

    var location = new google.maps.LatLng(40.007921, -105.265934);
    //loop through and add markers
    addMarker(location)
}

// Add a marker to the map and push to the array.
function addMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    markers.push(marker);
}

// Sets the map on all markers in the array.
function setAllMap(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    setAllMap(null);
}

// Shows any markers currently in the array.
function showMarkers() {
    setAllMap(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
    clearMarkers();
    markers = [];
}