This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Base path (deploy at root or under a subpath)

Asset and route paths support both root and subpath deployment via `NEXT_PUBLIC_BASE_PATH`:

- **Root** (e.g. `https://my.domain.com/`): set `NEXT_PUBLIC_BASE_PATH=` (empty) or leave unset, then build and serve the `out/` folder at the domain root.
- **Subpath** (e.g. `https://my.domain.com/camila/`): set `NEXT_PUBLIC_BASE_PATH=/camila` at build time, then serve the contents of `out/` under that path (e.g. nginx `location /camila/ { alias /path/to/out/; }`).

The value is inlined at build time; change it only by rebuilding.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
