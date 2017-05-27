import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route} from 'react-router-dom';

import '../sass/index.sass'

import Header from './header'
import Home from './home'
import Bookmark from './bookmark'
import Player from './player'

class App extends Component{
  constructor(){
    super();
    this.state = { home:true, videos: [], bookmark:[], playerId: null }
  }
  render(){
    return(
      <main>
        <Header changeTab={this.changeTab.bind(this)}/>
        {
          this.state.home ?
          <Home
            videos={this.state.videos}
            bookmark={this.state.bookmark}
            searchVideo={this.searchVideo.bind(this)}
            toggleBookmark={this.toggleBookmark.bind(this)}
            togglePlayer={this.togglePlayer.bind(this)}
          />
          :
          <Bookmark
            bookmark={this.state.bookmark}
            toggleBookmark={this.toggleBookmark.bind(this)}
            togglePlayer={this.togglePlayer.bind(this)}
          />
        }
        {this.state.playerId && <Player playerId={this.state.playerId} togglePlayer={this.togglePlayer.bind(this)}/>}
      </main>
    )
  }
  changeTab(isHome){
    this.setState({home: isHome});
  }
  searchVideo(items){
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
  togglePlayer(playerId){
    this.setState({ playerId : playerId });
  }
  componentDidMount(){
    window.sr = ScrollReveal();
    sr.reveal('#searchBox',{
      duration: 1000,
      distance: '30px'
    });
    sr.reveal('nav',{
      duration: 1000,
      distance: '30px',
      origin: 'top'
    });
    $('.main-box').fadeOut(0).fadeIn(1000);
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
