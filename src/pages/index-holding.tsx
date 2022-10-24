import * as React from "react"
import type { HeadFC } from "gatsby"
import "../components/styles.css"

const IndexPage = () => {
  return (
    <main> 
      <link href={`https://maxcdn.bootstrapcdn.com/font-awesome/4.6.2/css/font-awesome.min.css`} rel="stylesheet"></link>
      <p className={"du_social"}>
        <a href="https://www.facebook.com/dutchuncles" target="_blank"><i className={"fa fa-facebook"}></i></a>
        <a href="https://instagram.com/dutchuncles" target="_blank"><i className={"fa fa-instagram"}></i></a>
        <a href="https://twitter.com/dutchuncles" target="_blank"><i className={"fa fa-twitter"}></i></a>
        <a href="https://www.youtube.com/playlist?list=PLYjJdu1L6n1Lpio5XyO5luhWqCaJVz8n7" target="_blank"><i className={"fa fa-youtube-play"}></i></a>
        <a href="http://play.spotify.com/artist/77bjO3iNEdkJfszgcf6YnB" target="_blank"><i className={"fa fa-spotify"}></i></a>
        <a target="_blank"href="http://dutchuncles.bigcartel.com/products"><i className={"fa fa-shopping-cart"} aria-hidden="true"></i></a>
      </p>
			<p>MGMT: <a href="mailto:matthew@enganche.co.uk" target="_blank">matthew@enganche.co.uk</a> {/*Site: <a href="http://peterbroadhead.co.uk" target="_blank">Panto Pete</a> */}</p>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Dutch Uncles - Manchester's finest band's band</title>
