import React from  'react';

import './sign-in-and-sign-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

//functional component
const SignInAndSignUp = () => (
    <div>
        <SignIn /> <SignUp />
    </div>
)
export default SignInAndSignUp;