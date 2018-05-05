import React,{Component} from 'react';
import {SalaryInput} from './salaryinput';
import {SalaryOperations} from '../models/SalaryModel';
import {SalaryDetail} from './salarydetail';
import {$} from 'jquery';
export class SalaryContainer extends Component{
    constructor(props){
       
        super(props);
        this.fruits = ["Apple","Oranges","Banana"];
        this.isShow = false;
        this.salary=0;
        this.state = {salary:this.salary,object:{}};
        console.log("Cons Call of Salary Container");

    }
    doJQueryAjax(){
        // $.ajax({

        // })
    }
    doAjax(){
        fetch("http://freegeoip.net/json/google.com").then(data=>{
            data.json().then(d=>{
                console.log("Data is ",d);
                this.setState({"ip":d.ip,"country":d.country_name});
            }).catch(er=>{
                this.setState({"er":er});
            })
        }).catch(er=>this.setState({"er":er}));

    }
    componentWillMount(){
        this.doAjax();
        console.log("Component Will Mount Call");
    }

    computeSalary(){
        
        SalaryOperations.takeSalary(this.salary);
        var object = {
            salary:this.salary,
            hra:SalaryOperations.hra(),
            da:SalaryOperations.da(),
            ta:SalaryOperations.ta(),
            pf:SalaryOperations.pf(),
            gs:SalaryOperations.gs(),
            ns:SalaryOperations.ns(),
        }
        this.setState({salary:this.salary,object:object});

    }
    componentDidMount(){
       // this.setState({salary:10000});
        console.log("Component Did Mount Call");
    }
    componentWillUnMount(){
        console.log('Component unmount call');
    }
    render(){
        console.log("Render Call");
        var jsx = this.isShow?<h1>Show....</h1>:<h2>Not Show...</h2>
        var result = this.fruits.map((fruit,index)=><p key={index}>{fruit}</p>)
        return(
            <div>
                <h2>IP is {this.state.ip} and Country {this.state.country}</h2>
                {jsx}
                <hr/>
                {result}
                <SalaryInput computeIt={this.computeSalary.bind(this)} takeIt={this.takeInput.bind(this)}/>

                <h3>Salary is {this.state.salary}</h3>
                <br/>
                <SalaryDetail object={this.state.object}/>
            </div>
        )
    }
    takeInput(event){
       this.salary  =  parseFloat(event.target.value);
       console.log("Salary is ",this.salary);
    }
}