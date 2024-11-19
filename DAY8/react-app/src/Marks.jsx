import React from 'react'
import './Masks.css'

const Marks=({m1,m2,m3,m4})=>{
  return (
    <div id="sem">
        <h1>MARKSHEET</h1>
        
        <h2>semester 1:{m1}</h2>
        <h2>semester 2:{m2}</h2>
        <h2>semester 3:{m3}</h2>
        <h2>semester 4:{m4}</h2>
      
    </div>
  )
}

export default Marks
