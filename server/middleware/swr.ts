import type { IncomingMessage, ServerResponse } from 'http'
import { parseURL } from 'ufo'

export default async (req: IncomingMessage, res: ServerResponse, next: (err?: Error) => any) => {
  const { pathname } = parseURL(req.url)
  if (pathname.startsWith('/api/study')) {
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate')
  }
  next()
}
