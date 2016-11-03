if (Meteor.isClient){
  Template.home.events({
      var coordenates = function(){
      var url = "https://freegeoip.net/json/?";
      //var result = {lat : '0', lng : '0'};

      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.onload = function(){
        var status = xhr.status;
        if (status == 200) {
          var location_response = JSON.parse(xhr.responseText);
          result.lat = location_response.latitude;
          result.lng = location_response.longitude;
          console.log(result.lat);
          console.log(result.lng);
        } else {
        console.log("failed to get position because XMLHttpRequest got this response:" + xhr.status);
        }
      xhr.send();
      return result;
      }
    };
  });
}
