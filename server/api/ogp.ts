import type { IncomingMessage, ServerResponse } from 'http'
import * as Canvas from 'canvas'
import { parseURL } from 'ufo'

const { createCanvas, loadImage } = Canvas.default as typeof Canvas
const style = {
  canvas: {
    width: 1200,
    height: 630,
    paddingX: 80,
    paddingY: 75,
    border: {
      width: 20,
      color: '#009a5b',
    },
    background: {
      color: '#f7fafc',
    },
  },
  title: {
    font: 'bold 80px "Noto Sans CJK JP"',
    lineHeight: 120,
    color: '#005834',
  },
  site: {
    font: 'bold 64px "Noto Sans CJK JP"',
    lineHeight: 64,
    color: '#009a5b',
    right: 64,
    bottom: 64,
    logoMargin: 16
  },
}

const splitByMeasureWidth = (str: string, maxWidth: number, context: CanvasRenderingContext2D): string[] => {
  // サロゲートペアを考慮した文字分割
  const chars = Array.from(str)
  let line = ''
  const lines = []
  for (let index = 0; index < chars.length; index++) {
    if (maxWidth <= context.measureText(line + chars[index]).width) {
      lines.push(line)
      line = chars[index]
    } else {
      line += chars[index]
    }
  }
  lines.push(line)
  return lines
}

const generate = async (title: string, siteName: string) => {
  const canvas = createCanvas(style.canvas.width, style.canvas.height)
  const ctx = canvas.getContext('2d')
  // タイトル
  const lineWidth = style.canvas.width - (style.canvas.paddingX * 2)
  ctx.font = style.title.font
  const titleLines = splitByMeasureWidth(title, lineWidth, ctx)
  const titleHeight = titleLines.length * style.title.lineHeight
  // 背景（枠線）
  ctx.fillStyle = style.canvas.border.color
  ctx.fillRect(0, 0, style.canvas.width, style.canvas.height)
  // 背景（塗り）
  ctx.fillStyle = style.canvas.background.color
  ctx.fillRect(style.canvas.border.width, style.canvas.border.width, style.canvas.width - style.canvas.border.width * 2, style.canvas.height - style.canvas.border.width * 2)
  // テキスト描画
  ctx.textBaseline = 'top'
  ctx.fillStyle = style.title.color
  ctx.font = style.title.font
  titleLines.map((t, i) => ctx.fillText(t, style.canvas.paddingX, style.canvas.paddingY + style.title.lineHeight * i))
  // ロゴテキスト描画
  ctx.fillStyle = style.site.color
  ctx.font = style.site.font
  const siteNameWidth = ctx.measureText(siteName).width
  const logoPosX = style.canvas.width - style.site.right - siteNameWidth
  const logoPosY = style.canvas.height - style.site.bottom - style.site.lineHeight
  ctx.fillText(siteName, logoPosX, logoPosY)
  // ロゴ描画
  const logo = await loadImage('./assets/images/nuxt-colored-logo.png')
  ctx.drawImage(logo, logoPosX - logo.width - style.site.logoMargin, logoPosY - (logo.height - style.site.lineHeight) / 4)

  return canvas.toBuffer()
}

export default async (req: IncomingMessage, res: ServerResponse) => {
  const { pathname } = parseURL(req.url)
  const body = decodeURIComponent(pathname.slice(1, -4))
  const img = await generate(body, '快速 Nuxt 3')
  return img
}
