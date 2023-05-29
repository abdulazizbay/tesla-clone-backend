    import styled from "styled-components"
    import { Buttons } from "../home/Buttons"
    import { useState } from "react"
    import axios from "axios"
    
    interface ILogin {
        username: string,
        passwordLabel: string,
        buttonContent: string,
        registrationLink: string,
    }
    interface IFormData{
        username:string,
        password:string,
    }

    export const Login = ({ username, passwordLabel, buttonContent, registrationLink }:ILogin) => {
        const [formData,setFormData] = useState<IFormData>({
            username:'',
            password:'',
        })
        const handleSubmit: React.FormEventHandler<HTMLFormElement>  = (event)=>{
            event.preventDefault();
            console.log(formData);
            if(formData.username,formData.password !== ''){
                axios.post('http://localhost:8000/api/user/login',formData,{
                    headers:{
                        'Content-Type':'application/json'
                    }
                })
                .then((response)=>{
                    console.log(response)
                    if(response.data.status==='admin'){
                        window.alert('111')
                    }
                })
                .catch((error)=>{
                    console.log(error)
                })
            }else{
                window.alert('Something went wrong')
            }
        }
        return (
        <StyledLogin>
            <div className="login-container">
            <div className="title">
                <h1>Sign In</h1>
            </div>
            
                <form onSubmit={handleSubmit}>
                    <div className="main-info">
                    <label htmlFor="username">{username}</label>
                    <br />
                    <input 
                        name="username" 
                        type="text" 
                        className="input" 
                        value={formData.username}
                        onChange={(event) =>setFormData({...formData,username:event.target.value})}
                    />
                    <br />
        
                    <label htmlFor="password">{passwordLabel}</label><br />
                    <input 
                        name="password" 
                        type="password" 
                        className="input" 
                        value={formData.password}
                        onChange={(event) =>setFormData({...formData,password:event.target.value})}

                    />
                    <Buttons content={buttonContent} />
                    <div className="rule"></div>
                <button>
                <a href={registrationLink}>CREATE ACCOUNT</a>
                </button>
                    </div>
                </form>
                
                
            
            </div>
        </StyledLogin>
        )
    }
    
    Login.defaultProps = {
        username: "username Address",
        passwordLabel: "Password",
        buttonContent: "Sign in",
        registrationLink: "/registration",
    }

    const StyledLogin = styled.div`
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
                    padding-bottom: 7px;
                    padding-top: 40px;
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

            }
            button{
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
                .rule {
                    width: 300px;
                    height: 1px;
                    border-top: 1px solid #ccc;
                    margin: 20px 0;
                }
        }
    `