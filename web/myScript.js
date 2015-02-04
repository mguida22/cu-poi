/**
 * Created by michael on 2/3/15.
 */

function initialize() {
    var mapCanvas = document.getElementById('map-canvas');
    var mapOptions = {
        center: new google.maps.LatLng(40.007921, -105.265934),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title:"Hello World!"
    });
}

google.maps.event.addDomListener(window, 'load', initialize);