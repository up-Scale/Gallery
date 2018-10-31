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

const CarouselContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 1300px;
`

const CarouselHeader = styled.div`
  padding-top: 10px;
  height: 40px;
  margin: 0 10px 10px;
`

const CenterImage = styled.img`
  max-width: 80%;
  position: relative;
  display:block;
  margin:auto;
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
  clear:both;
`

const BannerSpacer = styled.div`
  margin-top: 10px;
`

const ButtonLeft = styled.input`
  z-index: 3;
  height: 10%
  float: left;
  position: fixed;
  top: 40%;
  left: 3%;
  opacity: 1;
  ${CarouselImageWrapper}:hover & {
    opacity: 0;
    }
`

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

const BannerContainer = styled.div`
  position: relative;
  max-height: 20%;
  justify-content: center;
  max-height: 65vh;
`

const CenterImageWrapper = styled.span`
  width: 100%;
  position: relative;
  display: inline-block;
  box-sizing: inherit;
`

const ContentContainer = styled.div`
  position: relative;
  z-index: 1;
  box-sizing: inherit;
`

const CarouselSection = styled.section`
  padding-left: 24px;
  padding-right: 24px;
`

const CarouselWrapper = styled.div`
  display: block;
  box-sizing: inherit;
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
      centerImageIndex: 0,
      numImgs: props.imgs.length
    }
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleLeftClick = this.handleLeftClick.bind(this)
  }

  handleRightClick(e) {
    let i = this.state.centerImageIndex;
    if (i < this.state.numImgs - 1) i++;
    this.setState({ centerImageIndex: i })
  }

  handleLeftClick(e) {
    let i = this.state.centerImageIndex;
    if (i > 0) i--;
    this.setState({ centerImageIndex: i })
  }

  render() {
    return(
      <Overlay overlay={this.props.overlay}>
        <CarouselContainer>
          <CarouselHeader>
            <ButtonExit onClick={this.props.handleClick} type="image" src="https://cdn3.iconfinder.com/data/icons/iconic-1/32/x_alt-512.png"/>
          </CarouselHeader>

          <ContentContainer>

            <BannerContainer> 
              <CenterImageWrapper>
                <CenterImage src={this.props.imgs[this.state.centerImageIndex]}/>  
              </CenterImageWrapper>
              <BannerSpacer/>
            </BannerContainer>

            {/* <LeftHalf> */}
            <ButtonLeft onClick={this.handleLeftClick} type="image" src="https://cdn0.iconfinder.com/data/icons/basic-ui-elements-round/700/01_arrow_left-128.png"/>
            {/* </LeftHalf> */}

            {/* <RightHalf> */}
            <ButtonRight onClick={this.handleRightClick} type="image" src="https://cdn0.iconfinder.com/data/icons/basic-ui-elements-round/700/01_arrow_left-128.png"/>
            {/* </RightHalf> */}

            <CarouselSection>

              <CarouselImageWrapper>
                {this.props.imgs.map((item, index, array) => {
                  return (<CarouselImage src={item}/>)
                })}
              </CarouselImageWrapper>

            </CarouselSection>



          </ContentContainer>
        </CarouselContainer>
      </Overlay>)
  } 
}

export default GalleryOverlay