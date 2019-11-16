import React from "react"
import styles from "./header.module.css"
import { graphql, Link, StaticQuery } from "gatsby"
import cx from "classnames"

export type HeaderProps = {
  className?: string
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <StaticQuery
      query={graphql`
        {
          contentfulTitlePage {
            header
          }
        }
      `}
      render={({contentfulTitlePage: {header}}) => (
        <div className={cx(styles.headerWrapper, className)}>
          <Link className={styles.headerText} to="/">
            {header}
          </Link>
        </div>
      )}
    />
  )
}
