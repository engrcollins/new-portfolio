import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby"
import bannerStyles from "./banner.module.scss"
import Image from "./image.js"
import { Container, Row, Col } from 'react-bootstrap';

const Logo = (props) => {
  const data = useStaticQuery(
    graphql`
    query slug {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
    `
  )
  return(
  <div className={bannerStyles.header}>
    <Container>
    <div  className={bannerStyles.overlay}>
      <Row>
        <Col xs={2} md={2} lg={2} className={bannerStyles.avatar}>
          <Image />
        </Col>
        <Col xs={10} md={10} lg={10}>
          <div className={bannerStyles.heroContent}>
            <p className={bannerStyles.brand}>
              <Link to="/">{data.site.siteMetadata.title}</Link>
            </p>
            <p className={bannerStyles.description}>
              {data.site.siteMetadata.description}
            </p>
          </div>
        </Col>
      </Row>
      </div>
    </Container>
  </div>
  )
}

export default Logo