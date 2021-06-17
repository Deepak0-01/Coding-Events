import './Events.css';
import UpcomingCard from './UpcomingCard';
import TagList from './TagList';
import { useState,useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner'
import axios from 'axios';
import SubcatButton from './SubcatButton';
import { useSelector } from 'react-redux';
import { selectUsertags } from '../features/usertagsSlice';
import EventButton from './EventButton';
import { selectEventbutton } from '../features/eventbuttonSlice';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SurroundSoundIcon from '@material-ui/icons/SurroundSound';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import DevicesIcon from '@material-ui/icons/Devices';

function Events() {
    
    const [events, setEvents] = useState([]);
    const [subcategory, setsubCategory] = useState("Upcoming");
    const [loading, setLoading] = useState(true);
    const usertags = useSelector(selectUsertags);
    let eventbutton = useSelector(selectEventbutton);
    let tagurl;
    let url;


    useEffect(()=>{

        setLoading(true);

        if(eventbutton==="All Events")
        eventbutton="ALL_EVENT";
  
        else if (eventbutton==="Webinars")
        eventbutton="WEBINAR";
  
        else if (eventbutton==="Coding Events")
        eventbutton= "CODING_EVENT";
  
        else if (eventbutton==="Bootcamp Events")
        eventbutton="BOOTCAMP_EVENT";
  
        else if (eventbutton==="Workshops")
        eventbutton="WORKSHOP";
  
        else
        eventbutton="ALL_EVENT";
       

         tagurl = usertags.toString();


         url = `https://api.codingninjas.com/api/v3/events?event_category=${eventbutton}&event_sub_category=${subcategory}&tag_list=${tagurl}&offset=2&page=1`;

     
        axios.get(url)
        .then(res=>setEvents(res.data.data.events))
        .then(setLoading(false))
        .catch(err=>console.log(err.message));





    },[subcategory,usertags,eventbutton]);

   

    const handleSubCategories = (e)=>{

        const val = e.target.innerText;

        if(val!=="Upcoming" && val!=="Archived")
        return;
      

     
        else
        setsubCategory(e.target.innerText);

    }

    

  
 
    
   
    return (
        <div className="events">

        <div className="events__header">
        <h1 className="events__h1">EVENTS & NEWS</h1>
        <h3 className="events__h2">Learn, Compete & Grow</h3>
        </div>

       {loading?<Spinner style={{position:"absolute",top:"0px",bottom:"0px",right:"0px"}} animation="grow" />: <div className="events__wrapper">

        <div  className="events__navbar">

        <div className="events__navbar--link">
        <EventNoteIcon fontSize="large"/>

      <EventButton eventbuttonname= "All Events"/>
        
        </div>
        <div className="events__navbar--link">
        <SurroundSoundIcon fontSize="large"/>
        <EventButton eventbuttonname= "Webinars"/>
        
        </div>
        <div className="events__navbar--link">
        <DeveloperModeIcon fpntSize="large"/>
        <EventButton eventbuttonname= "Coding Events"/>
        
        </div>
        <div className="events__navbar--link">
        <SupervisedUserCircleIcon fontSize="large"/>

        <EventButton eventbuttonname= "Bootcamp Events"/>
        
        </div>

        <div className="events__navbar--link">
        <DevicesIcon fontSize="large"/>
        <EventButton eventbuttonname= "Workshops"/>
        
        </div>
        
        
        
        
        
        </div>

        <div onClick={handleSubCategories} className="events__navbar--categories">

        <div  className="events__navbar--categories-link">

        <SubcatButton btnname="Upcoming"/>
        
        </div>
        <div className="events__navbar--categories-link">

        <SubcatButton btnname="Archived"/>
        
        </div>
       
        
        
        
        </div>


        <div className="events__wrapper--cards">

        <div className="events__cards">

        {events.length>0?events.map((event)=>(


            <UpcomingCard 

            card_tags= {event.card_tags}
            cover_picture ={event.cover_picture}
            event_end_time={event.event_end_time}
            event_start_time={event.event_start_time}
            fees={event.fees}
            mobile_cover_picture={event.mobile_cover_picture}
            name={event.name}
            registered_users={event.registered_users}
            registration_status={event.registration_status}
            short_desc={event.short_desc}
            venue={event.venue}
            registration_end_time={event.registration_end_time}
            subcategory={subcategory}

        
            />



        )):<div className="events__notfound events__h1"><h1>No Events Found</h1></div>}
     
      
        
        
        
        
        </div>

        <div className="events__tags">

        <div className="events__tags--title">
        <h4 className="events__tags--header">TAGS</h4>

        <TagList  />
        
        </div>
        
        </div>

       
        
        
        </div>


        
        </div>
       }

            
        </div>
    )
}

export default Events
