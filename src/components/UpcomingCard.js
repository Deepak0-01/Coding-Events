import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Avatar from '@material-ui/core/Avatar';
import moment from 'moment';
import './Upcoming.css'

function UpcomingCard({
  card_tags,
  event_start_time,
  fees,
  mobile_cover_picture,
  name,
  registered_users,
  registration_status,
  short_desc,
  venue,
  registration_end_time,
  subcategory
}) {


console.log(subcategory);

  const other_users_count  = registered_users.other_users_count;
  const top_users = registered_users.top_users;

 

    return (
        <div className="upcoming__card">

        <Card className="card card__height" style={{ width: "97%", height:"700px",overflow:"hidden" }}>

    <div className="card__image card__height">
  <Card.Img  style={{overflow:"hidden"}} className="card__image" variant="top" src={mobile_cover_picture}  />

   {subcategory==="Upcoming"?<div className="registration__details ">

  <svg height="100" width="100" class="blinking">
  <circle cx="15" cy="50" r="8" fill="#FC7328" />
   
</svg> 
  <p>Registrations {registration_status==="REGISTRATIONS_OPEN"?<strong>open</strong>:""} till {moment.unix(registration_end_time/1000).format("DD MMM  hh:mm a")}</p>
  </div>:""
    }
    </div>
  
  <Card.Body style={{overflow:"hidden"}}>
    <Card.Title className="card__height" style={{height:"fit-content",overflowY:"hidden"}} >{name}</Card.Title>
    
  </Card.Body>
  <ListGroup style={{overflow:"hidden"}} className="list-group-flush card__height">
    <ListGroupItem style={{overflow:"hidden"}} >

    <div className="card__desc card__height">

   <div className="card__details ">
    <b> Starts On</b>
    <p>{moment.unix(event_start_time/1000).format("DD MMM  hh:mm a")}</p>
    
    
    </div>
  

    <div className="card__details">
    <b> Entry Fee</b>
    <p>{fees===0?"Free":fees}</p>
    
    
    </div>
    <div className="card__details">
    <b> Venue</b>
    <p>{venue}</p>
    
    
    </div>
    
    </div>

   
    
    
    
    
    </ListGroupItem>

    <ListGroupItem style={{overflow:"hidden"}}>
    <p style={{overflow:"hidden"}} className="card__desc--original">{short_desc}</p>
    
    </ListGroupItem>
    <ListGroupItem style={{overflow:"hidden"}}>

    <div className="events__displaytags">

    

    {card_tags.map((tag)=>(

      <p className="events__tags--item">
      {tag}
    
    </p>

    ))}
    


    
    
    
    </div>


    
    
    </ListGroupItem>
    
  </ListGroup>
  <Card.Body style={{overflow:"hidden"}}>
    <div className="card__footer card__height">

    <div className="card__participants">

    <div className="card__participants--user">
    {top_users.map((user)=>(

      <Avatar className="users__avatar" style={{height:"25px",width:"25px"}} className="user__avatar" alt={user.name} src={user.image_url} >
      
    </Avatar>
    ))}
    
    </div>

    <p>and <strong>{other_users_count}</strong> others {subcategory==="Upcoming"?"are participating":"participated"}</p>
   

    

   
    
    </div>



  

  {subcategory==="Upcoming"? <Button style={{backgroundColor:"#FA7328"}}  className="register__button" variant="success">REGISTER NOW</Button>:""}
    

    
    </div>
  </Card.Body>
</Card>
            
        </div>
    )
}

export default UpcomingCard
