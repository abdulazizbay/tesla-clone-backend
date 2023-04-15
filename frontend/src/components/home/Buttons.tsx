import styled from "styled-components"

interface IButtons  {
    content: string;
 }

export const Buttons = (props:IButtons)=>{
    return (
        <StyledButtons content={props.content}>
            <button >{props.content}</button>
        </StyledButtons>
    )
}

const StyledButtons = styled.div<IButtons>`
    button{
        width: 260px ;
        background-color: rgb(23,26,32);
        color: white;
        border: none;
        border-radius: 20px;
        height: 40px;
        font-size: 14px;
        font-weight: 400;
        text-transform: uppercase;
        opacity: 0.9;
        cursor: pointer;
    }

`