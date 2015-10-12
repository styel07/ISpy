'use strict';

// This example creates circles on the map, representing populations in North
// America.

// First, create an object containing LatLng and population for each city.
var objectInfo = {
  object : {
    id : 1,
    name : "smexy kitty",
    image : "imageURLOfSmexyKitty",
    description : "this is a picture of a smexy kitty",
    center : {
      lat : 41.878,
      lng : -87.629
    }
  },
  object : {
    id : 2,
    name : "sad kitty",
    description : "picture of sad kitty",
    image : "imageURLOfSadKitty",
    center : {
      lat : 40.714,
      lng : -74.005
    }
  }
};

function initMap() {
  // Create the map.
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom : 4,
    center : {
      lat : 37.090,
      lng : -95.712
    },
    mapTypeId : google.maps.MapTypeId.TERRAIN
  });

  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  for (var item in objectInfo) {
    // Add the circle for this city to the map.
    var cityCircle = new google.maps.Circle({
      strokeColor : '#FF0000',
      strokeOpacity : 0.8,
      strokeWeight : 2,
      fillColor : '#FF0000',
      fillOpacity : 0.35,
      map : map,
      center : citymap[city].center,
      radius : Math.sqrt(citymap[city].population) * 100
    });
  }
}