var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.90855147775848, lng: -87.65192224479192 },
    zoom: 18,
  });

  //html stuff here
  const IOInfo = '<div class="googleMapsInfo"><h1>IO Theatre</h1><p>While it is currently closed (due to COVID), the IO Theatre was one of my favorite places to go for entertainment and comedy in Chicago.</p></div>';
  //icons
  const mask = {
    url: "images/mask.png",
    scaledSize: new google.maps.Size(36, 36)
  };
  //markers
  const IOTheatre = new google.maps.Marker ({
    position: {lat: 41.90855147775848, lng: -87.65192224479192},
    map,
    icon: mask,
    animation: google.maps.Animation.DROP,
    title: "IO Theatre",
  });
  //windows
  const IOTheatreWindow = new google.maps.InfoWindow ({
    content: IOInfo,
  })
  //click listeners
  IOTheatre.addListener("click", () => {
    IOTheatreWindow.open(map, IOTheatre);
  })
}
