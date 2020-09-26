
var geocoder = platform.getGeocodingService();

      geocoder.reverseGeocode(
          {
              mode: "retrieveAddresses",
              maxresults: 1,
              prox: latitude + "," + longitude
          }, data => {
              alert("The nearest address to your location is:\n" + data.Response.View[0].Result[0].Location.Address.Label);
          }, error => {
              console.error(error);
          }
      );
      // Initialize the platform object:
      var platform = new H.service.Platform({   
        'apikey': 'VCjg0wHmv7jVvlSdwLF0KFdrMNulvsgYR_g5Z6PV2qc'
      });

      // Get an instance of the geocoding service:
      var service = platform.getSearchService();

      // Call the geocode method with the geocoding parameters,
      // the callback and an error callback function (called if a
      // communication error occurs):
      service.geocode({
        q: '200 S Mathilda Ave, Sunnyvale, CA'
      }, (result) => {1
        // Add a marker for each location found
        result.items.forEach((item) => {
          map.addObject(new H.map.Marker(item.position));
        });
      }, alert);

      // Obtain the default map types from the platform object
      var maptypes = platform.createDefaultLayers();

      // Instantiate (and display) a map object:
      var map = new H.Map(
        document.getElementById('mapContainer'),
        maptypes.vector.normal.map,
        {
          zoom: 10,
          center: { lng: 13.4, lat: 52.51 } // Provide custom coordinates here
        });

        // Enable the event system on the map instance:
        var mapEvents = new H.mapevents.MapEvents(map);

        // Add event listener:
        map.addEventListener('tap', function(evt)
            {
            // Log 'tap' and 'mouse' events:
            console.log(evt.type, evt.currentPointer.type); 
            }
        );
        
        // Instantiate the default behavior, providing the mapEvents object:
        var behavior = new H.mapevents.Behavior(mapEvents);
        
        // Create a group that can hold map objects:
        group = new H.map.Group();

        // Add the group to the map object (created earlier):
        map.addObject(group);

        // Create a marker:
        marker = new H.map.Marker(map.getCenter());

        // Add the marker to the group (which causes 
        // it to be displayed on the map)
        group.addObject(marker);

        // Define a variable holding SVG mark-up that defines an icon image:
        var svgMarkup = '<svg width="24" height="24" ' +
            'xmlns="http://www.w3.org/2000/svg">' +
            '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
            'height="22" /><text x="12" y="18" font-size="12pt" ' +
            'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
            'fill="white">H</text></svg>';

        // Create an icon, an object holding the latitude and longitude, and a marker:
        var icon = new H.map.Icon(svgMarkup),
            coords = {lat: 52.53075, lng: 13.3851}, //Custom coordinates here
            marker = new H.map.Marker(coords, {icon: icon});

        // Add the marker to the map and center the map at the location of the marker:
        map.addObject(marker);
        map.setCenter(coords);

        // mapboxgl.accessToken = 'pk.eyJ1Ijoiam11a2VzIiwiYSI6ImNrMW80cHBwdzBoZXYzbXMxdGVjdDdzZ20ifQ._et6zYChBirw3wuINP3lWQ';

        //         var map = new mapboxgl.Map({
        //             container: 'map',
        //             style: 'mapbox://styles/mapbox/streets-v11',
        //             center: [114.109497, 22.396428],
        //             zoom: 13
        //         });

        //         map.on('load', function() {
        //             // Add a layer showing the places.
        //             map.addLayer({
        //                 "id": "places",
        //                 "type": "symbol",
        //                 "source": {
        //                     "type": "geojson",
        //                     "data": {
        //                         "type": "FeatureCollection",
        //                         "features": [{
        //                             "type": "Feature",
        //                             "properties": {
        //                                 "description": "<strong>Police spotted here</strong>",
        //                                 "icon": ""
        //                             },
        //                             "geometry": {
        //                                 "type": "bar",
        //                                 "coordinates": [114.109497, 22.396428]
        //                             }
        //                         }, {
        //                             "type": "Feature",
        //                             "properties": {
        //                                 "description": "<strong>Mad Men Season Five Finale Watch Party</strong> <p > Head to Lounge 201(201 Massachusetts Avenue NE) Sundafor a < a href = \"http://madmens5finale.eventbrite.com/\" target=\"_blank\" title=\"Opens in a new window\">Mad Men Season Five Finale Watch Party</a>, complete with 60s costume contest, Mad Men trivia, and retro food and drink. 8:00-11:00 p.m. $10 general admission, $20 admission and two hour open bar.</p>",
        //                                 "icon": "theatre"
        //                             },
        //                             "geometry": {
        //                                 "type": "Point",
        //                                 "coordinates": [-77.003168, 38.894651]
        //                             }
        //                         }, {
        //                             "type": "Feature",
        //                             "properties": {
        //                                 "description": "<strong>Big Backyard Beach Bash and Wine Fest</strong> < p > EatBar(2761 Washington Boulevard Arlington VA) is throwing a < a href = \"http://tallulaeatbar.ticketleap.com/2012beachblanket/\" target=\"_blank\" title=\"Opens in a new window\">Big Backyard Beach Bash and Wine Fest</a> on Saturday, serving up conch fritters, fish tacos and crab sliders, and Red Apron hot dogs. 12:00-3:00 p.m. $25.grill hot dogs.</p>",
        //                                 "icon": "bar"
        //                             },
        //                             "geometry": {
        //                                 "type": "Point",
        //                                 "coordinates": [-77.090372, 38.881189]
        //                             }
        //                         }, {
        //                             "type": "Feature",
        //                             "properties": {
        //                                 "description": "<strong>Ballston Arts & Crafts Market</strong> <p > The < a href = \"http://ballstonarts-craftsmarket.blogspot.com/\" target=\"_blank\" title=\"Opens in a new window\">Ballston Arts & Crafts Market</a> sets up shop next to the Ballston metro this Saturday for the first of five dates this summer. Nearly 35 artists and crafters will be on hand selling their wares. 10:00-4:00 p.m.</p>",
        //                                 "icon": "art-gallery"
        //                             },
        //                             "geometry": {
        //                                 "type": "Point",
        //                                 "coordinates": [-77.111561, 38.882342]
        //                             }
        //                         }, {
        //                             "type": "Feature",
        //                             "properties": {
        //                                 "description": "<strong>Seersucker Bike Ride and Social</strong> <\p > Feeling dandy ? Get fancy, grab your bike,and take part in this year 's <a href=\"http://dandiesandquaintrelles.com/2012/04/the-seersucker-social-is-set-for-june-9th-save-the-date-and-start-planning-your-look/\" target=\"_blank\" title=\"Opens in a new window\">Seersucker Social</a> bike ride from Dandies and Quaintrelles. After the ride enjoy a lawn party at Hillwood with jazz, cocktails, paper hat-making, and more. 11:00-7:00 p.m.</p>",
        //                                 "icon": "bicycle"
        //                             },
        //                             "geometry": {
        //                                 "type": "Point",
        //                                 "coordinates": [-77.052477, 38.943951]
        //                             }
        //                         }, {
        //                             "type": "Feature",
        //                             "properties": {
        //                                 "description": "<strong>Capital Pride Parade</strong> <p > The annual < a href = \"http://www.capitalpride.org/parade\" target=\"_blank\" title=\"Opens in a new window\">Capital Pride Parade</a> makes its way through Dupont this Saturday. 4:30 p.m. Free.</p>",
        //                                 "icon": "rocket"
        //                             },
        //                             "geometry": {
        //                                 "type": "Point",
        //                                 "coordinates": [-77.043444, 38.909664]
        //                             }
        //                         }, {
        //                             "type": "Feature",
        //                             "properties": {
        //                                 "description": "<strong>Muhsinah</strong> <p > Jazz - influenced hip hop artist < a href = \"http://www.muhsinah.com\" target=\"_blank\" title=\"Opens in a new window\">Muhsinah</a> plays the <a href=\"http://www.blackcatdc.com\">Black Cat</a> (1811 14th Street NW) tonight with <a href=\"http://www.exitclov.com\" target=\"_blank\" title=\"Opens in a new window\">Exit Clov</a> and <a href=\"http://godsilla.bandcamp.com\" target=\"_blank\" title=\"Opens in a new window\">Gods’illa</a>. 9:00 p.m. $12.</p>",
        //                                 "icon": "music"
        //                             },
        //                             "geometry": {
        //                                 "type": "Point",
        //                                 "coordinates": [-77.031706, 38.914581]
        //                             }
        //                         }, {
        //                             "type": "Feature",
        //                             "properties": {
        //                                 "description": "<strong>A Little Night Music</strong> < p > The Arlington Players ' production of Stephen Sondheim' s < a href = \"http://www.thearlingtonplayers.org/drupal-6.20/node/4661/show\" target=\"_blank\" title=\"Opens in a new window\"><em>A Little Night Music</em></a> comes to the Kogod Cradle at The Mead Center for American Theater (1101 6th Street SW) this weekend and next. 8:00 p.m.</p>",
        //                                 "icon": "music"
        //                             },
        //                             "geometry": {
        //                                 "type": "Point",
        //                                 "coordinates": [-77.020945, 38.878241]
        //                             }
        //                         }, {
        //                             "type": "Feature",
        //                             "properties": {
        //                                 "description": "<strong>Truckeroo</strong> <p > < a href = \"http://www.truckeroodc.com/www/\" target=\"_blank\">Truckeroo</a> brings dozens of food trucks, live music, and games to half and M Street SE (across from Navy Yard Metro Station) today from 11:00 a.m. to 11:00 p.m.</p>",
        //                                 "icon": "music"
        //                             },
        //                             "geometry": {
        //                                 "type": "Point",
        //                                 "coordinates": [-77.007481, 38.876516]
        //                             }
        //                         }]
        //                     }
        //                 },
        //                 "layout": {
        //                     "icon-image": "{icon}-15",
        //                     "icon-allow-overlap": true
        //                 }
        //             });

        //             // When a click event occurs on a feature in the places layer, open a popup at the
        //             // location of the feature, with description HTML from its properties.
        //             map.on('click', 'places', function(e) {
        //                 var coordinates = e.features[0].geometry.coordinates.slice();
        //                 var description = e.features[0].properties.description;

        //                 // Ensure that if the map is zoomed out such that multiple
        //                 // copies of the feature are visible, the popup appears
        //                 // over the copy being pointed to.
        //                 while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        //                     coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        //                 }

        //                 new mapboxgl.Popup()
        //                     .setLngLat(coordinates)
        //                     .setHTML(description)
        //                     .addTo(map);
        //             });

        //             // Change the cursor to a pointer when the mouse is over the places layer.
        //             map.on('mouseenter', 'places', function() {
        //                 map.getCanvas().style.cursor = 'pointer';
        //             });

        //             // Change it back to a pointer when it leaves.
        //             map.on('mouseleave', 'places', function() {
        //                 map.getCanvas().style.cursor = '';
        //             });
        //         });