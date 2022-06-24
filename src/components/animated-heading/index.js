import React, { useState, useEffect } from "react";
import handleViewport from "react-in-viewport";
import styled, { keyframes } from "styled-components";
import { FormattedMessage, useIntl } from "gatsby-plugin-intl";

const Animated_Heading = (props) => {
  const [state, setState] = useState({
    inViewport: false,
    animation_complete: false,
    animate: false,
    force: false,
  });

  const { inViewport, forwardedRef, code, text } = props;

  const intl = useIntl();

  const textTranslated = code ?  intl.formatMessage({ id: `section.${ code }` }) : text;

  const Animation = keyframes`
   0% {
        opacity: 0;
    }
    100% {
        transform: translate(0,0);
        opacity: 1;
    }
    `;

  const AnimatedLetter = styled.span`
    transform: translate(0, 5px);
    display: inline-block;
    transition: 1s;
    opacity: 0;
    font-size: ${props.fontSize ? props.fontSize : "70px"};
    line-height: ${props.lineHeight ? props.lineHeight : "1.1"};
    font-family: Oswald;
    text-transform: uppercase;
    font-weight: 400;
    @media (max-width: 767px) {
      font-size: 40px;
      line-height: 40px;
    }
    &.animation_complete {
      transform: translate(0, 0);
      opacity: 1;
    }
    &.animate {
      animation: ${Animation} forwards 0.5s;
    }
  `;

  const Space = styled.span`
    font-size: 100px;
    margin: 0 ${props.space ? props.space : "10px"};
    @media (max-width: 767px) {
      font-size: 40px;
      line-height: 40px;
      margin: 0 5px;
    }
  `;

  useEffect(() => {
    if (state.inViewport !== inViewport && !state.force) {
      if (!state.animation_complete) {
        setState((prev) => ({
          ...prev,
          inViewport: inViewport,
          animate: true,
          force: true,
        }));
        let delay = 1;
        textTranslated.split(" ").forEach(function (value, index) {
          value.split("").forEach(function (v, i) {
            ++delay;
          });
        });
        setTimeout(() => {
          setState((prev) => ({ ...prev, animation_complete: true }));
        }, delay * 200 + 500);
      }
    }
    if (state.inViewport !== inViewport && state.force) {
          setState((prev) => ({ ...prev, animation_complete: true, force: false }));
    }
  });

  const animate = () => {
    let time = 0;
    return textTranslated.split(" ").map((value, index) => {
      return value.split("").map((v, i) => {
        ++time;
        return i + 1 !== value.length ? (
          <AnimatedLetter
            key={i}
            style={{
              animationDelay: `${time * 100}ms`,
              color: index % 2 !== 0 || props.color ? "#04e5e5" : "#fff",
            }}
            className={
              !state.animation_complete
                ? state.animate
                  ? "animate"
                  : ""
                : "animation_complete"
            }
          >
            {v}
          </AnimatedLetter>
        ) : (
          <span key={i}>
            <AnimatedLetter
              style={{
                animationDelay: `${time * 100}ms`,
                color: index % 2 !== 0 || props.color ? "#04e5e5" : "#fff",
              }}
              className={
                !state.animation_complete
                  ? state.animate
                    ? "animate"
                    : ""
                  : "animation_complete"
              }
            >
              {v}
            </AnimatedLetter>
            <Space />
          </span>
        );
      });
    });
  };

  return (
    <h2
      ref={forwardedRef}
      style={{
        textAlign: "center",
        marginBottom: `${props.marginBottom ? props.marginBottom : 20}px`,
      }}
      className="heading"
    >
      {animate()}
    </h2>
  );
};

const AnimatedHeading = handleViewport(Animated_Heading);

export default React.memo(AnimatedHeading);
