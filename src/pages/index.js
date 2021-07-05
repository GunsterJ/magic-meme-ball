import Layout from '../components/Layout/Layout.js'
import React from 'react'
import SEO from '../components/SEO/SEO.js'
import UserInput from '../components/UserInput/UserInput.js'

const IndexPage = () => (
  <Layout>
    <SEO title='Magic Meme Ball'/>
    <UserInput
      label='Ask the magic meme ball a polar question'
      adornment='Oh, magic meme ball'
    />
  </Layout>
)

export default IndexPage
