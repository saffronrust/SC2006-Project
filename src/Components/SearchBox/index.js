import {
  Form,
  InputNumber,
  Select,
  Button,
} from 'antd';
import Typography from 'antd/es/typography/Typography';
import { SearchOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import MapDisplay from './MapBox';

function SearchBox() {

  const [maxprice, setMaxPrice] = useState(0);
  const [location, setLocation] = useState("");
  const [roomtype, setRoomType] = useState("");
  const [flats, setFlats] = useState([]);
  const [filteredflats, setFilteredFlats] = useState(flats);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "flats"));
      const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setFlats(data);
    };

    fetchData();
  }, []);

  const handleSubmit = (values) => {
    const result = []
    for (let i = 0; i < flats.length; i++) {
        for (let j = 0; j < flats[i].roomtype.length; j++) {
      if (flats[i].maxprice <= values.maxprice && flats[i].location === values.location && flats[i].roomtype[j] === values.roomtype)
      {
        result.push(flats[i]);
      }
    }
  }
    setFilteredFlats(result);
  };

  return (
    <div class = 'horizontalContainer'>
      <div>
        <Typography.Title level={2}>Search for a BTO</Typography.Title>
        <Form
          labelCol={{
            span: 14,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          style={{
            maxWidth: 600,
          }}
          onFinish={handleSubmit}
        >
          <Form.Item
            label="Max Price"
            name= "maxprice"
            value={maxprice}
            rules={[
              {
                type: 'integer',
                min: 1,
                max: 1000000,
                message: 'Please input a valid price.',
              },
            ]}
            onValuesChange = {(e) => setMaxPrice(e.target.value)}
            >
            <InputNumber
            style={{ width: 150 }}
            placeholder='In SGD'
            >
            </InputNumber>
          </Form.Item>
          <Form.Item
          label="Location"
          name="location"
          value= {location}
          onValuesChange={(e) => setLocation(e.target.value)}
          >
            <Select
            style={{ width: 150 }}
            placeholder="Punggol"
            >
              <Select.Option value="punggol">Punggol</Select.Option>
              <Select.Option value="hougang">Hougang</Select.Option>
              <Select.Option value="woodlands">Woodlands</Select.Option>
              <Select.Option value="queenstown">Queenstown</Select.Option>
              <Select.Option value="bedok">Bedok</Select.Option>
              <Select.Option value="cck">Choa Chu Kang</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
          label="Room Type"
          name="roomtype"
          value= {roomtype}
          onValuesChange= {(e) => setRoomType(e.target.value)}
          >
            <Select
            style={{ width: 150 }}
            placeholder="3 Room"
            >
              <Select.Option value="2roomflexi">Two Room Flexi</Select.Option>
              <Select.Option value="3room">Three Room</Select.Option>
              <Select.Option value="4room">Four Room</Select.Option>
              <Select.Option value="5room">Five Room</Select.Option>
            </Select>
          </Form.Item>
          <Button type="primary"
          icon={<SearchOutlined />}
          htmlType="submit">
              Search
          </Button>
        </Form>
      </div>
      <div align="right">
        {filteredflats.map((flat) => (
          <div key={flat.id}>
          <h2> Flats name: {flat.id}</h2>
          <p>{flat.location}</p>
          <p>{flat.maxprice}</p>
          <p>{MapDisplay(flat.lat,flat.lng)}</p>
        </div>
        ))}
      </div>
    </div>
  );
};
export default SearchBox;

