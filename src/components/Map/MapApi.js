import { useState, useCallback, memo } from 'react';
import "./MapApi.css"
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px',
    margin: "0"
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };
  
  function MapsApi() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCpBZ2ejbvtEYhHsl5KASTDyZITD7_b-iE'
    });
    // const { isLoaded } = useJsApiLoader({
    //   id: 'google-map-script',
    //   googleMapsApiKey: "AIzaSyCpBZ2ejbvtEYhHsl5KASTDyZITD7_b-iE",
    // })
  
    const [map, setMap] = useState(null)
  
    const onLoad = useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map)
    }, [])
  
    const onUnmount = useCallback(function callback(map) {
      setMap(null)
    }, [])
  
    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={8}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
            <Marker position={center} />
          <></>
        </GoogleMap>
    ) : <></>
  }
  
  export default memo(MapsApi)

