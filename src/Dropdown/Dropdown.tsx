import React, { ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import DropdownMenu from './DropdownMenu'
import DropdownItem from './DropdownItem'
import DropdownToggle from './DropdownToggle'

export type DropdownProps<T extends HTMLElement = HTMLDetailsElement> =
  React.HTMLAttributes<T> &
    IComponentBaseProps & {
      item?: ReactNode
      horizontal?: 'left' | 'right'
      vertical?: 'top' | 'bottom'
      end?: boolean
      hover?: boolean
      open?: boolean
    }

export const classesFn = ({
  className,
  horizontal,
  vertical,
  end,
  hover,
  open,
}: Pick<
  DropdownProps,
  'className' | 'horizontal' | 'vertical' | 'end' | 'hover' | 'open'
>) =>
  twMerge(
    'dropdown',
    className,
    clsx({
      'dropdown-left': horizontal === 'left',
      'dropdown-right': horizontal === 'right',
      'dropdown-top': vertical === 'top',
      'dropdown-bottom': vertical === 'bottom',
      'dropdown-end': end,
      'dropdown-hover': hover,
      'dropdown-open': open,
    })
  )

const Dropdown = React.forwardRef<HTMLDetailsElement, DropdownProps>(
  (
    {
      children,
      className,
      item,
      horizontal,
      vertical,
      end,
      hover,
      open,
      dataTheme,
      ...props
    },
    ref
  ): JSX.Element => {
    return (
      <details
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={classesFn({
          className,
          horizontal,
          vertical,
          end,
          hover,
          open,
        })}
        open={open}
      >
        {item ? (
          <>
            <summary>{children}</summary>
            <ul className="dropdown-content">{item}</ul>
          </>
        ) : (
          <>{children}</>
        )}
      </details>
    )
  }
)

export default Object.assign(Dropdown, {
  Toggle: DropdownToggle,
  Menu: DropdownMenu,
  Item: DropdownItem,
})
