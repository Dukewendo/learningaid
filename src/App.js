
import { BrowserRouter, Routes, Route } from "react-router-dom" ;

import './App.css';

//Routes
import Learninghome from "./components/Learninghome";




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Learninghome />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
