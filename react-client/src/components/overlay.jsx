import React from 'react';
import styled from 'styled-components'

const Overlay = styled.div`
height: 100%;
width: 100%;
display: ${props => props.overlay ? "block" : "none"};
position: fixed;
z-index: 1;
top: 0;
left: 0;
background-color: rgb(0,0,0);
background-color: rgba(0,0,0, 0.9);
`
const CenterImage = styled.img`
  vertical-align: middle;
  max-height: 100%;
  max-width: 100%;
  position: relative;
  top: 25%;

`

class GalleryOverlay extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(<Overlay
            overlay={this.props.overlay}
            onClick={this.props.handleClick}>
            <CenterImage src={this.props.testImage}/>
          </Overlay>)
  }
}

export default GalleryOverlay