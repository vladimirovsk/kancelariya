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
          <div className={"container"}>
          <div className={"row"}>
            <div className={"col-10"}>
              <div className={"card-text mt-4"}>
                <p>Zgubiłeś szlak prowadzący do celu?
                  <br />Nie wiesz jak się poruszać po ścieżkach ustaw?
                  <br/>Szukasz drogowskazu do bezpiecznych prawnie rozwiązań?
                </p>

              <h2 className="elementor-heading-title elementor-size-default">Naszym powołaniem jest być twoim
                przewodnikiem.</h2>
                <button type="button" className="mt-3 btn btn-outline-light"><a className={"text-white"} href="#kontact">
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
