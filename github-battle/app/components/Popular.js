import React from 'react'

export default class Popular extends React.Component {
  constructor (props) {
    super(props)

    this.languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
    
    this.state = {
      selectedLanguage: 'All'
    }

    this.updateLanguage = this.updateLanguage.bind(this)
  }

  updateLanguage (lang) {
    this.setState(
      {
        selectedLanguage: lang
      }
    )
  }

  render () {
    return (
      <ul className='flex-center'>
        {this.languages.map((language) => (
          <li key={language}>
            <button 
              className='btn-clear nav-link'
              style={ language === this.state.selectedLanguage ? { color: 'green' } : null }
              onClick={() => this.updateLanguage(language)}>{language}</button>
          </li>
        ))}
      </ul>
    )
  }
}
