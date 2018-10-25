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
const TEST_IMAGE_URL = 'https://massdrop-s3.imgix.net/product-images/massdrop-x-sennheiser-hd-58x-jubilee-headphones/FP/t9QmCD4rQEmdqhiXUZPN_AI7B6379%20copy.jpg'

const MAGNIFYING_GLASS_URL = 'https://image.flaticon.com/icons/svg/181/181561.svg'

const CAROUSEL_IMG_URL = 'https://massdrop-s3.imgix.net/product-images/massdrop-x-sennheiser-hd-58x-jubilee-headphones/FP/UbUHmV3QPiZTK3nHpAHJ_361A2108.jpg?auto=format&fm=jpg&fit=crop&w=473&bg=f0f0f0&dpr=2'

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
    console.log(window.location.href)
    axios.get('/productImages')
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
              src={TEST_IMAGE_URL} 
              onClick={this.handleImageClick}/>
            <MagnifyingGlass 
              src = {MAGNIFYING_GLASS_URL}/>
            <GalleryOverlay
              overlay={this.state.overlay}
              handleClick={this.handleOverlayClick}
              testImage={this.state.bannerImg}
              carouselImgs={this.state.carouselImgs}/>
          </Container>)
  }
}

ReactDom.render(<Gallery/>, document.getElementById('gallery'))