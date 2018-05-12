import {connect} from 'react-redux';
import React from 'react'; 
const Two=(props)=>{
    return(
        <div>
            <h1>Two Comp</h1>
            <h2>Get First Component Counter</h2>
            <h3>Count is {props.count}</h3>
        </div>
    );
}
const centralStateToPropsMapping = state => {
    return {
    count: state.counter
    }
}
//<Two count={store.state.counter}/>
export default connect(centralStateToPropsMapping)(Two);

