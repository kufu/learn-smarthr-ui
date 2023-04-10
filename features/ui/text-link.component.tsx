/* eslint-disable smarthr/a11y-clickable-element-has-text */
/* eslint-disable smarthr/a11y-anchor-has-href-attribute */
import Link from 'next/link'
import { ComponentProps } from 'react'
import { TextLink as ShrTextLink } from 'smarthr-ui'

export const TextLink: React.FC<ComponentProps<typeof Link>> = ({ children, ...other }) => {
  return (
    <Link {...other} passHref legacyBehavior>
      <ShrTextLink>{children}</ShrTextLink>
    </Link>
  )
}
