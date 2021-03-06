// The Geolocation API working with Location
var elMap = document.getElementById('loc');
var msg = 'Sorry, we were unable to get your location.';

if (Modernizr.geolocation) {
    // Returns truthy so it is supported
    // Run statements in this code block
    navigator.geolocation.getCurrentPosition(success, fail);
    // elMap.textContent = 'Checking location...';
    console.log('success');
} else {
    // No supported / turned off
    // Or user rejected request
    elMap.textContent = msg;
    console.log('fail');
}

function success(position) {
    msg = '<h3>Longitude:<br>';
    msg += position.coords.Longitude + '</h3>';
    msg += '<h3>Latitude:<br>';
    msg += position.coords.latitude + '</h3>';
    // elMap.innerHTML = msg;
    console.log('your the Man');
}

function fail(msg) {
    elMap.textContent = msg;
    consoloe.log('fail');
}