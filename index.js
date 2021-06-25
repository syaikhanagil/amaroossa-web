import React from 'react';
import path from 'path';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import createCache from '@emotion/cache';
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet';
import App from './src/App';

const app = express();
const PORT = 4001;

app.use('/static', express.static(path.resolve(__dirname, 'assets')));
app.use('/assets', express.static(path.resolve(__dirname, 'assets/file')));

app.get('/*', (req, res) => {
    const key = 'vy';
    const cache = createCache({ key });
    const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);

    const context = {};
    const component = (
        <div id="vy-root">
            <CacheProvider value={cache}>
                <StaticRouter location={req.url} context={context}>
                    <App />
                </StaticRouter>
            </CacheProvider>
        </div>
    );
    const { html, styles } = extractCriticalToChunks(renderToString(component));

    const helmet = Helmet.renderStatic();
    const markup = `<!DOCTYPE html>
    <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">${helmet.title.toString()}${helmet.meta.toString()}${helmet.link.toString()}
    <meta name="keywords" content="Hotel Lombok, Lombok, Lombok Luxury Hotel, Lombok Villa, Luxury Lombok, Villa, Limasatu Resort, Villa Private Pool, Limasatu Restaurant, Restaurant Lombok, Sunset Lombok">
    <link rel="shortcut icon" href="/assets/amaroossa.png" type="image/x-icon">
    <link rel="icon" href="/assets/amaroossa.png" type="image/x-icon">
    <meta name="robots" content="follow,index">
    <link href="/static/app.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css">
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css">
    ${constructStyleTagsFromChunks({ html, styles })}
</head>
<body ${helmet.bodyAttributes.toString()}>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div class="preloader">
        <div class="bounce">
            <div></div>
            <div></div>
        </div>
        <div class="bounce-2"></div>
    </div>
    ${html}
    <script async src="/static/app.js"></script>
</body>
</html>`;
    if (context.url) {
        res.writeHead(301, {
            Location: context.url
        });
        res.end();
    } else {
        res.send(markup);
    }
});

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`App running on http://localhost:${PORT}`);
});
