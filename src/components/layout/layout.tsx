import React from 'react'
import 'normalize.css'
import './layout.css'
import './variables.css'
import 'react-toastify/dist/ReactToastify.css'
import cx from 'classnames'
import { toast } from 'react-toastify'
import Header from '../header'
import styles from './layout.module.css'

export type LayoutProps = {
  className?: string;
}

toast.configure()

const Layout: React.FC<LayoutProps> = ({ children, className }) => (
  <>
    <div className={styles.generalGrid}>
      <Header />
      <main className={cx(styles.main, className)}>{children}</main>
    </div>
  </>
)

export default Layout
