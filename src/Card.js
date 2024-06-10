import React from 'react'
import FinalCard from './FinalCard'

const Card = ({products,ram,filterName,filterNameNew}) => {
  return (
    <div className='sai'>
      {products.map((item)=>{
        return <FinalCard key={item.projectId} {...item}  ram={ram} filterName={filterName} filterNameNew={filterNameNew} />
      })}
    </div>
  )
}

export default Card
