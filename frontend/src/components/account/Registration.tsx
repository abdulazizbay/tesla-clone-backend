import styled from "styled-components"
import { Buttons } from "../home/Buttons"
import { useState } from "react"
import React from "react"
import axios from "axios"

interface IFormData {
    username: string,
    email: string,
    password: string,
    password2: string,
}

export const Registration =()=>{
    const [formData,setFormData] = useState<IFormData>({
        username:'',
        email:'',
        password:'',
        password2:'',
    })
    const handleSubmit: React.FormEventHandler<HTMLFormElement>  = (event)=>{
        event.preventDefault();
        
        if(formData.username,formData.email,formData.password,formData.password2 !== '' && formData.password=== formData.password2){
            axios.post('http://localhost:8000/api/user/',formData,{
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then((response)=>{
                console.log(response)
            })
            .catch((error)=>{
                console.log(error)
            })
        }else{
            window.alert('Something went wrong')
        }
    }

    return (
        <>
            <StyledRegistration>
            <div className="login-container">
                    <div className="title"><h1>Create Account</h1></div>
                    
                        <form onSubmit={handleSubmit}>
                            <div className="main-info">
                            <label htmlFor="name">Name</label><br/>
                            <input 
                                name="name" 
                                type="text" 
                                className="input"
                                value={formData.username}   
                                onChange={(event)=>{setFormData({ ...formData, username: event.target.value })}}
                            />
                            <br/>
                            <label htmlFor="email">Email</label><br/>
                            <input 
                                name="email" 
                                type="email" 
                                className="input"
                                value={formData.email}
                                onChange={(event)=>{setFormData({ ...formData, email: event.target.value })}}
                            />
                            <br/>
                            <label htmlFor="password">Password</label><br/>
                            <input 
                                name="password"
                                type="password" 
                                className="input"
                                value={formData.password}
                                onChange={(event)=>{setFormData({ ...formData, password: event.target.value })}}
                            />
                            <br/>
                            <label htmlFor="password2">Confirm Password</label><br/>
                            <input
                                name="password2"
                                type="password"
                                className="input"
                                value={formData.password2}
                                onChange={(event)=>{setFormData({ ...formData, password2: event.target.value })}}
                            />
                            <Buttons content="CREATE ACCOUNT" />
                            <div className="rule"></div>
                            
                            </div>
                        </form>
                        
                            <button className="btnli"><a href="/login">SIGN IN</a></button>

                    
                </div>
            </StyledRegistration>
        </>

    )
}

const StyledRegistration = styled.div`
        .login-container{
        padding: 110px 0 0 500px;
        .title{
            h1{
                font-size:34px;
                font-weight:600;
            }
        }
        .main-info{
            padding: 0px 0 0 15px; 
            display: flex;
            flex-direction: column;
            opacity: 0.9;
            label{
                padding-bottom: 5px;
                padding-top: 15px;
                padding-left: 10px;
            }
            .input{
                background-color: rgb(244, 244, 244);
                outline: none;
                border: none;
                border-radius: 20px;
                width: 300px;
                height: 40px;
                font-size: 14px;
                &:focus{
                    border-color:  rgb(207, 207, 207) !important;
                }
                
            }

            .rule {
                width: 300px;
                height: 1px;
                border-top: 1px solid #ccc;
                margin: 20px 0;
            }
        }
        button{
            margin-left: 15px;
            margin-top: 20px;
            width: 300px;
            background-color: #2424ff;
            color: white ;
            border: none;
            border-radius: 20px;
            height: 40px;
            font-size: 14px;
            font-weight: 400;
            text-transform: uppercase;
            opacity: 0.9;
            cursor: pointer;
        }
    }
`