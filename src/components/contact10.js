import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact10-text19 thq-heading-2">
                    ¡Contáctame!
                  </h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="contact10-text16 thq-body-large">
                    ¡No puedo esperar a estar juntos de nuevo!
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3>
              {props.location1 ?? (
                <Fragment>
                  <h3 className="contact10-text17 thq-heading-3">
                    Escribe tu mensaje aquí
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location1Description ?? (
                <Fragment>
                  <p className="contact10-text18 thq-body-large">
                    Escríbeme un mensaje
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact10-container3"></div>
          </div>
          <div className="contact10-container4">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <h3>
              {props.location2 ?? (
                <Fragment>
                  <h3 className="contact10-text21 thq-heading-3">Enviar</h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location2Description ?? (
                <Fragment>
                  <p className="contact10-text20 thq-body-large">
                    Envíame un mensaje para saber que piensas de mi detalle
                    virtual
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact10-container5"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location1ImageAlt: 'Imagen de mensaje',
  content1: undefined,
  location1: undefined,
  location1Description: undefined,
  location2ImageSrc:
    '/whatsapp%20image%202024-09-21%20at%2010.10.18%20am-1400w.jpeg',
  heading1: undefined,
  location2ImageAlt: 'Imagen de flores amarillas',
  location1ImageSrc:
    '/whatsapp%20image%202024-09-21%20at%2010.08.47%20am-1400w.jpeg',
  location2Description: undefined,
  location2: undefined,
}

Contact10.propTypes = {
  location1ImageAlt: PropTypes.string,
  content1: PropTypes.element,
  location1: PropTypes.element,
  location1Description: PropTypes.element,
  location2ImageSrc: PropTypes.string,
  heading1: PropTypes.element,
  location2ImageAlt: PropTypes.string,
  location1ImageSrc: PropTypes.string,
  location2Description: PropTypes.element,
  location2: PropTypes.element,
}

export default Contact10
