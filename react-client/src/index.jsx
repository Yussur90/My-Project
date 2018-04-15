import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      weight:'',
      username:'',
      date: 0

    }

    this.submit=this.submit.bind(this);
    this.onChange=this.onChange.bind(this);
    this.setState=this.setState.bind(this)
  }


onChange (e) {
    this.setState({
     
       [e.target.name]: e.target.value });
    
  }
 



  submit(username,weight,date) {
    
    
    $.ajax({ 
      type:'POST',
      url: '/items',
      data:{
        username:username,
        weight:weight,
        date:date
      },
      success: (data) => {
        console.log(data)
      },
    });

    $.ajax({
      type:'GET',
      url: '/items', 
      success: (data) => {
        this.setState({
          items:data
        })
      }
    });


  }

  render () {
    return (
      <div>

        <h1>Submit your name and weight and return to it every month</h1>

          <p>Username:</p><input name='username' onChange={this.onChange} />
          <p> Weight:</p><input  name='weight' onChange={this.onChange} />
          <p> Date:  </p><input  name ='date' onChange={this.onChange} />
          <br></br>
          <br></br>
          <button  style={{width: 70 }} onClick={()=> this.submit(this.state.username,this.state.weight,this.state.date)}>Submit </button>
        <List items={this.state.items}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));