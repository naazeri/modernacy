import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Work from './pages/work/Work';
import ProjectDetails from './pages/work/details/ProjectDetails';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/work" element={<Work />} />
      <Route path="/work/:projectId" element={<ProjectDetails />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default AppRoutes;
