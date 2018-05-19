import React from 'react';
import {urls} from '../../utils/config';
import {store} from '../../models/store/appstore';
import {connect} from 'react-redux';
import {actionCreator} from '../../models/actioncreators/actioncreator';
import {fetchActionCreator} from '../../models/actioncreators/fetchactioncreator';
export class User extends React.Component{
    constructor(props){
        super(props);
       this.state = {message:''};
    }
    doLogin(){
        var userid = this.refs.userid.value;
        var pwd = this.refs.pwd.value;
        store.dispatch(actionCreator('LOGIN',userid,pwd));
        //store.dispatch({type:'LOGIN',payload:{user:{"uid":userid,"pwd":pwd}}})

    }
    doAjax(){
        store.dispatch(fetchActionCreator());
        /*fetch(urls.userUrl).then(response=>{
            response.json().then(data=>{
                console.log("Going to Dispatch ... ",data);
                store.dispatch({type:'STORE',payload:{users:data}});    
            }).catch(err=>{
                console.log("Invalid JSON...",err);
            })
        });*/
    }
    componentWillMount(){
        console.log("Inside Component Will Mount");
        this.doAjax();
    }
    render(){
         const jsx = <div>
             <h1>{this.props.message}  {this.props.userid} {this.props.role}</h1>
         </div>;
       // const jsx = <div><h1>Hello</h1></div>
        const jsx2 = <div>
        <div className="form-signin">
 <img className="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
 <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
 <label  className="sr-only">Email address</label>
 <input ref='userid' type="text"  className="form-control" placeholder="Userid" required />
 <label  className="sr-only">Password</label>
 <input ref="pwd" type="password"  className="form-control" placeholder="Password" required/>
 
 <button onClick={this.doLogin.bind(this)} className="btn btn-lg btn-primary btn-block">Sign in</button>
 <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
</div>
</div>

;
const finalJSX = this.props.message && this.props.message=="Welcome"?jsx:jsx2;
        return(
         <div>
             {finalJSX}
         </div>
        )
    }
}


const mapStateToProps = (state)=>{
   console.log("State is ",state);
    return {
    message : state.message,
    user : state.userid,
    role: state.role
   }
}
export default connect(mapStateToProps)(User);