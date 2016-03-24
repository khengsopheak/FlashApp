var myCenter=new google.maps.LatLng(51.508742,-0.120850);
var markers = [];
function initialize()
{
    var myCenter=new google.maps.LatLng(11.588454,104.9125205);
    var map = new google.maps.Map(document.getElementById('googleMap'), {
        center: myCenter,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });


    google.maps.event.addListener(map, 'click', function(e) {
        document.getElementById('search-location').value=e.latLng;
        placeMarker(e.latLng);
        deleteOverlays();
    });


    function placeMarker(e) {

        var marker = new google.maps.Marker({
            position: e,
            map: map,
        });
        var infowindow = new google.maps.InfoWindow({
            content: 'Latitude: ' + e.lat() + '<br>Longitude: ' + e.lng()
        });

        infowindow.open(map,marker);
        markers.push(marker);
    }

// Shows any overlays currently in the array.
    function showOverlays() {
        setAllMap(map);
    }

// Deletes all markers in the array by removing references to them.
    function deleteOverlays() {
        clearOverlays();
    }

// Removes the overlays from the map, but keeps them in the array.
    function clearOverlays() {
        for (var i = markers.length; i > 1; i--){
            markers[markers.length-i].setMap(null);
        }
    }

//###add point on google maps####

    // Create the search box and link it to the UI element.
    var input = document.getElementById('search-location');
    var searchBox = new google.maps.places.SearchBox(input);
    //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() { 
        searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
        console.log("test-6");
        var places = searchBox.getPlaces();

        console.log("test-2");
        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach(function(marker) {

            console.log("test-3");
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon-header, name and location.
        var bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {

            console.log("test-4");
            var icon = {
                //url: place.icon-header,
                //size: new google.maps.Size(71, 71),
                //origin: new google.maps.Point(0, 0),
                //anchor: new google.maps.Point(17, 34),
                //scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
                map: map,
                //icon-header: icon-header,
                title: place.name,
                position: place.geometry.location
            }));

            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });

}
google.maps.event.addDomListener(window, 'load', initialize);