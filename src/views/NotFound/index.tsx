import React from 'react'

import notImg from '@/assets/404_images/404.png'
import notCloud from '@/assets/404_images/404_cloud.png'

import { NotFound } from './style'

function notFound() {
  const message = 'The webmaster said that you can not enter this page...'

  return (
    <NotFound>
      <div className="wscn-http404-container">
        <div className="wscn-http404">
          <div className="pic-404">
            <img className="pic-404__parent" src={notImg} alt="404" />
            <img className="pic-404__child left" src={notCloud} alt="404" />
            <img className="pic-404__child mid" src={notCloud} alt="404" />
            <img className="pic-404__child right" src={notCloud} alt="404" />
          </div>
          <div className="bullshit">
            <div className="bullshit__oops">OOPS!</div>
            <div className="bullshit__info">
              All rights reserved
              <span style={{ color: '#20a0ff' }}> wallstreetcn </span>
            </div>
            <div className="bullshit__headline">{message}</div>
            <div className="bullshit__info">
              Please check that the URL you entered is correct, or click the
              button below to return to the homepage.
            </div>
            <span className="bullshit__return-home">Back to home</span>
          </div>
        </div>
      </div>
    </NotFound>
  )
}

export default notFound