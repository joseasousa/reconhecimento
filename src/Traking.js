import React from 'react'
import 'tracking'
import './computerVision/face'

const Traking = () => (
  <div>
    <div className='demo-title'>
      <p><a href='http://trackingjs.com' target='_parent'>tracking.js</a> － hover image to see all faces detected</p>
    </div>

    <div className='demo-frame'>
      <div className='demo-container'>
        <span id='photo'><img id='img' src='faces.jpg' /></span>
      </div>
    </div>
  </div>
)

export default Traking
