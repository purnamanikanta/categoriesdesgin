import React from 'react'

const AllData = ({categorys,filterProducts}) => {
  return (
    <div>
      {categorys.map((category)=>{
        return <button type='button' onClick={()=>filterProducts(category)}>{category}</button>
      })}
    </div>
  )
}

export default AllData
