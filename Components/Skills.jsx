import React from 'react' 
import './Skills.css'
import './Progress'
export default function Skills() {
   
  return (
    <div className='big'> 
    <h1>SKILLS</h1>
    
        
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, iure culpa neque esse tempora inventore at, numquam molestiae explicabo, vitae cum quia minus magnam laboriosam. Odio eius minima hic officiis cupiditate esse nam vero! Architecto, culpa. Blanditiis temporibus, facere sunt nobis reiciendis quisquam labore, neque molestias enim rem harum dolore odit, officiis fugit doloribus excepturi pariatur porro iste ex error sapiente debitis beatae! Vitae, aliquid omnis voluptatum sapiente perspiciatis facere repellendus reiciendis facilis eius atque non beatae nam odio vel accusantium incidunt cumque, recusandae a ea minus nesciunt doloribus praesentium. Dolores laborum velit qui expedita repellendus delectus quae minima molestiae!</div>
        
        
        <div className='prog'>
        <ul> 
            
             <li className='title'>MY FOCUS</li> 
            
            <li>UI/UX Design</li> 
            <li>Responsive Design</li>
            <li>Web Design</li>
            <li>Mobile App Design</li>
        </ul>  
        <div className='marg'>
        <div className=' d-flex flex-column mx-50 '>
        
        HTML
        <progress id="html" value="80" max="100" text=" html"  ></progress> 
        CSS
        <progress id="html" value="70" max="100"></progress>
        JAVA SCRIPT
        <progress id="html" value="100" max="100"></progress>
        NOOD.JS
        <progress id="html" value="30" max="100"></progress>
        
        
        
        
        
        </div>
        </div>
        </div>
        

      
    </div>
  )
}
