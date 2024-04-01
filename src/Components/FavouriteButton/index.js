import React from 'react';
import { Button, notification } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { fav } from '../SearchResultsBox';

function FavouriteButton({flat}) {

    const [api, contextHolder] = notification.useNotification();

    const successNotif = (type) => {
        api[type]({
            message: 'Successfully added to Favourites!',
        });
        
    };

    const failedNotif = (type) => {
        api[type]({
            message: 'Flat already added to Favourites!',
        });
    };

    const buttonclick = (flat) => {
        console.log('buttonclick');
        if (fav.find(item => item.id === flat.id)) { // search by id
	        failedNotif('error');
 	    }
        else {
            successNotif('success');
            fav.push(flat);
        }
    }

    return (
        <>
        {contextHolder}
        <Button
        type="primary"
        style={{
            background: "red",
            borderColor: "red"
        }}
        shape="circle"
        icon={<HeartOutlined />}
        onClick={()=>buttonclick(flat)}/>
        </>
    );
}

export default FavouriteButton;