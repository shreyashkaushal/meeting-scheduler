import React,{Component} from 'react';
import axios from 'axios';



class Employees extends Component
 {
     state = {
         empData:[]
     }
     componentDidMount()
     {
          axios.get('https://totalcloud-static.s3.amazonaws.com/intern.json').then(response=>{
              this.setState({empData : response.data})
              console.log(this.state.empData);
              console.log('i m the component didmount of employees');
          });
     }
     
     render()
     {
       
        return (
            <>
            <div >
             <table className = 'table table-bordered' > 
                <tr style={{backgroundColor:'yellow'}} >
                <th>Select</th>
                     <th>Index</th>
                      <th>ID</th>
                      <th>Name</th>
                       <th>Start Date</th>
                       <th>End Date </th>
                    
                       
                </tr>
                {
                        this.state.empData.map((emp, ind) =>
                            <tr key={this.state.id}>
                                <td><input type="checkbox" /></td>
                                <td>{ind}</td>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.start}</td>
                                <td>{emp.end}</td>
                                
                                

                            </tr>
                        )
                    }
                </table>
                <button className='btn btn-primary' >Check Schedule</button>
        
            </div>
            
            </>
          );

     }
  
}

export default Employees;
