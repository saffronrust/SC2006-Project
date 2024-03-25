import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import { Card, Col, Row } from 'antd';

function SearchResults() {

    const [resultflats, setresultFlats] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
          const querySnapshot = await getDocs(collection(db, "results"));
          const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          setresultFlats(data);
        };
    
        fetchData();
      }, []);

    return (
        <Card.Grid
        title="Search Results"
        >
            {resultflats.map((flat) => (
                <Card key={flat.id} title={flat.name}>
                    <p>Location: {flat.location}</p>
                    <p>Nearest MRT Station: {flat.nearestmrtstation}</p>
                    <p>Max Price: {flat.maxprice}</p>
                    <p>Min Price: {flat.minprice}</p>
                    <p>Room Type: {flat.roomtype}</p>
                </Card>
            ))}
        </Card.Grid>
    );
}

export default SearchResults;