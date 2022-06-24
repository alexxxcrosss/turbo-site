import React, {useState, useEffect} from "react";
import { StaticQuery, graphql } from "gatsby";
import styled, { keyframes } from "styled-components";
import Typewriter from "typewriter-effect";
import Glitch from "components/glitch";
import { useIntl } from "gatsby-plugin-intl";

const HeroPersonal = props => {

  const [state, setState] = useState({
    height: 0,
    width: 0,
  });

  const intl = useIntl();

  function updateDimensions() {
    if (state.height !== window.innerHeight) {
      setState((prevstate) => ({ ...prevstate, height: window.innerHeight }));
    }
    if (state.width !== window.innerWidth) {
      setState((prevstate) => ({ ...prevstate, width: window.innerWidth }));
    }
  };

  useEffect(() => {
    setState((prevstate) => ({ ...prevstate, height: window.innerHeight, width: window.innerWidth }));
    window.addEventListener("resize", updateDimensions);
    if (window.pageYOffset < window.innerHeight) {
      document.body.addEventListener("mousemove", (e) => {
        var X = (e.clientX * -0.05) / 8;
        var Y = (e.clientY * -0.05) / 8;
        var element = document.getElementsByClassName("parallax-hero-item");
        var i;
        for (i = 0; i < element.length; i++) {
          element[i].style.transform = `translate(${X}px, ${Y}px)`;
        }
      });
    }

    return () => {
        window.removeEventListener("resize", updateDimensions);
    }
  }, []);

    const Section = styled.section`
      position: relative;
      .particles {
        position: absolute;
        width: 100%;
        height: 100%;
      }
      background-image: url(${props.background.childImageSharp.fluid.src});
      background-size: cover;
      background-repeat: no-repeat;
     
    `;

    const Overlay = styled.div`
      width: 100%;
      display: flex;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
    `;

    const Heading = styled.div`
      .glitch {
        font-size: 140px;
        line-height: 140px;
        font-weight: 600;
        color: #fff;
        @media (max-width: 767px) {
          font-size: 40px;
          line-height: 50px;
        }
      }
    `;

    const SubHeading = styled.h2`
      font-size: 18px;
      font-weight: 300;
      color: #ccc;
      text-transform: uppercase;
      letter-spacing: 4px;
    `;
    const Type = styled.div`
      font-size: 50px;
      line-height: 50px;
      color: #fff;
      text-transform: uppercase;
      margin-left: 6px;
      @media (min-width: 768px) and (max-width: 1500px) {
        font-size: 23px;
        line-height: 20px;
      }
      @media (max-width: 767px) {
        font-size: 20px;
        line-height: 20px;
      }
      span {
        font-family: Oswald, sans-serif;
      }
    `;
    const gradientAnimation = keyframes`
            0% {
              background-position: 15% 0%;
            }
            50% {
              background-position: 85% 100%;
            }
            100% {
              background-position: 15% 0%;
            }
          `;

    const HeadingBox = styled.div`
      height: 500px;
      width: 900px;
      margin: auto;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: relative;
      background: rgb(255,255,255,0);
      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 5px;
        /*
        background: linear-gradient(
          120deg,
          #04e5e5,
          #ef4e7b,
          #a166ab,
          #5073b8,
          #1098ad,
          #07b39b,
          #6fba82
        );
        */
        background: linear-gradient(
            120deg,
            #04e5e5,
            #a166ab
          );
        background-size: 300% 300%;
        clip-path: polygon(
          0% 100%,
          10px 100%,
          10px 10px,
          calc(100% - 10px) 10px,
          calc(100% - 10px) calc(100% - 10px),
          10px calc(100% - 10px),
          10px 100%,
          100% 100%,
          100% 0%,
          0% 0%
        );
      }
      &.animate:after {
        animation: ${gradientAnimation} 2s ease-in-out infinite;
      }
      @media (max-width: 767px) {
        height: 350px;
      }
    `;

    const Resume = styled.a`
      color: #fff;
      text-decoration: none;
      border-bottom: 2px solid;
      font-weight: 300;
      transition: 0.5s;
      margin-top: 60px;
      &:hover {
        color: #fff;
        text-decoration: none;
        border-color: #04e5e5;
      }
    `;

    const typedArr = [
        `${intl.formatMessage({'id':'header.typedStringOne'})}`,
        `${intl.formatMessage({'id':'header.typedStringTwo'})}`,
        `${intl.formatMessage({'id':'header.typedStringThree'})}`
    ]

    return (
      <Section id="home">
        <Overlay
          style={{
            height: `${state.width > 500 ? state.height : 350}px`,
          }}
        >
          <HeadingBox className="parallax-hero-item animate">
            <SubHeading className="parallax-hero-item">
              {intl.formatMessage({'id':'header.subHeading'})}
            </SubHeading>
            <Heading className="parallax-hero-item">
              <Glitch text="header.heading" />
            </Heading>
            <Type className="parallax-hero-item">
              <Typewriter
                options={{
                  strings: typedArr,
                  autoStart: true,
                  loop: true,
                }}
              />
            </Type>
            <Resume href="./">{intl.formatMessage({'id':'header.button'})}</Resume>
          </HeadingBox>
          {/*this.shapes()*/}
        </Overlay>
      </Section>
    );
  

//   const shapes = () => {
//     const MoveUp = keyframes`
//             0% { 
//                 transform: translateY(0);
//             }
//             100% {
//                 transform: translateY(-40px);
//             }
//         `;

//     const MoveDown = keyframes`
//             0% { 
//                 transform: translateY(0);
//             }
//             100% {
//                 transform: translateY(40px);
//             }
//         `;
//     const Shape = styled.img`
//       position: absolute;
//       height: 50px;
//       &.move-up {
//         animation: ${MoveUp} 3s infinite alternate;
//       }
//       &.move-down {
//         animation: ${MoveDown} 3s infinite alternate;
//       }
//       @media (max-width: 767px) {
//         height: 20px;
//       }
//     `;

//     return props.shapes.map((value, index) => {
//       return (
//         <Shape
//           style={{
//             left: `${(index + 1) * 10}%`,
//             bottom: `${
//               Math.random() *
//                 (+((index + 1) % 2 === 0 ? 10 : 90) - 
//                   +((index + 1) % 2 === 0 ? 5 : 80)) +
//               +((index + 1) % 2 === 0 ? 5 : 80)
//             }%`,
//           }}
//           key={index}
//           src={value.node.childImageSharp.fluid.src}
//           alt="shape"
//           className={
//             Math.floor(Math.random() * 10) % 2 === 0 ? "move-up" : "move-down"
//           }
//         />
//       );
//     });
//   }
}
export default (props) => (
  <StaticQuery 
    query={graphql`
      query {
        background: file(
          relativePath: { eq: "bg-6.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              src
            }
          }
        }
        shapes: allFile(
          filter: {
            extension: { regex: "/(png)/" }
            relativeDirectory: { eq: "shapes" }
          }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 100) {
                  src
                }
              }
            }
          }
        }
      }
    `}
    render={({ background, shapes }) => (
      <HeroPersonal background={background} shapes={shapes.edges} {...props} />
    )}
  />
);
