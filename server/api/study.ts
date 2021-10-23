import type { IncomingMessage, ServerResponse } from 'http'
import { StudyResult } from '@/types'
import { format, addMonths } from 'date-fns'
import { ja } from 'date-fns/locale/index.js'

const url = 'https://connpass.com/api/v1/event/?keyword_or=javascript+typescript&order=2&count=30&'

const fetchEvents = async (dt: number) => {
  const monthQuery = ([dt, addMonths(dt, 1), addMonths(dt, 2)]).map(d => `ym=${format(d, 'yyyyMM'), { locale: ja }}`).join('&')
  const events: StudyResult['events'] = await (await fetch(`${url}${monthQuery}`)).json()
    .then(results => (results.events as StudyResult['events']).reverse())
    .catch(err => { throw new Error(err.message) })
  return { events }
}

export default async (req: IncomingMessage, res: ServerResponse) => {
  const results = await fetchEvents((new Date).getTime())
    .catch(err => { throw new Error(err.message) })

  return results
}
