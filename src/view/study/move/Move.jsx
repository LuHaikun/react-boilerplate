import React, { Component } from 'react'

import style from './style.scss'
class MoveIndex extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loadingText: 0,
      loadingDisplay: 'block'
    }
    this.mainDiv = React.createRef()
  }

  componentDidMount = () => {
    for (let i = 1; i <= 24; i++) {
      const img = new Image()
      img.src = require(`../../../assets/demo/image${i}.jpg`)
      img.onload = this.imgOnload(i)
    }
  }

  imgOnload = i => {
    const percent = Math.round(i / 24 * 100)
    this.setState({
      loadingText: percent
    })
    if (i === 24) {
      this.start()
    }
  }

  start = () => {
    this.setState({
      loadingDisplay: 'none'
    })
    this.mainDiv.current.onmousemove = this.onMouseMove
  }

  onMouseMove = e => {
    const offsetX = e.offsetX
    const perSize = 500 / 25
    let now = parseInt(offsetX / perSize)
    if (now === 0 || now === 25) now = 24
    this.mainDiv.current.firstChild.src = require(`../../../assets/demo/image${now}.jpg`)
  }

  render () {
    const {
      loadingText,
      loadingDisplay
    } = this.state
    return (
      <div className={style['move-wrapper']}>
        <div className={style['move-main']} ref={this.mainDiv}>
          <img src={require('../../../assets/demo/image1.jpg')} alt='' />
        </div>
        <div className={style['move-loading']} style={{ display: loadingDisplay }}>
          <div className={style['move-center']}>
            <img src={require('../../../assets/demo/loading.png')} alt='' />
            <p className={style['move-title']}>已加载{loadingText}%...</p>
          </div>
        </div>
      </div>
    )
  }
}

export default MoveIndex
