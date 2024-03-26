import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import { Card } from 'antd';
import ResultCard from '../ResultCard';

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
        style={{
            display:'flex',
            justifyContent:'center',
            width: '100%',
            textAlign: 'center',
            fontSize: '20px'}}
        onClick={() => console.log('clicked')}
        >
            {resultflats.map((flat) => (
                <ResultCard key={flat.id} flat={flat} />
            ))}
        </Card.Grid>
    );
}

export default SearchResults;