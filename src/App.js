import './App.css';
import {Frame} from './Frame/frame'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Detail } from './detail';
import './detail.css'


function App() {
  return (
    <div className='container'>
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<Frame/>} />
        <Route path='/detail/:heroeId' element={<Detail />} />
       </Routes>
      </BrowserRouter>
    </div>

  
  );
}

export default App;
