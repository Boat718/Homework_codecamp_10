import React, { Component } from 'react'
import Input from '../Input/Input';

class RegisterForm extends Component {
    state = {
        formData: {
            name:{
                value:"",
                validator:{
                    minLength: 3,
                    
                    required: true
                },
                error: {status:true, message:"",isTouched:false}
            },
            phoneNumber:{
                value:"",
                validator:{
                    minLength: 10,
                    maxLength: 10,
                },
                error: {status:true, message:"",isTouched:false}
            },
            email:{
                value:"",
                validator:{
                    required: true
                },
                error: {status:true, message:"",isTouched:false}
            },
            password:{
                value:"",
                validator:{
                    minLength: 6,
                    maxLength: 24,
                    required: true
                },
                error: {status:true, message:"",isTouched:false}
            }
        },
        
        isFormValid: false
    }

    checkValue = (value,rules)=>{
        let isvalid = true;
        let message = "";
        let trimmedValue = value.trim();

        
        if(rules.maxLength && trimmedValue.length > rules.maxLength){
            isvalid = false;
            message =`ช่องนี้ความยาวไม่เกิน ${rules.maxLength} ตัว`;
        }

        if(rules.minLength && trimmedValue.length < rules.minLength){
            isvalid = false;
            message =`ช่องนี้ความยาวอย่างน้อย ${rules.minLength} ตัว`;
        }

        if (rules.required && trimmedValue.length === 0){
            isvalid = false;
            message = "กรอกช่องนี้";
        }

        return {isvalid, message};
    }

    onChangeInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        const updatedForm = {...this.state.formData}
        updatedForm[fieldName].value = fieldValue;

        let { isvalid, message} = this.checkValue(e.target.value, updatedForm[fieldName].validator);

        updatedForm[fieldName].error.status = !isvalid;
        updatedForm[fieldName].error.message = message;
        updatedForm[fieldName].error.isTouched = true;

        let newIsFormValid = true;
        for(let fn in updatedForm){
            if(updatedForm[fn].validator.required === true){
                newIsFormValid = !updatedForm[fn].error.status && newIsFormValid;
            }
        }

        this.setState({
            formData:updatedForm,
            isFormValid:newIsFormValid,
        })
    }

    onSubmitForm = (e)=>{
        e.preventDefault()
        console.log(this.state)
    }


    render() {
        const {name,phoneNumber,email,password} = this.state.formData
        return (
            <div className="RegisterForm">
                <form onSubmit={this.onSubmitForm}>
                <Input 
                    value={name.value} 
                    name="name" 
                    placeholder="Name" 
                    onChangeInput={this.onChangeInput}
                    error={name.error} />

                <Input 
                    value={phoneNumber.value}  
                    name="phoneNumber" 
                    placeholder="PhoneNumber" 
                    onChangeInput={this.onChangeInput}
                    error={phoneNumber.error} />

                <Input 
                    value={email.value} 
                    name="email" 
                    placeholder="E-mail" 
                    onChangeInput={this.onChangeInput}
                    error={email.error} />

                <Input 
                    type="password"
                    value={password.value} 
                    name="password" 
                    placeholder="Password" 
                    onChangeInput={this.onChangeInput}
                    error={password.error} />

                
                
                <button disabled={!this.state.isFormValid} htmlFor="submit" className="Button">Register</button>
                </form>
            </div>
        )
    }
}

export default RegisterForm;
