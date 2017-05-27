import React, {Component} from 'react'

import Search from './search'
import VideoBox from './videoBox'

export default class Home extends Component{

  render(){
    return(
      <div>
        <Search videos={this.props.videos} searchVideo={this.props.searchVideo}/>
        <div className="main-box d-flex flex-wrap justify-content-center">
          {this.props.videos.map((video, index) =>
            <VideoBox
              key={index}
              id={'home'+video.id.videoId}
              video={video}
              bookmark={this.props.bookmark.map(obj => obj.id.videoId).includes(video.id.videoId)}
              toggleBookmark={this.props.toggleBookmark}
            />
          )}
        </div>
      </div>
    )
  }

  componentWillMount(){
    $('#header-home').addClass('active-tab');
  }
  componentWillUnmount(){
    $('#header-home').removeClass('active-tab');
  }
}
