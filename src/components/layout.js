import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Banner from "./banner"
import Navigation from "./navigation";
import { Helmet } from 'react-helmet'
import "../assets/scss/style.scss"
import layoutStyles from "./layout.module.scss";
import Footer from "./footer";
import { Container, Row, Col } from 'react-bootstrap';

const query = graphql`
query LayoutQuery {
  site {
    siteMetadata {
      siteTitle: title
    }
  }
}
`
const Layout = (props) => {

  const { site } = useStaticQuery(query)
  const { siteTitle } = site.siteMetadata

  return (
    <div className={layoutStyles.prycontainer}>
      <Helmet>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </Helmet>
      <Banner title={siteTitle} />
      <Header>
        <Navigation/>
      </Header>
      <div className={layoutStyles.content}>
          <Container>
            <Row>
              <Col xs={0} md={1}>
              </Col>
              <Col xs={12} md={10}>
                <div className={layoutStyles.mainContent}>{props.children}</div>
              </Col>
              <Col xs={0} md={1}>
              </Col>
            </Row>
          </Container>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout

