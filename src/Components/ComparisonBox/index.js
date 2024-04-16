import { Form, Button, Typography, message, AutoComplete } from 'antd';
import { useState, useEffect } from 'react';
import { db } from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import { SearchOutlined } from '@ant-design/icons';
import { addCompareResultsToFirebase } from '../../Utility/Database';
import { useNavigate } from 'react-router-dom';
import { flatOptions } from '../../FlatData';

/**
 * This component is used to compare two houses that the user selects.
 * The user can select two houses from the dropdown list and click on the submit button to compare the two houses.
 * The user will be redirected to the comparison results page after clicking on the submit button.
 * The user will be shown an error message if the user selects the same house or if the user selects an invalid house name.
 * The user will be shown a success message if the user successfully selects two houses and clicks on the submit button.
 * @returns ComparisonBox component
 */
function ComparisonBox() {

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

        let check1 = false;
        let check2 = false;
        for (let i = 0; i < flatOptions.length; i++) {
            if (flatOptions[i].value === values.firstflatname)
            {
                check1 = true;
            }
            if (flatOptions[i].value === values.secondflatname)
            {
                check2 = true;
            }
        }
        if (!check1 || !check2) {
            message.error('Please select a valid house name!', 1.5);
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
        <div className = 'horizontalContainer'>
            <div>
                <Typography.Title
                    level={2}
                >
                    Compare Houses
                </Typography.Title>
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
                            icon={
                                <SearchOutlined />
                            }
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