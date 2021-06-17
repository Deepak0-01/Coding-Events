import React, { useState } from 'react'

function Tag({tagname}) {

    const [isVisited, setisVisited] = useState(false);

    const handleTags = ()=>{

        setisVisited(!isVisited);
    }
    return (
        <button className="tag" onClick={handleTags} style={{backgroundColor:isVisited?"#FA741B":"#eee",color:isVisited?"white":"",borderRadius:"4px",padding:"4px",margin:"5px"}} className="tag__link">{tagname} </button>
    )
}

export default Tag
