/**
 * Created by michael on 2/4/15.
 */
function MapMarker(POI, map){
    this.POI = POI;
    this.map = map;
    this.marker = new google.maps.Marker({
        position: this.POI.coordinate,
        title: this.POI.name
    });
}

