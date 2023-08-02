import { IconType } from 'react-icons'
import { FiLayout, FiMessageSquare, FiCreditCard } from 'react-icons/fi'

export interface ComponentsListProps {
    id: string
    url: string
    slug: string
    icon: IconType
}

export const componentslist: ComponentsListProps[] = [
    {
        id: 'Base Container',
        url: '/components/container',
        slug: 'container',
        icon: FiLayout,
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
        icon: FiCreditCard,
    },
]
