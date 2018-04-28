import React ,{Component} from 'react';
import './App.css';
import {Print} from './print';

export class App extends Component{
  constructor(props){
    super(props); 
    this.counter= 0;
    this.state = {name:'', msg:'###########',counter:this.counter};
  }
  sayHello(event){
    this.setState({msg:'Hello How are You'});
    
  }
  increment(){
    this.counter++;
    this.setState({msg:this.state.msg,counter:this.counter});
  }
  takeName(event){
    this.setState({msg:this.state.msg,counter:this.counter,name:event.target.value});
  }
  render(){
    return(
      <div>
        <h2>{this.state.msg} And Counter is {this.state.counter}</h2>
        <button onClick={this.sayHello.bind(this)}>Click</button>
        <button onClick={()=>this.increment()}>+</button>
        <input onKeyUp={this.takeName.bind(this)} type="text" placeholder="Type Userid "/>
        Your Name is {this.state.name}
      </div>
    );
  }
} 

// export class App extends Component{
//   constructor(){

//   }
// }
// export const App = (props)=>{
//   const anotherHTML = <h3>My HTML Name is {props.name}</h3>;
//   const myHtml = <h2>this is some html</h2>;
//   const myStyle = {txtColor:{
//     color:'red'
//   },bgColor:{
//     backgroundColor:'yellow'
//   }
//   }
//   var data = 'Hello Child '+props.name;
//   return(<div>
//     <h1 style={myStyle.bgColor}>Hello App {props.name}</h1>
//     {props.name.length>=4?anotherHTML:myHtml}
//     <p className={props.name.length>=4?'mystyling':'mystyling2'}>This is HTML.......</p>
    
//      < Print parentdata={data}/>
//     </div>);
// }
