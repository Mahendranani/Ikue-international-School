/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://ikeuinternational.in",
  generateRobotsTxt: true, // auto robots.txt
  sitemapSize: 7000,

  changefreq: "weekly",
  priority: 0.7,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};