import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="testimonial17-text34 thq-heading-2">
                  Testimonials
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text32 thq-body-small">
                  Thank you for the beautiful surprise! The yellow flowers made
                  my day brighter.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong>
                      {props.author1Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text29 thq-body-large">
                            Maria
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text24 thq-body-small">
                            Happy Customer
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text31 thq-body-small">
                        5 stars
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong>
                      {props.author2Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text30 thq-body-large">
                            Carlos
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text35 thq-body-small">
                            Grateful Recipient
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text33 thq-body-small">
                        Highly recommend this thoughtful gesture!
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong>
                      {props.author3Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text27 thq-body-large">
                            Laura
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text25 thq-body-small">
                            Loved One
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong>
                      {props.author4Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text28 thq-body-large">
                            Pedro
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text23 thq-body-small">
                            Appreciative Partner
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text26 thq-body-small">
                        Your gesture touched my heart. Thank you for being so
                        thoughtful.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author4Position: undefined,
  author1Position: undefined,
  author3Position: undefined,
  author3Alt: 'Image of Laura',
  review4: undefined,
  author3Name: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjkzNDcxM3w&ixlib=rb-4.0.3&q=80&w=1080',
  author4Name: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1426543881949-cbd9a76740a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjkzNDcxM3w&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: undefined,
  author2Name: undefined,
  author1Alt: 'Image of Maria',
  review1: undefined,
  author4Alt: 'Image of Pedro',
  content1: undefined,
  review2: undefined,
  heading1: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1578489758854-f134a358f08b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjkzNDcxM3w&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Image of Carlos',
  author2Src:
    'https://images.unsplash.com/photo-1631882456892-54a30e92fe4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNjkzNDcxM3w&ixlib=rb-4.0.3&q=80&w=1080',
  author2Position: undefined,
}

Testimonial17.propTypes = {
  author4Position: PropTypes.element,
  author1Position: PropTypes.element,
  author3Position: PropTypes.element,
  author3Alt: PropTypes.string,
  review4: PropTypes.element,
  author3Name: PropTypes.element,
  author4Src: PropTypes.string,
  author4Name: PropTypes.element,
  author3Src: PropTypes.string,
  author1Name: PropTypes.element,
  author2Name: PropTypes.element,
  author1Alt: PropTypes.string,
  review1: PropTypes.element,
  author4Alt: PropTypes.string,
  content1: PropTypes.element,
  review2: PropTypes.element,
  heading1: PropTypes.element,
  author1Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author2Position: PropTypes.element,
}

export default Testimonial17
