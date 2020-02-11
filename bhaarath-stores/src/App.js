import React from 'react';
import { Route } from 'react-router-dom';


import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

// Only for demostration purpose

// const Clothing = (props) => {
//   console.log(props);
//   return(
//     <div>
//       <h1>You are inside clothing module</h1>
//     </div>
//   )
// }

function App() {
  return (
    <div>
        {/* <HomePage /> */}
        <Route exact path = '/' component = {HomePage}/>
        <Route  path = '/shop' component = {ShopPage} />
        {/* <Route  path = '/clothing' component = {Clothing}/>; */}

        {/* if there is a doubt between react router go to react-router-learning[E:code/React] */}
    </div>
  );
}

export default App;
/*
  while using react router dom first we have to install the package[npm install react-router-dom]
  react-router component has three properties history, match, location and these 3 can b accessed using withRouter function
 */