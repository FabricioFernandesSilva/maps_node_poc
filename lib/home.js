if(Meteor.isClient){
  Template.home.onRendered(function(){
    L.mapbox.accessToken = 'pk.eyJ1IjoiZ2FsZiIsImEiOiJjaXVpcTJkYzMwMG5zMnpwZ3AzNjd4OHAyIn0.KrlaOdOd89IASilFH93huA';
    var map = new Map();
    console.log("centering map on user");
    map.centerMapOnUser();
  });
}
