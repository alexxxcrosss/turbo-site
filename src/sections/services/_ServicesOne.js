import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import AnimationContainer from "components/animation-container";
import AnimatedHeading from "components/animated-heading";

class ServicesOne extends React.Component {
  state = {
    height: 0,
    width: 0,
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const Section = styled.section`
      position: relative;
      overflow: hidden;
      background-color: #111;
      background-image: url(${this.props.background.childImageSharp.fluid.src});
      background-size: cover;
      .heading {
        width: 100%;
      }
    `;

    const ServiceContainer = styled.div`
      background-color: rgba(0, 0, 0, 0.9);
      padding: 100px 0;
    `;

    const ServiceCol = styled(Col)`
      padding: 0;
      border-right: #444;
      &.no-border {
        border-right: none;
      }
      @media (max-width: 500px) {
        border-right: none;
      }
      &:nth-of-type(2) > div {
        background-color: #222;
      }
    `;

    const Service = styled.div`
      min-height: 300px;
      background-color: #111;
      transition: 0.2s;
      display: flex;
      justify-content: center;
      flex-direction: column;
      &:hover {
        background-color: #222;
      }
    `;

    const ServiceContent = styled.div`
      padding: 40px;
      color: #fff;
      p {
        font-size: 14px;
        font-weight: 300;
        color: #efefef;
      }
    `;
    const ServiceHeading = styled.h4`
      font-size: 30px;
      font-weight: 300;
      font-family: Oswald;
      color: #d71c6b;
    `;
    const ServiceSeparator = styled.div`
      height: 5px;
      width: 50px;
      background-color: #04e5e5;
      margin-bottom: 14px;
    `;
    const ServiceIcon = styled.div`
      margin-bottom: 20px;
      img {
        max-height: 70px;
      }
    `;

    const ServiceText = styled.p`
      font-size: 14px;
      font-weight: 300;
      color: #c5c5c5;
      min-height: 105px;
    `;

    return (
      <Section id="services">
        <ServiceContainer>
          <Container>
            <AnimatedHeading text="Что мы умеем" marginBottom={50} code="services" />
            <Row>
              <ServiceCol
                md={4}
                style={{
                  borderRight:
                    this.state.width > 500 ? "1px solid #444" : "none",
                }}
              >
                <Service>
                  <ServiceContent>
                    <ServiceIcon>
                      <img
                        src={this.props.landingIcon.childImageSharp.fluid.src}
                        alt="seo experts"
                      />
                    </ServiceIcon>
                    <ServiceHeading>Сайты-визитки</ServiceHeading>
                    <ServiceSeparator />
                    <ServiceText>
                      Мы умеем делать очень крутые сайты-визитки. Для этого мы
                      используем{" "}
                      <a href="https://dinarys.com/ru/blog/jamstack-for-modern-web-development">
                        jam-stack
                      </a>
                      . В итоге получаются невероятно быстрые и безопасные
                      сайты.
                    </ServiceText>
                  </ServiceContent>
                </Service>
              </ServiceCol>

              <ServiceCol
                md={4}
                style={{
                  borderRight:
                    this.state.width > 500 ? "1px solid #444" : "none",
                }}
              >
                <Service>
                  <ServiceContent>
                    <ServiceIcon>
                      <img
                        src={this.props.shopIcon.childImageSharp.fluid.src}
                        alt="web experts"
                      />
                    </ServiceIcon>
                    <ServiceHeading>Интернет-магазины</ServiceHeading>
                    <ServiceSeparator />
                    <ServiceText>
                      Мы создаем классные интернет-магазины. Вы получите профессиональный сайт, который полностью соответствует вашим ожиданиям и бюджету.
                    </ServiceText>
                  </ServiceContent>
                </Service>
              </ServiceCol>

              <ServiceCol md={4}>
                <Service>
                  <ServiceContent>
                    <ServiceIcon>
                      <img
                        src={this.props.mobileIcon.childImageSharp.fluid.src}
                        alt="mobile experts"
                      />
                    </ServiceIcon>
                    <ServiceHeading>Мобильные приложения</ServiceHeading>
                    <ServiceSeparator />
                    <ServiceText>
                      Мы разрабатываем кроссплатформенные мобильные приложения.
                      Одно и то же приложение, одинаково работает под Android и
                      под IOS.
                    </ServiceText>
                  </ServiceContent>
                </Service>
              </ServiceCol>
            </Row>
          </Container>
        </ServiceContainer>
      </Section>
    );
  }
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        background: file(relativePath: { eq: "bg2.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 4000, quality: 100) {
              src
            }
          }
        }

        shopIcon: file(relativePath: { eq: "icons/shop.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        mobileIcon: file(relativePath: { eq: "icons/mobile.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        landingIcon: file(relativePath: { eq: "icons/landing.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }

        email: file(relativePath: { eq: "icons/email.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        ui: file(relativePath: { eq: "icons/sketch.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        network: file(relativePath: { eq: "icons/network.png" }) {
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
      shopIcon,
      mobileIcon,
      landingIcon,
      email,
      ui,
      network,
    }) => {
      return (
        <ServicesOne
          background={background}
          shopIcon={shopIcon}
          mobileIcon={mobileIcon}
          landingIcon={landingIcon}
          email={email}
          ui={ui}
          network={network}
          {...props}
        />
      );
    }}
  />
);
