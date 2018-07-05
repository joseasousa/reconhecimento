import React, { Component } from 'react'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
    this.fileChangedHandler = this.fileChangedHandler.bind(this);
    this.uploadHandler = this.uploadHandler.bind(this);
  }


  fileChangedHandler = e => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)

  }

  uploadHandler = async () => {
    
  }

  render () {
    return (
      <div>
        <input 
        type="file" 
        onChange={this.fileChangedHandler}/>
       <button onClick={this.uploadHandler}>Upload!</button>
       <img srcSet={this.state.imagePreviewUrl}/>
    </div>
    )
  }
}



export default App
