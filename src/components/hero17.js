import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero17.css'

const Hero17 = (props) => {
  return (
    <div className="hero17-header78">
      <div className="hero17-column thq-section-max-width thq-section-padding">
        <div className="hero17-content1">
          <h1>
            {props.heading1 ?? (
              <Fragment>
                <h1 className="hero17-text2 thq-heading-1">
                  Flores para ti mi amor
                </h1>
              </Fragment>
            )}
          </h1>
        </div>
        <div className="hero17-actions"></div>
      </div>
      <div className="hero17-content2">
        <div className="hero17-row-container1 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero17-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
        <div className="hero17-row-container2 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image24 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-placeholder-image25 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-placeholder-image26 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="hero17-placeholder-image27 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image28 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image29 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image30 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-placeholder-image31 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-placeholder-image32 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image33 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero17-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero17.defaultProps = {
  heading1: undefined,
  image5Alt: 'Hero Image',
  image10Src: '/whatsapp%20image%202024-09-21%20at%2010.11.08%20am-1500w.jpeg',
  image4Alt: 'Hero Image',
  image11Src: '/whatsapp%20image%202024-09-21%20at%2010.08.45%20am-1500w.jpeg',
  image6Src: '/whatsapp%20image%202024-09-21%20at%2010.10.18%20am-1500w.jpeg',
  image12Alt: 'Hero Image',
  image3Alt: 'Hero Image',
  image1Src: '/whatsapp%20image%202024-09-21%20at%2010.08.46%20am-1500w.jpeg',
  image7Src: '/whatsapp%20image%202024-09-21%20at%2010.08.45%20am-1500w.jpeg',
  image6Alt: 'Hero Image',
  image2Src: '/el-1500w.jpg',
  image10Alt: 'Hero Image',
  image5Src:
    '/whatsapp%20image%202024-09-21%20at%2010.08.45%20am%20(1)-1500w.jpeg',
  image11Alt: 'Hero Image',
  image9Alt: 'Hero Image',
  image12Src: '/whatsapp%20image%202024-09-21%20at%2010.11.08%20am-1500w.jpeg',
  image1Alt: 'Hero Image',
  image3Src: '/23-1500w.jpg',
  image2Alt: 'Hero Image',
  image8Src: '/whatsapp%20image%202024-09-21%20at%2010.08.46%20am-1500w.jpeg',
  image4Src: '/whatsapp%20image%202024-09-21%20at%2010.07.37%20am-1500w.jpeg',
  image9Src: '/whatsapp%20image%202024-09-21%20at%2010.08.47%20am-1500w.jpeg',
  image8Alt: 'Hero Image',
  image7Alt: 'Hero Image',
}

Hero17.propTypes = {
  heading1: PropTypes.element,
  image5Alt: PropTypes.string,
  image10Src: PropTypes.string,
  image4Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image6Src: PropTypes.string,
  image12Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image7Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image10Alt: PropTypes.string,
  image5Src: PropTypes.string,
  image11Alt: PropTypes.string,
  image9Alt: PropTypes.string,
  image12Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image3Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image8Src: PropTypes.string,
  image4Src: PropTypes.string,
  image9Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image7Alt: PropTypes.string,
}

export default Hero17
