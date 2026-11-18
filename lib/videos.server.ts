import { existsSync } from 'node:fs'
import path from 'node:path'
import { VIDEO_CATALOG } from '@/lib/videos'
import type { SiteVideo } from '@/lib/videos'

/** Liefert nur die Videos, deren MP4 und Vorschaubild in /public liegen (Build-Zeitpunkt). */
export function availableVideos(): SiteVideo[] {
  const publicDir = path.join(process.cwd(), 'public')
  return VIDEO_CATALOG.filter(
    (v) => existsSync(path.join(publicDir, v.file)) && existsSync(path.join(publicDir, v.poster)),
  )
}
