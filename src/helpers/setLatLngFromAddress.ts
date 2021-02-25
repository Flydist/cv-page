import Geocode from 'react-geocode'

Geocode.setApiKey(`${process.env.REACT_APP_GOOGLE_API_KEY}`)

type setterType = React.Dispatch<
  React.SetStateAction<{
    lat: number
    lng: number
  }>
>

export const setLatLngFromAddress = (location: string, setter: setterType): void => {
  if (location) {
    Geocode.fromAddress(`${location}`).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location
        setter({
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
}
