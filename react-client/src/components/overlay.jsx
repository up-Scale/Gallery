import React from 'react';
import styled from 'styled-components'

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  display: -webkit-flex;
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
  max-height: 60%;
  position: relative;
  display:block;
  margin:auto;
  top: 20%;
  flex: none;
`
const CarouselImage = styled.img`
  display: inline-block
  position: relative;
  margin: auto;
  width: 120px;
  float: left;
  padding: 5px;
`
const CarouselImageWrapper = styled.div`
-webkit-flex: 1;
flex: 1;
  position: fixed;
  bottom: 3%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`

class GalleryOverlay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    //   centerImageSrc = props.bannerImg
    }
  }

  render() {
    return(
      <Overlay
        overlay={this.props.overlay}
        onClick={this.props.handleClick}>
        <CenterImage src={this.props.bannerImg}/>  
        <CarouselImageWrapper>

          {this.props.carouselImgs.map((item, index, array) => {
            return (<CarouselImage src={item}/>)
          })}

        </CarouselImageWrapper>
      </Overlay>)
  } 
}

export default GalleryOverlay