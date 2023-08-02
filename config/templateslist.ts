import { IconType } from 'react-icons'
import { FiFile, FiSlash } from 'react-icons/fi'

export interface TemplatesListProps {
    id: string
    url: string
    icon: IconType
}

export const templateslist: TemplatesListProps[] = [
    {
        id: 'HomePage',
        url: '/templates/home-page',
        icon: FiFile,
    },
    {
        id: 'ListPage',
        url: '/templates/list-page',
        icon: FiFile,
    },
    {
        id: 'ErrorPage',
        url: '/templates/error-page',
        icon: FiSlash,
    },
]
