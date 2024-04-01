import { CalculatorFilled, HeartFilled, HomeFilled, SearchOutlined, SlidersFilled, UserOutlined } from "@ant-design/icons";
import { Menu, Typography, Button, Tour } from "antd";
import { useNavigate } from 'react-router-dom';
import { removeCompareResultsFromDatabase } from "../../Controllers/Database";
import { useState, useRef } from "react";
import { result } from "../SearchBox";

function AppHeader() {

    const navigate = useNavigate();

    const onMenuClick = (item) => {
        removeCompareResultsFromDatabase();
        result.length = 0;
        navigate(`/${item.key}`);
    };

    const onLoginIconClick = () => {
        removeCompareResultsFromDatabase();
        result.length = 0;
        navigate("/login")
    };

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);

    const [open, setOpen] = useState(false);
    const steps = [
      {
        title: 'Home',
        description: 'Click this button to go to the home page.',
        target: () => ref1.current,
      },
      {
        title: 'Search',
        description: 'Search for your desired BTO.',
        target: () => ref2.current,
      },
      {
        title: 'Calculator',
        description: 'Calculate your payment plans.',
        target: () => ref3.current,
      },
      {
        title: 'Compare',
        description: 'Compare between different BTOs.',
        target: () => ref4.current,
      },
      {
        title: 'Favourites',
        description: 'View your favourite BTOs.',
        target: () => ref5.current,
      },
      {
        title: 'Login',
        description: 'Login to the website using your Google account.',
        target: () => ref6.current,
      },
    ];

    return (
        <div className="appHeader">
            <Menu
              className="appMenu"
              onClick={onMenuClick}
              mode = "horizontal"
              style={{ minWidth: 0, flex: "auto" }}
              items = {[
                {
                    icon: <HomeFilled
                            ref={ref1}
                          />,
                    key: "",
                },
                {
                    label: "Search",
                    icon: <SearchOutlined
                            ref={ref2}
                          />,
                    key: "search",
                },
                {
                    label: "Calculator",
                    icon: <CalculatorFilled
                            ref={ref3}
                          />,
                    key: "calculator",
                },
                {
                    label: "Compare",
                    icon: <SlidersFilled
                            ref={ref4}
                          />,
                    key: "compare",
                },
                {
                    label: "Favourites",
                    icon: <HeartFilled
                            ref={ref5}
                          />,
                    key: "favourites",
                },
              ]}
            />
            
            <Typography.Title
              className="title"
            >
              SimplyStay!
            </Typography.Title>

            <Button
              className="tourbutton"
              type="primary"
              onClick={
                () => setOpen(true)
              }
            >
              Begin Tour
            </Button>

            <Tour
              open={open}
              onClose={
                () => setOpen(false)
              }
              steps={steps}
            />

            <UserOutlined
            className="loginIcon"
            onClick={onLoginIconClick}
            ref={ref6}
            />
        </div>
    );
}

export default AppHeader;