function getDistance(lat2, lng2) {
    const earthRadius = 6371; // Earth's radius in kilometers

    const toRadians = (degrees) => (degrees * Math.PI) / 180;

    const deltaLat = toRadians(lat2 - lat);
    const deltaLon = toRadians(lng2 - lng);

    const a =
        Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
        Math.cos(toRadians(lat)) *
        Math.cos(toRadians(lat2)) *
        Math.sin(deltaLon / 2) *
        Math.sin(deltaLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = earthRadius * c;
    // return distance in feet
    return (distance / 1.609) * 5280;
}

async function initMap() {
    const myLatlng = { lat, lng };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: myLatlng,
        disableDefaultUI: false
    });
    new google.maps.Marker({
        map: map,
        position: myLatlng,
        title: "OG Location",
    });
    let infoWindow = new google.maps.InfoWindow({
        content: "Click the map to get Subway distance!",
        position: myLatlng,
    });

    infoWindow.open(map);
    map.addListener("click", (mapsMouseEvent) => {
        // Close the current InfoWindow
        infoWindow.close();
        // Create a new InfoWindow    
        var distance = getDistance(mapsMouseEvent.latLng.lat(), mapsMouseEvent.latLng.lng());
        infoWindow = new google.maps.InfoWindow({
            position: mapsMouseEvent.latLng,
        });
        infoWindow.setContent(
            Math.round(distance) + " Subway sandwiches away"
        );
        infoWindow.open(map);
        if (subwayPath) {
            subwayPath.setMap(null);
        }
        subwayPath = new google.maps.Polyline({
            path: [
                {lat, lng},
                {lat: mapsMouseEvent.latLng.lat(), lng: mapsMouseEvent.latLng.lng()}
            ],
            geodesic: true,
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 2,
        });
        subwayPath.setMap(map);
    });
}

var lat, lng, subwayPath; 
window.initMap = async () => {
    if (navigator.geolocation) {
        try {
            const position = await new Promise((resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject);
            });
            lat = position.coords.latitude;
            lng = position.coords.longitude;
            initMap();
          } catch (error) {
            console.error("Error retrieving location:", error);
          }
    } else {
        console.error("Geolocation is not supported by this browser.");
    }
};