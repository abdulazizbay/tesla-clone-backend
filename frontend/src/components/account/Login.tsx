import styled from "styled-components"
import { Buttons } from "../home/Buttons"



export const Login = () => {
    return (
        <>
            <StyledLogin>
                <div className="login-container">
                    <div className="title"><h1>Sign In</h1></div>
                    <div className="main-info">
                        <label htmlFor="email">Email Address</label><br/>
                        <input name="email" type="text" className="input"/><br />

                        <label htmlFor="password">Password</label><br/>
                        <input name="password" type="text" className="input"/>
                        <Buttons content="Sign in" />
                        <div className="rule"></div>
                        <button><a href="/registration">CREATE ACCOUNT</a></button>
                    </div>
                </div>
            </StyledLogin>
        </>
    )
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
    }
`