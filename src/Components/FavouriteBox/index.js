/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { List, Modal, Button, Empty, Result, Typography, notification } from 'antd';
import MapBox from "../MapBox";
import { fav, deletefav } from '../SearchResultsBox';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { DeleteTwoTone } from '@ant-design/icons';

const FavouriteBox = () => {

    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    const [position, setPosition] = useState('bottom');
    const [align, setAlign] = useState('center');
    const [currentflat, setcurrentflat] = useState(fav[0]);
    const [favflat, setfavflat] = useState(fav);

    const [open, setOpen] = useState(false);
    const showModal = (flat) => {
        setcurrentflat(flat)
        setOpen(true);
    };

    const handleOk = () => {
        setOpen(false);
    };

    const clickdelete = (flat) => {
        deletefav(flat)
        favflat.map(favs=>(
            <li key={favs.id}>
                {setfavflat(favflat.filter(x => x.id!==flat.id))}
            </li>
        ))
        notification.warning({
            message: 'Flat removed!',
            description: flat.name+' has been successfully removed from Favourites!',
        });
    }

    const clickdeletelast = (flat) => {
        deletefav(flat)
        favflat.map(favs=>(
            <li key={favs.id}>
                {setfavflat(favflat.filter(x => x.id!==flat.id))}
            </li>
        ))
        notification.warning({
            message: 'Flat removed!',
            description: flat.name+' has been successfully removed from Favourites!',
        });
        setfavflat([])
    }

    if (!user) {
        return (
            <Result
                status="403"
                title="Not Logged In"
                subTitle={
                    <Typography.Text>
                        Please login to view your favourites.
                    </Typography.Text>
                }
                extra={
                    <Button 
                        type="primary"
                        onClick={() => navigate("/login")}
                    >
                        Go To Login Page
                    </Button>
                }
            />
        )
    }
    if (fav.length===0) {
        return (
            <>
                <Empty
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                    description={
                        <span>
                            <Typography.Text>
                                No favourites, please go to the search page to add some!
                            </Typography.Text>
                            <br/>
                            <br/>
                            <Button 
                                type="primary"
                                onClick={() => navigate("/search")}
                            >
                                Go To Search Page
                            </Button>
                        </span>
                    }
                />
            </>
        )
    }
    if (fav.length===1) {
        return (
            <>
                <List
                pagination={{
                    position,
                    align,
                    defaultPageSize:5
                }}
                dataSource={favflat}
                renderItem={(flat) => (
                    <List.Item>
                        <List.Item.Meta
                            title={<Button type='link' onClick={()=>showModal(flat)}>{flat.name}</Button>}
                            description={flat.location}
                        />
                        <Button
                        icon={<DeleteTwoTone />}
                        onClick={()=>clickdeletelast(flat)}/>
                    </List.Item>
                )}
                />
                <Modal
                    open={open}
                    title={currentflat.name}
                    onOk={handleOk}
                    onCancel={handleOk}
                    footer={
                        <Button
                            key="OK"
                            onClick={handleOk}
                        >
                        OK
                        </Button>
                    }
                >
                    <p><Button icon={<DeleteTwoTone />} onClick={()=>clickdeletelast(currentflat)}/></p>
                    <p>Location: {currentflat.location}</p>
                    <p>Max Price: ${currentflat.maxprice}</p>
                    <p>Min Price: ${currentflat.minprice}</p>
                    <p>Room Type and Price Range:
                        {currentflat.roomtype.map((room) => (
                            <p>{room}</p>
                        ))}
                    </p>
                    <p>
                        Nearest MRT Station: {currentflat.nearestmrtstationname}
                    </p>
                    <p>Nearest MRT Station Time: {currentflat.nearestmrtstation} minutes</p>
                    <p>{MapBox(currentflat.lat,currentflat.lng,currentflat.Street)}</p>
                </Modal>
            </>
        );
    }
    else {
        return (
            <>
                <List
                pagination={{
                    position,
                    align,
                    defaultPageSize:5
                }}
                dataSource={favflat}
                renderItem={(flat) => (
                    <List.Item>
                        <List.Item.Meta
                            title={<Button type='link' onClick={()=>showModal(flat)}>{flat.name}</Button>}
                            description={flat.location}
                        />
                        <Button
                        icon={<DeleteTwoTone />}
                        onClick={()=>clickdelete(flat)}/>
                    </List.Item>
                )}
                />
                <Modal
                    open={open}
                    title={currentflat.name}
                    onOk={handleOk}
                    onCancel={handleOk}
                    footer={
                        <Button
                            key="OK"
                            onClick={handleOk}
                        >
                        OK
                        </Button>
                    }
                >
                    <p><Button icon={<DeleteTwoTone />} onClick={()=>clickdelete(currentflat)}/></p>
                    <p>Location: {currentflat.location}</p>
                    <p>Max Price: ${currentflat.maxprice}</p>
                    <p>Min Price: ${currentflat.minprice}</p>
                    <p>Room Type and Price Range:
                        {currentflat.roomtype.map((room) => (
                            <p>{room}</p>
                        ))}
                    </p>
                    <p>
                        Nearest MRT Station: {currentflat.nearestmrtstationname}
                    </p>
                    <p>Nearest MRT Station Time: {currentflat.nearestmrtstation} minutes</p>
                    <p>{MapBox(currentflat.lat,currentflat.lng,currentflat.Street)}</p>
                </Modal>
            </>
        );
    }
};

export default FavouriteBox;