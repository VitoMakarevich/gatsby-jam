import React from "react"
import "typeface-aleo"
import "normalize.css"
import './layout.css'
import './variables.css'
import { Header } from "../header/header"
import styles from './layout.module.css'
import Footer from "../footer/footer"
import cx from 'classnames'

export type LayoutProps = {
  className?: string
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className={styles.generalGrid}>
      <Header className={styles.header} />
      <main className={cx(styles.main, className)}>{children}</main>
      <Footer className={styles.footer}/>
    </div>
  )
}

export default Layout
