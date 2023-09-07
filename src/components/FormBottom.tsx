"use client"
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { createContext, useContext, useEffect, useRef, useState } from "react";
import MyContext from './MyContext';
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'

export default function FormBottom() {
  const { setContextData }: any = useContext(MyContext);
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  console.log(googleMapsApiKey);
  const address = useRef<HTMLInputElement | null>(null);
  const [coordinates, setCoordinates] = useState<{ lat: number | null; lng: number | null }>(
    { lat: null, lng: null }
  );

  // useEffect(() => {

  // }, [addressbool]);
  const getlatlng = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (address.current && address.current.value.trim() !== '') {
      const apiKey = 'AIzaSyDj2cR40F6xZo8mTepkyEpJl8BGVNDZ2qk';
      const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address.current.value
      )}&key=${apiKey}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 'OK' && data.results.length > 0) {
            const result = data.results[0];
            const { lat, lng } = result.geometry.location;
            setCoordinates({ lat, lng });
          } else {
            console.log(data);
            setCoordinates({ lat: null, lng: null });
            console.error('Unable to retrieve coordinates for the given address.');
          }
        })
        .catch((error) => {
          console.error('Error fetching data from Google Maps API:', error);
        });
    } else {
      // Reset coordinates when the address is empty
      setCoordinates({ lat: null, lng: null });
    }
  }

  // const handleInputChange = (e:any) => {
  //   setAddress(e.target.value);
  // };
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isLoaded }: any = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDj2cR40F6xZo8mTepkyEpJl8BGVNDZ2qk",
    libraries: ['places'],
  });
  if (!isLoaded) {
    return <></>
  }
  //getting latand lang cordinates on button click
  function GetLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(successFunction);
    } else {
      alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
    }
  }
  function successFunction(position: any) {

    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    setCoordinates({ lat: lat, lng: long });
    console.log('Your latitude is :' + lat + ' and longitude is ' + long);
    setContextData('Your latitude is :' + lat + ' and longitude is ' + long);
  }
  //ends   
  return (
    <>
      <div className="container">
        <form onSubmit={getlatlng}>
          {coordinates && (
            <p>
              Latitude: {coordinates.lat}, Longitude: {coordinates.lng}
            </p>
          )}
          <div className="item1">
            <div className="form-layout lg">
              <label className="lg-lbl">Your start location</label>
              <div className="sm-row">
                <Autocomplete>
                  <input ref={address} type="text" className="i-loc"
                  />

                </Autocomplete>
                <button className="lc-btn" type="submit"
                  color="primary" onClick={GetLocation}
                >{<MyLocationIcon />}</button>
              </div>
            </div>
            <div className="form-layout sm">
              <label className="sm-lbl">No of pandals</label>
              <input className="i-nm" type="number" />
            </div>
            <div className="form-layout chk">
              <label className="ch-lbl">Start point as your end point</label>
              <input className="i-ch" type="checkbox" />
            </div>
            <div className="form-layout btnsm">
              <button className="sbm-btn" type="submit"
                color="primary"
              >Get Roadmap</button>
            </div>
          </div>
        </form>
      </div>

    </>
  )
}
