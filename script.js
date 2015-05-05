/**
 * Main code to display map and markers
 * Michael Guida
 */

var map;
var markers = [];
var poiList = [];

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

/*
function displayMarkers(map) {
    //display all POI here
    for(i in poiList) {
        var nMapMarker = new MapMarker(poiList[i], map);
        nMapMarker.marker.setMap(map);
        markers.push(nMapMarker);
    }
}
*/

function displaySingleMarker(poi) {
    var nMapMarker = new MapMarker(poi, map);
    nMapMarker.marker.setMap(map);
    markers.push(nMapMarker);

    var infowindow = new google.maps.InfoWindow();
    google.maps.event.addListener(nMapMarker.marker, 'click', function() {
        infowindow.setContent(nMapMarker.POI.name);

        if (nMapMarker.infoIsOpen){
            infowindow.close();
        } else {
            infowindow.open(map,nMapMarker.marker);
        }
        nMapMarker.toggleInfoWindow();
    });
}

function addPOItoList(poi) {
    poiList.push(poi);
}

function setPOI() {
    //parse xml here
    $(document).ready(function(){
        $.ajax({
            type: "GET",
            url: "data.xml",
            dataType: "xml",
            success: function(xml) { parseXml(xml); }
        });
    });

    var key, name, lat, lng, type = null;
    function parseXml(xml) {
        $(xml).find("poi").each(function () {
            key, name, lat, lng, type = null;

            key = $(this).attr("key");
            name = $(this).find("name").text();
            lat = $(this).find("latitude").text();
            lng = $(this).find("longitude").text();
            type = $(this).find("category").text();

            //console.log(key + " " + name + " " + lat + " " + long + " " + type);

            var nPOI = new POI(key, name, lat, lng, type);

            displaySingleMarker(nPOI);
            addPOItoList(nPOI);
        });
    }
}