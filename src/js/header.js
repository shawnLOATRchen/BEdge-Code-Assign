import React, {Component} from 'react'

export default class Header extends Component{

  render(){
    return(
      <nav className="navbar navbar-toggleable-md navbar-light">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">Youtube</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <span className="nav-link" onClick={() => this.handleTab(true)}>Home <span className="sr-only">(current)</span></span>
            </li>
            <li className="nav-item">
              <span className="nav-link" onClick={() => this.handleTab(false)}>Bookmarked</span>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
  handleTab(isHome){
    this.props.changeTab(isHome);
  }
}
