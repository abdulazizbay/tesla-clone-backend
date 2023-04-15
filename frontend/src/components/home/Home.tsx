import React,{FC} from "react"
import styled from "styled-components"
import model3 from '../../assets/img/tesla.png'
import solarRoof from '../../assets/img/solar-roof.jpg'
import modelS from '../../assets/img/model-s.jpg'
import accessories from '../../assets/img/accessories.jpg'
import modelX from '../../assets/img/model-x.jpg'
import solarPanel from '../../assets/img/solar-panel.jpg'
import modelY from '../../assets/img/model-y.jpg'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { DynamicHome } from "./DynamicHome"

interface MyData {
    id: number;
    name:string,
    email:string,
    password:string,
    password2:string
  }

export const Home =()=>{
    const [data, setData] = useState<MyData[]>([]);

    useEffect(() => {
      fetch('http://localhost:8000/api/user/')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.log(error));
    }, []);
    console.log(data)
    return (
        <>
            <div className="home-container">
                
                <DynamicHome title="Model 3" image={model3}/>
                <DynamicHome title="Model Y" image={modelY}/>
                <DynamicHome title="Model S" image={modelS}/>
                <DynamicHome title="Model X" image={modelX}/>
                <DynamicHome title="Solar Panels" image={solarPanel}/>
                <DynamicHome title="Solar Roof" image={solarRoof}/>
                <DynamicHome title="Accessories" image={accessories}/>
            </div>
        </>
    )
}