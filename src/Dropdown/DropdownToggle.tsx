import React from 'react'

import { ComponentColor, ComponentSize, IComponentBaseProps } from '../types'

import Button, { ButtonProps } from '../Button'

export type DropdownToggleProps = Omit<
  React.HTMLAttributes<HTMLElement>,
  'color'
> &
  IComponentBaseProps & {
    button?: boolean
    buttonProps?: ButtonProps
    /** @deprecated Use buttonProps instead */
    color?: ComponentColor
    /** @deprecated Use buttonProps instead */
    disabled?: boolean
    /** @deprecated Use buttonProps instead */
    size?: ComponentSize
  }

const DropdownToggle = ({
  button = true,
  buttonProps,
  children,
  className,
  dataTheme,
  color,
  size,
  disabled,
  ...props
}: DropdownToggleProps) => {
  return (
    <summary className={className} {...props}>
      {button ? (
        <Button
          type="button"
          dataTheme={dataTheme}
          color={color}
          size={size}
          disabled={disabled}
          {...buttonProps}
        >
          {children}
        </Button>
      ) : (
        children
      )}
    </summary>
  )
}

export default DropdownToggle
