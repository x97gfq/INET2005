function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: { lat: 44.682, lng: -63.744 }
    });

    if (hospitals) {
        hospitals.forEach(hospital => {
            const marker = new google.maps.Marker({
                position: { lat: parseFloat(hospital.the_geom.coordinates[1]), lng: parseFloat(hospital.the_geom.coordinates[0]) },
                map: map,
                title: hospital.name
            });
        });
    }
}

window.onload = initMap;