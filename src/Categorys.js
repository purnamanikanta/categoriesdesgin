import React from 'react'

const Categorys = ({categorys,limiting}) => {
  return (
    <section className='pp'>
    <div className='kk'>
      {categorys.map((category)=>{
        return <button className='mm'  type='button' onClick={()=>limiting(category)}>{category}</button>
      })}
    </div>
    </section>
  )
}

export default Categorys
