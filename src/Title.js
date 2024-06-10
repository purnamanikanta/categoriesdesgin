import React from 'react'

const Title = ({name}) => {
  return (
    <article style={{display:'flex',justifyContent:'center'}}>
    <div style={{textAlign:'center',fontWeight:'bold',fontSize:'30px',marginBottom:'50px',backgroundColor:'skyblue',padding:'10px', height:'45px', width:'40%',borderStyle:'solid',borderColor:'green'}}>
      {name}
    </div>
    </article>
  )
}

export default Title
