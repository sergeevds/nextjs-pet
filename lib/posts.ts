import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import { Post } from '@prisma/client'

const postsDirectory = path.join(process.cwd(), 'posts')

export interface IPost {
    id?: string
    title: string
    slug: string
    content: string
    createdDate?: Date
    // [key: string]: any
}

export function getSortedPostsData(): IPost[] {
    // Get file names under /posts
    const fileNames: string[] = fs.readdirSync(postsDirectory)
    const allPostsData: IPost[] = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
        } as IPost
    })
    // Sort posts by date
    return allPostsData.sort(({ createdDate: a }, { createdDate: b }) => {
        if (a < b) {
            return 1
        } else if (a > b) {
            return -1
        } else {
            return 0
        }
    })
}

// Returns an array that looks like this:
// [
//   {
//     params: {
//       slug: 'ssg-ssr'
//     }
//   },
//   {
//     params: {
//       slug: 'pre-rendering'
//     }
//   }
// ]

export function getAllPostSlugs(): { params: { slug: string } }[] {
    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map((fileName) => {
        return {
            params: {
                slug: fileName.replace(/\.md$/, ''),
            },
        }
    })
}

export async function getPostData(slug: string): Promise<IPost> {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark().use(html).process(matterResult.content)
    const content = processedContent.toString()

    // Combine the data with the id and contentHtml
    return {
        slug,
        content,
        title: matterResult.data.title,
    }
}

export default getPostData
