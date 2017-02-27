function initMap() {

    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: {lat: 37.7, lng: -122.4},
        scrollwheel: false,
    });

    // Create an array of alphabetical characters used to label the markers.
    const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    const markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    // Add a marker clusterer to manage the markers.
    let markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}
const locations = [
    {lat: 37.787013, lng: -122.433451},
    {lat: 37.803072, lng: -122.411421},
    {lat: 43.643510, lng: -79.391063},
];