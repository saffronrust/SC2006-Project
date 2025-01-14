/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { result } from '../SearchBox';
import MapBox from '../MapBox';
import { List, Modal, Button } from 'antd';
import FavouriteButton from '../FavouriteButton';

const fav = []

function deletefav(flat) {
    const index = fav.indexOf(flat);
    fav.splice(index, 1);
}

/**
 * This component is used to display the search results based on the user's chosen filters.
 * The user can click on the flat name to view more details about the flat.
 * The user can add the flat to their favourite list by clicking on the heart icon.
 * The user can view the location of the flat on the map in the Modal component.
 * @returns SearchResultsBox component
 */
function SearchResultsBox() {

    const [position, setPosition] = useState('bottom');
    const [align, setAlign] = useState('center');
    const [currentflat, setcurrentflat] = useState(result[0]);
    const [open, setOpen] = useState(false);

    const showModal = (flat) => {
        setcurrentflat(flat)
        setOpen(true);
    };

    const handleOk = () => {
        setOpen(false);
    };

    return (
        <>
            <List
            pagination={{
                position,
                align,
                defaultPageSize:5
            }}
            dataSource={result}
            renderItem={(flat) => (
                <List.Item>
                <List.Item.Meta
                    title={<Button type='link' onClick={()=>showModal(flat)}>{flat.name}</Button>}
                    description={flat.location}
                />
                <FavouriteButton
                    flat={flat}
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
                    <Button
                        key="OK"
                        onClick={handleOk}
                    >
                        OK
                    </Button>
                }
            >
                <p>
                    <FavouriteButton
                        flat={currentflat}
                    />
                </p>
                <p>
                    Location: {currentflat.location}
                </p>
                <p>
                    Max Price: ${currentflat.maxprice}
                </p>
                <p>
                    Min Price: ${currentflat.minprice}
                </p>
                <p>
                    Room Type and Price Range:
                        {currentflat.roomtype.map((room) => (
                            <p>
                                {room}
                            </p>
                        ))}
                </p>
                <p>
                    Nearest MRT Station: {currentflat.nearestmrtstationname}
                </p>
                <p>
                    Nearest MRT Station Time: {currentflat.nearestmrtstation} minutes
                </p>
                <p>
                    {MapBox(currentflat.lat,currentflat.lng,currentflat.Street)}
                </p>
            </Modal>
        </>
    );
}

export default SearchResultsBox;

export {fav,deletefav};