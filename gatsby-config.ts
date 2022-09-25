import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Dutch Uncles`,
    siteUrl: `hhttps://dutchuncles.co.uk/`
  },
  graphqlTypegen: true,
  plugins: [
  "gatsby-plugin-sitemap", 
  "gatsby-plugin-sharp", 
  "gatsby-plugin-image", 
  "gatsby-transformer-sharp",
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "UA-44948006-1"
    }
  }, 
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/du-logo.png"
    }
  },  
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};

export default config;
