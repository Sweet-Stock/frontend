import React from 'react'
import IconInative from '../../images/progress_inative.svg'
import IconAtive from '../../images/progress_ative.svg'
import BgProgressBar from '../../images/bg-progress-bar.png'
import './ProgressBar.css'

export default ({ progressBar, img }) => {
  switch (progressBar) {
    case 'short':
      return (
        <div className="progress-bg">
          <img className="progress-bg-bar" src={BgProgressBar} alt="" />
          <img src={img === 0 ? IconAtive : IconInative} alt="" />
          <img src={img === 1 ? IconAtive : IconInative} alt="" />
        </div>
      )
      break

    default:
      return (
        <div className="progress-bg">
          <img className="progress-bg-bar" src={BgProgressBar} alt="" />
          <img src={img === 0 ? IconAtive : IconInative} alt="" />
          <img src={img === 1 ? IconAtive : IconInative} alt="" />
          <img src={img === 2 ? IconAtive : IconInative} alt="" />
          <img src={img === 3 ? IconAtive : IconInative} alt="" />
        </div>
      )
  }
}
