import React, { Fragment } from 'react';
import './App.css';
import { Route } from 'react-router';
import Items from './Items';

function App() {
  return (
    <Fragment>
      <Route path='/Items'><Items /></Route>
      
      {/* This will pass in the router props */}
      <Route path='/Items' component={Items}/>
      
      {/* This will pass in the router props, but must include argument to function. */}
      <Route path='/Items' render={(props) => <Items {...props} aprop='test' />}/>

      {/* This will *NOT* pass in the router props.  Not sure if 'props' is even an argument.  Only 'match' is documented as an expected argument. */}
      <Route path='/Items' children={(match, props) => <Items {...props} />}/>
    </Fragment>
  );
}

export default App;
