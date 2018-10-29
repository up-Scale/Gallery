import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import axios from 'axios';
import GalleryOverlay from './components/overlay.jsx';
import Gallery from './components/Gallery.jsx';


const MAGNIFYING_GLASS_URL = 'https://image.flaticon.com/icons/svg/181/181561.svg'
class GalleryContainer extends React.Component {
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

  componentDidMount() {
    // make request for product in url
    let url = new URL(window.location.href)
    console.log(url.pathname.split('/')[1])
    console.log(url.pathname)
    let productName = 'test1'
    if (url.pathname !== '/') productName = url.pathname.split('/')[1]

    axios.get('/productImages/' + productName)
    .then(res => {
      console.log(res.data)
      this.setState({
        bannerImg: res.data.bannerImageUrl,
        carouselImgs: [res.data.images]
      })
    })
  }

  render() {
    return(<div>
            {/* <Container >
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
            </Container> */}
            <Gallery src={this.state.bannerImg}/>
          </div>)
  }
}

ReactDom.render(<GalleryContainer/>, document.getElementById('gallery'))