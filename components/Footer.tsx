import { SiNextdotjs, SiNotion, SiVercel, SiTailwindcss } from 'react-icons/si'

const Footer = () => (
  <footer className="primary-text p-6 text-center text-xs">
    <p className="my-2 secondary-text font-mono text-sm text-center">(Development version)</p>
    <div className="my-2 inline-flex items-center space-x-2">
      <SiNextdotjs size={16} />
      <SiTailwindcss size={16} />
      <SiNotion size={16} />
      <SiVercel size={16} />
    </div>
    <div>nirvanazhu &copy; 2020 - {new Date().getFullYear()}</div>
    <div>nirland™ is a trademark of nirvanazhu</div>
  </footer>
)

export default Footer
