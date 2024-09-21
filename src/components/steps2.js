import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './steps2.css'

const Steps2 = (props) => {
  return (
    <div className="steps2-container1 thq-section-padding">
      <div className="steps2-max-width thq-section-max-width">
        <div className="steps2-container2 thq-grid-2">
          <div className="steps2-container3">
            <div className="steps2-container4 thq-card">
              <h2>
                {props.step1Title ?? (
                  <Fragment>
                    <h2 className="steps2-text20 thq-heading-2">
                      Escoge la plantilla
                    </h2>
                  </Fragment>
                )}
              </h2>
              <label className="steps2-text11 thq-heading-3">01</label>
            </div>
            <div className="steps2-container5 thq-card">
              <h2>
                {props.step2Title ?? (
                  <Fragment>
                    <h2 className="steps2-text18 thq-heading-2">
                      Personaliza tu mensaje
                    </h2>
                  </Fragment>
                )}
              </h2>
              <label className="steps2-text13 thq-heading-3">02</label>
            </div>
            <div className="steps2-container6 thq-card">
              <h2>
                {props.step3Title ?? (
                  <Fragment>
                    <h2 className="steps2-text19 thq-heading-2">
                      Envía el detalle
                    </h2>
                  </Fragment>
                )}
              </h2>
              <label className="steps2-text15 thq-heading-3">03</label>
            </div>
            <div className="steps2-container7 thq-card">
              <h2>
                {props.step4Title ?? (
                  <Fragment>
                    <h2 className="steps2-text21 thq-heading-2">
                      ¡Sorpréndela!
                    </h2>
                  </Fragment>
                )}
              </h2>
              <label className="steps2-text17 thq-heading-3">04</label>
            </div>
          </div>
          <img
            alt={props.imageAlt1}
            src={props.imageSrc1}
            className="steps2-image"
          />
        </div>
      </div>
    </div>
  )
}

Steps2.defaultProps = {
  imageSrc1: '/whatsapp%20image%202024-09-21%20at%2010.08.46%20am-700w.jpeg',
  step2Title: undefined,
  imageAlt1: 'image',
  step3Title: undefined,
  step1Title: undefined,
  step4Title: undefined,
}

Steps2.propTypes = {
  imageSrc1: PropTypes.string,
  step2Title: PropTypes.element,
  imageAlt1: PropTypes.string,
  step3Title: PropTypes.element,
  step1Title: PropTypes.element,
  step4Title: PropTypes.element,
}

export default Steps2
