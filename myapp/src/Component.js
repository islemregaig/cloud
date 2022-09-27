import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px' ,
};

const center = {
  lat: 36.8066389,
  lng: 10.181667
};

function Component() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDEFXevpRi6ttfJyEsVGXDo3ojDtMNDTvU"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Component)