import Card from "antd/es/card/Card";
import MapBox from "../MapBox";
import Text from "antd/es/typography/Text";

function CompareCard({flat}) {
    return (
        <Card key={flat.id} title={flat.name}>
            <p>Location: {flat.location}</p>
            <p color="red">Max Price: ${flat.maxprice}</p>
            <Text
            color="red"
            >Min Price: ${flat.minprice}</Text>
            <p>Min Price: ${flat.minprice}</p>
            <p>Room Type:
                {flat.roomtype.map((room) => (
                    <p>{room}</p>
                ))}
            </p>
            <p>Nearest MRT Station Time: {flat.nearestmrtstation} minutes</p>
            <p>{MapBox(flat.lat,flat.lng,flat.Street)}</p>
        </Card>
    );
}

export default CompareCard;