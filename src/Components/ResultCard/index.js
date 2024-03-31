import React, { useState } from 'react';
import Card from "antd/es/card/Card";
import MapBox from "../MapBox";
import { HeartOutlined } from '@ant-design/icons';
import { Button, notification } from 'antd';

const fav = [];

function ResultCard({flat}) {
    
    
    const [api, contextHolder] = notification.useNotification();
    const openNotificationWithIcon = (type) => {
        api[type]({
            message: 'Successfully added to Favourites!',
            // description:'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    };

    const buttonclick = (flat) =>{
        console.log('buttonclick');
        openNotificationWithIcon('success');
        if (!fav.find(item => item.id === flat.id)) { // search by id
	        fav.push(flat);
 	    }
    //    fav.push(flat);
    }
    return (
        <>
        {contextHolder}
        <Card key={flat.id} title={flat.name}
              extra={<Button type="primary" style={{ background: "red", borderColor: "red" }} shape="circle" icon={<HeartOutlined />} onClick={()=>buttonclick(flat)}/>} >
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
        </Card>
        </>
    );
}

export default ResultCard;
export {fav};