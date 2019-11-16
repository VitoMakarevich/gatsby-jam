import React from "react"
import cx from "classnames"
import styles from './footer.module.css'
import { graphql, StaticQuery } from "gatsby"

export type FooterProps = {
  className: string
}

const Footer: React.FC<FooterProps> = ({className}) => {
  return (<footer className={cx(className, styles.footer)}>
    <StaticQuery
      query={graphql`
        {
          contentfulTitlePage {
            footerText
          }
        }
      `}
      render={({
                 contentfulTitlePage: {footerText}}) => (
        <div className={styles.copyright}>
          {footerText}{` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      )}
    />
  </footer>)
}

export default Footer
