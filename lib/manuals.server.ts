import { existsSync } from 'node:fs'
import path from 'node:path'
import { MANUAL_CATALOG } from '@/lib/manuals'

/** Nur Anleitungen, deren PDF beim Build in /public liegt. */
export function availableManuals() {
  const publicDir = path.join(process.cwd(), 'public')
  return MANUAL_CATALOG.map((m) => ({ ...m, available: existsSync(path.join(publicDir, m.file)) }))
}
