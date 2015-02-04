/**
 * Created by michael on 2/3/15.
 */
function POI(key, name, lat, long, type) {
    this.key = key;
    this.name = name;
    this.lat = lat;
    this.long = long;
    this.type = type;

    this.setKey = function(key){
        this.key = key;
    }

    this.setName = function(name){
        this.name = name;
    }

    this.setLat = function(lat){
        this.lat = lat;
    }

    this.setLong = function(long){
        this.long = long;
    }

    this.setType = function(type){
        this.type = type;
    }
}
