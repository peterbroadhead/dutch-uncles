import * as React from "react"
import type { HeadFC } from "gatsby"
import trueEntertainment from "../images/te-crop.png"
import duChippy from "../images/du-chippy-outside.jpg"
import "../components/styles.css"
import Socials from "../components/socials.js"
import Tour from "../components/tour.js"

const IndexPage = () => {
  return (    
    <main> 
      <link href={`https://maxcdn.bootstrapcdn.com/font-awesome/4.6.2/css/font-awesome.min.css`} rel="stylesheet"></link>
      <Socials></Socials>
      <p style={{marginBottom:`0`}}>
        <a target="_blank"href="https://www.musicglue.com/dutch-uncles/">Pre-Orders and Bundles</a></p>    
      <h1>
        <a target="_blank"href="https://www.musicglue.com/dutch-uncles/">
          <img src={trueEntertainment} alt={`True Entertainment Album Cover`}></img>    
        </a>
        <span style={{display: "none"}}>Dutch Uncles</span>
      </h1>      
      <Tour></Tour>           
      <p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/-7r8O_c4aAk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </p>
      <p>
        <img src={duChippy} className={`du_chippy`} alt={`Dutch Uncles outside Chippy`}></img>   
      </p>
			<p>MGMT: <a href="mailto:matthew@enganche.co.uk" target="_blank">matthew@enganche.co.uk</a> {/*Site: <a href="http://peterbroadhead.co.uk" target="_blank">Panto Pete</a> */}</p>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Dutch Uncles - Manchester's finest band's band</title>
