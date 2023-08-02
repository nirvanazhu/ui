import { IconType } from 'react-icons'
import { FiFile, FiUser, FiList, FiSlash } from 'react-icons/fi'

export interface TemplatesListProps {
    id: string
    url: string
    icon: IconType
}

export const templateslist: TemplatesListProps[] = [
    {
        id: 'UserPage',
        url: '/templates/user-page',
        icon: FiUser,
    },
    {
        id: 'ListPage',
        url: '/templates/list-page',
        icon: FiList,
    },
    {
        id: 'EmptyPage',
        url: '/templates/empty-page',
        icon: FiFile,
    },
    {
        id: 'ErrorPage',
        url: '/templates/error-page',
        icon: FiSlash,
    },
]
