import styled from "styled-components"
import model3 from '../../assets/img/tesla.png'
import { Buttons } from "./Buttons"
interface IProps{
    title:string
    image:string
}

export const DynamicHome = (props:IProps)=>{
    return(
        <>
            <StyledDynamicHome title={props.title} image={props.image}>
                <div className={props.title}>
                    <div className="container">
                        <div className="title-delevery"  data-aos='fade-in'>
                            <h1>{props.title}</h1>
                            <p>Order Online for <a href='/'>Touchless Delivery</a></p>
                        </div>
                        <div className="buttons" >
                            <Buttons content='Custom Order'/>
                            <Buttons content="Existing Inventory"/>
                        </div>
                    </div>
                </div>
            </StyledDynamicHome>
        </>
    )
}

const StyledDynamicHome = styled.div<IProps>`
    .container{
        background: url(${props=>props.image}),no-repeat,center, #d9d9d9 ;
        background-size: cover;;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 100px 0 60px 0;
        .title-delevery{
            h1{
                font-size: 2.5rem;
                font-weight:bold;
                padding-left: 30px;
            }
            p{
                padding-top: 15px;
                a{
                    text-decoration: underline !important; 
                }
            }
            
        }
        .buttons{
            display: flex ;
            gap: 30px;
        }
    }
`;