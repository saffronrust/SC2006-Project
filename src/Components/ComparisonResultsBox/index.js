import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import { Card } from 'antd';
import Text from "antd/es/typography/Text";
import MapBox from '../MapBox';
import { ShowMinPrice, ShowMaxPrice, ShowMRTStationTime } from '../../Utility/Compare';
import FavouriteButton from '../FavouriteButton';

/**
 * This component is used to display the comparison results of the houses that the user has selected from <ComparisonBox />.
 * The user will be shown the name, location, room type, nearest MRT station, MRT station travel time, and the price range of the houses.
 * The user will also be shown the location of the house on the map.
 * The user will be shown a legend at the right side of the comparison results to indicate which house has the better, worse, or the same statistic.
 * The user can also add the house to their favourite list by clicking on the heart icon.
 * The user can view the comparison results of the houses that they have selected.
 * @returns ComparisonResultBox component
 */
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

      console.log(compareFlats)
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
                  extra={
                    <FavouriteButton
                      flat={flat}
                    />
                  }
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
                  <p>
                    Nearest MRT Station: {flat.nearestmrtstationname}
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