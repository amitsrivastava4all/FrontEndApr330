import React from 'react';
export const SalaryInput=(props)=>{
    return(
        <div>
            <h3>Salary Input</h3>
            <label>Salary</label>
            <input type="text" onKeyUp={props.takeIt} placeholder="Type Salary"/>
            <br/>
            <button onClick={props.computeIt}>Compute It</button>
        </div>
    )
}