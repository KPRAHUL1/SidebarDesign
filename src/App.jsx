import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/Mainlayout";
import Dashboard from "./pages/Dashboard";
import EntityPage from "./pages/EntityPage";
import DynamicSubPage from "./pages/subPage/DynamicsubPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="entity" element={<EntityPage />} />
          <Route path="entity/:company/:page" element={<DynamicSubPage />} />
          {/* Add other routes as needed */}
          <Route path="domain" element={<div>Domain Page</div>} />
          <Route path="official-menu" element={<div>Official Menu Page</div>} />
          <Route path="asset" element={<div>Asset Page</div>} />
          <Route path="industrial-visit" element={<div>Industrial Visit Page</div>} />
          <Route path="expense" element={<div>Expense Page</div>} />
          <Route path="database-report" element={<div>Database Report Page</div>} />
          <Route path="social-media" element={<div>Social Media Page</div>} />
          <Route path="web-tracking" element={<div>Web Tracking Page</div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;