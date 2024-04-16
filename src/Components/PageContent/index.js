import AppRoutes from "../Routes";

/**
 * This component is used to display the content of the website.
 * The content of the website is displayed in the middle of the website.
 * The content of the website changes based on the URL path.
 * The content of the website is displayed in all pages of the website.
 * @returns PageContent component
 */
function PageContent() {
  return (
    <div className="pageContent">
      <AppRoutes />
    </div>
  );
}

export default PageContent;
