/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import React, {useState} from "react"
 import PropTypes from "prop-types"

 import Header from './Header'
 import HeroSection from '../tailwindComponents/HeroSection'
 import Footer from "./Footer";

 import "./layout.css"

 const Layout = ({children, title, header, pageLayout}) => {


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

         <Header title={title} header={header} />


         <main style={pageLayout}>{children}</main>
         <Footer />


       </div>

   )
 }

 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }

 export default Layout
