import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/landing/landing"; // Ensure the correct path and capitalization

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} /> {/* Correctly routes to the Landing component */}
      </Routes>
    </Router>
  );
}

export default App;