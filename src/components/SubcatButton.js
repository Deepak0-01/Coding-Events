import { useDispatch, useSelector } from 'react-redux';
import { currBtn, selectSubbutton } from '../features/subbuttonSlice';
import './Subbtn.css';

function SubcatButton({btnname}) {

  
    const dispatch = useDispatch();

    const subbtn = useSelector(selectSubbutton);
   

    const handleSubButton = (e)=>{

      dispatch(currBtn({
          btn:btnname
      }))

  
    }
 
  
    return (
        <button 

        className="subbtnn"
        
        onClick={handleSubButton}
        style={{backgroundColor:subbtn===btnname?"#FA741B":"#eee",color:subbtn===btnname?"white":"grey",borderRadius:"4px",padding:"4px",margin:"5px",marginLeft:"40px"}}
        >
        {btnname}
        
        </button>
    )
}

export default SubcatButton
