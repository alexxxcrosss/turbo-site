import React from "react";
import styled, { keyframes } from "styled-components";
import RevealContent from "components/reveal-content";
import DesktopContent from "./DesktopContent.js";
import { FormattedMessage } from 'gatsby-plugin-intl';

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);
    this.showContent = this.showContent.bind(this);
  }

  showContent() {
    setTimeout(() => {
      this.child.enable();
      document
        .getElementById(`portfolio-item-${this.props.index}`)
        .classList.add("blue-shadow");
    }, 800);
  }

  showImage() {
    const Image = styled.img`
      width: 100%;
      object-fit: cover;
      height: ${this.props.type !== "slider" ? "100%" : "600px"};
      transition: 0.5s;
      height: 700px;
      @media (max-width: 1500px) {
        height: 600px;
      }
      @media (max-width: 1024px) {
        max-width:100%;
        height:auto;
      }
    `;
    if (this.props.type === "slider") {
      return <Image src={this.props.image} alt={this.props.text} />;
    } else {
      return (
        <RevealContent callParentMethod={true} parentMethod={this.showContent}>
          <Image src={this.props.image} alt={this.props.text} />
        </RevealContent>
      );
    }
  }

  render() {
    const MoveUp = keyframes`
            0% { transform: translateY(0); }
            100% { transform: translateY(-20px); }
        `;

    const MoveDown = keyframes`
            0% { transform: translateY(0); }
            100% { transform: translateY(20px); }
        `;

    const Text = styled.div`
      transform: translateY(50px);
      transition: 0.5s;
      width: 100%;
      text-align: center;
    `;
    const Heading = styled.h4`
      color: #fff;
      font-weight: 600;
      font-size: 25px;
    `;

    const SubHeading = styled.h5`
      color: #fff;
      font-size: 18px;
      font-weight: 300;
      
    `;

    const MobileContent = styled.div`
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      opacity: 0 !important;
      transition: 0.5s;
      display: flex;
      align-items: flex-end;
      visibility: visible;
      background-image: linear-gradient(
        to top,
        rgba(4, 229, 229, 1),
        rgba(255, 255, 255, 0)
      );
      @media (min-width: 1025px) {
        display: none !important;
      }
    `;
    const Item = styled.div`
      position: relative;
      min-height: 700px;
      max-height: 700px;
      text-align:left;
      @media (max-width: 1500px) {
        min-height: 600px;
        max-height: 600px;
        height:100%;
      }
      @media (max-width: 1024px) {
        min-height: 400px;
        height:100%;
      }
      overflow: hidden;
      max-width: 95%;
      margin: 40px ${this.props.type !== "slider" ? "0" : "auto"};
      border-radius: 10px;
      &.move-up {
        animation: ${MoveUp} 5s infinite alternate;
      }
      &.move-down {
        animation: ${MoveDown} 3s infinite alternate;
      }
      &:hover {
        ${Text} {
          transform: translateY(-10px);
        }
       
        ${MobileContent} {
          opacity: 1 !important;
        }
      }
      &.blue-shadow {
        box-shadow: 0 28px 60px rgb(4, 229, 229, 0.2);
        transition: 0.5s;
        &:hover {
          box-shadow: 0 28px 60px rgb(4, 229, 229, 0.5);
        }
      }
    `;

    const messgeId = `portfolio.${this.props.category}`;

    if (this.props.type === "slider") {
      return (
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
          <Item className="blue-shadow">
            {this.showImage()}
            <MobileContent>
              <Text>
                <Heading>{this.props.text}</Heading>
                <SubHeading>
                <FormattedMessage id={messgeId} />
                </SubHeading>
              </Text>
            </MobileContent>
            <DesktopContent
              text={this.props.text}
              code={this.props.category}
              ref={(cd) => (this.child = cd)}
              type={this.props.type}
            />
          </Item>
        </a>
      );
    } else {
      return (
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
          <Item
            className={`${
              this.props.index % 2 === 0 ? "move-up" : "move-down"
            }`}
            id={`portfolio-item-${this.props.index}`}
          >
            {this.showImage()}
            <MobileContent>
              <Text>
                <Heading>{this.props.text}</Heading>
                <SubHeading>
                   <FormattedMessage id={messgeId} />
                </SubHeading>
              </Text>
            </MobileContent>
            <DesktopContent
              text={this.props.text}
              code={this.props.category}
              ref={(cd) => (this.child = cd)}
              type={this.props.type}
            />
          </Item>
        </a>
      );
    }
  }
}

export default PortfolioItem;
