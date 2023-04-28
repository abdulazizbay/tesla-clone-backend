import styled from "styled-components"
import { Buttons } from "../home/Buttons"
interface IModelInfoSec{
    title:string,
    background:string,
    plaid?:boolean,
    range:string,
    mph:string,
    speed:string,
    peak:string
}

export const ModelInfoSec = (props:IModelInfoSec) =>{
    return (
        <>
            <StyledModelInfoSec title={props.title} background={props.background} plaid={props.plaid} range={props.range} mph={props.mph} peak={props.peak} speed={props.speed}>
                <div className="container">
                    <div className="title" data-aos='fade-in'>
                        <h1>{props.title}</h1>
                        <p>{props.plaid?'Plaid':''}</p>
                    </div>
                    <div className="character"  data-aos='fade-in'>
                        <div className="range">
                            <h1>{props.range} mi</h1>
                            <p>Range (EPA est.)</p>
                        </div>
                        <div className="mph">
                            <h1>{props.mph} s</h1>
                            <p>0-60 mph*</p>
                        </div>
                        <div className="speed">
                            <h1>{props.speed} mph</h1>
                            <p>Top Speed</p>
                        </div>
                        <div className="peak">
                            <h1>{props.peak} hp</h1>
                            <p>Peak Power</p>
                        </div>
                        <div className="order-button">
                            <Buttons content="Order Now"/>
                        </div>
                    </div>
                </div>
            </StyledModelInfoSec>
            
        </>
    )
}

const StyledModelInfoSec = styled.div<IModelInfoSec>`
    .container{
        background: url(${props=>props.background}),no-repeat,center, #d9d9d9;
        background-size: cover;;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 100px 0 80px 0;
        .title{
            h1{
                font-size: 2.5rem;
                font-weight:bold;
                padding-left: 0px;
            }
            p{
                padding: 15px 0 0 55px;
                font-size: 15px;
            }
        }
        .character{
            display: flex;
            gap: 90px;
            color:white;
            /* padding-right: 70px; */

            h1{
                font-weight: 600;
                font-size: 1.5rem;
                letter-spacing: 0.6px;
            }
            p{
                padding-top: 8px;
                font-weight: 200;
                font-size: 0.8rem;
                letter-spacing: 0.3px;
            }
            .order-button{
                button{
                    background-color: transparent;
                    border:4px solid white;
                    width: 200px;
                    &:hover{
                        background-color: white;
                        color: black;
                        font-weight: bolder;
                        transition: all 300ms ease-in 0s;
                    }
                }
            }
        }
        }


    
`