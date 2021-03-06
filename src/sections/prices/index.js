import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Row, Col, Container } from 'react-bootstrap'
import styled from 'styled-components'
import AnimatedHeading from 'components/animated-heading'

class TeamTwo extends React.Component {

    shouldComponentUpdate() {
      return false
    }
  
    render() {

        const Section = styled.section`
          background-image: url(${this.props.background.childImageSharp.fluid.src});
          background-size: cover;
          padding: 100px 0;
          position: relative;

        `

        const Overlay = styled.div`
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          background-color: rgba(0,0,0,.8);
        `
        const TeamContainer = styled.div`
            padding: 50px 0 0 0;
            @media (max-width:767px) {
              padding: 0 50px;
            }
        `

        return (
            <Section id="team">
                  <Overlay />
                  <Col md={12}>
                    <Container>
                      <AnimatedHeading text="Team Members" />
                    </Container>
                  <TeamContainer>
                    <Container>
                      <Row>
                        {this.team()}
                      </Row>
                    </Container>
                  </TeamContainer>
                </Col>
            </Section>
        )
    }

  team() {
      const { items } = this.props
      
      return items.map((value, index) => {
        return (
          <Col md={3} key={index}>
            <TeamItem 
                index={index} 
                image={value.content.frontmatter.image.childImageSharp.fluid.src} 
                name={value.content.frontmatter.name} 
                profession={value.content.frontmatter.profession}
                type="col"
            />
          </Col>
        )
      })
    }
}


export default props => (
  <StaticQuery
      query={graphql`
          query {
            background: file(relativePath: {eq: "bg3.jpg"}) {
              childImageSharp {
                fluid(maxWidth: 4000, quality: 100) {
                  src
                }
              }
            }
            items: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(team)/"}}, sort: {fields: [frontmatter___id], order: ASC}, limit: 8) {
              edges {
                content: node {
                  frontmatter {
                    id
                    name
                    profession
                    facebook
                    twitter
                    linkedin
                    github
                    image {
                      childImageSharp {
                        fluid(maxWidth: 800) {
                          src
                        }
                      }
                    }
                  }
                }
              }
            }
          }                    
          `}
      render={({ items, background }) => <TeamTwo items={items.edges} background={background} {...props} />}
  />
)