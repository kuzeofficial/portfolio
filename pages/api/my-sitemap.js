const { SitemapStream, streamToPromise } = require("sitemap")
const { Readable } = require("stream")

export default async (req, res) => {
    const links = [
        {url: "/portfolio" , changefreq: "daily", priority: 0.3}
    ];

    const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

    res.writeHead(200, {
        "Content-Type": "aplication/xml",
    });

    const xmlString = await streamToPromise(
        Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    res.end(xmlString);
}