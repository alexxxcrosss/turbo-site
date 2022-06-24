import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'
import LoopVideo from './assets/home6.mp4'

class HeroVideo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            width: 0
        }
    }
    updateDimensions = () => {
        if (this.state.height !== window.innerHeight) {
            this.setState({height: window.innerHeight})
        }
        if (this.state.width !== window.innerWidth) {
            this.setState({width: window.innerWidth})
        }
    }

    
    componentDidMount() {
        this.setState({height: window.innerHeight, width: window.innerWidth})
        window.addEventListener('resize', this.updateDimensions)
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions)
    }

    render() {

        const Section = styled.section`
            position: relative;
            .particles {
                position: absolute;
                width: 100%;
                height: 100%;
            }

            background-size: cover;
            background-repeat: no-repeat;
        `
        const VideoContainer = styled.div`
            width: 100%;
            display: flex;
            align-items: center;
            overflow: hidden;
            position: relative;
            video {
                position: absolute;
            }
            video:before{
                content: '';
                display: block;
                position: absolute;
                top:0;
                left:0;
                height: 100%;
                width:100%;
                background-color: rgba(0,0,0,.5);
            }
        `
        const Heading1 = styled.h1`
            font-size: 80px;
            font-family: Oswald;
            line-height: 40px;
            color: #fff;
            font-weight: 400;
            text-transform: uppercase;
            @media (min-width:768px) {
                margin-left: 4px;
            }
            @media (max-width:767px) {
                margin-left: 2px;
            }
            @media (min-width:768px) and (max-width:1500px) {
                font-size: 40px;
            }
            @media (max-width:767px) {
                font-size: 20px;
                line-height: 20px;
            }
        `

        const Heading2 = styled.h2`
            font-size: 120px;
            color: #fff;
            font-weight: 700;
            text-transform: uppercase;
            background: -webkit-linear-gradient(left, #00ffff , #007a7a);
            background: -o-linear-gradient(right, #00ffff, #007a7a);
            background: -moz-linear-gradient(right, #00ffff, #007a7a);
            background: linear-gradient(to right, #00ffff , #007a7a); 
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
           @media (max-width:767px) {
                font-size: 40px;
                line-height: 40px;
            }
           @media (min-width:768px) and (max-width:1500px) {
                font-size: 70px;
            }
        `

        const Type = styled.div`
            font-size: 50px;
            line-height: 50px;
            color: #fff;
            text-transform: uppercase;
            @media (min-width:768px) {
                margin-left: 6px;
            }
            @media (max-width:767px) {
                margin-left: 2px;
            }
            @media (min-width:768px) and (max-width:1500px) {
                font-size: 23px;
                line-height: 20px;
            }
            @media (max-width:767px) {
                font-size: 20px;
                line-height: 20px;
            }
            span {
                font-family: Oswald;
            }
        `
        const Content = styled.div`
            position: relative;
            z-index: 10;  
            padding:35px 10px;
            background: rgb(255,255,255,.0);
            border-radius:1px;
            margin: 0 -15px;
        `

        const Separator = styled.div`
            height: 5px;
            width: 50px;
            background-color: #04e5e5;
            margin-bottom: 30px;
            @media (min-width:768px) {
                margin-left: 6px;
            }
            @media (max-width:767px) {
                margin-left: 2px;
            }
        `

        const BottomContent = styled.div`
            position: absolute;
            width: 100%;
            bottom: -14%;
            z-index: 2;
            @media (min-width:1025px) and (max-width: 1400px) {    
                bottom: -35%;
            }
            @media (max-width:767px) {
                position: relative;
                bottom: 0;
            } 
            @media (min-width:768px) and (max-width: 1023px) {    
                bottom: -25%;
            }
        `



        return (
            <Section id="home"> 
                <VideoContainer style={{height: `${this.state.width > 500 ? this.state.height : 350}px`}}>
                    <video className="home-video" autoPlay="autoplay" loop="loop" muted style={{height: `${this.state.width >= 1024 && this.state.width < 1200 ? "100%": "auto"}`, maxWidth: '100%' }}>
                        <source src={LoopVideo} type="video/mp4" />
                    </video>
                    <Container>
                        <Content>
                            <Heading1>
                                Creative
                            </Heading1>
                            <Heading2>
                                Digital Agency
                            </Heading2>
                            <Separator/>
                            <Type>
                                <Typewriter
                                    options={{
                                    strings: [
                                        'App Developers',
                                        'Web Designers',
                                        'UX Designers',
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    }}
                                />
                            </Type>
                        </Content>
                    </Container>
                </VideoContainer>
                <BottomContent>
                        <Container>
             
                        </Container>
                </BottomContent>
            </Section>
        )
    }
}

export default props => (
    <StaticQuery
      query={graphql`
      query {
        background: file(relativePath: {eq: "background-poly.jpg"}) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              src
            }
          }
        }
        webexpertIcon: file(relativePath: {eq: "icons/shop.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        mobileIcon: file(relativePath: {eq: "icons/mobile.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        seoIcon: file(relativePath: {eq: "icons/landing.png"}) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
      }
      `}
      render={({ 
        background, 
        webexpertIcon, 
        mobileIcon, 
        seoIcon}) => <HeroVideo  
        background={background} 
        webexpertIcon={webexpertIcon} 
        mobileIcon={mobileIcon} 
        seoIcon={seoIcon}
        {...props} />}
    />
  )