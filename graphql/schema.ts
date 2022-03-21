import { gql } from 'apollo-server-micro'

export const typeDefs = gql`
    type Post {
        id: String
        title: String
        slug: String
        content: String
    }

    type Query {
        posts: [Post]!
    }
`
