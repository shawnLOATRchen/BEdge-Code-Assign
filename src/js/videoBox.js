import React, {Component} from 'react'

export default class VideoBox extends Component{

  render(){
    const props = this.props;
    const snippet = props.video.snippet;

    return(
      <div className="video-box">
        <div className="card">
          <img className="card-img-top" src={snippet.thumbnails.high.url} alt="Card image cap" />
          <div className="card-block">
            <div className="information-box">
              <h4 className="card-title">{snippet.title}</h4>
              <p className="card-text">{snippet.description}</p>
            </div>
            <span className={"btn btn-"+ (props.bookmark ? 'warning':'primary')} onClick={this.handleBookmark.bind(this)} >{props.bookmark ? 'UnBoomark':'Bookmark'}</span>
            <a href={`https://www.youtube.com/watch?v=${props.video.id.videoId}`} className="btn btn-success">Watch Video</a>
          </div>
        </div>
      </div>
    )
  }

  handleBookmark(){
    this.props.toggleBookmark(this.props.video);
  }
}
