import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import { Menu } from "semantic-ui-react"

export type NavbarProps = {
  className?: string
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
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
          <Menu className={className}>
            <Menu.Item>
              <Link to={"/about/"}>{about}</Link>
            </Menu.Item>
          </Menu>
        </>
      )}
    />
  )
}

export default Navbar
