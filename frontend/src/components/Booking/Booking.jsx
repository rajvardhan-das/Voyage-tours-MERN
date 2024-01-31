import React,{useState,useRef, useContext} from 'react'
import '../Booking/booking.css'
import { Form, FormGroup, ListGroupItem,ListGroup,Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { BASE_URL } from './../../utils/config'


const Booking = ({tour ,avgRating}) => {
    const navigate = useNavigate()
    const {price,reviews,title} = tour
    const {user} = useContext(AuthContext)

    const [booking, setBooking] = useState({
        userId: user && user._id,
        userEmail:user && user.email,
        tourName:title,
        fullName: '',
        phone:'',
        bookAt:'',
        guestSize:'1'
    })

    const handleChange = e =>{
        setBooking(prev=>({...prev, [e.target.id]:e.target.value}))
    };
    const serviceFee = 10;
    const totalAmount = Number(price)* Number(booking.guestSize) + Number(serviceFee)


    //data to srever


    const handleClick = async e=>{
        e.preventDefault()
        console.log(booking)
        try {
            if(!user || user== undefined ||user==null){
                alert('Please sign in')
            }
            const res = await fetch(`${BASE_URL}/booking `,{
                method:'post',
                headers:{
                  "content-Type":"application/json"
        
                },
                credentials:'include',
                body : JSON.stringify(booking)
        
              })
            const result = await res.json()
            if(!res.ok) {
                return alert(result.message)
              }
              navigate('/thank-you')
        }
        catch (err) {
            alert(err.message)
        }
        

    };
  return <div className="booking">
    <div className="booking__top d-flex align-items-center justify-content-between">

        <h3>$ {price} <span>/per person</span></h3>
        <span className="tour__rating d-flex align-items-center">
                    <i class="ri-star-fill"></i>  {avgRating === 0 ? null : avgRating}
                    
         </span>
         </div>           
        {/* ===booking form start */}

        <div className="booking__form">

            <h5>Information</h5>
            <Form className='booking__info-form' onSubmit={handleClick}>
                <FormGroup>
                    <input type="text" placeholder='Full Name' id='fullName' require onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                    <input type="number" placeholder='Phone no.' id='phone' require onChange={handleChange} />
                </FormGroup>
                <FormGroup className='d-flex align-items-center gap-3'>
                    <input type="date" placeholder='' id='bookAt' require onChange={handleChange} />
                    <input type="number" placeholder='Guests' id='guestSize' require onChange={handleChange} />

                </FormGroup>

            </Form>
        </div>

        {/* booking form ends */}

        {/* booking bottom */}

        <div className="booking__bottom">
            <ListGroup>
                <ListGroupItem className='border-0 px-0'>
                    <h5 className='d-flex align-items-center gap-1'>${price} <i class="ri-close-line"></i> 1 person</h5>
                    <span>${price} </span>
                </ListGroupItem>

                <ListGroupItem className='border-0 px-0'>
                    <h5>Service charge</h5>
                    <span>${serviceFee} </span>
                </ListGroupItem>
                
                <ListGroupItem className='border-0 px-0 total'>
                    <h5>Total</h5>
                    <span>${totalAmount} </span>
                </ListGroupItem>
                
            </ListGroup>
            <Button className='btn primary__btn w-100'onClick={handleClick}>Book Now</Button>
        </div>
                  
    </div>


}

export default Booking