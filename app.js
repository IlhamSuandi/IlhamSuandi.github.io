const burger = document.querySelector(".burger-wrapper");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-links li");

burger.addEventListener("click", () => {
  navlinks.classList.toggle("open");
});

// maps
var locations = [
  [
    "<h1>Ebiko Sushi Dan Takoyaki <br> Lebak Bulus (Cabang Pertama)</h1> <p>Ebiko Sushi dan Takoyaki, Jl. Damar No.9, RW.6, Pd. Labu, Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12450</p> <a href='https://g.page/ebiko-sushi-dan-takoyaki?share'>Lihat di Maps</a>",
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

var map = L.map("map", { attributionControl: false }).setView([-6.299548, 106.751261], 11);
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
