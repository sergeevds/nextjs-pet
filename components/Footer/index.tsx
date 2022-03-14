import Link from 'next/link'

import styles from '.footer.module.css'
import { LayoutProps } from '../Layout'

export interface FooterProps extends Pick<LayoutProps, 'home'> {}

export const Footer: React.FC<FooterProps> = ({ home = false }) => {
    return (
        !home && (
            <div className={styles.backToHome}>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
            </div>
        )
    )
}
