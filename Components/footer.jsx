import React from 'react'
import './footer.css'
import MyButton from './Button'


export default function Footer() {
  return (
    <div  className='div'>
         
         <MyButton text="Contact US"></MyButton> 
         <div class="scoial d-flex my-2">
        <div class="icon d-flex align-items-center justify-content-center rounded-circle ">
            <i class="fa-brands fa-facebook"></i></div>
            <div class="icon icon d-flex align-items-center justify-content-center rounded-circle"> <i class="fa-brands fa-instagram"></i></div>
            <div class="icon icon d-flex align-items-center justify-content-center  rounded-circle">  <i class="fa-brands fa-youtube"></i></div>
            <div class="icon icon d-flex align-items-center justify-content-center rounded-circle">  <i class="fa-brands fa-twitter"></i></div>
        </div>
        <p className='text-white'>© 2020 Copyright:ManarMamdouh</p>
         
        
        
  </div> 

      
    
  )
}
