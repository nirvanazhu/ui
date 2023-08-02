import { IconType } from 'react-icons'
import { FiAtSign, FiType, FiMessageSquare, FiBox, FiCreditCard, FiInfo } from 'react-icons/fi'

export interface ComponentsListProps {
    id: string
    url: string
    slug: string
    icon: IconType
}

export const componentslist: ComponentsListProps[] = [
    {
        id: 'Styled Fonts',
        url: '/components/fonts',
        slug: 'fonts',
        icon: FiType,
    },
    {
        id: 'Layout Footer',
        url: '/components/footer',
        slug: 'footer',
        icon: FiAtSign,
    },
    {
        id: 'Message Card',
        url: '/components/msg-card',
        slug: 'msg-card',
        icon: FiMessageSquare,
    },
    {
        id: 'Project Card',
        url: '/components/proj-card',
        slug: 'proj-card',
        icon: FiBox,
    },
    {
        id: 'Blog Card',
        url: '/components/blog-card',
        slug: 'blog-card',
        icon: FiCreditCard,
    },
    {
        id: 'Genshin Info Card',
        url: '/components/ysinfo-card',
        slug: 'ysinfo-card',
        icon: FiInfo,
    },
]
