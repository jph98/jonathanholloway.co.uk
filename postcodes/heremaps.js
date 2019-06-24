function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
        result = xmlhttp.responseText;
    }
    var results = result.split('\n');    
    console.log('Processing ' + results.length);
    return results;
}

function geocode(ui, map, searchText, count, postcodeType) {

    console.log('Geocoding: [' + postcodeType + ']');

    // Create the parameters for the geocoding request:
    var geocodingParams = {
        searchText: searchText        
    };

    // Define a callback function to process the geocoding response:
    var onResult = function(result) {

        if (result.Response.View[0] !== undefined) {
                 
            var locations = result.Response.View[0].Result,
                position,
                marker;

            if (locations.length > 0) {
                position = {
                    lat: locations[0].Location.DisplayPosition.Latitude,
                    lng: locations[0].Location.DisplayPosition.Longitude
                };

                // home (red), work (blue)
                const color = postcodeType === "home" ? "red" : "blue";            

                var svgMarkup = '<svg width="24" height="24" ' +
                                'xmlns="http://www.w3.org/2000/svg">' +
                                '<rect stroke="white" fill="' + color + '" x="1" y="1" width="30" height="22" />' +
                                '<text x="12" y="18" font-size="12pt" ' +
                                'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
                                'fill="white">' + count + '</text></svg>';
                            
                var icon = new H.map.Icon(svgMarkup),
                                        coords = {lat: 52.53075, lng: 13.3851},
                marker = new H.map.Marker(position, {icon: icon});

                map.addObject(marker);                        
            }
        } else {
            console.log('Could not geocode ' + searchText);
            return false;
        }
    };

    // Get an instance of the geocoding service:
    var geocoder = platform.getGeocodingService();

    // Fires async for each result
    geocoder.geocode(geocodingParams, onResult, function(e) {        
        console.log('Could not geocode: ' + e);
    });
}

var platform = new H.service.Platform({
    'app_id': 'K9K2zVF6GHrsUfbi58so',
    'app_code': 'b6JURSofH9Zey6RcVIdrXw'
});

const defaultLayers = platform.createDefaultLayers();
const map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.normal.map,
    {
    zoom: 7,
    center: { lat: 51.539540, lng: -2.385330 }
});
var mapEvents = new H.mapevents.MapEvents(map);
var behavior = new H.mapevents.Behavior(mapEvents);

const ui = H.ui.UI.createDefault(map, defaultLayers);

var homeResults = loadFile('home-postcode-count.csv');
homeResults.forEach(function(postcodeCount) {
    var postcode = postcodeCount.split(',')[0];
    var count = postcodeCount.split(',')[1];    
    geocode(ui, map, postcode, count, 'home');
});

var workResults = loadFile('work-postcode-count.csv');
workResults.forEach(function(postcodeCount) {
    var postcode = postcodeCount.split(',')[0];
    var count = postcodeCount.split(',')[1];    
    geocode(ui, map, postcode, count, 'work');        
});