import Link from 'next/link'

import styles from './header.module.css'
import utilStyles from '../../styles/utils.module.css'
import { HeroImage } from './styled/HeroImage'
import { LayoutProps } from '../Layout'

export const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

export interface HeaderProps extends Pick<LayoutProps, 'home'> {}

export default function Header({ home = false }: HeaderProps) {
    return (
        <header className={styles.header}>
            {home ? (
                <>
                    <HeroImage height={144} width={144} alt={name} />
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
            ) : (
                <>
                    <Link href="/">
                        <a>
                            <HeroImage height={108} width={108} alt={name} />
                        </a>
                    </Link>
                    <h2 className={utilStyles.headingLg}>
                        <Link href="/">
                            <a className={utilStyles.colorInherit}>{name}</a>
                        </Link>
                    </h2>
                </>
            )}
        </header>
    )
}
