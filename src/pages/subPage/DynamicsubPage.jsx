import { useParams } from 'react-router-dom';
import RoririPage from './RoririPage';

// Make sure the keys match exactly what's being passed from the route
const componentMap = {
  'roriri-software': {
    dashboard: <RoririPage />,
    // Add more pages as needed
    reports: <div>Reports Page</div>,
    settings: <div>Settings Page</div>,
  },
  'nextgen': {
    dashboard: <div>NextGen Dashboard</div>,
    // Add NextGen pages
  },
};

const DynamicSubPage = () => {
  const { company, page } = useParams();
  
  console.log('URL Params:', { company, page }); // Debug log
  console.log('Available components:', componentMap[company]); // Debug log

  const ComponentToRender = componentMap[company]?.[page];

  return (
    <div>
      {ComponentToRender ? (
        ComponentToRender
      ) : (
        <div className="text-red-500">
          <p>Page not found 😢</p>
          <p>Looking for: {company}/{page}</p>
          <p>Available routes: {Object.keys(componentMap).join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default DynamicSubPage;