import React ,{useEffect, useRef,useState, useContext} from 'react'
import '../styles/tour-details.css'
import { Container, Row, Col, ListGroup, Form } from 'reactstrap'
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tours'
import calculateAvgRating from '../utils/avgRating'
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'
import Newsletter from '../shared/NewsLetter'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from './../utils/config'
import { AuthContext } from '../context/AuthContext'


const TourDetails = () => {

  const { id } = useParams()
  const { user } = useContext(AuthContext)
  //this is static we will later import more from the db using api
  
  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating] =useState(null)

  const{data:tour,loading,error} = useFetch(`${BASE_URL}/tours/${id}`)

  const submitHandler = async e =>{
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value

    

    try {

      if(!user || user== undefined ||user==null){
        alert('Please sign in')
      }

      const reviewObj = {
        username : user?.username,
        reviewText,
        rating : tourRating

      }
      const res = await fetch(`${BASE_URL}/review/${id}`,{
        method:'post',
        headers:{
          "content-Type":"application/json"

        },
        credentials:'include',
        body : JSON.stringify(reviewObj)

      })
      const result = await res.json()
      if(!res.ok) {
        return alert(result.message)
      }
      alert(result.message)
    } catch (err) {
      alert(err.message)
    }

    alert(`${tourRating}, ${reviewText} `)
  }

  const { photo, title, price, reviews, desc, city, distance, address, maxGroupSize } = tour
  const options = {day :'numeric', month: 'long', year: 'numeric'};

  useEffect(()=>{
    window.scrollTo(0,0)
  },[tour])

  const { totalRating, avgRating } = calculateAvgRating(reviews)

  return <>
    <section>
      <Container>
      {loading && <h4 className='text-center pt-5'>Loading....</h4> }
        {error && <h4 className='text-center pt-5'>{error}</h4> }
        {
          !loading && !error && <Row>
          <Col lg='8'>
            <div className="tour__content">
              <img src={photo} alt="" /> 

              <div className="tour__info">
                <h2>{title}</h2>
                <div className="align-items-center gap-5 d-flex">
                  <span className="tour__rating d-flex align-items-center gap-1">
                    <i class="ri-star-fill" style={{ "color": "var(--secondary-color)" }}></i>
                    {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? "Not rated" :
                      <span>
                        ({reviews?.length})
                      </span>}

                  </span>
                  <span>
                    <i class="ri-map-pin-user-line"></i> {address}
                  </span>
                </div>
                <div className="tour__extra-details">
                  <span>
                    <i class="ri-map-pin-user-fill"></i>{city}
                  </span>
                  <span>
                    <i class="ri-money-dollar-circle-fill"></i>${price} /per person
                  </span>
                  <span>
                    <i class="ri-map-pin-time-fill"></i>{distance} km
                  </span>
                  <span><i class="ri-group-2-fill"></i>{maxGroupSize} people</span>


                </div>
                <h5>{title}</h5>
                <p>{desc}</p>

              </div>

              {/*reviews section*/}
              <div className="tour__reviews mt-4">
                <h4>Reviews({reviews?.length} reviews) </h4>
                <Form onSubmit={submitHandler}>
                <div className="display-flex align-items-center gap-3 mb-4 rating__group">
  <span onClick={() => setTourRating(1)}>
    1<i className="ri-star-s-fill"></i>
  </span>
  <span onClick={() => setTourRating(2)}>
    2<i className="ri-star-s-fill"></i>
  </span>
  <span onClick={() => setTourRating(3)}>
    3<i className="ri-star-s-fill"></i>
  </span>
  <span onClick={() => setTourRating(4)}>
    4<i className="ri-star-s-fill"></i>
  </span>
  <span onClick={() => setTourRating(5)}>
    5<i className="ri-star-s-fill"></i>
  </span>
</div>

                 <div className="review__input">
                  <input type="text" ref={reviewMsgRef} placeholder='share your thoughts' required/>
                  <button className="btn primary__btn" type='submit'>Submit</button>
                 </div>
                </Form>
                <ListGroup className='user__reviews'>
                    {reviews?.map(review => (
                      
                      <div className="review__item">
                        <img src={avatar} alt="" />
                        <div className="w-100">
                          <div className="align-items-center d-flex justify-content-between">
                            <div>
                              <h5>{review.username}</h5>
                              <p>{new Date(review.createdAt).toLocaleDateString(
                                "en-US", options
                              )} </p>
                            </div>
                            <span className='d-flex align-items-center'>
                            {review.rating}<i className="ri-star-s-fill"></i>
                            </span>
                          </div>
                          <h6>{review.reviewText}</h6>
                        </div>                        
                      </div>                              
                    ))}
                </ListGroup>
              </div>

              {/*reviews section*/}


            </div>

          </Col>

          <Col lg='4'>
            <Booking tour={tour} avgRating={avgRating} />



          </Col>
        </Row>
        }
      </Container>
    </section>
    <Newsletter />
  </>
}

export default TourDetails