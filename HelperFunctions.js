/*
 * Helper functions for the map
 * Michael Guida
 */

/*
 * Provided with the coordinate of a search point
 * getClosestPOI will return the closest POI
 * in the list provided
 */
function getClosestPOI(lat, lng, poiList) {
	var closestPOI = null;
	var closestDist = Number.POSITIVE_INFINITY;
	for (var i = 0; i < poiList.length; i++) {
		var distance = Math.sqrt((poiList[i].lat - lat)^2
			+ (poiList[i].long - lng)^2);
		if (distance < closestDist) {
			closestDist = distance;
			closestPOI = poiList[i];
		}
	}
	return closestPOI;
}

/*
 * Provided with a type of POI
 * getPOIofType will return all
 * POI of that type in the list provided
 */
function getPOIofType(type, poiList){
	var ret = [];
	for (var i = 0; i < poiList.length; i++) {
		if (poiList[i].type == type){
			ret.push(poiList[i]);
		}
	}
	return ret;
}

/*
 * Provided with a coordinate and range
 * in meters getPOIinRange will return all
 * POI in the list provided within range
 */
function getPOIinRange(lat, lng, poiList, range){
	var ret = [];
	for (var i = 0; i < poiList.length; i++){
		var distance = getDistance(lat, lng, poiList[i].lat, poiList[i].long);
		if (distance <= range) {
			ret.push(poiList[i]);
		}
	}
	return ret;
}


/*
 * Helper function for getDistance
 * Returns radians from degrees
 */
var rad = function(x) {
	return x * Math.PI / 180;
};

/*
 * Compute distance between two points
 * using the Haversine formula
 * and Earth's mean radius
 */
function getDistance(p1Lat, p1Long, p2Lat, p2Long) {
	var R = 6378137; // Earth’s mean radius in meter
	var dLat = rad(p2Lat - p1Lat);
	var dLong = rad(p2Long - p1Long);
	var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(rad(p1Lat)) * Math.cos(rad(p2Lat)) *
		Math.sin(dLong / 2) * Math.sin(dLong / 2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	var d = R * c;
	return d; // returns the distance in meters
}

/*
 * Provided with a name, searchForPOI
 * will return a list of all POI
 * matching that name
 */
function searchForPOI(search, poiList){
	var ret = [];
	for (var i = 0; i < poiList.length; i++){
		if (poiList[i].name.toLowerCase().indexOf(search.toLowerCase()) > -1){
			ret.push(poiList[i]);
		} else if (poiList[i].key.toLowerCase().indexOf(search.toLowerCase()) > -1){
			ret.push(poiList[i]);
		}
	}
	return ret;
}