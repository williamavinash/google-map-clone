const MAP_ACCESS_TOKEN = 'pk.eyJ1IjoiaXRzLW1lLWhhcnNoLWFuYW5kIiwiYSI6ImNrcnAxOXdnMjF6NDEydmxpYnI5MDc4ZjkifQ.idC3Og0OO6n5ehIpa9HMkQ'
/*
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: MAP_ACCESS_TOKEN
});
// Above is the initial setup
// Now make a function to access my location by built-in geolocation api inside our browser
*/
navigator.geolocation.getCurrentPosition(successLocation, failureLocation, {enableHighAccuracy: true})
// navigator.geolocation will automatically passes the location to function successLocation and failureLocation 

function setupMap(centerLocation){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        accessToken: MAP_ACCESS_TOKEN,
        center: centerLocation,
        zoom: 15
    });
    const NavigationControl = new mapboxgl.NavigationControl()
    map.addControl(NavigationControl);

    const directionControls = new MapboxDirections({
        accessToken: MAP_ACCESS_TOKEN
      })
      map.addControl(directionControls, "top-left")
}
function successLocation(location){
    setupMap([location.coords.longitude, location.coords.latitude])
}
function failureLocation(){
    setupMap([72.877656,19.075984])
}