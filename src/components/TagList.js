import { useEffect, useState } from 'react';
import axios from 'axios';
import Tag from './Tag';
import './TagList.css';
import { addTags, selectUsertags } from '../features/usertagsSlice';
import {useDispatch, useSelector} from 'react-redux';

function TagList() {

    const [tags, setTags] = useState([]);
    const statetags = useSelector(selectUsertags);
    const dispatch = useDispatch();
    console.log(statetags);
  

    useEffect(()=>{

        axios.get("https://api.codingninjas.com/api/v3/event_tags")
        .then(res=>setTags(res.data.data.tags))
        .catch(err=>console.log(err.message));




    },[]);

    const handleTags=(e)=>{
        console.log(e.target.innerText)

        const val = e.target.innerText;

        dispatch(addTags({
            newtag:val
        }))
        
    }




    return (
        <div className="taglist__container" onClick={handleTags}>
        

        {tags.map((tag)=><Tag tagname={tag}/> )}

      
            
        </div>
    )
}

export default TagList
