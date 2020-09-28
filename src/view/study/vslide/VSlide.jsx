
import React, { Component } from 'react'

import style from './style.scss'

class VSlideIndex extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tabs: []
    }
    this.scrollDiv = React.createRef()
  }

  menuChange = cnt => {
    this.scrollDiv.current.style.marginTop = `-${550 * cnt}px`
  }

  render () {
    return (
      <div className={style['vslide-wrapper']}>
        <div className={style['vslide-container']}>
          <ul className={style['vslide-left-menu']}>
            <li onMouseOver={() => this.menuChange(0)}>nav1</li>
            <li onMouseOver={() => this.menuChange(1)}>nav2</li>
            <li onMouseOver={() => this.menuChange(2)}>nav3</li>
            <li onMouseOver={() => this.menuChange(3)}>nav4</li>
            <li onMouseOver={() => this.menuChange(4)}>nav5</li>
            <li onMouseOver={() => this.menuChange(5)}>nav6</li>
          </ul>
          <div className={style['vslide-right-box']}>
            <div className={style['vslide-right-scroll']} ref={this.scrollDiv}>
              <div className={style['vslide-right-img']}><img src={require('../../../assets/wall/wall1.jpg')} /></div>
              <div className={style['vslide-right-img']}><img src={require('../../../assets/wall/wall2.jpg')} /></div>
              <div className={style['vslide-right-img']}><img src={require('../../../assets/wall/wall3.jpg')} /></div>
              <div className={style['vslide-right-img']}><img src={require('../../../assets/wall/wall4.jpg')} /></div>
              <div className={style['vslide-right-img']}><img src={require('../../../assets/wall/wall5.jpg')} /></div>
              <div className={style['vslide-right-img']}><img src={require('../../../assets/wall/wall6.jpg')} /></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default VSlideIndex
