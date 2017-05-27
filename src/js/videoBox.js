import React, {Component} from 'react'

export default class VideoBox extends Component{

  constructor(){
    super()
    this.state = { popUnbookmark: false }
  }

  componentWillMount(){

  }

  render(){
    const props = this.props;
    const snippet = props.video.snippet;

    return(
      <div className="video-box" id={this.props.id}>
        <div className="card video-card">
          <img className="card-img-top" src={snippet.thumbnails.high.url} alt="Card image cap" />
          <div className="card-block">
            <div className="information-box">
              <h4 className="card-title">{snippet.title}</h4>
              <p className="card-text">{snippet.description}</p>
            </div>
            <span className={"btn btn-"+ (props.bookmark ? 'warning':'primary')} onClick={this.handleBookmark.bind(this)} >{props.bookmark ? 'UnBoomark':'Bookmark'}</span>
            <span className="btn btn-success" onClick={this.handleWatch.bind(this)} >Watch Video</span>
          </div>
        </div>
        {this.state.popUnbookmark &&
        <div className="unbookmark-box">
          <div className="pop-remove-video card">
            <div className="card-header">Unbookmark video?</div>
            <div className="buttons d-flex justify-content-around">
              <div className="btn btn-sm btn-secondary" onClick={this.unboomkark.bind(this)}>Yes, Unbookmark</div>
              <div className="btn btn-sm btn-info" onClick={this.cancel.bind(this)}>Cancel</div>
            </div>
          </div>
        </div>}
      </div>
    )
  }

  handleBookmark(){
    if (this.props.bookmark){
      this.setState({ popUnbookmark: true });
    } else {
      this.props.toggleBookmark(this.props.video);
    }
  }

  handleWatch(){
    this.props.togglePlayer(this.props.video.id.videoId);
  }

  unboomkark(){
    this.props.toggleBookmark(this.props.video);
    this.setState({ popUnbookmark: false });
  }

  cancel(){
    this.setState({ popUnbookmark: false });
  }

}
