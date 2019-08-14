import React from 'react'
import { ApiKeyConsumer } from '../context/ApiKey'

export default function Nav () {
  return (
    <ApiKeyConsumer>
      {
        ({ resetApiKey }) => (
          <nav>
            <button
              onClick={resetApiKey}
            >
              Reset
            </button>
          </nav>
        )
      }

    </ApiKeyConsumer>
  )
}