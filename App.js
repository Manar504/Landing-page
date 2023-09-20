
import './App.css';
import About from './Components/About';
import MyCard from './Components/Card';
import Cover from './Components/Cover';
import Skills from './Components/Skills';
import Footer from './Components/footer';





function App() {
  return (
    <div className="App">
      
       <Cover></Cover>
       <About></About>  
       <hr></hr>
       <Skills></Skills> 
       <h1 className='port'>Portfolio</h1> 
       <div className='row '> 
       
        
       <MyCard></MyCard>
       <MyCard></MyCard>
       <MyCard></MyCard>
       <MyCard></MyCard>
       <MyCard></MyCard>
       <MyCard></MyCard>
       <MyCard></MyCard>
       <MyCard></MyCard>
       
       
       </div>
       <Footer></Footer>
       

      
    </div>
  );
}

export default App;
