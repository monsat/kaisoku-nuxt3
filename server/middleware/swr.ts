import type { IncomingMessage, ServerResponse } from 'http'

export default async (req: IncomingMessage, res: ServerResponse, next: (err?: Error) => any) => {
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate')
  next()
}
