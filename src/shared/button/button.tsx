import React from 'react'
import cx from 'classnames'
import { Button as SemanticButton, ButtonProps as SemanticButtonProps } from 'semantic-ui-react'
import styles from './button.module.css'

export type ButtonProps = SemanticButtonProps & {
  floating: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  floating,
  className,
  ...rest
}) => {
  const buttonStyles = cx(
    floating && styles.floating,
    className,
  )
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <SemanticButton {...rest} className={buttonStyles}>
      {children}
    </SemanticButton>
  )
}
