import { CalculatorFilled, HeartFilled, HomeFilled, SearchOutlined, SlidersFilled, UserOutlined } from "@ant-design/icons";
import { Menu, Typography } from "antd";
import {useNavigate} from 'react-router-dom';
import { removedatabase } from "../../Controllers/Database";

function AppHeader() {
    const navigate = useNavigate();

    const onMenuClick = (item) => {
        removedatabase();
        navigate(`/${item.key}`);
    };

    const onLoginIconClick = () => {
        removedatabase();
        navigate("/login")
    };

    return (
        <div className="appHeader">
            <Menu
            className="appMenu"
            onClick={onMenuClick}
            mode = "horizontal"
            style={{ minWidth: 0, flex: "auto" }}
                items = {[
                {
                    icon: <HomeFilled/>,
                    key: "",
                },
                {
                    label: "Search",
                    icon: <SearchOutlined/>,
                    key: "search",
                },
                {
                    label: "Calculator",
                    icon: <CalculatorFilled/>,
                    key: "calculator",
                },
                {
                    label: "Compare",
                    icon: <SlidersFilled/>,
                    key: "compare",
                },
                {
                    label: "Favourites",
                    icon: <HeartFilled/>,
                    key: "favourites",
                },
                {
                    label: "Test",
                    key: "test",
                },
            ]}
            />
            
            <Typography.Title className="title">SimplyStay!</Typography.Title>

            <UserOutlined
            className="loginIcon"
            onClick={onLoginIconClick}
            ></UserOutlined>
        </div>
    );
}

export default AppHeader;