
import React from 'react';
import GalleryOverlay from './overlay.jsx'
import styled from 'styled-components';

// Gallery is general component which will behave like an image tag, accepting a src url and possibly a list of carousel image src urls

// It does not interface the database

const MAGNIFYING_GLASS_URL = 'https://image.flaticon.com/icons/svg/181/181561.svg'

const Container = styled.div`
  position: relative;
`
const Image = styled.img`
  width: 100%;
  max-height: 60%;
  display: block;
`
const MagnifyingGlass = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  height: 15%;
  width: 15%;
  opacity: 0;
  ${Container}:hover & {
    opacity: 1;
  }
`
class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      overlay: false,
    }
    
    this.handleImageClick = () => this.setState({ overlay: true })
    this.handleOverlayClick = () => this.setState({ overlay: false})
  }

  render() {
    return (
      <Container>
        <Image 
          src={this.props.src} 
          onClick={this.handleImageClick}/>
        <MagnifyingGlass 
          src = {MAGNIFYING_GLASS_URL}/>
        <GalleryOverlay
          overlay={this.state.overlay}
          handleClick={this.handleOverlayClick}
          src={this.props.src}
          imgs={[this.props.src, ...this.props.imgs]}/>
      </Container>
    )
  }
}

export default Gallery;