---

## Sample Code Snippets

### 1. App Entry (Routing Example)
```tsx
// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Funds from "./pages/Funds";
import SIP from "./pages/SIP";
import Education from "./pages/Education";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/funds" element={<Funds />} />
        <Route path="/sip" element={<SIP />} />
        <Route path="/education" element={<Education />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
