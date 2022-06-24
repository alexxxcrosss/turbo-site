import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import AnimationContainer from 'components/animation-container'
import AnimatedHeading from 'components/animated-heading'
import { FormattedMessage } from 'gatsby-plugin-intl'

class ServicesTwo extends React.Component {

    shouldComponentUpdate() {
        return false
    }
      
    render() {

        const Section = styled.section`
            position: relative;
            overflow: hidden;
            background-color: #111;
            padding: 100px 0 50px 0;
            .heading {
                width: 100%;
            }
          }
        `

        const ServiceRow = styled(Row)`
            margin-top: 100px;
        `

         const ServiceHeading = styled.h4`
            font-size: 24px;
            font-weight: 500;
            font-family: Oswald;
            color: #fff;
            margin-bottom: 0px;
        `

        const ServiceSeparator = styled.div`
            height: 2px;
            width: 50px;
            background-color: #04e5e5;
            margin-bottom: 5px;
         `

         const ServiceNumber = styled.h5`
            position: absolute;
            font-size: 60px;
            color: #fff;
            font-weight: 900;
            top: -50px;
            opacity: .1;
            z-index: -1;
            transition: .2s;
         `

         const ServiceElement = styled.div`
            margin-bottom: 90px;
            border-radius: 20px;
            transition: .2s;
            position: relative;
            &:hover ${ServiceNumber} {
                opacity: .3 !important;
                color: #04e5e5;
            }
        `

         const ServiceText = styled.p`
            font-size: 14px;
            font-weight: 300;
            color: #c5c5c5;
            padding-right: 25px;
         `


        return(
            <Section id="services">
                <Container>
                    <AnimatedHeading text="Our Services" code="services" />
                    <ServiceRow>
                        <Col md={4}>
                            <AnimationContainer animation="fadeInDown" delay={200}>
                                    <ServiceElement>
                                        <ServiceNumber>
                                            01
                                        </ServiceNumber>
                                        <ServiceHeading>
                                           <FormattedMessage id="services.shopTitle" />
                                        </ServiceHeading>
                                        <ServiceSeparator/>
                                        <ServiceText>
                                        <FormattedMessage id="services.shopDescription" />
                                        </ServiceText>
                                    </ServiceElement>
                            </AnimationContainer>
                        </Col>
                        <Col md={4}>
                            <AnimationContainer animation="fadeInDown"  delay={400}>
                                <ServiceElement>
                                    <ServiceNumber>
                                        02
                                    </ServiceNumber>
                                    <ServiceHeading>
                                    <FormattedMessage id="services.landingTitle" />
                                    </ServiceHeading>
                                    <ServiceSeparator/>
                                    <ServiceText>
                                    <FormattedMessage id="services.landingDescription" />
                                    </ServiceText>
                                </ServiceElement>
                            </AnimationContainer>
                        </Col>
                        <Col md={4}>
                            <AnimationContainer animation="fadeInDown" delay={600}>
                                <ServiceElement>
                                    <ServiceNumber>
                                        03
                                    </ServiceNumber>
                                    <ServiceHeading>
                                    <FormattedMessage id="services.coprporativeTitle" />
                                    </ServiceHeading>
                                    <ServiceSeparator/>
                                    <ServiceText>
                                    <FormattedMessage id="services.coprporativeDescription" />
                                    </ServiceText>
                                </ServiceElement>
                            </AnimationContainer>
                        </Col>
                        <Col md={4}>
                            <AnimationContainer animation="fadeInDown" delay={800}>
                                <ServiceElement>
                                    <ServiceNumber>
                                        04
                                    </ServiceNumber>
                                    <ServiceHeading>
                                    <FormattedMessage id="services.mobileTitle" />
                                    </ServiceHeading>
                                    <ServiceSeparator/>
                                    <ServiceText>
                                    <FormattedMessage id="services.mobileDescription" />
                                    </ServiceText>
                                </ServiceElement>
                            </AnimationContainer>
                        </Col>
                        <Col md={4}>
                            <AnimationContainer animation="fadeInUp" delay={200}>
                                <ServiceElement>
                                    <ServiceNumber>
                                        05
                                    </ServiceNumber>
                                    <ServiceHeading>
                                    <FormattedMessage id="services.seoTitle" />
                                    </ServiceHeading>
                                    <ServiceSeparator/>
                                    <ServiceText>
                                    <FormattedMessage id="services.seoDescription" />
                                    </ServiceText>
                                </ServiceElement>
                            </AnimationContainer>
                        </Col>
                        <Col md={4}>
                            <AnimationContainer animation="fadeInUp" delay={400}>
                                <ServiceElement>
                                    <ServiceNumber>
                                        06
                                    </ServiceNumber>
                                    <ServiceHeading>
                                    <FormattedMessage id="services.revisionTitle" />
                                    </ServiceHeading>
                                    <ServiceSeparator/>
                                    <ServiceText>
                                    <FormattedMessage id="services.revisionDescription" />
                                    </ServiceText>
                                </ServiceElement>
                            </AnimationContainer>
                        </Col>
                      
                    </ServiceRow>
                </Container>
            </Section>
        )
    }

}

export default ServicesTwo