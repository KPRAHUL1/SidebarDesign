import { useParams } from "react-router-dom";
import { sidebarMenu } from "../../constants/sidebarData";

const DynamicSubPage = () => {
  const { company, page } = useParams();
  
  // Find the entity menu
  const entityMenu = sidebarMenu.find((item) => item.label === "Entity");
  const companyData = entityMenu?.submenu?.find((sub) => sub.path === company);
  const pageData = companyData?.submenu?.find((subPage) => subPage.path === page);

  if (!companyData || !pageData) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold text-red-500">Page Not Found</h1>
        <p>Company: {company}</p>
        <p>Page: {page}</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        {companyData.label} - {pageData.label}
      </h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <p>This is the {pageData.label} page for {companyData.label}</p>
        <p>Company Path: {company}</p>
        <p>Page Path: {page}</p>
        {/* Add your specific content here based on the company and page */}
      </div>
    </div>
  );
};

export default DynamicSubPage;