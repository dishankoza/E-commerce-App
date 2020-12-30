import React from 'react'
import './sign-in.styles.scss'
import FromInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = event =>{
        event.preventDefault()

        this.setState({email:'',password:''})
    }

    handleChange = event =>{
        const {value, name} = event.target
        this.setState({ [name]:value})
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit = {this.handleSubmit}>
                    <FromInput
                        name='email'
                        type = 'email'
                        label = 'Email' 
                        value={this.state.email}
                        handleChange = {this.handleChange}
                        required/>

                    <FromInput 
                        name='password' 
                        type ='password'
                        label = 'Password' 
                        value = {this.state.password}
                        handleChange = {this.handleChange} 
                        required/>
                    <div className= 'buttons'>
                        <CustomButton 
                            type = 'submit'>
                                Sign In
                        </CustomButton>

                        <CustomButton onClick = {signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )

        
    }
}

export default SignIn