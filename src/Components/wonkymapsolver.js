"use client";

import React from 'react';
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';



const Func = () => {
    const position = { lat: 1.322259, lng: 103.937415 };
    return (
        <div>
            <div>
            <APIProvider apiKey="AIzaSyAuBdnyq0AjnvP-nBllgZaZ4cbBCn-VDxo">
                <div style={{ height: "0vh", width: "0vh"}}>
                    <Map id={'1'} defaultZoom={15} //{defaultZoom}
                    defaultCenter={position}>
                        <Marker position={position} />
                        
                    </Map>
                </div>
            </APIProvider>
            </div>
            <div>
            <APIProvider apiKey="AIzaSyAuBdnyq0AjnvP-nBllgZaZ4cbBCn-VDxo">
                <div style={{ height: "0vh", width: "0vh"}}>
                    <Map id={'2'} defaultZoom={15} //{defaultZoom}
                    defaultCenter={position}>
                        <Marker position={position} />
                        
                    </Map>
                </div>
            </APIProvider>
            </div>
        </div>
        
        
    );
};
export default Func;