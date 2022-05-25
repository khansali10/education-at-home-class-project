import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import MainLayout from "./MainLayout";
import QuizPage from "./QuizPage";
import LecturePage from "./LecturePage";
import AssignmentPage from "./AssignmentPage";
import AssignDetail from "./AssignDetail";
import UserPage from "./UserPage";
import Logout from "./Logout";
import NotFound from "./NotFound";
import ProfilePage from "./ProfilePage";
import AdminLogin from "./AdminLogin";
function App() {
  return (
    <>
      <div className="flex items-stretch ">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/student" element={<MainLayout />}>
            <Route path="/student" element={<LecturePage />} />
            <Route path="/student/assignment" element={<AssignmentPage />} />
            <Route
              path="/student/assignment/:id/assignmentdetail"
              element={<AssignDetail />}
            />
            <Route path="/student/lecture" element={<LecturePage />} />
            <Route path="/student/user" element={<UserPage />} />
            <Route path="/student/profile" element={<ProfilePage />} />
            <Route path="/student/logout" element={<Logout />} />

            <Route
              path="/student/quiz"
              element={<QuizPage username="sachin" />}
            />
          </Route>

          <Route path="/admin" element={<AdminLogin />}></Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
