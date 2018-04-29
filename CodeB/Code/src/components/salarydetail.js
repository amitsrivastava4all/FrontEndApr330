import React from 'react';
export const SalaryDetail = (props)=>{
    return(
        <div>
            <fieldset>
                <legend>Salary Details</legend>
                <table>
                    <tbody>
                    <tr>
                        <td>Salary </td>
                        <td>{props.object.salary}</td>
                    </tr>
                    <tr>
                        <td>HRA </td>
                        <td>{props.object.hra}</td>
                    </tr>
                    <tr>
                        <td>DA </td>
                        <td>{props.object.da}</td>
                    </tr>
                    <tr>
                        <td>TA </td>
                        <td>{props.object.ta}</td>
                    </tr>
                    <tr>
                        <td>PF </td>
                        <td>{props.object.pf}</td>
                    </tr>
                    <tr>
                        <td>GS </td>
                        <td>{props.object.gs}</td>
                    </tr>
                    <tr>
                        <td>NS </td>
                        <td>{props.object.ns}</td>
                    </tr>
                    </tbody>
                </table>
            </fieldset>
        </div>
    )

}