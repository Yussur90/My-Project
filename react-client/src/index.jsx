import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],//{username:"",weight:"",date:""}
      weight:'',
      username:'',
      date: 0

    }

    this.submit=this.submit.bind(this);
    this.onChange=this.onChange.bind(this);
    this.onChange2=this.onChange2.bind(this);
    this.onChange3=this.onChange3.bind(this);

  }


onChange (e) {
    this.setState({
      username: e.target.value
    });
  }
  onChange2 (e) {
    this.setState({
      weight: e.target.value
    });
  }
    onChange3 (e) {
    this.setState({
      date: e.target.value
    });
  }



  submit(username,weight,date) {
    
    var that = this
    $.ajax({ 
      type:'POST',
      url: '/items',
      data:{
        username:username,//.username
        weight:weight,//.weight
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
        that.setState({
          items:data
        })
      }
    });


  }

  render () {
    return (
      <div>
        <h1>Item List</h1>
          <p>username:</p><input onChange={this.onChange} />
            <p>weight:</p><input onChange={this.onChange2} />
            <p>date:</p><input onChange={this.onChange3} />
          <button onClick={()=> this.submit(this.state.username,this.state.weight,this.state.date)}>add username</button>
        <List items={this.state.items}/>
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));