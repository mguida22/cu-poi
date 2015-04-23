/*
 * Converts xml data into JSON
 * Michael Guida
 */

var fs = require('fs'),
    xml2js = require('xml2js');

var parser = new xml2js.Parser();
fs.readFile(__dirname + '/data.xml', function(err, data) {
    parser.parseString(data, function (err, result) {
        console.log('Done parsing');

		fs.writeFile('data.json', JSON.stringify(result, null, 4), function(err) {
		    if(err) {
		      console.log(err);
		    } else {
		      console.log("JSON saved to " + 'data.json');
		    }
		}); 
    });
});