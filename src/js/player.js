import React, {Component} from 'react'

export default class Player extends Component{

  render(){
    return(
      <div className="playerBox">
        <span className="close" onClick={() => this.props.togglePlayer()}>&times;</span>
        <div className="player-container container">
          <div className="player">
            <iframe src={`https://www.youtube.com/embed/${this.props.playerId}`} frameBorder="0" allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>
    )
  }
}
