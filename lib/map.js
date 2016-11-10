if (Meteor.isClient){
  Map = function(options){
    this.map = L.mapbox.map('map', 'mapbox.streets');
  };

  Map.prototype.getUserPosition = function () {   // retorna posição do usuário
    var url = "https://freegeoip.net/json/?";
    var result = L.latLng(0.0, 0.0);

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.onload = function(){
      var status = xhr.status;
        if (status == 200) {
          var location_response = JSON.parse(xhr.responseText);
          result.lat = location_response.latitude;
          result.lng = location_response.longitude;
        } else {
        console.log("failed to get position because XMLHttpRequest got this response:" + xhr.status);
        }
      }
      xhr.send();
      return result;
  };

  Map.prototype.centerMapOnUser = function () { // centraliza o mapa no usuário
    var latlng = this.getUserPosition();
    this.map.setView(latlng, 15);
  };
}
