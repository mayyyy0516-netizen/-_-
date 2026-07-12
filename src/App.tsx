import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  return <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/project/:id" element={<ProjectDetail />} />
  </Routes>;
}
