var map;

var yoobee = {
    lat: -41.279178,
    lng: 174.780331
}

var allMarkers = [
    {
        id: 1,
        place_name : "Pizzeria Napoli",
        lat: -41.2936547,
        lng: 174.7802337
    },
    {
        id: 2,
        place_name: "Heaven Woodfire Pizza",
        lat: -41.2959299,
        lng: 174.772154,
    },
    {
        id: 3,
        place_name: "Hell Pizza Cuba Street",
        lat: -41.297759,
        lng: 174.7710373,

    },
    {
        id: 4,
        place_name: "Tommy Millions",
        lat: -41.2924969,
        lng: 174.776630,
    },
    {
        id: 5,
        place_name: "One Red Dog",
        lat: -41.283531,
        lng: 174.7764303,
    },
    {
        id: 6,
        place_name: "Zibibbo",
        lat: -41.2917004,
        lng: 174.7773421,
    },
    {
        id: 7,
        place_name: "Pizza Pomodoro",
        lat: -41.2924937,
        lng: 174.774629,
    },
    {
        id: 8,
        place_name: "Scopa Caffe Cucina",
        lat: -41.293401,
        lng: 174.7736103,
    },
    {
        id: 9,
        place_name: "La Bella Italia",
        lat: -41.2250766,
        lng: 174.8649877,
    },
    {
        id: 10,
        place_name: "Mediterranean Foods Trattoria & Deli",
        lat: -41.313391,
        lng: 174.782340,
    }
]

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
      center: yoobee,
      zoom: 14
    });

    for (var i = 0; i < allMarkers.length; i++) {
        var marker = new google.maps.Marker({
            position: {
                lat: allMarkers[i].lat,
                lng: allMarkers[i].lng
            },
            map: map,
            title: allMarkers[i].place_name,
            markerID: allMarkers[i].id,
            icon: 'images/orange.png'
        });
        markerClickEvent(marker);

    }

}
var infowindow
function markerClickEvent(marker){
    google.maps.event.addListener(marker, 'click', function(){
        if(infowindow){
            infowindow.close();
        }
        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">'+marker.title+'</h1>'+
            '<div id="bodyContent">'+
                '<button id="seeMoreBUtton" onClick="pop('+marker.markerID+');">See More</button>'+
            '</div>'+
            '</div>';

        infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        infowindow.open(map, marker);
    });
}

function pop(id){
    for (var i = 0; i < allMarkers.length; i++) {
        if(allMarkers[i].id === id){
            document.getElementById("overlayHeading").innerText = allMarkers[i].place_name
            document.getElementById("acknowledgeOverlay").style.display = 'block';
            break;
        }
    }

}
