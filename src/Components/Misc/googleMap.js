import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

function Index(props) {
    // console.log(props);
     const { isLoaded } = useLoadScript({
          googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API
     });
     const geocode = {
       lat: 29.153, 
       lng: 75.763
     }
     return (
        <>
               {!isLoaded ? (
                    <>
                         {" "}
                         <>...loading</>
                    </>
               ) : (
                    <>
                         <GoogleMap
                              zoom={16}
                              clickableIcons={false}
                              center={props.geocode}
                              mapContainerStyle={{ width: "100%", height: "100%" }}
                         >
                               <Marker position={props.geocode} />
                         </GoogleMap>
                    </>
               )}
          </>
     );
}

export default Index;

//  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API,

/*
{!isLoaded ? (
                    <>
                         {" "}
                         <>...loading</>
                    </>
               ) : (
                    <>
                         <GoogleMap
                              zoom={16}
                              clickableIcons={false}
                              center={props.geocode}
                              mapContainerStyle={{ width: "100%", height: "100%" }}
                         >
                               <Marker position={geocode} />
                         </GoogleMap>
                    </>
               )}
*/