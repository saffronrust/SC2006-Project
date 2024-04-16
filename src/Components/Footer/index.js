import { Footer } from "antd/es/layout/layout";

/**
 * This component is used to display the footer of the website.
 * The footer contains the name of the team that created the website and the tech stack used to create the website.
 * The footer is displayed at the bottom of the website.
 * The footer is displayed in all pages of the website.
 * @returns AppFooter component
 */
function AppFooter() {
    return (
    <div className="appFooter">
      <Footer
        style={{
          textAlign: 'center',
          backgroundColor: 'white',
          color: 'black',
          fontSize: '16px',
          fontWeight: 'bold',
        }}
      >
        A website by Team JENTS for SC2006 Software Engineering Project. Made with the FR(A)N tech stack [Firebase, React (Ant Design UI), Node.js]
      </Footer>
    </div>
    )
}

export default AppFooter;