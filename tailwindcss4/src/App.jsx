import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/landing/landing"; 
import Options from "./components/options/options";
import Chat from "./components/xray/Chat";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/options" element={<Options />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;