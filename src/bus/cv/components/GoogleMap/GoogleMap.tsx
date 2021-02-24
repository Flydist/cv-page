import React, { FC, useEffect, useState } from 'react'
import {
  Map, GoogleApiWrapper, Marker, IProvidedProps,
} from 'google-maps-react'
import Geocode from 'react-geocode'
import { MapContainer } from './GoogleMap.styled'

const mapStyles = {
  width: '100%',
  height: '100%',
  borderRadius: '6px',
}
type MapProps = IProvidedProps & {
  location: string
}
Geocode.setApiKey(`${process.env.REACT_APP_GOOGLE_API_KEY}`)

const GoogleMap: FC<MapProps> = React.memo(({ google, location }) => {
  const [latLong, setLatLong] = useState({
    lat: 54.181641,
    lng: 45.185299,
  })

  useEffect(() => {
    if (location) {
      Geocode.fromAddress(`${location}`).then(
        (response) => {
          const { lat, lng } = response.results[0].geometry.location
          setLatLong({
            lat,
            lng,
          })
        },
        (error) => {
          // eslint-disable-next-line no-console
          console.error(error)
        },
      )
    }
  }, [location])

  return (
    <MapContainer>
      <Map
        google={google}
        style={mapStyles}
        zoom={12}
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
    </MapContainer>
  )
})

export default GoogleApiWrapper({
  apiKey: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
})(GoogleMap)
