import path, { join } from 'path';
import { fileURLToPath } from 'node:url';
import { existsSync } from 'fs';
import { readdir, readFile, writeFile } from 'fs/promises';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const postsPath = path.join(dirname, '../server/posts')
const listPath = path.join(dirname, '../server/posts/list.json')


const getListContent = async () => {
  const exists = existsSync(postsPath)
  if (!exists) return []
  const names = await readdir(postsPath)
  const results = await Promise.allSettled(names.map(async name => {
    const postPath = join(postsPath, name)
    const text = await readFile(postPath, { encoding: 'utf-8' })
    const { content, ...rest } = JSON.parse(text)
    return rest
  }))
  const content = results
    .map(item => item.status === 'fulfilled' ? item.value : null)
    .filter(Boolean)
    .toSorted((prev, next) => new Date(next.createdAt).getTime() - new Date(prev.createdAt).getTime())
  console.log('content', content)
  return content
}

const writeListContent = async (content: {
  id: string | number, title: string, createdAt: string, updatedAt: string
}[]) => {
  return writeFile(listPath, JSON.stringify(content), { encoding: 'utf-8' })
}

const buildList = async () => {
  const content = await getListContent()
  return writeListContent(content)
}

buildList()