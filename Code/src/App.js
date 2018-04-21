import React from 'react';
import show,{Message} from './A';
import {Footer} from './footer';
export const App = ()=>{
  const obj = new Message();
return (<div><h1>{obj.message} {show()} </h1><Footer/></div>);
}
