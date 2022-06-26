import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Layout from "components/layout";
import SEO from "../components/seo";
import { useIntl } from "gatsby-plugin-intl";
import { Link } from "gatsby";

const Success = (props) => {

  const SuccessText = styled.div`
    min-height: 400px;
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    padding: 45px 15px;
  `;

  const Heading = styled.h1`
    font-size: 60px;
    font-family: Oswald, sans-serif;
    text-align: center;
    color: #fff;
  `;

  const Description = styled.p`
    font-size: 20px;
    color: rgb(245, 245, 245);
    text-align: center;
    white-space: pre-line;
    margin-top: 15px;
  `;

  const Separator = styled.div`
    display: inline-block;
    height: 5px;
    width: 100px;
    background-color: #242424;
    margin-bottom: 25px;
    margin-top: 15px;
  `;

  const HomeButton = styled(Link)`
    display: block;
    height: 50px;
    width: 186px;
    position: relative;
    border: none;
    overflow: hidden;
    transition: 0.5s;
    width: auto;
    line-height: 50px;
    padding: 0 45px;
    margin-top: 30px;
    &::after {
      position: absolute;
      content: "";
      display: inline-block;
      background: rgba(59, 173, 227, 1);
      background: linear-gradient(
        45deg,
        rgba(41, 153, 153, 1) 0%,
        rgba(50, 189, 189, 1) 25%,
        rgba(4, 229, 229, 1) 51%,
        rgba(41, 153, 153, 1) 100%
      );
      height: 100%;
      width: 140%;
      top: 0;
      left: 0;
      transition: 0.5s;
    }

    &:hover {
      text-decoration: none;
      &::after {
        transform: translateX(-20%);
      }
    }
    span {
      position: relative;
      top: 0;
      color: #fff;
      z-index: 10;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  `;

  const intl = useIntl();

  const params = new URLSearchParams(props.location.search);
  const code = params.get("code") || 'feedback';
  const adds = params.get("additional");

  return (
    <div>
      <Layout
        isHome={false}
        sections={[
          "home",
          "about",
          "services",
          "portfolio",
          "testimonials",
          "contact",
        ]}
      >
        <SEO
          lang={intl.locale}
          title={intl.formatMessage({ id: "title" })}
          keywords={[
            `разработка`,
            `сайтой`,
            `Молдова`,
            `Кишинев`,
            `интернет-магазин`,
            `создать`,
          ]}
          description={intl.formatMessage({ id: "description" })}
        />
        <Container>
          
          <Row>
            <Col>
              <SuccessText>
                <Heading>{ intl.formatMessage({ id: `success.${code}title` }) }</Heading>
                <Description>
                  { intl.formatMessage({ id: `success.${code}message` }) }
                </Description>
                <HomeButton to="/">
                  <span>{intl.formatMessage({ id: "nav.goHome" })}</span>
                </HomeButton>
              </SuccessText>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};

export default Success;
