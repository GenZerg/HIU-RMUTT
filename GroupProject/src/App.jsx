import Home from './Pages/Home'
import './App.css'
import {Routes ,Route , Navigate} from 'react-router-dom'
import Pages from './Pages'
import Error from './Pages/Error'

function App() {  
  return (
    <div className="App">   
        <Routes>
          
          <Route path = '/' element = {<Navigate to ="en"/>}/>
          <Route path =':lang'
          element = {<Pages/>}/>
         
          
          <Route path = "*"  element={<Navigate to ="en" replace/>}></Route>
        </Routes>
    
    </div>
  )
}

export default App
