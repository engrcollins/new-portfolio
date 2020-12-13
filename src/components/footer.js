import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import footerStyles from "./footer.module.scss"

const query = graphql`
query FooterQuery {
  site {
    siteMetadata {
      author: author
    }
  }
}
`
const Footer = () => {

  const { site } = useStaticQuery(query)
  const { author } = site.siteMetadata
  return (
    <footer>
    <div className={footerStyles.scallopUp}></div>
      <div className={footerStyles.siteFooter}>
        <div className={footerStyles.footcontainer}>
          <p>
            Site developed with 💖 by <a href="www.twitter.com/engrcollins14" style={{color:'#f44f18'}}>{author}</a> 
            <br />
            &copy;{" "}
            {new Date().getFullYear().toString()}{" "}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer