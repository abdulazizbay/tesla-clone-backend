import logo from '../../assets/img/tesla-logo.svg'
import styled from "styled-components"
import { useState } from 'react'


export const NavBar = ()=>{
    const [menuOpen, setMenuOpen] = useState(false)
    return(
        <>  
            <StyledNavBar>
                <div className='Navbar'>
                    <div className="container">
                        <div className="logo">
                            <a href='/'><img src={logo} alt="logo" /></a>
                        </div>
                        <div className="center-elements">
                            <div><a href='/models'><p>Model S</p></a></div>
                            <div><a href='/model3'><p>Model 3</p></a></div>
                            <div><a href='/modelx'><p>Model X</p></a></div>
                            <div><a href='/modely'><p>Model Y</p></a></div>
                            <div><a href='/solar-roof'><p>Solar Roof</p></a></div>
                            <div><a href='/solar-panels'><p>Solar Panels</p></a></div>
                        </div>
                        <div className="right-elements">
                            <div className='shop'><a href='/'><p>Shop</p></a></div>
                            <div className='account'><a href='/login'><p>Account</p></a></div>
                            <div className='menu' id={menuOpen?'open':''} onClick={()=>{setMenuOpen(!menuOpen)}}><p>Menu</p></div>
                        </div>
                    </div>
                </div>
            </StyledNavBar>
        </>
    )
}

const StyledNavBar = styled.div`
    .Navbar{
        .container{
            width: 100%;
            justify-content: space-between;
            display: flex;
            position: fixed;
            top: 0;
            padding: 20px 30px 0 30px;
            .logo{
                
                img{
                    width: 110px;
                    height: 13px;
                }
            }
            .center-elements{
                display: flex;
                p{
                    padding-right: 25px ;
                    font-size: 0.92rem;
                    letter-spacing: 0.6px;
                    text-decoration: none;
                    font-weight: bold;
                    opacity: 0.8;
                    &:hover{
                        box-shadow: 10px rgba(90,90,90,0.1);
                    }

                }
                
            }
            .right-elements{
                display: flex;
                justify-content: flex-end;
                p{
                    padding-left: 25px ;
                    font-size: 0.92rem;
                    letter-spacing: 0.6px;
                    text-decoration: none;
                    font-weight: bold;
                    opacity: 0.8;
                }
            }
        }
        #open{
            
        }



    }
    @media screen and (max-width:1145px) {
        .center-elements {
            display: none !important;
        }
        .right-elements{
            .shop{display: none !important;}
            .account{display: none !important;}

        }
    }
    
`