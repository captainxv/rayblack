// filepath: frontend/src/pages/MainScreen.js
import React from 'react';
import MapboxGL from 'mapbox-gl';

MapboxGL.accessToken = 'pk.eyJ1IjoiY2FwdGFpbmxvZ2lzdGljcyIsImEiOiJjbTNsZGl1MDAwNTI4MmpvcG0xdzNsOTgzIn0.sEYVbUajiL9bNbFdZP2ouw';

function MainScreen() {
  React.useEffect(() => {
    const map = new MapboxGL.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [-100.315258, 20.588793], // Coordinates for Queretaro, Qro, Mexico
      zoom: 12,
    });

    // Add user location and agent markers here

    return () => map.remove();
  }, []);

  return <div id="map" style={{ width: '100%', height: '100vh' }} />;
}

export default MainScreen;