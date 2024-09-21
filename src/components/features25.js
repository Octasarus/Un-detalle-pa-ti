import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features25-container2 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 0 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2>
                {props.feature1Title ?? (
                  <Fragment>
                    <h2 className="features25-text thq-heading-2">
                      Te cuento algo tu como sea te ves hermosa mi amor yo no ui
                      criado para mentir 
                    </h2>
                  </Fragment>
                )}
              </h2>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 1 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2"></div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal3"
          >
            <div className="features25-divider-container3">
              {activeTab === 2 && <div className="features25-container5"></div>}
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1552120476-9ee56c8611f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjkzNDcxNHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgSrc: '/captura%20de%20pantalla%202024-09-21%20105855-1400w.jpg',
  feature3ImgAlt: 'Imagen de mensaje personalizado',
  feature1Title: undefined,
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1712948222262-eedf44738305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjkzNDcxNHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgAlt: 'Imagen de flores amarillas',
  feature2ImgAlt: 'Imagen de poema de amor',
}

Features25.propTypes = {
  feature2ImgSrc: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature1Title: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
}

export default Features25
