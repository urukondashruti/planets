import Slider from 'react-slick'

import Items from '../PlanetItem'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="background" data-testid="planets">
      <h1>PLANETS</h1>
      <div className="com">
        <Slider {...settings}>
          {planetsList.map(each => (
            <Items key={each.id} listItem={each} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
