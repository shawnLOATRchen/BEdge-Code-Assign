import React, {Component} from 'react'
import axios from 'axios'

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search',
      API_KEY = 'AIzaSyAuT8IeWfRbGXPbdG71Dd2JER_FYjx38UQ',
      part = 'snippet',
      maxResults = 24,
      type = 'video';

export default class Search extends Component{

  componentWillMount(){
    if (this.props.videos.length === 0){
      this.search("nba playoff");
    }
  }

  render(){
    return(
      <div id="searchBox" className="container">
        <div className="input-group">
          <input type="text" ref="searchText" className="form-control" placeholder="Search for..." />
          <span className="input-group-btn">
            <button className="btn btn-secondary" type="button" onClick={this.handleSearch.bind(this)} >Search</button>
          </span>
        </div>
      </div>
    )
  }

  handleSearch(){
    this.search(this.refs.searchText.value);
    $('.main-box').fadeOut(0).fadeIn(1000);
  }

  search(searchText){
    axios.get(
      `${BASE_URL}?part=${part}&maxResults=${maxResults}&q=${searchText}&type=${type}&key=${API_KEY}`
    ).then((response) => {
      this.props.searchVideo(response.data.items);
    })
  }
}
