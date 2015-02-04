/**
 * Created by michael on 2/3/15.
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

    var key, name, lat, long, type = null;
    function parseXml(xml) {
        $(xml).find("poi").each(function () {
            key, name, lat, long, type = null;

            key = $(this).attr("key");
            name = $(this).find("name").text();
            lat = $(this).find("latitude").text();
            long = $(this).find("longitude").text();
            type = $(this).find("category").text();

            //console.log(key + " " + name + " " + lat + " " + long + " " + type);

            var nPOI = new POI(key, name, lat, long, type);

            poiList.push(nPOI);
            //console.log("added POI");
        });
    }
}