
import React from 'react';


// Gallery is general component which will behave like an image tag, accepting a src url and a list of carousel image src urls

// It does not interface the database if it doesn't need to

const MAGNIFYING_GLASS_URL = 'https://image.flaticon.com/icons/svg/181/181561.svg'

const Container = styled.div`
  position: relative;
`
const Image = styled.img`
  width: 100%;
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
        <Container >
          <Image 
            src={this.props.src} 
            onClick={this.handleImageClick}/>
          <MagnifyingGlass 
            src = {MAGNIFYING_GLASS_URL}/>
          <GalleryOverlay
            overlay={this.state.overlay}
            handleClick={this.handleOverlayClick}
            bannerImg={this.props.src}
            // should do something if imgs is not passed in
            carouselImgs={this.props.imgs || this.props.src}/>
        </Container>
    )
  }
}


const Gallery = ({src, imgs}) => {
  return (
   
  ) 
}