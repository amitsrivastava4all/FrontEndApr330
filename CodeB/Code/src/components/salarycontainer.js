import React,{Component} from 'react';
import {SalaryInput} from './salaryinput';
import {SalaryOperations} from '../models/SalaryModel';
import {SalaryDetail} from './salarydetail';
export class SalaryContainer extends Component{
    constructor(props){
        super(props);
        this.salary=0;
        this.state = {salary:this.salary,object:{}};
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
    render(){
        return(
            <div>
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