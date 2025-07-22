import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/Mainlayout";
import Dashboard from "./pages/Dashboard";
import EntityPage from "./pages/EntityPage";
// import Roririsoftware from "./pages/RoririMenu/Dashboard"
import DynamicSubPage from "./pages/subPage/DynamicsubPage";
function App() {
  return (
    <Router>
      <MainLayout>
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/entity" element={<EntityPage />} />
          {/* <Route path="/entity/:company/:page" element={<Roririsoftware/>}/> */}
          <Route path="/entity/:company/:page" element={<DynamicSubPage />} />
      </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
