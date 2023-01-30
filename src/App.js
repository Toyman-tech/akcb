
import React, { Component } from 'react';
import "./components/card/addy.styles.css"
import './App.css';




class 
App extends Component {
  constructor(){
    super();
    this.state = {checkAddy:"",
    isVerified: false 
  };
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
wallets = ["habeeb", "jamal", "messi23", "ronal45do", "kam90xrerufr", "toyin", "32MPtm7KEZrhVbFegvPpDM7UjTPiiqJFiX5u2AQTwFbN"];
handleChange(event){
  this.setState({checkAddy: event.target.value});
  
}
handleSubmit(event){
  event.preventDefault();
 const checked= this.wallets.includes(this.state.checkAddy) 
 if (checked){
  this.setState({isVerified:true})
  // alert(`CONGRATS YOU ARE JOINTLISTED ${this.state.checkAddy}✅✅`);
  
}
// else{
//   alert(`OOPS YOU ARE NOT JOINTLISTED ${this.state.checkAddy}😞😞`);

// }

  this.setstate({checkAddy:""})
 
  
  
}

render(){
  const {checkAddy} = this.state;

  //console.log(checkAddy);  

  return (
      <div className="App container">
        <div className='nav'>
        <div>
        <nav>
      
      <label for="menu-toggle" class="menu-button">&#9776;</label>
      <ul class="menu">
        <li><a href="#k">Home</a></li>
        <li><a href="#m">About</a></li>
        <li><a href="#nn">Contact</a></li>
      </ul>
    </nav>
        </div>
    
        <a href="#stori">Team</a>
      <a href="#roadmap">Roadmap</a>
      <a href="#team">Faq</a>
      <a href="#community">discord</a>
      <a href="#community">twitter</a>
        </div>
      
       <div className='search'>
       <h1 className='heading'>are you on #akcblist ?</h1>
       <form className='faform' onSubmit={this.handleSubmit} >
        <input  type="text" className="searcharea" 
         placeholder='Type in wallet address to check' value=  {checkAddy} onChange={this.handleChange}
         />
         <input className="button"  type="submit" 
         value="search"  
         />
         </form>
                  
          </div>
          <div className='footer'>
          akcb on solana
         </div>
    
      </div>
    );
  
  
  } 
 

}
export default App;
