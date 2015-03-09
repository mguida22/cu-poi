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