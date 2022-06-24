import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-intl";


const languageName = {
  en: "EN",
  ro: "RO",
  ru: "RU",
}

const Language = () => {
  return (
    <div className="ml-auto">
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map(language => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale === language ? `rgb(4, 229, 229)` : `white`,
                margin: 10,
                textDecoration: `underline`,
                cursor: `pointer`,
              }}
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  )
}

export default Language