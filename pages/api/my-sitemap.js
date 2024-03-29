const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

const mysitemap = async (req, res) => {
  // An array with your links
  const links = [
    { url: "/", changefreq: "daily", priority: 0.25 },
    { url: "/events", changefreq: "daily", priority: 0.25 },
    { url: "/contact", changefreq: "daily", priority: 0.25 },
    { url: "/sponsors", changefreq: "daily", priority: 0.25 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};

export default mysitemap;