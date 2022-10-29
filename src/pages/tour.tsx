import * as React from "react"
import type { HeadFC } from "gatsby"
import "../components/styles.css"
import Tour from "../components/tour.js"

const IndexPage = () => {
  return (    
    <main>      
      <Tour></Tour>           
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Dutch Uncles - Manchester's finest band's band</title>
