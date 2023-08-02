import { FiBell, FiTool } from 'react-icons/fi'

const NoticeMessage = () =>
    <div className="flex inline-flex items-center justify-center">
        <div className="mt-4 inline-flex items-center border border-gray-700/60 dark:border-gray-300/60 p-1 rounded-full max-w-fit">
            <FiTool size={16} className="ml-4 mr-2" />
            <span className="mr-4 primary-text text-center">开发中页面，不代表最终效果</span>
        </div>
    </div>

export default NoticeMessage