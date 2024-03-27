import React, { useState } from 'react';
import Card from "antd/es/card/Card";
import MapBox from "../MapBox";
import { HeartOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';

function ResultCard({flat}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    // const handleCancel = () => {
    //     setIsModalOpen(false);
    // };
    const buttonclick = () =>{
        console.log('buttonclick');
        showModal();
    }
    return (
        <Card key={flat.id} title={flat.name}
              extra={<Button type="primary" style={{ background: "red", borderColor: "red" }} shape="circle" icon={<HeartOutlined />} onClick={buttonclick}/>} >
            <p>Location: {flat.location}</p>
            <p>Max Price: ${flat.maxprice}</p>
            <p>Min Price: ${flat.minprice}</p>
            <p>Room Type:
                {flat.roomtype.map((room) => (
                    <p>{room}</p>
                ))}
            </p>
            <p>Nearest MRT Station Time: {flat.nearestmrtstation} minutes</p>
            <p>{MapBox(flat.lat,flat.lng,flat.Street)}</p>
            <Modal title="Successfully added to Favourites!" open={isModalOpen} onOk={handleOk}
                footer={[<Button key="OK" type="primary" onClick={handleOk}> OK </Button> ]}>
                {/* <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p> */}
            </Modal>
        </Card>
        
    );
}

export default ResultCard;