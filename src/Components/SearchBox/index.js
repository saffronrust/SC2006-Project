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
import { useNavigate } from 'react-router-dom';
import { addSearchResultsToFirebase } from '../../Controllers/Database';

function SearchBox() {

  const [maxprice, setMaxPrice] = useState(0);
  const [location, setLocation] = useState("");
  const [roomtype, setRoomType] = useState("");
  const [flats, setFlats] = useState([]);
  const [filteredflats, setFilteredFlats] = useState(flats);
  const navigate = useNavigate();

  useEffect(() => {
    addSearchResultsToFirebase(filteredflats);
  }, [filteredflats]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "flats"));
      const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setFlats(data);
    };

    fetchData();
  }, []);

  const handleSubmit = async (values) => {
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
    addSearchResultsToFirebase(filteredflats);
    if (result.length === 0)
      {
          alert("No results found. Please try again.");
          return navigate("/search");
      }

    setTimeout(() => {
      navigate('/searchresults');
    }, 100);
  }

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
              <Select.Option value="Punggol">Punggol</Select.Option>
              <Select.Option value="Hougang">Hougang</Select.Option>
              <Select.Option value="Woodlands">Woodlands</Select.Option>
              <Select.Option value="Queenstown">Queenstown</Select.Option>
              <Select.Option value="Bedok">Bedok</Select.Option>
              <Select.Option value="Choa Chu Kang">Choa Chu Kang</Select.Option>
              <Select.Option value="Redhill">Redhill</Select.Option>
              <Select.Option value="Lakeside">Lakeside</Select.Option>
              <Select.Option value="Bukit Panjang">Bukit Panjang</Select.Option>
              <Select.Option value="Kallang">Kallang</Select.Option>
              <Select.Option value="Marymount">Marymount</Select.Option>
              <Select.Option value="Commonwealth">Commonwealth</Select.Option>
              <Select.Option value="Dover">Dover</Select.Option>
              <Select.Option value="Kallang">Kallang</Select.Option>
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
              <Select.Option value="2 Room Flexi">Two Room Flexi</Select.Option>
              <Select.Option value="3 Room">Three Room</Select.Option>
              <Select.Option value="4 Room">Four Room</Select.Option>
              <Select.Option value="5 Room">Five Room</Select.Option>
            </Select>
          </Form.Item>
          <Button type="primary"
          icon={<SearchOutlined />}
          htmlType="submit">
              Search
          </Button>
        </Form>
      </div>
    </div>
  );
}
export default SearchBox;


