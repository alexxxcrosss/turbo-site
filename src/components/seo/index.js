 import React from "react"
 import Helmet from 'react-helmet'
 import { useStaticQuery, graphql } from "gatsby"
 
 function SEO({ description, lang, meta = [], keywords = [], title }) {
   const { site } = useStaticQuery(
     graphql`
       query {
         site {
           siteMetadata {
             title
             description
           }
         }
       }
     `
   );

   console.log( meta, ' description!!!')
 
   const metaDescription = description || site.siteMetadata.description
 
   return (
     <Helmet
       htmlAttributes={{
         lang,
       }}
       title={title}
       titleTemplate={`%s | ${site.siteMetadata.title}`}
       meta={[
         {
           name: `description`,
           content: metaDescription,
         },
         {
           property: `og:title`,
           content: title,
         },
         {
           property: `og:description`,
           content: metaDescription,
         },
         {
           property: `og:type`,
           content: `website`,
         },
         
       ]
         .concat(
           keywords.length > 0
             ? {
                 name: `keywords`,
                 content: keywords.join(`, `),
               }
             : []
         )
         .concat(meta)}
     />
   )
 }
 
 
 export default SEO