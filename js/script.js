var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.90855147775848, lng: -87.65192224479192 },
    zoom: 25,
  });

  //html stuff here
  const KumaInfo = '<div class="googleMapsInfo"><h1>Kumas Corner</h1><p>This heavy rock influenced burger joint has some of the best burgers Ive tried while in Chicago, I heavily recommend it.</p></div>';
  const IOInfo = '<div class="googleMapsInfo"><h1>IO Theatre</h1><p>While it is currently closed (due to COVID), the IO Theatre was one of my favorite places to go for entertainment and comedy in Chicago.</p></div>';
  //icons
  const mask = {
    url: "images/mask.png",
    scaledSize: new google.maps.Size(36, 36)
  };
  const burger = {
    url: "images/burger.png",
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
  const KumasCorner = new google.maps.Marker ({
    position: {lat: 41.88949110890106, lng: -87.64975856177813},
    map,
    icon: burger,
    animation: google.maps.Animation.DROP,
    title: "Kumas Corner",
  });
  //windows
  const IOTheatreWindow = new google.maps.InfoWindow ({
    content: IOInfo,
  })
  const KumaWindow = new google.maps.InfoWindow ({
    content: KumaInfo,
  })
  //click listeners
  IOTheatre.addListener("click", () => {
    IOTheatreWindow.open(map, IOTheatre);
  })
  KumasCorner.addListener("click", () => {
    KumaWindow.open(map, KumasCorner);
  })
}
