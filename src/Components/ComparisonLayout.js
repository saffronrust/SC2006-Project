import React from 'react';
import { Card, Col, Form, Row } from 'antd';
import { Input } from 'antd';
import AutoCompleteInput from './AutoCompleteInput';
import { Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { AutoComplete } from 'antd';
import { flatOptions } from '../Models/Flat';

const { Search } = Input;


const onSearch1 = (value, _e, info) => {
    console.log(value);

    // insert logic to search

};

const onSearch2 = (value, _e, info) => {
    console.log(value);

    // insert logic to search

};

function ComparisonLayout() {

    const [flatname, setFlatName] = useState("");

    const handleSubmit = async (values) => {
        console.log(values);
        // insert logic to search
    };

    return (
        <Row gutter={16}>
            <Col span={12} style={{display: 'flex', justifyContent: 'center'}}>
            <Card style={{width: 700,}}>
                <div className={'headingContainer'}>
                    House 1 to compare
                    <Form
                    onFinish={handleSubmit}
                    >
                        <Form.Item
                        label="Name"
                        name="flatname"
                        value={flatname}
                        onValuesChange={(e) => setFlatName(e.target.value)}
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
                            {/* <AutoCompleteInput flatOptions={flatOptions} /> */}
                        </Form.Item>
                        <Button type="primary"
                        icon={<SearchOutlined />}
                        htmlType="submit">
                            Search
                        </Button>
                    </Form>
                </div>
            </Card>
            </Col>
            <Col span={12} style={{display: 'flex', justifyContent: 'center'}}>
            <Card style={{width: 700,}}>
            <div className={'headingContainer'}>
                    House 2 to compare
                    <Search placeholder="input search text" onSearch={onSearch2} enterButton />
                </div>
            </Card>
            </Col>
        </Row>
    );
}

export default ComparisonLayout;