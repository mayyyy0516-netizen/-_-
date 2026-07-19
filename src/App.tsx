import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectDetail from "./pages/ProjectDetail";
import ClickSpark from "./components/ClickSpark";

export default function App() {
  return <ClickSpark sparkColor="#99e9f2" sparkSize={9} sparkRadius={18} sparkCount={8} duration={420}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  </ClickSpark>;
}
