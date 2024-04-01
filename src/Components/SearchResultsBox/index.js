import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { getDocs, collection } from 'firebase/firestore';
import { Card } from 'antd';
import ResultCard from '../ResultCard';
import { result } from '../SearchBox';
import MapBox from '../MapBox';
import { List, Modal, Button, notification } from 'antd';
import { message } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

const fav = []

function SearchResultsBox() {

    const [resultflats, setresultFlats] = useState([]);

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

    const [api, contextHolder] = notification.useNotification();
    const successNotif = (type) => {
        api[type]({
            message: 'Successfully added to Favourites!',
            // description:'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
        
    };

    const failedNotif = (type) => {
        api[type]({
            message: 'Already added!',
            // description:'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
    };

    const buttonclick = (flat) =>{
        console.log('buttonclick');
        // if (result.find(item => item.name === flat.name)) {
        //     message.error("Already added", 1.5)
        // }
        if (fav.find(item => item.id === flat.id)) { // search by id
	        failedNotif('error');
 	    }
        else {
            successNotif('success');
            fav.push(flat);
        }
    //    fav.push(flat);
    }
    // useEffect(() => {
    //     const fetchData = async () => {
    //       const querySnapshot = await getDocs(collection(db, "searchresults"));
    //       const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    //       setresultFlats(data);
    //     };
    
    //     fetchData();
    //   }, []);


    // return (
    //     <Card.Grid
    //     title="Search Results"
    //     style={{
    //         display:'flex',
    //         justifyContent:'center',
    //         width: '100%',
    //         textAlign: 'center',
    //         fontSize: '20px'}}
    //     //onClick={() => console.log('clicked')}
    //     >
    //         {result.map((flat) => (
    //             <ResultCard key={flat.id} flat={flat} />
    //         ))}
    //     </Card.Grid>
    // );
    return (
        <>
            {contextHolder}
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
                <Button
                type="primary"
                style={{
                    background: "red",
                    borderColor: "red"
                }}
                shape="circle"
                icon={<HeartOutlined />}
                onClick={()=>buttonclick(flat)}/>
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
                    <p>
                    <Button
                type="primary"
                style={{
                    background: "red",
                    borderColor: "red"
                }}
                shape="circle"
                icon={<HeartOutlined />}
                onClick={()=>buttonclick(currentflat)}/>
                    </p>
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

export default SearchResultsBox;
export {fav};