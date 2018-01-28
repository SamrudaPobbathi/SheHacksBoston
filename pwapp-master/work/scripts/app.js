// Copyright 2016 Google Inc.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

(function() {
  'use strict';

  var app = {
    isLoading: true,
    visibleCards: {},
    selectedCities: [],
    spinner: document.querySelector('.loader'),
    cardTemplate: document.querySelector('.cardTemplate'),
    container: document.querySelector('.main'),
    addDialog: document.querySelector('.dialog-container'),
    daysOfWeek: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  };


  window.initMap = function() {
        var myLatlngArray=new Array();
        var myLatlng = {lat: -25.363, lng: 131.044}


        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        var icons = {
          parking: {
            icon: iconBase + 'parking_lot_maps.png'
          },
          library: {
            icon: iconBase + 'library_maps.png'
          },
          info: {
            icon: iconBase + 'info-i_maps.png'
          }
        };
        var map = new google.maps.Map(document.getElementById('map'), {
                  center: {lat: -34.397, lng: 150.644},
                  zoom: 6,
               });

        var features = [
          {
            position: new google.maps.LatLng(43.48481212891604,-71.1474609375),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(-43.18114705939967,72.59765625),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(42.374778361114195,-71.89453125),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(41.85319643776675,-72.509765625),
            type: 'parking'
          }, {
            position: new google.maps.LatLng(42.407234661551875,-73.1689453125),
            type: 'library'
          }, {
            position: new google.maps.LatLng(43.659924074789,-74.06982421875),
            type: 'library'
          }, {
            position: new google.maps.LatLng(44.66865287227321,-72.158203125),
            type: 'library'
          }, {
            position: new google.maps.LatLng(44.88701247981298,-70.1806640625),
            type: 'library'
          }];

        // Create markers.
        features.forEach(function(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
          });
        });
      


        $.ajax({
          url: 'http://10.192.204.78:8080/Uhack1/ServIt',
          type: 'GET',
          dataType: 'json',
          error: function(data){
          alert('error')},
          success: function(data){
              console.log(data)
               var i;
              for(i=0;i<data.length;i++){
                     myLatlngArray.push({'lat':data[i].lat, 'lng':data[i].lon})
               }
                // myLatlngArray=JSON.parse(data)
                  console.log(myLatlngArray)

              }
            
          });
       
        var i;
        for(i=0;i<myLatlngArray.length;i++){
              myLatlng.lat=myLatlngArray[i].lat
              myLatlng.lng=myLatlngArray[i].lng
              var marker = new google.maps.Marker({
              position: pos,
              map: map,
              title: 'Click to zoom'
            });

        }
        
        
       google.maps.event.addListener(map, 'click', function (e) {
                //alert("Latitude: " + e.latLng.lat() + "\r\nLongitude: " + e.latLng.lng());
                var lon,lat;
                lon=e.latLng.lng();
                lat= e.latLng.lat();
                
                $.ajax({
                   url: 'http://10.192.204.78:8080/Uhack1/ServIt',
                   dataType: 'jsonp',
                   data: {lon: lon,lat:lat},
                   type: 'post',
                   cache: false,
          });
                    placeMarkerAndPanTo(e.latLng, map)
        });
          


    function placeMarkerAndPanTo(latLng, map) {
          var marker = new google.maps.Marker({
          position: latLng,
          map: map
            });
            map.panTo(latLng);
          }
    
      var pos,infoWindow;
       infoWindow = new google.maps.InfoWindow;
       if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
             pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('your location.');
            infoWindow.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      } 
       var marker = new google.maps.Marker({
          position: pos,
          map: map,
          title: 'Click to zoom'
        });

        /* map.addListener('center_changed', function() {
          // 3 seconds after the center of the map has changed, pan back to the
          // marker.
          window.setTimeout(function() {
            map.panTo(marker.getPosition());
          }, 30);
        }); */

        marker.addListener('click', function() {
          map.setZoom(8);
          map.setCenter(marker.getPosition());
        });

    }
  
      

    
    
})();

