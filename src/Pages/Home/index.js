import Title from "antd/es/typography/Title";

function Home() {
    return (
        <div className="background">
            <div className="homeSlogan">
                <Title
                italic = {true}
                >
                    Your BTO journey starts here
                    </Title>
            </div>
            <div className="homeCaption">
                <Title
                level={2}
                >
                    In Singapore, buying public housing for the first time can be a daunting task for young adults. As such, we have elected to create a convenient and intuitive website for Singaporeans to get easy access to the housing market.
                </Title>
            </div>
        </div>
    )
}

export default Home;