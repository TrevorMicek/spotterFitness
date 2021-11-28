/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, {useState} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet";

import NavBar from "./NavBar";
import Header from "./Header";
import Footer from "./Footer";
import createComponent from '../commonComps/createCart'
import styles from "./layoutGrid.css"
import "./layout.css"
import { useShopify } from "../../storePage/hooks";
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import * as reducers from "../../storePage/redux/ducks"
import { Provider } from "react-redux"
const Layout = ({children, title, pageLayout}) => {


  /*
  const rootReducer = combineReducers(reducers);

  const enhancer = compose(applyMiddleware(thunk));

  const store = createStore(rootReducer, enhancer);
 */


  return (


      <div
        style={{
          margin: `0 0`,
        }}
      >

       <div className={styles.grid}>
        <Header title={title}/>


        <main style={pageLayout}  className={styles.main}>{children}</main>

       </div>
      </div>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
