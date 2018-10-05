import React from 'react'
import Carrousel from './Carrousel';
import TimeUtil from './TimeUntil';
const Featured = () => {
  return (
    <div style={{position: 'relative'}}>
      <Carrousel />
      <div className="artist_name">
        <div className="wrapper">Join Us Now </div>
      </div>
      <TimeUtil />
    </div>
  )
}

export default Featured;



