import React, { Component } from 'react';
import "./components/card/addy.styles.css"
import './App.css';
import logo from './components/card/akcb logo.jpg';



class App extends Component {
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
  event.preventDefault();
}
handleSubmit(event){
  event.preventDefault();
 const checked= this.wallets.includes(this.state.checkAddy) 
 if (checked){
  this.setState({isVerified:true})
  // alert(`CONGRATS YOU ARE JOINTLISTED ${this.state.checkAddy}✅✅`);
  this.setState({checkAddy:''})
}
//  else{
//    alert(`OOPS YOU ARE NOT JOINTLISTED ${this.state.checkAddy}😞😞`);

//  }

//   this.setstate({checkAddy:""})
 
}

render(){
  const {checkAddy} = this.state;

  //console.log(checkAddy);  

  return (
    <div>
      <div className="App">
    <img src={logo} alt='logo' className='logo'/> 
            <div className="navigation">
           <input type="checkbox" className="navigation__checkbox" id="navi-toggle"></input>
           <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
           </label>
      <div className="navigation__background">&nbsp;
      </div>
        <div className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="https://twitter.com/AKCB_SOLANA" className="navigation__link">team</a></li>
                    <li className="navigation__item"><a href="https://twitter.com/AKCB_SOLANA" className="navigation__link">roadmap</a></li>
                    <li className="navigation__item"><a href="https://twitter.com/AKCB_SOLANA" className="navigation__link">faq</a></li>
                    <li className="navigation__item"><a href="https://twitter.com/AKCB_SOLANA" className="navigation__link">discord</a></li>
                    <li className="navigation__item"><a href="https://twitter.com/AKCB_SOLANA" className="navigation__link">twitter</a></li>
                </ul>
       </div>
     </div>

      
      <div className='search'>
       <h1 className='heading'>are you on #akcblist ?</h1>
       <form className='faform' onSubmit={this.handleSubmit} >
        <input  type="text" className="searcharea" 
         placeholder='Type in wallet address to check' value={checkAddy} onChange={this.handleChange}
         />
         <input className="button"  type="submit" 
         value="search"  onClick={this.handleSubmit}
         />
       </form>
      </div>

        <div className='footer'>
          <span className='menu__list1'>&copy;2023, AKCB</span>
          <span className='menu__list2'>A KID CALLED BEAST ON SOLANA</span>  
      </div>
    </div>    
    </div>
    );
  
  
  } 
 

}
export default App;
