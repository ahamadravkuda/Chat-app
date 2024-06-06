import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ChatContainer from "./ChatContainer";
import Login from "./Login";


function App() {
  return (
    
      <BrowserRouter>
      <div className='app'>
      <Routes>
      
        <Route path="/" element={<Login/>}/>
        <Route path="/chat" element={<ChatContainer/>}/>
       </Routes>
       </div>
      
      
      </BrowserRouter>
    
  );
}

export default App;
