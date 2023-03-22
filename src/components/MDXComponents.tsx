import { MDXProvider } from '@mdx-js/react'
import { AppProps } from 'next/app'

export const MDXComponents = {
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
