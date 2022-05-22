import { StudyReturn } from '@/types'
import { format, addMonths } from 'date-fns'
import { ja } from 'date-fns/locale/index.js'

const url = 'https://connpass.com/api/v1/event/?keyword_or=javascript+typescript&order=2&count=30&'

const fetchEvents = async (dt: number) => {
  const monthQuery = ([dt, addMonths(dt, 1), addMonths(dt, 2)]).map(d => `ym=${format(d, 'yyyyMM'), { locale: ja }}`).join('&')
  const events = (await fetch(`${url}${monthQuery}`)).json()
    .then((results: StudyReturn) => results.events.reverse())
    .catch(err => { throw new Error(err.message) })
  return events
}

export default defineEventHandler(async (event) => {
  const events = await fetchEvents(Date.now())
    .catch(err => { throw new Error(err.message) })

  event.res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate')
  return events
})
