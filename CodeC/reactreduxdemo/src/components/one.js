import React from 'react';
import {store} from '../model/store';
export class One extends React.Component{
    constructor(props){
        super(props);
        this.counter = 0;
        this.state = {counter:this.counter};
    }
    plus(){
        store.dispatch({type:'PLUS',payload:{value:5}});
       // alert("Dispatched.....");
    }
    render(){
        return (
            <div>
                <h1>One Comp</h1>
                <button onClick={this.plus.bind(this)}>Increment</button>
            </div>
        )
    }
}