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

    function parseXml(xml){
        $(xml).find("poi").each(function(){
            var nPOI = new POI($(this).attr("key"),
                $(this.find("name").text()),
                $(this.find("latitude").text()),
                $(this.find("longitude").text()),
                $(this.find("category").text()));
            poiList.push(nPOI);
        });
    }
}