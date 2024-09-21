import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Contact10 from '../components/contact10'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Tricky Artistic Barracuda</title>
        <meta property="og:title" content="Tricky Artistic Barracuda" />
      </Helmet>
      <Hero17
        heading1={
          <Fragment>
            <span className="home-text10 thq-heading-1">
              Bienvenida, amor mío. Este espacio es un reflejo de nuestra
              historia, donde cada rincón está lleno de recuerdos y sueños
              compartidos
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text11 thq-heading-2">
              Como el girasol sigue al sol, mi corazón te sigue a ti
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text12">¡Ver sorpresa!</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text13 thq-heading-2">
              Te extraño como el sol extraña a la flor, como el sol extraña a la
              flor en el mas frió invierno, en lugar de haber belleza a donde
              dirigir su luz, el corazón endurece como el mundo helado al que tu
              ausencia me desterró.
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text14 thq-heading-2">
              Te cuento algo tu como sea te ves hermosa mi amor yo no ui criado
              para mentir 
            </span>
          </Fragment>
        }
      ></Features25>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text15 thq-heading-2">
              Usted es la única con la que quiero estar
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text16 thq-heading-2">
              Es lo mas lindo que me ha pasado 
            </span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text17 thq-heading-2">
              Ati no te cambiaria por nada en el mundo
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text18 thq-heading-2">
              y quiero decirte aun estaremos enamorados mi princesa
            </span>
          </Fragment>
        }
      ></Steps2>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text19 thq-body-large">
              ¡No puedo esperar a estar juntos de nuevo!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text20 thq-heading-2">¡Contáctame!</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text21 thq-heading-3">
              Escribe tu mensaje aquí
            </span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text22 thq-heading-3">Enviar</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text23 thq-body-large">
              Escríbeme un mensaje
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text24 thq-body-large">
              Envíame un mensaje para saber que piensas de mi detalle virtual
            </span>
          </Fragment>
        }
      ></Contact10>
    </div>
  )
}

export default Home
