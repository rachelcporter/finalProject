let map1 = L.map('map1').setView([40.739,-73.983],11.82);
L.tileLayer('https://api.mapbox.com/styles/v1/rachelporter/cjpe5woleczxh2sqazvmehtuw/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmFjaGVscG9ydGVyIiwiYSI6ImNqcDE4N3lwMTNjdmQzd21vYWU3NXl6ODUifQ.0bnjYoit0oF0A5Dtj1xc-Q', {
  attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 20
}).addTo(map1);

for (let i = 0; i < places.length; i++) {
  L.marker([places [i].latitude, places[i].longitude])
  .bindPopup('<h3>'+ places[i].placeName + '</h3>' + '<p>' + places[i].descrip + '</p>')
  .addTo(map1);
}
