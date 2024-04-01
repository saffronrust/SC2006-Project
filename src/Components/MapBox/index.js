"use client";

import React from 'react';
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';

const MapBox = (latIn,lngIn,mapID) => {

    const position = { lat: latIn, lng: lngIn };

    return (
        <APIProvider
            apiKey="AIzaSyAuBdnyq0AjnvP-nBllgZaZ4cbBCn-VDxo"
        >
            <div
                align style={{
                    display:"flex",
                    justifyContent:"center",
                    height: "60vh", 
                    width: "60vh"
                }}
            >
                <Map
                    id={mapID}
                    defaultZoom={15}
                    defaultCenter={position}
                >
                    <Marker
                        position={position}
                    />
                </Map>
            </div>
        </APIProvider>
    );
};

export default MapBox;