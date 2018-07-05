import React, { Component } from 'react'
import Traking from './Traking'
import NavBar from './component/NavBar'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      file: '',
      imagePreviewUrl: ''
    }
    this.fileChangedHandler = this.fileChangedHandler.bind(this)
  }

  componentDidMount () {
    this.setState({
      file: '',
      imagePreviewUrl: ''
    })
  }

  fileChangedHandler (e) {
    e.preventDefault()

    const reader = new FileReader()
    const file = e.target.files[0]

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      })
    }

    reader.readAsDataURL(file)
  }

  render () {
    const {imagePreviewUrl} = this.state
    let $imagePreview = null
    if (imagePreviewUrl) {
      $imagePreview = (<Traking image={imagePreviewUrl} />)
    }

    return (
      <div>
        <NavBar />
        <div className='container'>
          <div className='row'>
            <div className='col s2'>
              <input type='file' onChange={this.fileChangedHandler} />
            </div>
            <div className='col s10 center'>
              {$imagePreview}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
