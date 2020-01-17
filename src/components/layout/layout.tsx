import React from 'react'
import 'typeface-aleo'
import 'normalize.css'
import './layout.css'
import './variables.css'
import 'semantic-ui-css/semantic.min.css'
import cx from 'classnames'
import { Header } from '../header/header'
import styles from './layout.module.css'
import Footer from '../footer/footer'

export type LayoutProps = {
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className }) => (
  <div className={styles.generalGrid}>
    <Header className={styles.header} />
    <main className={cx(styles.main, className)}>{children}</main>
    <Footer className={styles.footer} />
  </div>
)

export default Layout
