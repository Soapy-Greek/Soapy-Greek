require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  
  const blogTemplate = path.resolve("./src/templates/blog.js")
  const aboutTemplate = path.resolve("./src/templates/about.js")

  return await graphql(`
    query {
      blog: allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
      about: allContentfulAboutMeStory {
        edges {
          node {
            slug
          }
        }
      }
    }
  `).then(result=>{

    result.data.blog.edges.forEach(({ node })=> {
      createPage({
        path: `/blog/${node.slug}`,
        component: blogTemplate,
        context: {
          slug: node.slug,
        },
      })
    })
    
    result.data.about.edges.forEach(({ node }) => {
      createPage({
        path: `/about/${node.slug}`,
        component: aboutTemplate,
        context: {
          slug: node.slug,
        },
      })
    })
  })
}
