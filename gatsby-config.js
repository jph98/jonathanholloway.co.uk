module.exports = {
  siteMetadata: {
    title: `Jonathan Holloway CTO Consulting`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    }
  ],
}
