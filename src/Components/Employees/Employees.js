import React,{Component} from 'react';
import axios from 'axios';



class Employees extends Component
 {
     state = {
         empData:[],
         show: true
     }
     //extracting the data from the given URL using axios package 
     componentDidMount()
     {
          axios.get('https://totalcloud-static.s3.amazonaws.com/intern.json').then(response=>{
              this.setState({empData : response.data})
              console.log(this.state.empData);
              console.log('component did mount of employees');
          });
     }
     
     
     render()
     {
       
        return (
            <>
            <div >
             <table className = 'table table-bordered'  > 
                <tr style={{backgroundColor:'yellow'}} >
                <th>SELECT</th>
                     <th>INDEX</th>
                      <th>ID</th>
                      <th>NAME</th>
                       <th>START DATE</th>
                       <th>END DATE </th>
                    
                       
                </tr>
                {
                        this.state.empData.map((emp, ind) =>
                            <tr key={this.state.id}>
                                <td style= {{width:'5%'}}><input type="checkbox" /></td>
                                <td style= {{width:'5%'}}>{ind}</td>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.start}</td>
                                <td>{emp.end}</td>
                                
                                

                            </tr>
                        )
                    }
                </table>
                
        
            </div>
            
            </>
          );

     }
  
}

export default Employees;
