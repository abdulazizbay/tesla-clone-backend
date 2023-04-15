import styled from "styled-components"

interface IProps{
    title:string,
    descr:string
    image : string,
    reverse:boolean
}

export const Features =(props:IProps)=>{
    return(
        <>
            <StyledFeatures reverse={props.reverse} title={props.title} descr={props.descr} image={props.image}>
                <div className="features">
                    <div className="text" data-aos='fade-left'>
                        <div className="title"><h1>{props.title}</h1></div>
                        <div className="descr">{props.descr}</div>
                    </div>
                    <div className="image" data-aos='fade-right'>
                        <img src={props.image} alt="image" />
                    </div>
                </div>
            </StyledFeatures>
        </>
    )
}

const StyledFeatures = styled.div<IProps>`
    .features{
        background-color: #000;
        color: white;
        display: flex;
        flex-direction: ${props=>props.reverse?'row-reverse':''};
        justify-content: space-between;
        padding: 70px 100px 0 100px;
        gap: 100px;
        .image{
            img{
            width: 500px;
            height: 300px;
            object-fit:cover;
        }
        }
        .text{
            .title{
                font-size: 25px;
                font-weight: 600;
                padding-bottom: 30px;
            }
        }
    }
`