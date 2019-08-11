import React from 'react'
import { resetApiKey } from '../utils/ApiKey'


export default function Nav () {
  return (
    <nav>
      <button
        onClick={resetApiKey}
      >
        Reset
      </button>
    </nav>
  )
}