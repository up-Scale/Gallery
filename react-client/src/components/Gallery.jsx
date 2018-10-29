// Gallery is general component which will behave like an image tag, accepting a src url

// It also has to recieve or fetch a list of photos to show in the gallery

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

const Gallery = ({src, imgs}) => {
  return (
    <div>
      {/* <img src={src}/> */}

    <Container >
      <Image 
        src={src} 
        onClick={this.handleImageClick}/>
      <MagnifyingGlass 
        src = {MAGNIFYING_GLASS_URL}/>
      <GalleryOverlay
        overlay={this.state.overlay}
        handleClick={this.handleOverlayClick}
        bannerImg={src}
        carouselImgs={imgs}/>
    </Container></div>
  ) 
}