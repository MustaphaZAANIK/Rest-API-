import React, { Component } from 'react';

import './client.css';

class Client extends Component {
  state={
    users:[]
  };
  constructor(){
    super();
    this.gettingdata=this.gettingdata.bind(this);

     }
    
  render() {
    return (
      <div id="homepage">
       <form onSubmit={this.gettingdata}>
         <label>Enter your latitude</label>
         <input type="text" ref="lat" placeholder="latitude" required/>
         <label>Enter your langitude</label>
         <input type="text" ref="lng" placeholder="longitude" required/>
         <label>Enter MaxDistance</label>
         <p>(MaxDistance is proportionnel with the data fetched)</p>
         <input type="text" ref="max" placeholder="MaxDistance" required/>
         <input type="submit" value="Find Users"/>
      </form> 
      <ul>{this.state.users.map(user=>
       <li key={user.id}>
        <span className={user.available}></span>
        <span className="name">{user.name}</span>
        <span className="rank">{user.rank}</span>
        <span className="dist">{user.dist.calculated}</span>
       
       </li>
       )}
        </ul>
        
   </div>
    );
  }
  gettingdata=(e)=>{
    e.preventDefault();
    var lng=this.refs.lng.value;
    var lat=this.refs.lat.value;
    var max=this.refs.max.value;



    fetch('/api/users?lng='+lng+'&lat='+lat+'&max='+max).then(data=>
    data.json()).then(users=>
     this.setState({
       users
     },()=> console.log(users)));
  }
}

export default Client;