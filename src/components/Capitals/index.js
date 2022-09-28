import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    isAtciveId: countryAndCapitalsList[0].id,
  }

  getCountryName = () => {
    const {isAtciveId} = this.state

    const getCapitalAndCountry = countryAndCapitalsList.find(
      eachItem => eachItem.id === isAtciveId,
    )

    return getCapitalAndCountry.country
  }

  onChangeCapital = event => {
    this.setState({isAtciveId: event.target.value})
  }

  render() {
    const {isAtciveId} = this.state
    const country = this.getCountryName()

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div>
            <select
              className="select-tag"
              value={isAtciveId}
              onChange={this.onChangeCapital}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option key={eachItem.id} value={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>Is capital of which country?</p>
          </div>
          <p className="capital">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
