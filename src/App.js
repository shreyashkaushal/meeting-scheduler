import React,{Component} from 'react';
import Employees from './Components/Employees/Employees';
import './App.css';
import Schedule from './Components/Schedule/Schedule'



class App extends Component
 {
     render()
     {
        return (
            <div className="App">
             Total cloud
             <Employees/>
             <Schedule/>
        
            </div>

          );

     }
  
}

export default App;
