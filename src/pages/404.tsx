import * as React from "react"
import type { HeadFC } from "gatsby"
import trueEntertainment from "../images/te.png"
import "../components/styles.css"

const notFoundPage = () => {
  return (
    <main> 
      <img src={trueEntertainment}></img>    
      <p>
        <a href="http://www.songkick.com/artists/2355468" class="songkick-widget" data-theme="light" data-track-button="on" data-detect-style="true" data-font-color="#191911" data-background-color="transparent">Dutch Uncles tour dates</a>
      </p>
    </main>
  )
}

export default notFoundPage

export const Head: HeadFC = () => <title>Dutch Uncles - Pre-order True Entertainment.  Manchester's finest band's band</title>
