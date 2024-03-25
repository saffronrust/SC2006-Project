"use client";

import React from 'react';
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';



const MapDisplay = (latIn,lngIn) => {
    const position = { lat: latIn, lng: lngIn };
    return (
        <APIProvider apiKey="AIzaSyAuBdnyq0AjnvP-nBllgZaZ4cbBCn-VDxo">
            <div style={{ height: "60vh", width: "60vh"}}>
                <Map defaultZoom={15} //{defaultZoom}
                  defaultCenter={position}>
                    <Marker position={position} />
                     
                </Map>
            </div>
        </APIProvider>
        
    );
};
export default MapDisplay;