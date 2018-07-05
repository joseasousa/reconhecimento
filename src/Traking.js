import React, { Component } from 'react'
import './App.css'

class Traking extends Component {
  componentDidMount () {
    const tracking = window.tracking
    console.log(tracking)
    const img = this.refs.img

    const tracker = new tracking.ObjectTracker('face')

    tracker.setStepSize(2)

    tracking.track(img, tracker)

    tracker.on('track', function (event) {
      event.data.forEach(function (rect) {
        window.plot(rect.x, rect.y, rect.width, rect.height)
      })
    })

    window.plot = function (x, y, w, h) {
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
    console.log('arquivo', image)
    return (

      <div className='row'>
        <div className='demo-container'>
          <img
            ref='img'
            src={image}
          />
        </div>
      </div>

    )
  }
}

export default Traking
