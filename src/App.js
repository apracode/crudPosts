import React, { Component } from 'react'
import PostForm from './components/PostForm';
import AllPost from './components/AllPost'

class App extends Component {
  render() {
    return (
      <div className="flexRow">
       <PostForm/>
       <AllPost/>
      </div>
    )
  }
}


export default App;
