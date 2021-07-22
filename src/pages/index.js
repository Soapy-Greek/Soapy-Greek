import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import HeadTag from "../components/head"
import Video from "../components/video"

const IndexPage = () => (
  <Layout>
    <HeadTag title="Home" />
    <Video
      videoSrcURL="https://www.youtube.com/embed/dQw4w9WgXcQ"
      videoTitle="Never Gonna Give You Up"
    />
    <br></br>
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        height: "400px",
      }}
    >
      <StaticImage
        src="../images/soap.jpeg"
        width="33.33%"
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A bar of soap"
        style={{ marginBottom: `1.45rem` }}
      />
      <StaticImage
        src="../images/soap.jpeg"
        width="33.33%"
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A bar of soap"
        style={{ marginBottom: `1.45rem` }}
      />
      <StaticImage
        src="../images/soap.jpeg"
        width="33.33%"
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A bar of soap"
        style={{ marginBottom: `1.45rem` }}
      />
    </div>
  </Layout>
)

export default IndexPage
