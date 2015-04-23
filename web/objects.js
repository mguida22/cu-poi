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

    this.setKey = function(key){
        this.key = key;
    }

    this.setName = function(name){
        this.name = name;
    }

    this.setLat = function(lat){
        this.lat = lat;
        this.coordinate = new google.maps.LatLng(lat, long);
    }

    this.setLong = function(long){
        this.long = long;
        this.coordinate = new google.maps.LatLng(lat, long);
    }

    this.setType = function(type){
        this.type = type;
    }
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