import React from "react"
import { Link } from "gatsby"
import { Menu } from "semantic-ui-react"

export type NavbarProps = {
  className?: string
}

const Navbar: React.FC<NavbarProps> = ({className}) => {
  return (
      <Menu className={className}>
        <Menu.Item>
          <Link to={'/page-3/'}>
            About
          </Link>
        </Menu.Item>

      </Menu>
  )
}

export default Navbar
