import React, { useMemo } from 'react'
import cx from 'classnames'
import { graphql, Link, StaticQuery } from 'gatsby'
import {
  AppBar, Button, Toolbar, Typography,
} from '@material-ui/core'
import styles from './navbar.module.css'

const Navbar: React.FC = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          contentfulNavigation {
            about
          }
          contentfulJam {
            title
          }
        }
      `}
      render={({ contentfulNavigation: { about }, contentfulJam: { title } }) => (
        <>
          <AppBar position="sticky">
            <Toolbar className={styles.toolbar}>
              <div className={styles.title}>
                <Link to="/">
                  <Typography>
                    {title}
                  </Typography>
                </Link>
              </div>
              <nav className={styles.menu}>
                <Button>
                  <Link to="/about">
                    {about}
                  </Link>
                </Button>
                <Button>
                  <Link to="/posts">
                    Posts
                  </Link>
                </Button>
              </nav>
            </Toolbar>
          </AppBar>
        </>
      )}
    />
  )
}

export default Navbar
