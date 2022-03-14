import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { ParsedUrlQuery } from 'querystring'

import Date from '../../components/date'
import Layout from '../../components/Layout'
import { getAllPostSlugs, getPostData, IPost } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'

export interface IPostPageProps {
    post: IPost
}

export default function Post({ post }) {
    console.warn('!!!', { post })
    return (
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <Layout>
                <article>
                    <h1 className={utilStyles.headingXl}>{post.title}</h1>
                    <div className={utilStyles.lightText}>{/* <Date dateString={post.date} /> */}</div>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />
                </article>
            </Layout>
        </>
    )
}

interface PostPageParams extends ParsedUrlQuery {
    slug: string
}

export const getStaticProps: GetStaticProps<IPostPageProps, PostPageParams> = async ({ params }) => {
    const post = await getPostData(params!.slug)
    return {
        props: {
            post,
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostSlugs()
    // console.table(paths)
    return {
        paths,
        fallback: false,
    }
}
