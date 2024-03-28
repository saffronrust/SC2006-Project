import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import { Card } from 'antd';
import CompareCard from '../CompareCard';

function ComparisonResultBox() {

    const [compareFlats, setCompareFlats] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const querySnapshot = await getDocs(collection(db, "compareresults"));
          const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          setCompareFlats(data);
        };
    
        fetchData();
    }, []);

    const [lowerminprice, setLowerMinPrice] = useState(0);
    const [higherminprice, setHigherMinPrice] = useState(0);
    const [lowermaxprice, setLowerMaxPrice] = useState(0);
    const [highermaxprice, setHigherMaxPrice] = useState(0);
    const [lowermrtstationtime, setLowerMRTStationTime] = useState(0);
    const [highermrtstationtime, setHigherMRTStationTime] = useState(0);

    /////////////////////////////////////////////////////////////////////////////////////////////////////
    // okay i was thinking of using one giant card to display both results, will get back to this later//
    /////////////////////////////////////////////////////////////////////////////////////////////////////
    
  return (
    <Card.Grid
    title="Comparison Results"
    style={{
        display:'flex',
        justifyContent:'center',
        width: '100%',
        textAlign: 'center',
        fontSize: '20px'}}
    onClick={() => console.log('clicked')}
    >
        {compareFlats.map((flat) => (
            <CompareCard key={flat.id} flat={flat} />
        ))}
    </Card.Grid>
  );
}

export default ComparisonResultBox;