# Remix bug with Cloudflare Pages

> [!NOTE]
> This app was created via `npm create cloudflare@latest`, only [app/routes/_index.tsx](app/routes/_index.tsx) was modified.

1.

```
npm install
```

2.

```
npx remix vite:build && npx wrangler pages dev ./build/client
```

3. Go to the browser window and press the button.

```
[wrangler:inf] GET / 200 OK (555ms)
[wrangler:inf] GET /assets/entry.client-CssmMjlP.js 200 OK (19ms)
[wrangler:inf] GET /assets/index-iAWYiY1q.js 200 OK (85ms)
[wrangler:inf] GET /assets/components-BtLD4Hqr.js 200 OK (90ms)
[wrangler:inf] GET /assets/manifest-806e9af9.js 200 OK (92ms)
[wrangler:inf] GET /assets/root-C60KymA2.js 200 OK (93ms)
[wrangler:inf] GET /assets/_index-BbRBkjWc.js 200 OK (89ms)
[wrangler:inf] GET /favicon.ico 200 OK (43ms)
[wrangler:inf] POST / 200 OK (7ms)
✘ [ERROR] TypeError: Can't modify immutable headers.

      at handleDataRequestRR
  (file:///projects/apps/polished-truth-b001/node_modules/@remix-run/server-runtime/dist/server.js:158:22)
      at async requestHandler
  (file:///projects/apps/polished-truth-b001/node_modules/@remix-run/server-runtime/dist/server.js:94:18)
      at async handleFetch
  (file:///projects/apps/polished-truth-b001/node_modules/@remix-run/cloudflare-pages/dist/esm/worker.js:75:18)
      at null.<anonymous> (async
  file:///projects/apps/polished-truth-b001/.wrangler/tmp/dev-CQLC77/functionsWorker-0.8639886703431474.js:6055:14)
      at async next
  (file:///projects/apps/polished-truth-b001/node_modules/wrangler/templates/pages-template-worker.ts:161:22)
      at async Object.fetch
  (file:///projects/apps/polished-truth-b001/node_modules/wrangler/templates/pages-template-worker.ts:180:11)
      at async jsonError
  (file:///projects/apps/polished-truth-b001/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts:22:10)
      at async drainBody
  (file:///projects/apps/polished-truth-b001/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts:5:10)
      at async jsonError
  (file:///projects/apps/polished-truth-b001/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts:22:10)
      at async drainBody
  (file:///projects/apps/polished-truth-b001/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts:5:10)


[wrangler:inf] GET / 500 Internal Server Error (136ms)
```
