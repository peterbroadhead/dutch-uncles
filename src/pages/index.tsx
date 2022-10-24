import * as React from "react"
import type { HeadFC } from "gatsby"
import trueEntertainment from "../images/te-crop.png"
import duChippy from "../images/du-chippy-outside.jpg"
import "../components/styles.css"

const IndexPage = () => {
  return (    
    <main> 
      <link href={`https://maxcdn.bootstrapcdn.com/font-awesome/4.6.2/css/font-awesome.min.css`} rel="stylesheet"></link>
      <p className={"du_social"}>
        <a href="https://www.facebook.com/dutchuncles" target="_blank">
          <i className={"fa fa-facebook"}></i>
        </a>
        {/*<a href="https://www.tiktok.com/@dutchuncles" target="_blank">
          <i className={"fa-brands fa-tiktok"}></i>
        </a>*/}        
        <a href="https://instagram.com/dutchuncles" target="_blank">
          <i className={"fa fa-instagram"}></i>
        </a>
        <a href="https://twitter.com/dutchuncles" target="_blank">
          <i className={"fa fa-twitter"}></i>
        </a>
        <a href="https://soundcloud.com/dutch-uncles" target="_blank">
          <i className={"fa fa-soundcloud"}></i>
        </a>
        <a href="https://www.youtube.com/playlist?list=PLYjJdu1L6n1Lpio5XyO5luhWqCaJVz8n7" target="_blank">
          <i className={"fa fa-youtube-play"}></i>
        </a>
        <a href="http://play.spotify.com/artist/77bjO3iNEdkJfszgcf6YnB" target="_blank">
          <i className={"fa fa-spotify"}></i>
        </a>
        <a target="_blank"href="https://www.musicglue.com/dutch-uncles/">
          <i className={"fa fa-shopping-cart"} aria-hidden="true"></i>
        </a>
      </p>  
      <p style={{marginBottom:`0`}}>
        <a target="_blank"href="https://www.musicglue.com/dutch-uncles/">Pre-Orders and Bundles</a></p>    
      <h1>
        <img src={trueEntertainment} alt={`True Entertainment Album Cover`}></img>    
      </h1>
      <p>
        <a href="http://www.songkick.com/artists/2355468" className="songkick-widget" data-theme="light" data-track-button="on" data-detect-style="true" data-font-color="#191911" data-background-color="transparent">Dutch Uncles tour dates</a>
        <script src="https://widget.songkick.com/widget.js"></script>    
      </p>
      <p>Coming soon...</p>
      <p>
        <img src={duChippy} className={`du_chippy`} alt={`Dutch Uncles outside Chippy`}></img>   
      </p>
			<p>MGMT: <a href="mailto:matthew@enganche.co.uk" target="_blank">matthew@enganche.co.uk</a> {/*Site: <a href="http://peterbroadhead.co.uk" target="_blank">Panto Pete</a> */}</p>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Dutch Uncles - Manchester's finest band's band</title>
