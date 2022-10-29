import React from "react";

function Socials(){
    return(
        <p className={"du_social"}>
        <a href="https://www.facebook.com/dutchuncles" target="_blank" rel="noopener noreferrer">
          <i className={"fa fa-facebook"}></i>
        </a>       
        <a href="https://instagram.com/dutchuncles" target="_blank" rel="noopener noreferrer">
          <i className={"fa fa-instagram"}></i>
        </a>
        <a href="https://twitter.com/dutchuncles" target="_blank" rel="noopener noreferrer">
          <i className={"fa fa-twitter"}></i>
        </a>
        <a href="https://soundcloud.com/dutch-uncles" target="_blank" rel="noopener noreferrer">
          <i className={"fa fa-soundcloud"}></i>
        </a>
        <a href="https://www.youtube.com/playlist?list=PLYjJdu1L6n1Lpio5XyO5luhWqCaJVz8n7" target="_blank" rel="noopener noreferrer">
          <i className={"fa fa-youtube-play"}></i>
        </a>
        <a href="http://play.spotify.com/artist/77bjO3iNEdkJfszgcf6YnB" target="_blank" rel="noopener noreferrer">
          <i className={"fa fa-spotify"}></i>
        </a>
        <a target="_blank"href="https://www.musicglue.com/dutch-uncles/" rel="noopener noreferrer">
          <i className={"fa fa-shopping-cart"} aria-hidden="true"></i>
        </a>
      </p>  
    )
}

export default Socials;