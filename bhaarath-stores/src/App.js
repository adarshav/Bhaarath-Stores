import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component'

import Header from './components/header/header.component';
import { auth, userProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user-actions';
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
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     currentUser:null
  //   }
  // }

  unSubscribeFromAuth = null;
//Why componentDidMount()? componentDidMount fetches data from backend
  componentDidMount() {
    //redux 
    const { newSetCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser:userAuth});

      // console.log(userAuth);

      if(userAuth) {
        const userRef = await userProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data);
          newSetCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            })
          // console.log(this.state);
        })        
      } else {
        newSetCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
          {/* <Header currentUser = {this.state.currentUser}/> */}
          <Header />
          {/* <HomePage /> */}
          
          <Route exact path = '/' component = {HomePage}/>
          <Route  path = '/shop' component = {ShopPage} />
          {/* older one before implementing redux */}
          {/* <Route exact path = '/signin' component = {SignInAndSignUp}/> */}

          {/* instead of component in Route use render which is a function  */}
          <Route exact path = '/signin' render = {() => this.props.currentUser ? ( <Redirect to = '/' /> ) : (<SignInAndSignUp />) }/>
          <Route exact path = '/checkout' component = {CheckoutPage}/>
          {/* <Route  path = '/clothing' component = {Clothing}/>; */}
  
          {/* if there is a doubt between react router go to react-router-learning[E:code/React] */}
      </div>
    );
  }
  
}

// this is to have an access of currentUser and redirect to another page once he successfully logs in.
const mapStateToProps = state => ({
  currentUser:state.user.currentUser
})

//it is a function and it gets dispatch property and setCurrentUser is a function where dispatch in a second line tells to the redux whatever object u r passing to me is an action which triggers to rootReducer
const mapDispatchToProps = dispatch => ({
  newSetCurrentUser:user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
/*
  while using react router dom first we have to install the package[npm install react-router-dom]
  react-router component has three properties history, match, location and these 3 can b accessed using withRouter function
 */

//  After implementing redux to the application, Here there is a problem 1.if user signs in the user will be still in sign-in page which may cause an error so that if the user logs in he should be redirected to shop page. That will be seen now, If we want to make the mentioned we should have an access to the currentUser which is in rootReducer that objective can be achieved by mapStateToProps so that we have the access of currentUser who have logged in.

//redux persist is used for local storage