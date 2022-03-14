import Image from 'next/image'
import utilStyles from '../../../styles/utils.module.css'

export interface HeroImageProps {
    alt?: string
    width: number
    height: number
}

export const HeroImage = ({ alt = '', width, height }: HeroImageProps) => (
    <Image
        priority
        src="/images/profile.jpg"
        className={utilStyles.borderCircle}
        alt={alt}
        width={width}
        height={height}
    />
)
