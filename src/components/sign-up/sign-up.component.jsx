import React from 'react'
import './sign-up.styles.scss'
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

class SignUp extends React.Component{
    constructor(){
        super()
        this.state = {
            email : '',
            password : '',
            displayName : '',
            confirmPassword:''
        }
    }

    handleSubmit =  async (event) =>{
        event.preventDefault()
        const { displayName, email, password, confirmPassword } = this.state

        if(password!==confirmPassword){
            alert("Password Don't match")
            return
        }
        try{
            const {user}  = await auth.createUserWithEmailAndPassword(email,password)

            await createUserProfileDocument(user,{displayName})

            this.setState({
                email :'',
                displayName :'',
                password :'',
                confirmPassword :'',
            })

        }catch(err){
            console.error(err)
        }

    }

    handleChange = event =>{
        const {value, name} = event.target
        this.setState({
            [name] : value
        })
    }

    render(){
        return(
            <div className='sign-up'>
            <h2 className = 'title'>I do not have a account</h2>
            <span>Sign up wtih your email and password</span>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
                <FormInput
                  type = 'text'
                  name = 'displayName'
                  value = {this.state.displayName}
                  handleChange = {this.handleChange}
                  label = 'Display Name'
                  required  
                />

                <FormInput
                  type = 'email'
                  name = 'email'
                  value = {this.state.email}
                  handleChange = {this.handleChange}
                  label = 'Email'
                  required  
                />

                <FormInput
                  type = 'password'
                  name = 'password'
                  value = {this.state.password}
                  handleChange = {this.handleChange}
                  label = 'Password'
                  required  
                />

                <FormInput
                  type = 'password'
                  name = 'confirmPassword'
                  value = {this.state.confirmPassword}
                  handleChange = {this.handleChange}
                  label = 'Confrim Password'
                  required  
                />
                <CustomButton type = 'submit'>Sign Up</CustomButton>
            </form>
        </div>
        )
        
    }
}

export default SignUp