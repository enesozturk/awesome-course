---
sidebar_position: 5
---

# Deploy your site

Awesome Course is using **Next.js** behind the schene. You can deploy your course any where. To be safe, I prefer [Vercel](https://nextjs.org/learn/basics/deploying-nextjs-app).

It builds your site as simple **static HTML, JavaScript and CSS files**.

## Build your site

Build your site **for production**:

```bash
npm run build
```

The static files are generated in the `build` folder.

## Deploy your site

Test your production build locally:

```bash
npm run start
```

The `build` folder is now served at `http://localhost:3000/`.

You can now deploy the `build` folder **almost anywhere** easily, **for free** or very small cost (read the **[Deployment Guide](https://nextjs.org/learn/basics/deploying-nextjs-app)**).
