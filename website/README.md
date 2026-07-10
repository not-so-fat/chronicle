# Chronicle website (`getchronicle.dev`)

The public documentation site, built with [VitePress](https://vitepress.dev). It renders
the repo's canonical Markdown from [`../docs`](../docs) as a dark-themed docs site with a
hero landing page.

- **Home** (`/`) → the marketing hero (`index.md`)
- **Docs** (`/docs/*`) → the pages from `../docs`, served under `/docs`

This is a **third deployable** in the repo (alongside the app and `../feedback-relay`).
It has its own `package.json`/dependencies; the main app's dependency set is untouched.

## How content flows

`../docs` is the single source of truth — reviewed in the main repo, rendered on GitHub.
`scripts/build-content.mjs` copies it into `./docs` (gitignored) at build time and:

- excludes internal-only content (`superpowers/` specs, the PRD);
- rewrites the few links that point outside `docs/` (repo-root files, the PRD) to absolute
  GitHub URLs so nothing 404s on the site.

Edit the docs in `../docs`, never in `./docs` (it is regenerated on every build).

## Local development

```bash
npm install
npm run dev       # content copy + VitePress dev server (http://localhost:5173)
npm run build     # content copy + static build → .vitepress/dist
npm run preview   # serve the built site
```

## Deploying (Vercel CLI)

Hosted on Vercel under the `chizhangucb` scope. Because a `website/`-rooted CLI deploy only
uploads this folder (not `../docs`), the content is generated **locally** first and uploaded;
Vercel then runs only `vitepress build` (see `vercel.json`). The `deploy` scripts wire this
together so the site is never stale:

```bash
npm run deploy:preview   # content copy + `vercel`        → unlisted preview URL
npm run deploy           # content copy + `vercel --prod` → production
```

First-time setup links the local dir to a Vercel project:

```bash
vercel link --project chronicle-docs --yes
```

> **Deploy production from `main`.** Like the other singletons in this repo (the relay, the
> release tag), the live site should track `main`. After a docs PR merges:
> `git checkout main && git pull && cd website && npm run deploy`.

## Domain & DNS

Production domain: **`getchronicle.dev`** (apex), added to the `chronicle-docs` Vercel project.
The existing `relay.getchronicle.dev` (feedback relay) is a separate project and is untouched.

DNS is at **Porkbun**. Point the apex at Vercel with a single record — it coexists with the
existing `MX`/Resend (email) records, so `feedback@getchronicle.dev` keeps working:

| Type | Host | Value |
| --- | --- | --- |
| `A` | `@` (apex) | `76.76.21.21` |

(If Porkbun's `ALIAS`/`ANAME` is preferred at the apex, point it at `cname.vercel-dns.com`
instead — either works. Add via the Porkbun DNS console; it can be flaky in browser
automation, so enter records by hand.)

After the record propagates, verify the domain in the Vercel project (`vercel domains inspect
getchronicle.dev`). Vercel issues the TLS certificate automatically.
