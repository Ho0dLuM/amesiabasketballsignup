$(function() {
  'use strict';
});

function initMap() {
  var myLatLng = {lat: 42.026276, lng: -93.617473};

  var map = new google.maps.Map(document.getElementById('googleMap'), {
    zoom: 16,
    center: myLatLng,
    mapTypeId:'hybrid'
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'We are here!'
  });
}
