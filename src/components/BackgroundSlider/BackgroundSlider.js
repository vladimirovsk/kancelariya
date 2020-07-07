import React from 'react'
import PropTypes from 'prop-types'
import generateStyleSheet from './generateStyleSheet'
import injectCss from './injectCss'


const NAME = 'ReactBackgroundSlider'

function BackgroundSlider ({
  images,
  duration,
  transition
}) {
  React.useEffect(() => {
    injectCss(
      generateStyleSheet({
        imagesCount: images.length,
        duration,
        transition
      }),
      NAME
    )
  })

  return (
    <div id={NAME}>
      {images.map((img, key) =>
        <figure key={key}
          style={{
            backgroundImage: `url(${img})`,
            animationDelay: `${(duration + transition) * key}s`
          }}
        >
          <div className={"container-fluid"}>
            <div className={"row"}>
              <div className={"col-12"}>
                <div className={"card-text m-0 p-0"} style={{color:'white'}}>
                  <p>Zgubiłeś szlak prowadzący do celu?
                    <br />Nie wiesz jak się poruszać po ścieżkach ustaw?
                    <br/>Szukasz drogowskazu do bezpiecznych prawnie rozwiązań?
                  </p>

                  <h2 className="elementor-heading-title elementor-size-default">Naszym powołaniem jest być Twoim
                    przewodnikiem.</h2>
                  <button type="button" className="mt-1 btn btn-outline-light"><a className={"text-white"} href="#kontact">
                    SKONTAKTUJ SIĘ Z NAMI</a></button>
                </div>
              </div>
            </div>
          </div>
        </figure>
        )}
    </div>
  )
}

BackgroundSlider.defaultProps = {
  duration: 10,
  transition: 2
}

BackgroundSlider.propTypes = {
  images: PropTypes.array.isRequired,
  duration: PropTypes.number,
  transition: PropTypes.number
}

export default BackgroundSlider

/*          <div className={"container-fluid"}>
          <div className={"row"}>
            <div className={"col-12"}>
              <div className={"card-text m-0 p-0"} style={{color:'white'}}>
                <p>Zgubiłeś szlak prowadzący do celu?
                  <br />Nie wiesz jak się poruszać po ścieżkach ustaw?
                  <br/>Szukasz drogowskazu do bezpiecznych prawnie rozwiązań?
                </p>

              <h2 className="elementor-heading-title elementor-size-default">Naszym powołaniem jest być Twoim
                przewodnikiem.</h2>
                <button type="button" className="mt-1 btn btn-outline-light"><a className={"text-white"} href="#kontact">
                 SKONTAKTUJ SIĘ Z NAMI</a></button>
              </div>
            </div>
          </div>
          </div>
*/

/*
          <div className={'wrapper ml-3'} style={{color:'white'}}>
            <div className={'item1'} style={{color:'white'}}></div>
            <div className={'item3'}>
              Zgubiłeś szlak prowadzący do celu?
              <br />Nie wiesz jak się poruszać po ścieżkach ustaw?
              <br/>Szukasz drogowskazu do bezpiecznych prawnie rozwiązań?
              <div className={'item2'}>
                <h2 className="elementor-heading-title elementor-size-default">Naszym powołaniem jest być Twoim
                  przewodnikiem.</h2>
              </div>
              <div className={'item1'}>
                <button type="button" className="mt-1 btn btn-outline-light"><a className={"text-white"} href="#kontact">
                  SKONTAKTUJ SIĘ Z NAMI</a></button>

              </div>
            </div>
          </div>

* */