import matter from 'gray-matter';
import * as fs from 'fs';
import * as path from 'path';
import { SingleArticle } from 'types';
import { Lang } from 'i18n';

export async function getAllPosts(lang: Lang = 'ru') {
  return Promise.all(getAllPostsSlugs(lang).map((slug) => getSinglePost(slug, lang)));
}

export function getAllPostsSlugs(lang: Lang = 'ru') {
  return fs.readdirSync(getPostsDirectory(lang)).map(normalizePostName);
}

function normalizePostName(postName: string) {
  return postName.replace('.mdx', '');
}

export async function getSinglePost(slug: string, lang: Lang = 'ru'): Promise<SingleArticle> {
  const filePath = path.join(getPostsDirectory(lang), slug + '.mdx');
  const contents = fs.readFileSync(filePath, 'utf8');
  const { data: meta, content } = matter(contents);

  return { slug, content, meta: meta as SingleArticle['meta'] };
}

export function getPostsDirectory(lang: Lang = 'ru') {
  const basePath = process.cwd();
  return path.join(basePath, 'posts', lang);
}
