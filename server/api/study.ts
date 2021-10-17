import type { IncomingMessage, ServerResponse } from 'http'
import { StudyResult } from '@/types'
import { format, addMonths } from 'date-fns'
import ja from 'date-fns/locale/ja/index.js'

const url = 'https://connpass.com/api/v1/event/?keyword_or=javascript+typescript&order=2&count=30&'
let cachedResults: StudyResult | undefined

const fetchEvents = async (dt: number) => {
  const interval = 30 * 60 * 1000 // 30 minutes
  if (cachedResults?.fetchedOn && dt < cachedResults.fetchedOn + interval) {
    return cachedResults
  }
  const monthQuery = [dt, addMonths(dt, 1), addMonths(dt, 2)].map(d => `ym=${format(d, 'yyyyMM', { locale: ja })}`).join('&')
  const events: StudyResult['events'] = await fetch(`${url}${monthQuery}`)
    .then(res => res.json())
    .then(results => (results.events as StudyResult['events']).reverse())
    .catch(err => { throw new Error(err.message) })
  const fetchedOn = (new Date).getTime()
  cachedResults = { events, fetchedOn }
}

export default async (req: IncomingMessage, res: ServerResponse) => {
  await fetchEvents((new Date).getTime())
    .catch(err => { throw new Error(err.message) })

  return cachedResults
}
