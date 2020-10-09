"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.geocoder = exports.router = exports.platform = void 0;

var _helpers = require("./helpers.js");

var _config = require("./config.js");

//Height calculations
var height = (0, _helpers.$)('#content-group-1').clientHeight || (0, _helpers.$)('#content-group-1').offsetHeight;
(0, _helpers.$)('.content').style.height = height + 'px'; // Initialize HERE Map

var platform = new H.service.Platform({
  apikey: _config.hereCredentials.apikey
});
exports.platform = platform;
var defaultLayers = platform.createDefaultLayers();
var map = new H.Map(document.getElementById('map'), defaultLayers.vector.normal.map, {
  center: center,
  zoom: 12,
  pixelRatio: window.devicePixelRatio || 1
});
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
var provider = map.getBaseLayer().getProvider(); //Initialize router and geocoder

var router = platform.getRoutingService();
exports.router = router;
var geocoder = platform.getGeocodingService();
exports.geocoder = geocoder;
window.addEventListener('resize', function () {
  return map.getViewPort().resize();
});