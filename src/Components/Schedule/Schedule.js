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
              console.log('i m component did mount of schedule');
          });

   /* setInterval(() => {
      this.setState({ refresh: Date.now() });
    }, 1000);*/ 
  }
  
  
  render() {
    console.log('im in the render');

    let columns = [
    
      { type: 'string', id: 'Name' },
      { type: 'date', id: 'Start' },
      { type: 'date', id: 'End' },
    ]; 
    let rows = []
    let dateStartArray =[];  
     dateStartArray = this.state.empData.map((emp)=>{     
        let obj={}
        obj["name"] = emp.name

        obj["start"] = new Date(emp.start)
        obj["end"] = new Date(emp.end)
        return obj
    })
   

    
  
  for(var i=0;i < dateStartArray.length; i++){
    let o =  dateStartArray[i]
    let row = [];
    row.push(o.name);
    row.push(o.start);
    row.push(o.end)
    rows.push(row)
  }

     //  console.log(rows)
        return (
      <div className="App">
        <Chart
          chartType="Timeline"
          data={[columns, ...rows]}
          width="auto"
          height="400px"
          options={{
         timeline: {
         singleColor: 'red',
    },
  }}
        />
      </div>  
    );
  }
}
export default Schedule;




