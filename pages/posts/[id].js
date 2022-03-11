import Head from 'next/head'
import Date from '../../components/date'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ post }) {
    return (
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <Layout home={false}>
                <article>
                    <h1 className={utilStyles.headingXl}>{post.title}</h1>
                    <div className={utilStyles.lightText}>
                        <Date dateString={post.date} />
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
                </article>
            </Layout>
        </>
    )
}

export async function getStaticProps({ params }) {
    const post = await getPostData(params.id)
    return {
        props: {
            post,
        },
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    console.table(paths)
    return {
        paths,
        fallback: false,
    }
}
