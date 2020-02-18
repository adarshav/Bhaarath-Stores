import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, userProfileDocument } from './firebase/firebase.utils';
//App.js will be changed to class component from now on to maintain the state who are all logged in and logged out


// Only for demostration purpose

// const Clothing = (props) => {
//   console.log(props);
//   return(
//     <div>
//       <h1>You are inside clothing module</h1>
//     </div>
//   )
// }

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser:null
    }
  }

  unSubscribeFromAuth = null;
//Why componentDidMount()? componentDidMount fetches data from backend
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser:userAuth});

      // console.log(userAuth);

      if(userAuth) {
        const userRef = await userProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data);
          this.setState({
            currentUser: {
              id:snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state);
        })
        
      } else {
        this.setState({currentUser:userAuth});
      }
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
          <Header currentUser = {this.state.currentUser}/>
          {/* <HomePage /> */}
          
          <Route exact path = '/' component = {HomePage}/>
          <Route  path = '/shop' component = {ShopPage} />
          <Route  path = '/signin' component = {SignInAndSignUp}/>
          {/* <Route  path = '/clothing' component = {Clothing}/>; */}
  
          {/* if there is a doubt between react router go to react-router-learning[E:code/React] */}
      </div>
    );
  }
  
}

export default App;
/*
  while using react router dom first we have to install the package[npm install react-router-dom]
  react-router component has three properties history, match, location and these 3 can b accessed using withRouter function
 */