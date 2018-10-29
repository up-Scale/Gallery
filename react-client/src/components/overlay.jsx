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
const ButtonLeft = styled.input`
  z-index: 3;
  height: 10%
  float: left;
  position: fixed;
  top: 40%;
  left: 3%;
  opacity: 50;
`

  // ${LeftHalf}:hover & {
  //   opacity: 1;
  // }

const ButtonRight = styled.input`
  z-index: 3;
  height: 10%
  float: right;
  position: fixed;
  top: 40%;
  left: 92%
  transform: rotate(180deg);
`

const ButtonExit = styled.input`
  z-index: 3;
  height: 10%;
  float: right;
  position: fixed;
  top: 5%
  left:90%
`

// const LeftHalf = styled.div`
// position: absolute;
// left: 0px;
// width: 50%
// `

// const RightHalf = styled.div`
// position: absolute;
// right: 0px;
// width: 50%;
// `
// const Container = styled.div`
// position: relative;
// top: 50%;
// left: 50%;
// padding: 1rem;
// `

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
        >

        {/* <LeftHalf> */}
          <ButtonLeft type="image" src="https://cdn0.iconfinder.com/data/icons/basic-ui-elements-round/700/01_arrow_left-128.png"/>
          
        {/* </LeftHalf> */}

        {/* <RightHalf> */}
          <ButtonRight type="image" src="https://cdn0.iconfinder.com/data/icons/basic-ui-elements-round/700/01_arrow_left-128.png"/>
        {/* </RightHalf> */}

        <ButtonExit onClick={this.props.handleClick} type="image" src="https://cdn3.iconfinder.com/data/icons/iconic-1/32/x_alt-512.png"/>
        <CenterImage src={this.props.imgs[0]}/>  
        <CarouselImageWrapper>

          {this.props.imgs.map((item, index, array) => {
            return (<CarouselImage src={item}/>)
          })}

        </CarouselImageWrapper>
      </Overlay>)
  } 
}

export default GalleryOverlay