function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: { lat: 44.682, lng: -63.744 }
    });

    placeToBelong = placeToBelong.slice(0,10);
    console.log(placeToBelong);

    if (placeToBelong) {
        placeToBelong.forEach(place => {
            const marker = new google.maps.Marker({
                position: { lat: parseFloat(place.location.latitude), lng: parseFloat(place.location.longitude) },
                map: map,
                title: place.name
            });
        });
    }
}

window.onload = initMap;