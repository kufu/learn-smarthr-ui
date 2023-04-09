import Head from 'next/head'
import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  meta: {
    title: string
    description?: string
  }
}>

export const Layout: React.FC<Props> = ({ meta: { title, description }, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <h1>{title}</h1>
      {children}
    </>
  )
}
