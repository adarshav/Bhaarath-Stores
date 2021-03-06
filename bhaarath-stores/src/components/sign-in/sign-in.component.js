import React from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

//class component
class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ "email": '', "password": '' })
        }catch(error) {
            console.log(error.message);
        }

    }

    handleChange = event => {
        // console.log(event);
        const { name, value } = event.target;
        
        this.setState( {[name]:value })
    }
    render() {
        return(
            <div className = 'sign-in'>
                <h2>I already have an Account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit = {this.handleSubmit}>
                    <FormInput name = 'email' 
                    type = 'email' 
                    value = {this.state.email} 
                    handleChange = {this.handleChange}
                    label = 'Email'
                    required/>

                    {/* <label>Email</label> */}

                    <FormInput
                    name = 'password'
                    type = 'password'
                    value = {this.state.password}
                    handleChange = {this.handleChange}
                    label = 'Password' 
                    required/>

                    {/* <label>Password</label> */}
                    <div className = 'buttons'>
                        <CustomButton type = 'submit' >
                            Sign in
                            {/* Here SignIn is children of customButton */}
                        </CustomButton>

                        <CustomButton onClick = {signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                    
                    
                </form>
            </div>

            
        )
    }
}
export default SignIn;