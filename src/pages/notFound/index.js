import React from 'react'
import { useHistory } from 'react-router-dom'

import './notFound.scss'

function NotFound() {
  const history = useHistory()
  const handleComeBackHome = () => {
    //history.goBack('/')
    history.push('/')
  }
  return (
    <div className='page-not-found'>
      <div className='error-content'>
        <div className='title'>Page Not found.</div>
        <div className='message'>
          <p>
            Looks like your followed a broken link or eniered a URL that doesn't exist on this site.
          </p>
        </div>
        <div className='back' onClick={handleComeBackHome}>
          Back to our site
        </div>
      </div>
    </div>
  )
}

export default NotFound