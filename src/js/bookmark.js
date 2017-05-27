import React, {Component} from 'react'
import VideoBox from './videoBox'

export default class Bookmark extends Component{

  render(){
    if (this.props.bookmark.length === 0) return(
      <div className="container alert alert-warning" id="nobookmark">
        You don{"'"}t have bookmark video
      </div>
    );
    return(
      <div>
        <div className="d-flex flex-wrap justify-content-center">
          {this.props.bookmark.map((video, index) => {
            return(
              <VideoBox
                key={index}
                video={video}
                bookmark={true}
                toggleBookmark={this.props.toggleBookmark}
              />
            )
          })}
        </div>
      </div>
    )
  }

  componentWillMount(){
    $('#header-bookmark').addClass('active-tab');
  }
  componentWillUnmount(){
    $('#header-bookmark').removeClass('active-tab');
  }
}
