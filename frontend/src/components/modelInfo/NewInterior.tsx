import interiorImage from '../../assets/img/new-interior.jpg'
import styled from 'styled-components'

export const AllNewInterior = ()=>{

    return (
        <>
            <StyledInterior>
                <div className="newInterior">
                    <div className="title" data-aos='fade-up'><h1>All-New Interior</h1></div>
                <div className="image">

                </div>
                </div>
            </StyledInterior>
        </>
    )
}


const StyledInterior = styled.div`
    .newInterior{
        height: 100vh;
        align-items: center;
        justify-content: center;
        background-color: #000;
        color: white;
        h1{
            height: 15vh;
            align-items: center;
            justify-content: center;
            display: flex;
            font-size: 33px;
            font-weight: 900;
        .image{
            height: 85vh;
            background: url(${interiorImage});
            background-repeat: no-repeat;
            background-size: cover;
        }
    }
`