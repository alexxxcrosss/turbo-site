import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";
import AnimationContainer from "components/animation-container";
import ContactCreativeForm from "./parts/ContactCreativeForm.js";
import { FormattedMessage } from "gatsby-plugin-intl";

class ContactCreative extends React.Component {
  render() {
    const Section = styled.section`
      position: relative;
      overflow: hidden;
      background-color: #000;
      padding: 100px 0;
    `;

    const FormRow = styled(Row)`
      background-color: #111;
    `;

    const ContactCol = styled(Col)`
      min-height: 600px;
      max-height: 600px;
      padding: 0;
      display: flex;
      align-items: center;
    `;

    const Map = styled.iframe`
      border: none;
      height: 100%;
      width: 100%;
    `;

    const IconRow = styled(Row)`
      margin-top: 150px;
    `;

    const IconCol = styled(Col)`
      @media (max-width: 500px) {
        margin-bottom: 140px;
      }
    `;

    const IconContainer = styled.div`
      width: 150px;
      height: 150px;
      margin: auto;
      padding: 35px;
      text-align: center;
      position: relative;
      bottom: 75px;
      background-color: #04e5e5;
      border-radius: 150px;
      transition: 0.5s;
      display:flex;
      justify-content:center;
      align-items:center;
    `;

    const InfoPart = styled.div`
      min-height: 250px;
      background-color: #111;
      border: 2px solid #444;
      &:hover ${IconContainer} {
        background-color: #009e9e;
      }
    `;
    const Icon = styled.img`
      height: 53px;
      width: 53px;
      object-fit: contain;
    `;

    const InfoTitle = styled.h4`
      font-size: 35px;
      color: #fff;
      font-family: Oswald;
      text-align: center;
    `;

    const Info = styled.div`
      position: relative;
      bottom: 30px;
    `;

    const InfoLinkContainer = styled.div`
      text-align: center;
    `;

    const InfoLink = styled.a`
      color: #04e5e5;
      transition: 0.5s;
      &:hover {
        color: #fff;
        text-decoration: none;
      }
    `;

    return (
      <Section id="contact">
        <Container>
          <AnimationContainer animation="fadeIn">
            <FormRow>
              <ContactCol md={6}>
                <ContactCreativeForm />
              </ContactCol>
              <ContactCol md={6}></ContactCol>
            </FormRow>
          </AnimationContainer>
          <IconRow>
            <IconCol md={4}>
              <InfoPart>
                <IconContainer>
                  <Icon
                    src={this.props.emailIcon.childImageSharp.fluid.src}
                    alt="email"
                  />
                </IconContainer>
                <Info>
                  <InfoTitle>Email</InfoTitle>
                  <InfoLinkContainer>
                    <InfoLink href="mailto:email@yoursite.com">
                      info@turbosite.md
                    </InfoLink>
                  </InfoLinkContainer>
                </Info>
              </InfoPart>
            </IconCol>
            <IconCol md={4}>
              <InfoPart>
                <IconContainer>
                  <Icon
                    src={this.props.phoneIcon.childImageSharp.fluid.src}
                    alt="phone"
                  />
                </IconContainer>
                <Info>
                  <InfoTitle>
                    <FormattedMessage id="contact.phone" />
                  </InfoTitle>
                  <InfoLinkContainer>
                    <InfoLink href="tel:+(123)123-1234">
                      (68) 456-78 90
                    </InfoLink>
                  </InfoLinkContainer>
                </Info>
              </InfoPart>
            </IconCol>
            <IconCol md={4}>
              <InfoPart>
                <IconContainer>
                  <Icon
                    src={this.props.telegramIcon.childImageSharp.fluid.src}
                    alt="map"
                  />
                </IconContainer>
                <Info>
                  <InfoTitle>Telegram</InfoTitle>
                  <InfoLinkContainer>
                    <InfoLink target="_blank" href="#">
                      @turbosite
                    </InfoLink>
                  </InfoLinkContainer>
                </Info>
              </InfoPart>
            </IconCol>
          </IconRow>
        </Container>
      </Section>
    );
  }
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        emailIcon: file(relativePath: { eq: "icons/contact_email.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        phoneIcon: file(relativePath: { eq: "icons/contact_phone.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
        telegramIcon: file(relativePath: { eq: "icons/contact_telegram.png" }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              src
            }
          }
        }
      }
    `}
    render={(fields) => <ContactCreative {...fields} {...props} />}
  />
);
