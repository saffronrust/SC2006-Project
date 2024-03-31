import { Form, Button, Typography, message } from 'antd';
import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import { AutoComplete } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { addCompareResultsToFirebase } from '../../Controllers/Database';
import { useNavigate } from 'react-router-dom';

function ComparisonBox() {

    const flatOptions = [
        {
          value: 'Bedok North Springs',
        },
        {
          value: 'Bedok South Bloom',
        },
        {
          value: 'Matilda Riverside',
        },
        {
          value: 'Rail Garden',
        },
        {
          value: 'Tanglin Halt Courtyard',
        },
        {
          value: 'Tanjong Tree Residences',
        },
        {
          value: 'Woodgrove Edge',
        },
        {
          value: 'Alexandra Peaks',
        },
        {
          value: 'Chai Chee Green',
        },
        {
          value: 'Jurong Arcadia',
        },
        {
          value: 'Petir Park Edge',
        },
        {
          value: 'Rajah Residences',
        },
        {
          value: 'Sin Ming Residences',
        },
        {
          value: 'Tanglin Halt Cascadia',
        },
        {
          value: 'Tenteram Vantage',
        },
        {
          value: 'Ulu Pandan Vista',
        },
        {
          value: 'Urban Rise',
        },
        {
          value: 'Verandah',
        },
        {
          value: 'Woodlands Beacon',
        },
      ];

    const navigate = useNavigate();

    const [flats, setFlats] = useState([]);

    const [comparedFlats, setComparedFlats] = useState(flats);

    useEffect(() => {
        addCompareResultsToFirebase(comparedFlats);
      }, [comparedFlats]);

    useEffect(() => {
        const fetchData = async () => {
          const querySnapshot = await getDocs(collection(db, "flats"));
          const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          setFlats(data);
        };
    
        fetchData();
      }, []);

    const [flatname1, setFlatName1] = useState("");
    const [flatname2, setFlatName2] = useState("");

    useEffect(() => {
        setFlatName1(flatname1);
    }, [flatname1]);

    useEffect(() => {
        setFlatName2(flatname2);
    }, [flatname2]);

    const handleSubmit = async (values) => {

        const result = []
        
        if (values.firstflatname === values.secondflatname) {
          message.error('Please select two different houses to compare!', 1.5);
          return;
        }

        for (let i = 0; i < flats.length; i++) {
          if (flats[i].name === values.firstflatname || flats[i].name === values.secondflatname)
          {
            result.push(flats[i]);
          }
        }

        setComparedFlats(result);
        addCompareResultsToFirebase(comparedFlats);

        message.success('Redirecting to comparison results page...', 1.5, () => navigate('/compareresults'));
      }

    return (
        <div class = 'horizontalContainer'>
            <div>
                <Typography.Title level={2}>Compare Houses</Typography.Title>
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
                        label="First House Name"
                        name="firstflatname"
                        value={flatname1}
                        rules={[
                            {
                                required: true,
                                message: 'Please input the name of the house!',
                            },
                        ]}
                        onValuesChange={(e1) => setFlatName1(e1.target.value)}
                    >
                            <AutoComplete
                            style={{
                                width: 200,
                            }}
                            options={flatOptions}
                            placeholder="Bedok North Springs"
                            filterOption={(inputValue, option) =>
                                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                            }
                            />
                    </Form.Item>
                    <Form.Item
                        label="Second House Name"
                        name="secondflatname"
                        value={flatname2}
                        rules={[
                            {
                                required: true,
                                message: 'Please input the name of the house!',
                            },
                        ]}
                        onValuesChange={(e2) => setFlatName2(e2.target.value)}
                    >
                            <AutoComplete
                            style={{
                                width: 200,
                            }}
                            options={flatOptions}
                            placeholder="Matilda Riverside"
                            filterOption={(inputValue, option) =>
                                option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                            }
                            />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            icon={<SearchOutlined />}
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default ComparisonBox;