import React, { useMemo } from 'react'
import cx from 'classnames'
import { graphql, Link, StaticQuery } from 'gatsby'
import { Menu } from 'semantic-ui-react'
import styles from './navbar.module.css'

export type NavbarProps = {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const cn = useMemo(() => cx(styles.menu, className), [className])

  return (
    <StaticQuery
      query={graphql`
        {
          contentfulNavigation {
            about
          }
        }
      `}
      render={({ contentfulNavigation: { about } }) => (
        <>
          <Menu secondary className={cn}>
            <Menu.Item as={Link} to="/about/" className={styles.item}>
              {about}
              {' '}
            </Menu.Item>
          </Menu>
        </>
      )}
    />
  )
}

export default Navbar
