import { IconType } from 'react-icons'
import { VscLayoutMenubar, VscComment, VscNote } from 'react-icons/vsc'

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
        icon: VscLayoutMenubar,
    },
    {
        id: 'Message Card',
        url: '/components/msg-card',
        slug: 'msg-card',
        icon: VscComment,
    },
    {
        id: 'Project Card',
        url: '/components/proj-card',
        slug: 'proj-card',
        icon: VscNote,
    },
]
