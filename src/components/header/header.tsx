import React from 'react'
import { graphql, Link, StaticQuery } from 'gatsby'
import cx from 'classnames'
import styles from './header.module.css'
import Navbar from './navbar'

export type HeaderProps = {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => (
  <StaticQuery
    query={graphql`
        {
          contentfulTitlePage {
            header
          }
        }
      `}
    render={({ contentfulTitlePage: { header } }) => (
      <div className={cx(styles.headerWrapper, className)}>
        <div className={styles.headerTitle}>
          <Link className={styles.headerText} to="/">
            {header}
          </Link>
        </div>
        <Navbar className={styles.navbar} />
      </div>
    )}
  />
)
