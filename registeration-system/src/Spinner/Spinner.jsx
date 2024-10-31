import React from 'react'
import SpinnerGif from '../Spinner/SpinnerGif.gif'

const Spinner = () => {
  return (
    <div>
       <div className='spinner d-flex align-items-center justify-content-center' style={{height:"100vh"}}>
          <img  src={SpinnerGif} alt="" />
      </div>
    </div>
  )
}

export default Spinner
