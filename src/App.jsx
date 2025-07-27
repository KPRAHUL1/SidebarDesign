import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/Mainlayout";
import Dashboard from "./pages/Dashboard";
import EntityPage from "./pages/EntityPage";

// Import all Roriri Software Components
import RoririDashboard from "./components/RoririSoftware/RoririDashboard";
import EnquiryDetails from "./components/RoririSoftware/EnquiryDetails";
import Employee from "./components/RoririSoftware/Employee";
import Attendance from "./components/RoririSoftware/Attendance";
// import Clients from "./components/RoririSoftware/Clients";
// import ProjectDetails from "./components/RoririSoftware/ProjectDetails";
// import Coordinator from "./components/RoririSoftware/Coordinator";
// import Internship from "./components/RoririSoftware/Internship";
// import MOU from "./components/RoririSoftware/MOU";
// import TaskDetails from "./components/RoririSoftware/TaskDetails";
// import MeetingDetails from "./components/RoririSoftware/MeetingDetails";

// Import NexgenIT Academy Components
// import AcademyCourses from "./components/NexgenAcademy/AcademyCourses";
// import AcademyDashboard from "./components/NexgenAcademy/AcademyDashboard";

// Import other company components
// import CollegeDashboard from "./components/NexgenCollege/CollegeDashboard";
// import NexemyDashboard from "./components/Nexemy/NexemyDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="entity" element={<EntityPage />} />
          
          {/* Roriri Software Routes */}
          <Route path="entity/roriri-software/dashboard" element={<RoririDashboard />} />
          <Route path="entity/roriri-software/enquiry-details" element={<EnquiryDetails />} />
          <Route path="entity/roriri-software/employee" element={<Employee />} />
          <Route path="entity/roriri-software/attendance" element={<Attendance />} />
          {/* <Route path="entity/roriri-software/clients" element={<Clients />} />
          <Route path="entity/roriri-software/project-details" element={<ProjectDetails />} />
          <Route path="entity/roriri-software/coordinator" element={<Coordinator />} />
          <Route path="entity/roriri-software/internship" element={<Internship />} />
          <Route path="entity/roriri-software/mou" element={<MOU />} />
          <Route path="entity/roriri-software/task-details" element={<TaskDetails />} />
          <Route path="entity/roriri-software/meeting-details" element={<MeetingDetails />} /> */}
          
          {/* NexgenIT Academy Routes */}
          {/* <Route path="entity/nexgenit-academy/dashboard" element={<AcademyDashboard />} />
          <Route path="entity/nexgenit-academy/courses" element={<AcademyCourses />} />
           */}
          {/* Other Company Routes */}
          {/* <Route path="entity/nexgen-college/dashboard" element={<CollegeDashboard />} />
          <Route path="entity/nexemy/dashboard" element={<NexemyDashboard />} /> */}
          
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;