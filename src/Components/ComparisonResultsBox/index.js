import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import { Card } from 'antd';
import Text from "antd/es/typography/Text";
import MapBox from '../MapBox';
import { ShowMinPrice, ShowMaxPrice, ShowMRTStationTime } from '../../Controllers/Compare';

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

      return (
        <>
          <Card.Grid
            title="Comparison Results"
            style={{
              display:'flex',
              justifyContent:'center',
              width: '100%',
              textAlign: 'center',
              fontSize: '20px'
            }}
          >
            {compareFlats.map((flat) => (
                <Card
                  key={flat.id}
                  title={flat.name}
                >
                  <p>
                    Location: {flat.location}
                  </p>
                  <ShowMinPrice
                    flat={flat}
                    compareFlats={compareFlats}
                  />
                  <br />
                  <ShowMaxPrice
                    flat={flat}
                    compareFlats={compareFlats}
                  />
                  <p>
                    Room Type:
                    {flat.roomtype.map((room) => (
                      <p>{room}</p>
                    ))}
                  </p>
                  <ShowMRTStationTime
                    flat={flat}
                    compareFlats={compareFlats}
                  />
                  <p>
                    {MapBox(flat.lat, flat.lng, flat.Street)}
                  </p>
                </Card>
            ))}
            <Card
              style={{
                display:'flex',
                justifyContent:'center',
                width: '15%',
                height: '15%',
                textAlign: 'center',
                fontSize: '20px'}}
            >
              Legend:
              <br />
              <Text
                type="success"
              >
                The better statistic
              </Text>
              <br />
              <Text
                type="danger"
              >
                The worse statistic
              </Text>
              <br />
              <Text
                type="warning"
              >
                The same statistic
              </Text>
            </Card>
          </Card.Grid>
        </>
      );
}

export default ComparisonResultBox;