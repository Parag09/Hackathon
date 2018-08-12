import React, { Component } from 'react'

class Avatar extends Component {
  render() {
    const { className, image, placeholderStyle } = this.props

    return image ? (
      <div className={`${className ? `${className} ` : ''}avatar-container`} style={{ backgroundImage: `url(${image})` }}></div>
    ) : (
      <div >
      </div>
    )
  }
}

export default Avatar
