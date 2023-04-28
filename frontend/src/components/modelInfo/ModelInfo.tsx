import styled from "styled-components"
import ModelS from '../../assets/img/model-s.jpg'
import ModelX from '../../assets/img/modelx_2.jpg'
import Modely2 from '../../assets/img/modely_2.jpeg'
import Model3 from '../../assets/img/model3_2.jpeg'
import { AllNewInterior } from "./NewInterior"
import { Features } from "./Features"
import { ModelInfoSec } from "./ModelInfoChild"
import gameImg from '../../assets/img/game.jpg'
import connectedImg from '../../assets/img/connected.jpg'
import audioImg from '../../assets/img/audio.jpg'
import { useLocation } from "react-router-dom"
import { useState } from "react"
import { data } from "./DataModelInfo"

export const ModelInfo = ()=>{
    const location = useLocation();
    const l  = location.pathname

    return(
        <>
            <div className="modelInfo">
                


                
            { 
                l === '/model3' ? (
                    data.slice(0, 1).map((item) => (
                    <ModelInfoSec 
                        title={item.title} 
                        background={Model3}
                        plaid={item.plaid}
                        range={item.range}
                        mph={item.mph} 
                        speed={item.speed}
                        peak={item.peak}
                    />
                    ))
                ) : l === '/models' ? (
                    data.slice(1, 2).map((item) => (
                    <ModelInfoSec 
                        title={item.title} 
                        background={ModelS}
                        plaid={item.plaid}
                        range={item.range}
                        mph={item.mph} 
                        speed={item.speed}
                        peak={item.peak}
                    />
                    ))
                ) : l === '/modely' ? (
                    data.slice(2, 3).map((item) => (
                    <ModelInfoSec 
                        title={item.title} 
                        background={Modely2}
                        plaid={item.plaid}
                        range={item.range}
                        mph={item.mph} 
                        speed={item.speed}
                        peak={item.peak}
                    />
                    ))
                ) : l === '/modelx' ? (
                    data.slice(3, 4).map((item) => (
                    <ModelInfoSec 
                        title={item.title} 
                        background={ModelX}
                        plaid={item.plaid}
                        range={item.range}
                        mph={item.mph} 
                        speed={item.speed}
                        peak={item.peak}
                    />
                    ))
                ) : null
                }  

                
                
            </div>
            <AllNewInterior/>
            <Features 
                title="Game from Anywhere" 
                descr="Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat."
                image={gameImg}
                reverse={true}
            />
            <Features 
                title="Stay Connected" 
                descr="Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop."
                image={connectedImg}
                reverse={   false}
            />
            <Features 
                title="Your Best Audio System" 
                descr="Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat."
                image={audioImg}
                reverse={true}
            />
        </>
    )
}