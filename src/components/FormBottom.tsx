"use client"
import SendIcon from "@mui/icons-material/Mylocation";
import { createContext, useContext } from "react";
const MyContext = createContext('');
var sharedData ="";
function GetLocation()
{
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction);
} else {
    alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
}
}
function successFunction(position:any) {
  var lat = position.coords.latitude;
  var long = position.coords.longitude;
  console.log('Your latitude is :'+lat+' and longitude is '+long);
}
export default function FormBottom({ children }:any)
{
  
    return(
    <>
    <div className="container">
    <div className="item1">
      <div className="form-layout lg">
        <label className="lg-lbl">Your start location</label>
        <input type="text" className="i-loc"/>
        <button type="submit" 
          color="primary" onClick={GetLocation}
          >{<SendIcon />}</button>
      </div>
      <div className="form-layout sm">
        <label className="sm-lbl">No of pandals</label>
        <input className="i-nm" type="number"/>
      </div>
       <div className="form-layout chk">
         <label className="ch-lbl">Start point as your end point</label>
        <input className="i-ch" type="checkbox"/>
      </div>
    </div>
    
  </div>
  <MyContext.Provider value={sharedData}>
  { children }
    </MyContext.Provider>
  </>
  )
}
export function useMyContext() {
  return useContext(MyContext);
}