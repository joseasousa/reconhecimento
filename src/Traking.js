import React, { Component } from 'react'
import './Traking.css'

class Traking extends Component {
  componentDidMount () {
    const tracking = window.tracking
    const img = this.refs.img

    const tracker = new tracking.ObjectTracker('face')

    tracker.setStepSize(2)

    tracking.track(img, tracker)

    tracker.on('track', event =>
      event.data.forEach(rect =>
        window.plot(rect.x, rect.y, rect.width, rect.height)
      )
    )

    window.plot = (x, y, w, h) => {
      const rect = document.createElement('div')
      document.querySelector('.demo-container').appendChild(rect)

      rect.classList.add('rect')
      rect.style.width = w + 'px'
      rect.style.height = h + 'px'
      rect.style.left = (img.offsetLeft + x) + 'px'
      rect.style.top = (img.offsetTop + y) + 'px'
    }
  }

  render () {
    const {image} = this.props

    return (

      <div className='row'>
        <div className='demo-container'>
          <img
            ref='img'
            alt='img'
            src={image}
            width='600'
            height='400'
          />
        </div>
      </div>

    )
  }
}

export default Traking
