import { Sandpack } from '@codesandbox/sandpack-react'
import { ComponentProps } from 'react'

export const SmartHRUIPreview: React.FC<ComponentProps<typeof Sandpack>> = (props) => {
  return (
    <Sandpack
      {...props}
      template="react-ts"
      customSetup={{
        dependencies: {
          'smarthr-ui': 'latest',
          'smarthr-normalize-css': 'latest',
          'styled-components': '5.3.9',
        },
      }}
      options={{
        showLineNumbers: true,
        showInlineErrors: true,
        showTabs: true,
        closableTabs: false,
      }}
      theme="dark"
    />
  )
}
