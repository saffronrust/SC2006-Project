import React from 'react';
import { Card, Col, Row } from 'antd';
import { Input } from 'antd';

const { Search } = Input;

const onSearch1 = (value, _e, info) => {
    console.log(value);

    // insert logic to search

};

const onSearch2 = (value, _e, info) => {
    console.log(value);

    // insert logic to search

};

const ComparisonLayout = () => (

    


    <Row gutter={16}>
        <Col span={12} style={{display: 'flex', justifyContent: 'center'}}>
        <Card style={{width: 700,}}>
            <div className={'headingContainer'}>
                House 1 to compare
                <Search placeholder="input search text" onSearch={onSearch1} enterButton />
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
export default ComparisonLayout;

/* <Card title="Card title" bordered={false}> */
/* <Card style={{width: 700,}}> */