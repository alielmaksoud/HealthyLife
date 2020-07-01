import React, { Component } from 'react';
import AuthContext from '../../context/auth-context';
import axios from 'axios';
import Chart from '../../components/SuTakip/SuTakipChart'

class SuTakip extends Component {
  state = {
    creating: false,
    isLoading: false,
    data:[]
  };
  isActive = true;

  static contextType = AuthContext;

  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getchartData();
  }
  getchartData() {
    axios.get(`https://iothook.com/api/device/?api_key=053ef1dfb4574250996dcf78&format=json&results=30`)
      .then(res => {
        const data1= res.data;
          data1.map(su=>{
            const date= new Date (su.pub_date);
           // console.log(date.getDay())
          })
      });
  }

  render() {
    return (
      <React.Fragment>
       <Chart/>
      </React.Fragment>
    );
  }
}

export default SuTakip;