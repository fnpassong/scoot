import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Location } from './pages/Location';
import { Careers } from './pages/Careers';

import './App.scss'
import { Public } from './layout/Public';

function App() {
 

  return (
    
    <Routes>
      <Route path='/' element={<Public />} >

        <Route index element= {<Home />} />
        <Route path='/location' element= {<Location />} />
        <Route path='/careers' element= {<Careers />} />
      </Route>
    </Routes>
  )
}

export default App
