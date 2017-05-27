import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route} from 'react-router-dom';

import '../sass/index.sass'

import Header from './header'
import Home from './home'
import Bookmark from './bookmark'


class App extends Component{
  constructor(){
    super();
    this.state = { home:true, videos: [], bookmark:[] }
  }

  render(){
    return(
      <div>
        <Header changeTab={this.changeTab.bind(this)}/>
        {
          this.state.home ?
          <Home
            videos={this.state.videos}
            bookmark={this.state.bookmark}
            searchVideo={this.searchVideo.bind(this)}
            toggleBookmark={this.toggleBookmark.bind(this)}
          />
          :
          <Bookmark
            bookmark={this.state.bookmark}
            toggleBookmark={this.toggleBookmark.bind(this)}
          />
        }
      </div>
    )
  }
  changeTab(isHome){
    this.setState({home: isHome});
  }
  searchVideo(items){
    console.log(items);
    this.setState({videos: items});
  }
  toggleBookmark(video){
    const bookmark = this.state.bookmark;
    const ids = bookmark.map(obj => obj.id.videoId);
    const index = ids.indexOf(video.id.videoId);
    if (index >= 0) bookmark.splice(index, 1)
    else bookmark.push(video);
    this.setState({ bookmark:bookmark })
  }

}

ReactDOM.render(<App />, document.getElementById('app'));
