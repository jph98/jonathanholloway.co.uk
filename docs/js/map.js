var platform = new H.service.Platform({
'apikey': 'SD2uhcqX6U-GSwG-h2Y3xWHY4DXP8hoJqSTtNcnPe04'
});

var maptypes = platform.createDefaultLayers();

var map = new H.Map(
document.getElementById('mapContainer'),
maptypes.vector.normal.map,
{
    zoom: 10,
    center: { lat: 51.46645, lng: -0.18194 }
});