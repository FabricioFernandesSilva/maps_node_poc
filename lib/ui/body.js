import { Template } from "meteor/templating";
import './body.html';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';

template.body.map({
  var mapboxgl = require('mapbox-gl');
  mapboxgl.accessToken = 'pk.eyJ1IjoiZ2FsZiIsImEiOiJjaXVvaHgwY3AwMWViMzByemNocm03cjZhIn0.Fme5YNDuF7wlTXMykIFNTw';
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9'
  });
});
