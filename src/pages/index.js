import Layout from '../components/Layout/Layout.js'
import MagicMemeBall from '../components/MagicMemeBall/MagicMemeBall.js'
import React from 'react'
import SEO from '../components/SEO/SEO.js'

const IndexPage = () => (
  <Layout>
    <SEO title='Magic Meme Ball'/>
    <MagicMemeBall/>
  </Layout>
)

export default IndexPage
