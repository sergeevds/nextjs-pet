import styles from './layout.module.css'
import LayoutHead, { LayoutHeadProps } from './Head'
import Header from '../Header'
import { Footer } from '../Footer'

export type LayoutProps = LayoutHeadProps & {
    children: React.ReactNode
    home?: boolean
}

export default function Layout({ children, home = false, siteTitle = 'Sample Website' }: LayoutProps) {
    return (
        <div className={styles.container}>
            <LayoutHead siteTitle={siteTitle} />
            <Header />
            <main>{children}</main>
            <Footer home={home} />
        </div>
    )
}
