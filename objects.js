/**
 * All objects used for project
 * Michael Guida
 */

//POI Objects 
function POI(key, name, lat, long, type) {
    this.key = key;
    this.name = name;
    this.lat = lat;
    this.long = long;
    this.type = type;

    this.coordinate = new google.maps.LatLng(lat, long);
}

//MapMarker Objects
function MapMarker(POI, map){
    this.POI = POI;
    this.map = map;
    this.infoIsOpen = false;

    this.marker = new google.maps.Marker({
        position: this.POI.coordinate,
        title: this.POI.name
    });

    this.toggleInfoWindow = function(){
        this.infoIsOpen = !this.infoIsOpen
    }
}