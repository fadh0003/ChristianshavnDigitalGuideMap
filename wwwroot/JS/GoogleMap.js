function initMap() {
    
    var options = {
        center: {lat: 55.6761, lng:12.5683},
        zoom: 10,
        minZoom:8,
        maxZoom: 18,
        fullscreenControl: false
    }

    var Places = {
        Locations: {
            CafeHalvandet:{lat: 55.695443, lng: 12.609745},
            LaBanchina:{lat: 55.689343, lng: 12.610985},
            Margretheholmhavn:{lat: 55.689658, lng: 12.619308},
            Sofiebadet:{lat: 55.670969, lng: 12.590944}
        },
        LocationsInfo:{
            CafeHalvandetInfo:"<h2>Café Halvandet</h2> <h3>Address: 325 Refshalevej København K, 1432 København</h3> <div><a href='https://www.google.dk/maps/dir//Cafe+Halvandet'>Click to get Directions to Café Halvandet</a></div>",
            LaBanchinaInfo: "<h2>La Banchina</h2> <h3>Address: Refshalevej 141A, 1432 København</h3> <div><a href='https://www.google.dk/maps/dir//La+Banchina'>Click to get Directions to La Banchina</a></div>",
            MargretheholmhavnInfo: "<h2>Lynetten, Margretheholms havn</h2> <h3>Address: Refshalevej 200, 1432 København</h3> <div><a href='https://www.google.dk/maps/dir//lynetten'>Click to get Directions to Lynetten, Margretheholms havn</a></div>",
            SofiebadetInfo: "<h2>Sofiebadet</h2> <h3>Address: Sofiegade 15, 1418 København</h3> <div><a href='https://www.google.dk/maps/dir//Sofiebadet'>Click to get Directions to Sofiebadet</a></div>"
        }
    }

    var map = new google.maps.Map(document.getElementById('map'), options);
    
    var markerCluster = new MarkerClusterer(map, [],
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

    function addMarkerToMap(props){
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            icon: '/Image/augmented-reality.png'
        });

        if(props.content){
            var info = new google.maps.InfoWindow({
                content: props.content
            });
        
            marker.addListener('click', function(){
                info.open(map, marker);
            });
        }

        markerCluster.addMarker(marker);
    }

    addMarkerToMap({coords:Places.Locations.CafeHalvandet, content: Places.LocationsInfo.CafeHalvandetInfo});
    addMarkerToMap({coords:Places.Locations.LaBanchina, content: Places.LocationsInfo.LaBanchinaInfo});
    addMarkerToMap({coords:Places.Locations.Margretheholmhavn, content: Places.LocationsInfo.MargretheholmhavnInfo});
    addMarkerToMap({coords:Places.Locations.Sofiebadet, content: Places.LocationsInfo.SofiebadetInfo});
}
