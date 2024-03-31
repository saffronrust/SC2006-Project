import React, { useState } from 'react';
import { List, Modal, Button, Empty } from 'antd';
import {fav} from '../ResultCard';
import MapBox from "../MapBox";

const FavouritePage = () => {

    const [position, setPosition] = useState('bottom');
    const [align, setAlign] = useState('center');
    const [currentflat, setcurrentflat] = useState(fav[0]);

    const [open, setOpen] = useState(false);
    const showModal = (flat) => {
        setcurrentflat(flat)
        setOpen(true);
    };
    const handleOk = () => {
        setOpen(false);
    };

    if (fav.length===0){
        return (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} 
                description={
                    <span>
                    No Favourite Houses currently
                    </span>
                }
            />
        )
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
                dataSource={fav}
                renderItem={(flat) => (
                    <List.Item>
                    <List.Item.Meta
                        title={<Button type='link' onClick={()=>showModal(flat)}>{flat.name}</Button>}
                        description={flat.location}
                    />
                    </List.Item>
                )}
                />
                <Modal
                open={open}
                title={currentflat.name}
                onOk={handleOk}
                onCancel={handleOk}
                footer={
                    <Button key="OK" onClick={handleOk}>
                    OK
                    </Button>
                }
                >
                    {/* <div style={{
                    // display:'flex',
                    // justifyContent:'center'
                    textAlign: 'center'}}> */}
                        <p>Location: {currentflat.location}</p>
                        <p>Max Price: ${currentflat.maxprice}</p>
                        <p>Min Price: ${currentflat.minprice}</p>
                        <p>Room Type:
                            {currentflat.roomtype.map((room) => (
                                <p>{room}</p>
                            ))}
                        </p>
                        <p>Nearest MRT Station Time: {currentflat.nearestmrtstation} minutes</p>
                        <p>{MapBox(currentflat.lat,currentflat.lng,currentflat.Street)}</p>
                    {/* </div> */}
                </Modal>
            </>
            );
    }
};
export default FavouritePage;