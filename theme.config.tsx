import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>React Lightweight Calendar</span>,
  project: {
    link: 'https://github.com/jovanjenjic/react-lightweight-calendar',
  },
  docsRepositoryBase: 'https://github.com/jovanjenjic/react-lightweight-calendar',
  footer: {
    text: 'React Lightweight Calendar',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </>
  )
}

export default config
