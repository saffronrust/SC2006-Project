import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import { Card, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import MapDisplay from './MapBox';

function SearchResults() {

    const [resultflats, setresultFlats] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
          const querySnapshot = await getDocs(collection(db, "results"));
          const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          setresultFlats(data);
        };
    
        fetchData();
      }, []);

    // TODO: Make the cards spaced out more nicely
    return (
        <>
        <Card.Grid
        title="Search Results"
        style={{
            display:'flex',
            justifyContent:'center',
            width: '100%',
            textAlign: 'center',
            fontSize: '20px'}}
        onClick={() => console.log('clicked')}
        
        >
            {resultflats.map((flat) => (
                <Card key={flat.id} title={flat.name}>
                    <p>Location: {flat.location}</p>
                    <p>Max Price: {flat.maxprice}</p>
                    <p>Min Price: {flat.minprice}</p>
                    <p>Room Type:
                        {flat.roomtype.map((room) => (
                            <p>{room}</p>
                        ))}
                        </p>
                    <p>Nearest MRT Station Time: {flat.nearestmrtstation} minutes</p>
                    <p>{MapDisplay(flat.lat,flat.lng,flat.Street)}</p>
                </Card>
            ))}
        </Card.Grid>
        </>
    );
}

export default SearchResults;