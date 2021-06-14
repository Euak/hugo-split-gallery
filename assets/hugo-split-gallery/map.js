var Promise = window.Promise || JSZip.external.Promise;
var map = null;
var colorMap = {
  'red': '#D63E2A', 'orange': '#F59630', 'green': '#72B026', 'blue': '#38AADD', 'purple': '#D252B9',
  'darkred': '#A23336', 'darkblue': '#0067A3', 'darkgreen': '#728224', 'darkpurple': '#5B396B', 'cadetblue': '#436978',
  'lightred': '#FF8E7F', 'beige': '#FFCB92', 'lightgreen': '#BBF970', 'lightblue': '#8ADAFF', 'pink': '#FF91EA',
  'white': '#FBFBFB', 'lightgray': '#A3A3A3', 'gray': '#575757', 'black': '#303030'
};
var colors = ['blue', 'green', 'orange', 'purple', 'red', 'darkblue', 'darkpurple', 'lightblue', 'lightgreen', 'beige', 'pink', 'lightred'];
var currentColor = 0;
var bounds = null;

var iconDefault = L.AwesomeMarkers.icon({
  icon: 'camera',
  markerColor: 'gray',
  prefix: 'fa'
});
var iconSelected = L.AwesomeMarkers.icon({
  icon: 'camera',
  markerColor: 'purple',
  prefix: 'fa'
});
var iconsMap = {};

function initMap() {
  if ($("#mapid").length === 0) return;

  map = L.map('mapid');
  L.tileLayer(
    'https://tile.thunderforest.com/outdoors/{z}/{x}/{y}{r}.png?apikey=bcecc6dc7a9a46cca6d1eff04dd595cf',
    {
      maxZoom: 18,
      attribution:
        'Maps © <a href="http://www.thunderforest.com">Thunderforest</a>, Data © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>',
    }
  ).addTo(map);
}

function nextColor() {
  currentColor = (currentColor + 1) % colors.length;
  return currentColor;
}

function showGPX(track, color) {
  return new Promise(function (resolve, _reject) {
    var start = null;
    var end = null;
    var featuregroup = L.featureGroup();

    if (!(color in iconsMap)) {
      iconsMap[color] = L.AwesomeMarkers.icon({
        icon: 'location-arrow',
        markerColor: color,
        prefix: 'fa'
      });
    }

    var line = new L.GPX(track, { async: true, onSuccess: function () { }, onFail: function () { } })
      .on('loaded', function (e) {
        if (bounds == null) {
          bounds = e.target.getBounds();
        }
        bounds = bounds.extend(e.target.getBounds());

        if (!start.equals(end, 100)) {
          console.log('Added end for ', track);
          var marker = L.marker(end, {
            icon: iconsMap[color]
          });
          marker.addTo(featuregroup);
        }

        resolve(featuregroup);
      }).on('failed', function (_e) {
          console.log("Failed to retrieve track");
          resolve(L.featureGroup());
      });
    featuregroup.addTo(map);

    line.on('addline', function (e) {
      e.line.setStyle({ weight: 5, color: colorMap[color], opacity: 0.75 });
      e.line.addTo(featuregroup);

      end = e.line.getLatLngs()[e.line.getLatLngs().length - 1];

      if (start) return;

      start = e.line.getLatLngs()[0];
      var marker = L.marker(start, {
        icon: iconsMap[color]
      });
      marker.addTo(featuregroup);
    });
  });
}

function addMarker(latlng, idx) {
  var marker = L.marker(latlng, {
    draggable: false, opacity: 0.5, icon: iconDefault
  }).on('click', function () {
    $('a[data-fancybox="gallery"]').eq(idx).trigger('click');
  }).addTo(map);

  $('a[data-fancybox="gallery"]').eq(idx).hover(function () {
    map.flyTo(marker.getLatLng());
    marker.setOpacity(1).setIcon(iconSelected);
  }, function () {
    marker.setOpacity(0.5).setIcon(iconDefault);
    if (bounds) map.flyToBounds(bounds);
  });
}
