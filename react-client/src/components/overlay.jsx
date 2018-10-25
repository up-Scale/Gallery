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
  max-width: 100%;
  position: relative;
  display:block;
  margin:auto;
  top: 25%;
`
const CarouselImage = styled.img`
  display: table;
  position: relative;
  margin: auto;
  width: 120px
`
const CarouselImageWrapper = styled.div`
  position: fixed;
  bottom: 3%;
  width: 100%;
`

class GalleryOverlay extends React.Component {

  render() {
    return(
      <Overlay
        overlay={this.props.overlay}
        onClick={this.props.handleClick}>
        <CenterImage src={this.props.bannerImg}/>  
        <CarouselImageWrapper>
          <CarouselImage src={this.props.carouselImgs[0]}/>
        </CarouselImageWrapper>
      </Overlay>)
  } 
}

export default GalleryOverlay