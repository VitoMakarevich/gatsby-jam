import React from 'react'
import cx from 'classnames'
import { graphql, StaticQuery } from 'gatsby'
import styles from './footer.module.css'

export type FooterProps = {
  className: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => (
  <footer className={cx(className, styles.footer)}>
    <StaticQuery
      query={graphql`
        {
          contentfulTitlePage {
            footerText
          }
        }
      `}
      render={({ contentfulTitlePage: { footerText } }) => (
        <div className={styles.copyright}>
          {footerText}
          {' '}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </div>
      )}
    />
  </footer>
)

export default Footer
