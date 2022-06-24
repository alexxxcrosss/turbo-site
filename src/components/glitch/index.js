import React from "react";
import "./styles.scss";
//Styeld Component does not support @for loops
import { useIntl } from "gatsby-plugin-intl";

const Glitch = (props) => {

  const intl = useIntl();
  const text = intl.formatMessage({'id': `${ props.text }`})

  return (
    <p className="glitch" data-text={text}>
      {text}
    </p>
  );
};
export default Glitch;
