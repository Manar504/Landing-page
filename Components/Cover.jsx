import Image from 'react-bootstrap/Image'; 
import './Cover.css'
import './Button'
import MyButton from './Button';

function Cover() {
  return <header class="vh-100 d-flex align-items-center">
  <Image className='cover'    />;
  <div class="content text-white ps-5 ">  
        
        <h1 class="fw-bolder">We Are Professional</h1>
        <p class="lead">Devolper&Web Design</p>  
        <MyButton text="Contact Us"></MyButton> 
        </div>
        </header>
}

export default Cover;