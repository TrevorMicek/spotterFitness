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

 import HeroSection from '../tailwindComponents/HeroSection'
 import Footer from "./Footer";

 import "./layout.css"

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
         <Helmet>
           <link rel="preconnect" href="https://fonts.googleapis.com" />
           <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
           <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative&display=swap" rel="stylesheet" />
         </Helmet>
         <HeroSection />


         <main style={pageLayout}>{children}</main>
         <Footer />


       </div>

   )
 }

 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }

 export default Layout
