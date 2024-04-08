/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, notification } from 'antd';
import { HeartOutlined } from '@ant-design/icons';
import { fav } from '../SearchResultsBox';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

function FavouriteButton({flat}) {

    // eslint-disable-next-line no-unused-vars
    const [user, loading] = useAuthState(auth);

    const [api, contextHolder] = notification.useNotification();

    const buttonclick = (flat) => {
        if (!user) {
            notification.error({
                message: 'Not Logged In',
                description: 'Please login to add to favourites.',
            });
            return;
        }
        console.log('buttonclick');
        if (fav.find(item => item.id === flat.id)) { // search by id
            notification.error({
                message: 'Already added!',
                description: 'Flat already added to Favourites!',
            });
            return;
 	    }
        else {
            notification.success({
                message: 'Successfully added to Favourites!',
            });
            fav.push(flat);
            return;
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
                icon={
                    <HeartOutlined />
                }
                onClick={
                    ()=>buttonclick(flat)
                }
            />
        </>
    );
}

export default FavouriteButton;