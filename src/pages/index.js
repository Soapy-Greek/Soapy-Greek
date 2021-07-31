/** @jsx jsx */
import * as React from "react"
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import HeadTag from "../components/head"
import SplitHero from "../components/split-hero"
import SimpleSwiper from "../components/simple-swiper"

const IndexPage = () => (
  <Layout>
    <HeadTag title="Home" />
    <SplitHero />
    <br></br>
    <SimpleSwiper />
  </Layout>
)

export default IndexPage
