import { Footer } from "antd/es/layout/layout";

function AppFooter() {
    return (<div className="appFooter">
      <Footer
      style={{
        textAlign: 'center',
        backgroundColor: 'white',
        color: 'black',
        fontSize: '16px',
        fontWeight: 'bold',
      }}
      >
        A website by Team JENTS for SC2006 Software Engineering Project
      </Footer>
      </div>
    )
  }

export default AppFooter;