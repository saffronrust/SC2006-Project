import React, { useState } from 'react';
import {
  Form,
  InputNumber,
  Select,
  Button,
} from 'antd';
import Typography from 'antd/es/typography/Typography';
import { SearchOutlined } from '@ant-design/icons';

const SearchBox = () => {
  return (
    <>
    <Typography.Title level={2}>Search for a BTO</Typography.Title>
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Max Price (SGD)">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Location">
          <Select>
            <Select.Option value="punggol">Punggol</Select.Option>
            <Select.Option value="hougang">Hougang</Select.Option>
            <Select.Option value="woodlands">Woodlands</Select.Option>
            <Select.Option value="queenstown">Queenstown</Select.Option>
            <Select.Option value="bedok">Bedok</Select.Option>
            <Select.Option value="cck">Choa Chu Kang</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Housing Type">
          <Select>
            <Select.Option value="tworoomflexi">Two Room Flexi</Select.Option>
            <Select.Option value="threeroom">Three Room</Select.Option>
            <Select.Option value="fourroom">Four Room</Select.Option>
            <Select.Option value="fiveroom">Five Room</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Min Floor Area (square metres)">
          <InputNumber />
        </Form.Item>
        <Button type="primary" icon={<SearchOutlined />}>
            Search
        </Button>
      </Form>
    </>
  );
};
export default () => <SearchBox />;