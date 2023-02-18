/* eslint-disable prettier/prettier */
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchValue: ''}

  searchInput = event => {
    this.setState({searchValue: event.target.value})
  }

  render() {
    const {searchValue} = this.state
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachObject =>
      eachObject.name.toLowerCase().includes(searchValue.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <h1 className="main-heading">Destination Search</h1>
        <div className="search-container">
          <input
            onChange={this.searchInput}
            className="input"
            type="search"
            placeholder="search"
          />
          <img
            value={searchValue}
            className="search-icon"
            alt="search icon"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          />
        </div>
        <ul className="content-container">
          {searchResults.map(eachUser => (
            <DestinationItem placesList={eachUser} key={eachUser.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
