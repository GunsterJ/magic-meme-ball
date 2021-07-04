import GlobalStyle from '../../styles/GlobalStyle.js'
import PropTypes from 'prop-types'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle/>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
