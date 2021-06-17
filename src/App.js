
import './App.css';
import Events from './components/Events';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import axios from 'axios';

function App() {

  useEffect(()=>{


    axios.get("https://www.getpostman.com/collections/9c0340a9587dc4823aa9")
    .then(res=>console.log(res));
  })
  return (
    <div className="App" style={{  
      background: "#032D6B",
      minHeight:"200vh",
      
      objectFit:"cover",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat'
     
     
     
    }}>
    <Events/>
    
     
    </div>
  );
}

export default App;

/* minHeight:"300vh",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat'*/