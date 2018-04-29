import React ,{Component} from 'react';
import './App.css';
import {Print} from './print';
import {SalaryContainer} from './components/salarycontainer';

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
  printName(){
    var name = this.refs.txt.value;
    this.setState({msg:this.state.msg,counter:this.counter,name:name})
  }
  clearAll(){
    var txts = document.querySelectorAll("input[type='text']");
    for(let i = 0 ; i<txts.length; i++){
      txts[i].value= '';
    }
    txts[0].focus();
  }
  render(){
    return(
      <div>
        <SalaryContainer/>
      <br/>
      <br/>
      <br/>
      <hr/>

        <button onClick={this.clearAll.bind(this)}>Clear All</button>
        <h2>{this.state.msg} And Counter is {this.state.counter}</h2>
        <button onClick={this.sayHello.bind(this)}>Click</button>
        <button onClick={()=>this.increment()}>+</button>
        <button onClick={this.printName.bind(this)}>Print Name</button>
        <input onKeyUp={this.takeName.bind(this)} type="text" placeholder="Type Userid "/>
        Your Name is {this.state.name}
        <input type="text" ref="txt" placeholder="Type Data "/>
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
