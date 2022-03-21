import Layout from '../../components/Layout'

import { gql, useQuery } from '@apollo/client'

const AllPostsQuery = gql`
    query ExampleQuery {
        posts {
            id
            slug
            title
        }
    }
`

export default function Posts() {
    const { data, loading, error } = useQuery(AllPostsQuery)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Oh no... {error.message}</p>

    return (
        <Layout>
            <h1>List Posts</h1>
            {data.posts.map((post) => (
                <>
                    <h2>{post.id}</h2>
                </>
            ))}
        </Layout>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {
            // props for your component
        },
    }
}
