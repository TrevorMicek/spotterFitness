/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
/*
import { globalHistory } from '@reach/router'

export const onInitialClientRender = () => {
 globalHistory._onTransitionComplete();   
}
*/

import "./src/css/index.css"
import "@fontsource/libre-franklin"
/*
export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const { pathname } = location
  // list of routes for the scroll-to-top-hook
  const scrollToTopRoutes = [`/privacy-policy`, `/page-2`]
  // if the new route is part of the list above, scroll to top (0, 0)
  if (scrollToTopRoutes.indexOf(pathname) !== -1) {
    window.scrollTo(0, 0)
  }

  return false
}
*/
