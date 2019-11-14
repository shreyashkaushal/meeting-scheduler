import React,{Component} from 'react';
import Employees from './Components/Employees/Employees';
import './App.css';
import Schedule from './Components/Schedule/Schedule'



class App extends Component
 {
   state={
     show:false
   }
   //showing the schedule of employees on click of check Schedule button.
   toggleComponent=()=>{
    const {show} = this.state;
    this.setState({show:!show})

}
     render()
     {
        return (
            <div className="App">
         <h3> <strong>Meeting Scheduler</strong> </h3>  
             <Employees/>
             <button className='btn btn-primary' onClick={this.toggleComponent} >Check Schedule</button>
            {this.state.show && <Schedule/>} 
        
            </div>

          );

     }
  
}

export default App;
