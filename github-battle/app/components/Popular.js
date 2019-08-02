import React from 'react'
import PropTypes from 'prop-types'
import { fetchPopularRepos } from '../utils/api'

function LanguagesNav ({ selected, onUpdateLanguage }) {
  const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']

  return (
    <ul className='flex-center'>
      {
        languages.map((language) => (
          <li key={language}>
            <button
              className='btn-clear nav-link'
              style={ language === selected ? { color: 'green' } : null }
              onClick={() => onUpdateLanguage(language)}
            >
              {language}
            </button>
          </li>
        ))
      }
    </ul>
  )
}

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired
}

export default class Popular extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedLanguage: 'All',
      repos: {},
      error: null
    }

    this.updateLanguage = this.updateLanguage.bind(this)
    this.isLoading = this.isLoading.bind(this)
  }

  componentDidMount () {
    this.updateLanguage(this.state.selectedLanguage)
  }

  updateLanguage (lang) {
    this.setState(
      {
        selectedLanguage: lang,
        error: null
      }
    )

    if (!this.state.repos[lang]) {
      fetchPopularRepos(lang)
        .then((data) => {
          this.setState(({ repos }) => ({
            repos: {
              ...repos,
              [lang]: data
            }
          }))
        })
        .catch((error) => this.setState({ error: error }))
    }
  }

  isLoading () {
    const { selectedLanguage, repos, error } = this.state

    return !repos[selectedLanguage] && error === null
  }

  render () {
    const { selectedLanguage, repos, error } = this.state
    return (
      <React.Fragment>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />

        {this.isLoading() && <p>LOADING...</p>}
        {error && <p>{error.message}</p>}
        {repos[selectedLanguage] && <pre>{JSON.stringify(repos[selectedLanguage], null, 2)}</pre>}
      </React.Fragment>
    )
  }
}
