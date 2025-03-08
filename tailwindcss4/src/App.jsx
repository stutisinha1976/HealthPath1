import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/landing/landing"; 
import Options from "./components/options/options";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/options" element={<Options />} />
      </Routes>
    </Router>
  );
}

export default App;