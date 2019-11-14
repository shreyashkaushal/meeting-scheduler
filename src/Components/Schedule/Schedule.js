import React,{Component} from "react";
import {Chart} from "react-google-charts";
import axios from 'axios';
 

class Schedule extends Component {
 
  state = {
    empData : []
  }  
  componentDidMount() {
    axios.get('https://totalcloud-static.s3.amazonaws.com/intern.json').then(response=>{
              this.setState({empData : response.data})
              console.log(this.state.empData);
              console.log('componentDidMount of schedule');
          });

  
  }
//converting dd/mm/yyyy to mm/dd/yyyy
  getDate = (datestr) => {
    var str = datestr.split("/");
    var date = new Date(str[1] + "/" + str[0]+ "/"+str[2])
    return date;
  }
  
  
  render() {
    console.log('im in the render');

    let columns = [
    
      { type: 'string', id: 'Name' },
      { type: 'string', id: 'Label' },
      { type: 'date', id: 'Start' },
      { type: 'date', id: 'End' },
    ]; 
    let rows = []
    let rowArray =[];  
     rowArray = this.state.empData.map((emp)=>{     
        let obj={}
        obj["name"] = emp.name
        obj["label"] = emp.name
        obj["start"] = this.getDate(emp.start)
        obj["end"] = this.getDate(emp.end)
        return obj
    })
   

    
  
  for(var i=0;i < rowArray.length; i++){
    let o =  rowArray[i]
    let row = [];
    row.push(o.name);
    row.push(o.label);  
    row.push(o.start);
    row.push(o.end)
    rows.push(row)
  }

     //  console.log(rows)
        return (
          <>
           <br></br><br></br>
      <div className="App">
        <Chart
          chartType="Timeline"
          data={[columns, ...rows]}
          width="100%"
          height="400px"
          options={{
         timeline: {
         singleColor: 'red',
         showRowLabels: true,
         
    },
  }}
        />
        
      </div>
      <br></br>
      <button className='btn btn-primary' >Check Availability</button>
     
      </>  
    );
  }
}
export default Schedule;




