import { MDXProvider } from '@mdx-js/react'
import { AppProps } from 'next/app'
import { Button } from 'smarthr-ui'

import { MyComponents } from './MyComponents'

export const MDXComponents = {
  MyComponents,
  Button,
  // ここにカスタムコンポーネントを追加
  // 例: h1: (props) => <h1 style={{ color: 'red' }} {...props} />,
}

export const wrapMDX = ({ pageProps, Component }: AppProps) => {
  return (
    <MDXProvider components={MDXComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}
