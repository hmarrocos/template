module.exports = {
    siteUrl: "https://[]/",
    generateRobotsTxt: true,
    exclude: ["/en*", "/de*", "/disallowed"],
    alternateRefs: [
      {
        href: "https://[]/en",
        hreflang: "en",
      },
      {
        href: "https://[]/de",
        hreflang: "de",
      },
    ],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: "*",
          disallow: "/disallowed",
        },
        {
          userAgent: "*",
          allow: "/",
        },
      ],
    },
  };
  