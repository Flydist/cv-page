import React, { FC, useEffect, useState } from 'react'
import {
  Map, GoogleApiWrapper, Marker, IProvidedProps,
} from 'google-maps-react'
import { useSelector } from 'react-redux'
import { setLatLngFromAddress } from '../../../../helpers/setLatLngFromAddress'
import { AppState } from '../../../../init/rootReducer'

const mapStyles = {
  width: '100%',
  height: '100%',
  borderRadius: '6px',
}
const containerStyles = {
  position: 'relative',
  width: '100%',
  height: '200px',
}

const GoogleMap: FC<IProvidedProps> = React.memo(({ google }) => {
  const location = useSelector<AppState, string>((state) => state.CvReducer.location)
  const [latLong, setLatLng] = useState({
    lat: 54.181641,
    lng: 45.185299,
  })

  useEffect(() => {
    setLatLngFromAddress(location, setLatLng)
  }, [location])

  return (
    <Map
      google={google}
      style={mapStyles}
      containerStyle={containerStyles}
      zoom={12}
      streetViewControl={false}
      initialCenter={{
        lat: 55.755826,
        lng: 37.6172999,
      }}
      center={{
        lat: latLong.lat,
        lng: latLong.lng,
      }}
    >
      <Marker position={{ lat: latLong.lat, lng: latLong.lng }} />
    </Map>
  )
})

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
})(GoogleMap)
