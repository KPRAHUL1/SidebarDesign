import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/Mainlayout";
import Dashboard from "./pages/Dashboard";
import EntityPage from "./pages/EntityPage";

function App() {
  return (
    <Router>
      <MainLayout>
      <Routes>
        {/* <Route path="/" element={<MainLayout />}> */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/entity" element={<EntityPage />} />
          {/* <Route path="/entity/:company/:page" element={<SubPage />} /> */}
      </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
