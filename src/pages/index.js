import React from "react";
import Layout from "components/layout";
import HeroPersonal from "sections/hero/HeroPersonal.js";
import AboutTwo from "sections/about/AboutTwo.js";
import ServicesOne from "sections/services/ServicesTwo.js";
import PortfolioThree from "sections/portfolio/PortfolioThree.js";
import TestimonialsOne from "sections/testimonials/TestimonialsOne.js";
import ContactCreative from "sections/contact/ContactCreative.js";
import SEO from "../components/seo";
import { useIntl } from "gatsby-plugin-intl";

const Index = (props) => {
  const intl = useIntl();

  return (
    <div>
      <Layout
        isHome={true}
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
          keywords={[`разработка`, `сайтой`, `Молдова`, `Кишинев`, `интернет-магазин`, `создать`]}
          description={intl.formatMessage({ id: "description" })}
        />

        <HeroPersonal />
        <AboutTwo />
        <ServicesOne />
        <PortfolioThree />
        <TestimonialsOne />
        <ContactCreative />
      </Layout>
    </div>
  );
};

export default Index;

