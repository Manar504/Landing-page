import React from 'react'
import MyButton from './Button'
import './About.css'

export default function About() {
  return (
    <div className='container-fluid'>
    <div className='d-flex justify-content-around  text-white'>
        <h1>ABOUT ME </h1>
        <div className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam praesentium impedit iste eius itaque ipsum porro earum ut blanditiis fugit deserunt dignissimos fuga perferendis quo facilis minima beatae mollitia, et quia voluptate quis! Ullam fugit perspiciatis facere? Placeat repudiandae similique nostrum ex quas, autem alias cumque enim suscipit aspernatur in accusamus earum maiores illum iure maxime odio adipisci ullam voluptatem dolores excepturi optio architecto, repellendus aliquam. Quis, rerum reprehenderit. Similique eveniet blanditiis magnam voluptas accusamus vel natus molestias aliquam dicta cupiditate ut iste, iure laudantium repellendus molestiae quia magni cum id doloribus et corrupti dolores placeat, libero consectetur. Doloremque, quos!</div>
        </div>
        <MyButton text="Download Resume"></MyButton>
      
    </div>
  )
}

