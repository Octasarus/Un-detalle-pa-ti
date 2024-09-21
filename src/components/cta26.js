import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './cta26.css'

const CTA26 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta26-accent2-bg">
          <div className="cta26-accent1-bg">
            <div className="cta26-container2">
              <div className="cta26-content">
                <span>
                  {props.heading1 ?? (
                    <Fragment>
                      <span className="cta26-text4 thq-heading-2">
                        Te extraño como el sol extraña a la flor, como el sol
                        extraña a la flor en el mas frió invierno, en lugar de
                        haber belleza a donde dirigir su luz, el corazón
                        endurece como el mundo helado al que tu ausencia me
                        desterró.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
              <div className="cta26-actions">
                <button
                  type="button"
                  className="thq-button-filled cta26-button"
                >
                  <span>
                    {props.action1 ?? (
                      <Fragment>
                        <span className="cta26-text3">¡Ver sorpresa!</span>
                      </Fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA26.defaultProps = {
  action1: undefined,
  heading1: undefined,
}

CTA26.propTypes = {
  action1: PropTypes.element,
  heading1: PropTypes.element,
}

export default CTA26
