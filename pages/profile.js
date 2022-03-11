import useSWR, { SWRConfig } from 'swr'

// export async function getStaticProps () {
//     // `getStaticProps` is executed on the server side.
//     const article = await getArticleFromAPI()
//     return {
//       props: {
//         fallback: {
//           '/api/article': article
//         }
//       }
//     }
//   }

// https://swr.vercel.app/docs/data-fetching
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export function Profile() {
    const { data, error } = useSWR('/api/user', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    console.warn({ data })
    return (
        <div>
            hello {data.user.firstName} {data.user.lastName}!
        </div>
    )
}

export default function ProfilePage({ fallback }) {
    // SWR hooks inside the `SWRConfig` boundary will use those values.
    return (
        <SWRConfig>
            <Profile />
        </SWRConfig>
    )
}
