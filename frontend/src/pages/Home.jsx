import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'
import Subtitle from '../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImgGallery from '../components/Image-gallery/MasonryImgGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import NewsLetter from '../shared/NewsLetter';
import HeroImg from './HeroImg';
import HeroVid from './HeroVid';



const Home = () => (<>
  {/*------hero section start-----------*/}
  <section>

    <Container>
      <Row>
        <Col lg='6'>
          <div className="hero__content">
            <div className="hero__subtitle d-flex align-items-center">
              <div className='kbyg'>
                <Subtitle subtitle={'Know before you go'} />
              </div>
              <img src={worldImg} alt="" />
            </div>
            <h1>Travelling opens to door to creating
              <span className="highlight"> memories</span>
            </h1>
            <p>

              Travel is a transformative journey that transcends geographical
              boundaries, offering a kaleidoscope of experiences and memories.
              It is not merely a physical movement from one place to another;
              rather, it is a profound exploration of cultures, landscapes,
              and self-discovery.
              Embarking on a voyage introduces us to the rich tapestry of
              diversity that defines our world. Every destination tells a
              unique story, unveiling its history, traditions, and the
              spirit of its people. 
              From the bustling streets of vibrant
              cities to the serene landscapes of untouched nature, travel
              opens our eyes to the wonders that exist beyond our familiar
              surroundings.
            </p>

          </div>
        </Col>
        <Col lg='2'>
          <HeroImg />
        </Col>
        <Col lg='2'>
          <div className="hero__img-box hero__video-box mt-4">
            <HeroVid />
          </div>
        </Col>
        <Col lg='2'>
          <div className="hero__img-box mt-5">
            <img src={heroImg02} alt="" />
          </div>
        </Col>
        <SearchBar />
      </Row>
    </Container>
  </section>
  {/*------hero section end-----------*/}
  <section>
    <Container>
      <Row>
        <Col lg='3'>
          <h5 className='services__subtitle'>What we serve</h5>
          <h2 className='services__title'>We offer our best services</h2>
        </Col>
        <ServiceList />
      </Row>
    </Container>
  </section>

  {/*featured tour section start*/}
  <section>
    <Container>
      <Row>
        <Col lg='3'>
          <Subtitle subtitle={'Explore'} />
          <h2 className="featured__tour-title">Our featured tours </h2>
        </Col>
        <br />

        <br />
      </Row>
      <Row>

        <FeaturedTourList />

      </Row>
    </Container>
  </section>
  {/*featured tour section end*/}
  {/*experience section start*/}
  <section>
    <Container>
      <Row>
        <Col lg='6'>
          <div className="experience__content">
            <Subtitle subtitle={'Experience'} />
            <h2>With all our experiences<br /> we will serve you</h2>
            <p>We have an experience of 345 years in tour planning and management </p>
          </div>
          <div className="content__wrapper d-flex align-items-center gap-5">
            <div className="counter__box">
              <span>12k+</span>
              <h6>Successful Tours</h6>
            </div>
            <div className="counter__box">
              <span>22k+</span>
              <h6>Clients</h6>
            </div>
            <div className="counter__box">
              <span>34</span>
              <h6>Years of experience</h6>
            </div>
          </div>

        </Col>
        <Col lg='6'>
          <div className="experience__img">
            <img src={experienceImg} alt="" />
          </div>

        </Col>

      </Row>
    </Container>
  </section>
  {/*experience section end*/}


  {/*experience section start*/}

  <section>
    <Container>
      <Row>
        <Col lg='12'>
          <Subtitle subtitle={'Gallery'} />
          <h2 className="gallery__title">Visit customer gallery</h2>

        </Col>
        <Col lg='12'>
          <MasonryImgGallery />
        </Col>
      </Row>

    </Container>
  </section>
  {/*experience section end*/}

  {/*testimonial  section start*/}
  <section>
    <Container>
      <Row>
        <Col lg='12'>
          <Subtitle subtitle={'Fans Love'} />
          <h2 className='testimonial__title'>What our fans love</h2>
        </Col>
        <Col lg='12'>
          <Testimonials />
        </Col>
      </Row>
    </Container>
  </section>
  <NewsLetter />

</>
);

export default Home