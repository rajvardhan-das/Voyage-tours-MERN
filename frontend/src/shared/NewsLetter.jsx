import React from 'react'
import './newsletter.css'
import { Col, Row, Container } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'
const NewsLetter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg ='6'>
                <div className="newsletter__content">
                    <h2>Subscribe now to get useful information regularly</h2>
                    <div className="newsletter__input">
                        <input type="email" placeholder='Enter your email address'/>
                        <button className="btn newsletter__btn">Subscribe</button>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, error? Earum doloribus alias iure sed voluptas expedita minus accusamus dolor adipisci ducimus consequuntur rerum veniam, temporibus ab consectetur nesciunt quibusdam?
                    </p>
                </div>

            </Col>
            <Col lg ='6'>
                <div className="newsletter__img">
                    <img src={maleTourist} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default NewsLetter