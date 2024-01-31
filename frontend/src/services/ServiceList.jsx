import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from "../assets/images/weather.png"
import guideImg from "../assets/images/guide.png"
import customizationImg from "../assets/images/customization.png"

const servicesData = [
    {
        imgUrl:weatherImg,
        title: "weather",
        desc : "Get weather details",
    },
    {
        imgUrl:guideImg,
        title: "Best Tour guide",
        desc : "We offer the best tour guides",
    },
    {
        imgUrl:customizationImg,
        title: "Customization",
        desc : "Customizational options",
    },
    
]

const ServiceList = () => {
  return <>
  {servicesData.map((item,index)=> <Col lg = '3'  md = '6' sm = '12'key ={index} className='mb-4'><ServiceCard item ={item}/></Col> )}
  </>
}

export default ServiceList