"use client";

import React from 'react';
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';



const Testfunc = () => {
    const position = { lat: 1.322259, lng: 103.937415 };
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
export default Testfunc;