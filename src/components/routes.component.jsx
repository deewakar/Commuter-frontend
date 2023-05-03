import { useRef, useEffect, useState } from 'react';
import { Box, VStack, HStack, Heading } from '@chakra-ui/react';
//import Map, {NavigationControl} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import '../map.css';

function MapLibre() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(85.324);
  const [lat] = useState(27.7172);
  const [zoom] = useState(11);
  const [KEY] = useState('HLttW2hP5wnlrVRZxIhe');

  useEffect(() => {
    if (map.current) return;

    map.current = new maplibregl.Map({
      attributionControl: false,
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });
    // add attribution to the top-right corner
    var attr = new maplibregl.AttributionControl();
    map.current.addControl(attr, 'top-right');

    // add a marker to the map
    var marker = new maplibregl.Marker({
      color: '#FF0F0F',
      draggable: true,
    })
      .setLngLat([85.35, 27.75])
      .addTo(map.current);

    // get current bounds in lat,long
    console.log(map.current.getBounds());

    // add a geoJSON source for a line
    map.current.on('load', function () {
      map.current.addSource('my-route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          geometry: {
            type: 'LineString',
            coordinates: [
              [85.308291, 27.6667438],
              [85.3081672, 27.6668082],
              [85.3081125, 27.6668442],
              [85.3079997, 27.6669231],
              [85.3079165, 27.6669768],
              [85.3077579, 27.6671121],
              [85.3076738, 27.6671892],
              [85.3075958, 27.6672749],
              [85.3075208, 27.6673664],
              [85.3073819, 27.6675207],
              [85.3073523, 27.6675591],
              [85.3072259, 27.6677232],
              [85.3070733, 27.667919],
              [85.3069302, 27.6681164],
              [85.3068513, 27.6682201],
              [85.306547, 27.6686032],
              [85.3063285, 27.6688879],
            ],
          },
          properties: {},
        },
      });
      //
      // Add a line layer with above source
      var line = map.current.addLayer({
        id: 'a-route',
        type: 'line',
        source: 'my-route',
        paint: {
          // MapLibre Style Specification paint properties
          'line-color': '#0220ff',
          'line-width': 18,
        },
        layout: {
          // MapLibre Style Specification layout properties
          'line-join': 'round',
          'line-cap': 'round',
        },
      });

      // fit the map within the start and end points of the line
      map.current.fitBounds(
        [
          [85.308291, 27.6667438],
          [85.3063285, 27.6688879],
        ],
        { padding: 50, maxZoom: 20 }
      );
    });

    map.current.on('load', function () {
      // first add image to the map before using it
      map.current.loadImage('./node.png', function (error, image) {
        if (error) throw error;
        //if (!map.current.hasImage('node'))
        map.current.addImage('node', image);
      });

      map.current.addSource('pointSource', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [85.308291, 27.6667438],
              },
            },
          ],
        },
      });

      map.current.addSource('pointDest', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [85.3063285, 27.6688879],
              },
            },
          ],
        },
      });

      map.current.addLayer({
        id: 'point_src',
        type: 'symbol',
        source: 'pointSource',
        layout: {
          'icon-image': 'node',
        },
      });

      map.current.addLayer({
        id: 'point_dest',
        type: 'symbol',
        source: 'pointDest',
        layout: {
          'icon-image': 'node',
        },
      });
    });
  });

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}

const Routes = (props) => {
  return <MapLibre />;
};

export default Routes;
