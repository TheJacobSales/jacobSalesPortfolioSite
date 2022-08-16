import React, {useState} from "react"
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0
        } else if (newIndex >= React.Children.count(children)){
            newIndex = React.Children.count(children) - 1
        }

        setActiveIndex(newIndex)
    }

  return (
    <figure className="carousel">
        <div className="inner" style={{ transform: `translate(-${activeIndex * 100}%)` }}>
            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {width: "100%"})
            })}
        </div>
        <div className="carousel-control">
            <button className="left-button-pos carousel-button-decor" onClick={() => { updateIndex(activeIndex - 1)}}>
                <FaAngleLeft />
            </button>
            <button className="right-button-pos carousel-button-decor" onClick={() => { updateIndex(activeIndex + 1)}}>
                <FaAngleRight />
            </button>
        </div>
    </figure>
  )
}

export const CarouselItem = ( { children, width} ) => {
    return (
        <div className="carousel-item" style={{width : width}}>
            {children}
        </div>
    )
}

export default Carousel