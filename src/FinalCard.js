import React from 'react'
import './App.css';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BiSolidHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";

const FinalCard = ({projectId,category,imageURL,title,description,filterName,ram,filterNameNew}) => {
  const name=projectId===ram
  console.log(name)
 
  return (
    <div>
      {!name && <><header className='cam'>
       <img className='image' src={imageURL} alt={title}/> 
     </header>
     <h1>{title}</h1>
     <p>{description}</p></>}
      
     <button style={{marginLeft:'10px', height:'30px',width:'50px',backgroundColor:'red',color:'white'}} type='button' onClick={()=>filterNameNew(projectId)}>{!name ? <BiSolidShow />:<BiSolidHide /> }</button>
     <button style={{ marginLeft:'10px', height:'30px',width:'50px',backgroundColor:'gold'}} type='button'   onClick={()=>filterName(projectId)}><RiDeleteBin6Fill /></button>

 </div>
    
  )
}

export default FinalCard
