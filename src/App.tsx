import { Dashbord } from "./pages/Dashboard";
import { Signin } from "./pages/signin";
import { Signup } from "./pages/signup";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/dashboard" element={<Dashbord />} />

        
      </Routes>

    </BrowserRouter>
  );
}

export default App;
