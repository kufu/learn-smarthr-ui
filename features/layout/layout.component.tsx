import Head from 'next/head'
import { PropsWithChildren } from 'react'
import { TextLink } from 'smarthr-ui'

type Props = PropsWithChildren<{
  meta: {
    title: string
    description?: string
    nextPage?:
      | string
      | {
          href: string
          text?: string
        }
  }
}>

export const Layout: React.FC<Props> = ({ meta: { title, description, nextPage }, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <h1>{title}</h1>
      {children}
      {nextPage && (
        <p>
          <TextLink href={typeof nextPage === 'string' ? nextPage : nextPage?.href}>
            {(typeof nextPage === 'object' && nextPage.text) || '次へ'}
          </TextLink>
        </p>
      )}
    </>
  )
}
