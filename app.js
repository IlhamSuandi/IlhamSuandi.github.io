// hamburger menu
const burger = document.querySelector(".burger-wrapper");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-links li");
const body = document.body;

burger.addEventListener("click", () => {
  navlinks.classList.toggle("open");
  body.classList.toggle("fixed-position");
});

navlinks.addEventListener("click", () => {
  navlinks.classList.remove("open");
  body.classList.remove("fixed-position");
});

let lastscroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
  }

  if (currentScroll > lastscroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  }

  if (currentScroll < lastscroll && body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }

  lastscroll = currentScroll;
});
//animation
AOS.init({
  offset: 400,
  duration: 1000,
  once: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
});

// maps
var locations = [
  [
    "<h1>Ebiko Sushi Dan Takoyaki <br> Lebak Bulus (Cabang Pertama)</h1> <p>Ebiko Sushi dan Takoyaki, Jl. Damar No.9, RW.6, Pd. Labu, Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12450</p> <a href='https://www.google.com/maps/place/Ebiko+Sushi+dan+Takoyaki/@-6.312132,106.7862441,17z/data=!3m1!4b1!4m5!3m4!1s0x2e69ef26d2bee477:0x8c7d86cc7c4fadd!8m2!3d-6.312132!4d106.7862441'>Lihat di Maps</a>",
    -6.31211697687172,
    106.78624361808949,
  ],
  [
    "<h1>Ebiko Sushi Dan Takoyaki <br> Pondok Aren</h1><p>Ebiko Sushi dan Takoyaki Pondok Aren, Jl. Ceger Raya Gang Ambin No.71, RT.1/RW.11, Jurang Mangu Barat, Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15223</p> <a href='https://goo.gl/maps/59wRaMc5pNvQzZi1A'>Lihat di Maps</a>",
    -6.262666148652281,
    106.72834485281574,
  ],
  [
    "<h1>Ebiko Sushi Dan Takoyaki <br> Pamulang</h1><p>Ebiko Sushi dan Takoyaki Pamulang, Jl. Cemara II No.86, Pamulang Bar., Kec. Pamulang, Kota Tangerang Selatan, Banten 15417</p> <a href='https://goo.gl/maps/D6xJ4PF2KUpFn3fm8'>Lihat di Maps</a>",
    -6.337620933208679,
    106.73968062650742,
  ],
];

var pc = true;

if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  pc = false;
}

var map = L.map("map", {
<<<<<<< HEAD
  gestureHandling: true,
=======
>>>>>>> 29fd3b7bd421ed75add1c57f6001e26bb89e886f
  attributionControl: false,
  dragging: pc,
  tap: pc,
}).setView([-6.299548, 106.751261], 11);

var googleStreets = L.tileLayer(
  "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
  {
    maxZoom: 20,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
  }
);

var markerIcon = L.icon({
  iconUrl: "../source/icon/marker.png",

  iconSize: [50, 80], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor: [6, -76], // point from which the popup should open relative to the iconAnchor
});

googleStreets.addTo(map);

for (var i = 0; i < locations.length; i++) {
  marker = L.marker([locations[i][1], locations[i][2]], { icon: markerIcon })
    .bindPopup(locations[i][0])
    .addTo(map);
}

const mapEl = document.querySelector("#map");

// Binds event listeners for the map and calls the function
mapEl.addEventListener("touchstart", onTwoFingerDrag);
mapEl.addEventListener("touchend", onTwoFingerDrag);

function onTwoFingerDrag(e) {
  if (e.type === "touchstart" && e.touches.length === 1) {
    e.currentTarget.classList.add("swiping");
  } else {
    e.currentTarget.classList.remove("swiping");
  }
}
