import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import { Card } from 'antd';
import Text from "antd/es/typography/Text";
import MapBox from '../MapBox';

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

    console.log(compareFlats);

    function ShowMinPrice({flat}) {
      if (flat.name === compareFlats[0].name) {
        if (compareFlats[0].minprice < compareFlats[1].minprice) {
          return <Text type="success">Min Price: ${flat.minprice}</Text>
        }
        else {
          return <Text type="danger">Min Price: ${flat.minprice}</Text>
        }
      }
      else if (flat.name === compareFlats[1].name) {
        if (compareFlats[1].minprice < compareFlats[0].minprice) {
          return <Text type="success">Min Price: ${flat.minprice}</Text>
        }
        else {
          return <Text type="danger">Min Price: ${flat.minprice}</Text>
        }
      }
    }

    function ShowMaxPrice({flat}) {
      if (flat.name === compareFlats[0].name) {
        if (compareFlats[0].maxprice < compareFlats[1].maxprice) {
          return <Text type="success">Max Price: ${flat.maxprice}</Text>
        }
        else {
          return <Text type="danger">Max Price: ${flat.maxprice}</Text>
        }
      }
      else if (flat.name === compareFlats[1].name) {
        if (compareFlats[1].maxprice < compareFlats[0].maxprice) {
          return <Text type="success">Max Price: ${flat.maxprice}</Text>
        }
        else {
          return <Text type="danger">Max Price: ${flat.maxprice}</Text>
        }
      }
    }

    function ShowMRTStationTime({flat}) {
      if (flat.name === compareFlats[0].name) {
        if (compareFlats[0].nearestmrtstation < compareFlats[1].nearestmrtstation) {
          return <Text type="success">Nearest MRT Station Time: {flat.nearestmrtstation} minutes</Text>
        }
        else {
          return <Text type="danger">Nearest MRT Station Time: {flat.nearestmrtstation} minutes</Text>
        }
      }
      else if (flat.name === compareFlats[1].name) {
        if (compareFlats[1].nearestmrtstation < compareFlats[0].nearestmrtstation) {
          return <Text type="success">Nearest MRT Station Time: {flat.nearestmrtstation} minutes</Text>
        }
        else {
          return <Text type="danger">Nearest MRT Station Time: {flat.nearestmrtstation} minutes</Text>
        }
      }
    }

      return (
        <>
        <Card.Grid
        title="Comparison Results"
        style={{
          display:'flex',
          justifyContent:'center',
          width: '100%',
          textAlign: 'center',
          fontSize: '20px'}}
        >
          {compareFlats.map((flat) => (
              <Card
                key={flat.id}
                title={flat.name}
              >
                <p>Location: {flat.location}</p>
                <ShowMinPrice flat={flat} />
                <br />
                <ShowMaxPrice flat={flat} />
                <p>Room Type:
                  {flat.roomtype.map((room) => (
                    <p>{room}</p>
                  ))}
                </p>
                <ShowMRTStationTime flat={flat} />
                <p>{MapBox(flat.lat, flat.lng, flat.Street)}</p>
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
          <Text type="success">The better statistic</Text>
          <br />
          <Text type="danger">The worse statistic</Text>
          </Card>
        </Card.Grid>
        </>
      );
}

export default ComparisonResultBox;