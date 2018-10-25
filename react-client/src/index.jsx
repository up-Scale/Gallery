import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import GalleryOverlay from './components/overlay.jsx'

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
const MAGNIFYING_GLASS_URL = 'https://image.flaticon.com/icons/svg/181/181561.svg'
class Gallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      overlay: false,
      bannerImg: '',
      carouselImgs: []
     }
    this.handleImageClick = () => this.setState({ overlay: true })
    this.handleOverlayClick = () => this.setState({ overlay: false})
  }

  componentWillMount() {
    // make request for product in url
    let url = new URL(window.location.href)
    console.log(url)
    const productName = 'test'

    axios.get('/productImages/' + productName)
    .then(res => {
      console.log(res.data)
      this.setState({
        bannerImg: res.data.bannerImageUrl,
        carouselImgs: res.data.images
      })
    })
  }

  render() {
    return(<Container >
            <Image 
              src={this.state.bannerImg} 
              onClick={this.handleImageClick}/>
            <MagnifyingGlass 
              src = {MAGNIFYING_GLASS_URL}/>
            <GalleryOverlay
              overlay={this.state.overlay}
              handleClick={this.handleOverlayClick}
              bannerImg={this.state.bannerImg}
              carouselImgs={this.state.carouselImgs}/>
          </Container>)
  }
}

ReactDom.render(<Gallery/>, document.getElementById('gallery'))