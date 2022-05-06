import React from 'react'

function Menu({data}) {
  return (
    <div className='good-menu' >
      {
      data.map((elem)=>{
        return (
          <div key={elem.id}>
         
          <img src={elem.img}/>
          <div>
          <h3>{elem.title}</h3>
          <p>{elem.desc}</p>
          </div>
          
          </div>
        )
      })

    }

    </div>
  )
}

export default Menu