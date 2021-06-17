import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currEventBtn, selectEventbutton } from '../features/eventbuttonSlice'
import './Eventbtn.css';



function EventButton({eventbuttonname}) {
    const btnname = useSelector(selectEventbutton);
    const dispatch = useDispatch();


    const handleEventButton = (e)=>{

        dispatch(currEventBtn({
            btn:eventbuttonname
        }))
  
      
      }
    return (

        <button 
        className="event__btn"
        onClick={handleEventButton}
        style={{backgroundColor:eventbuttonname===btnname?"#FA741B":"#eee",color:eventbuttonname===btnname?"white":"grey",fontSize:"20px" ,borderRadius:"4px",padding:"4px",margin:"5px"}}
        >
        {eventbuttonname}
        
        </button>
      
    )
}

export default EventButton
