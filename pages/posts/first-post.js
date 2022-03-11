import Link from 'next/link'

import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'

const ProfileImage = () => (
    <Image
        src="/images/profile.jpg" // Route of the image file
        height={144} // Desired size with correct aspect ratio
        width={144} // Desired size with correct aspect ratio
        alt="Profile"
    />
)

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() => console.warn(`script loaded correctly, window.FB has been populated`)}
            />
            <h1>First Post</h1>
            <ProfileImage />
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    console.warn('>>> First Post getServerSideProps >>>', { context })
    return {
        props: {
            // props for your component
        },
    }
}
