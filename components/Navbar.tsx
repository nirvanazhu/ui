import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { FiMenu, FiRss, FiPlusSquare, FiHome } from 'react-icons/fi'
// import { FiChevronDown } from 'react-icons/fi'
// import Toggle from './DarkToggle'

// import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const navigations = [
  {
    name: 'Blog',
    link: 'https://blog.nir.land',
  },
  {
    name: 'Moments',
    link: 'https://aquanir.cc/moments',
  },
  {
    name: 'Friends',
    link: 'https://blog.nir.land/friends',
  },
]

const navMore = [
  {
    name: 'About',
    link: 'https://nir.land/about',
  },
  {
    name: 'Playlist',
    link: 'https://aquanir.cc/playlist',
  },
  {
    name: 'GuestBook',
    link: 'https://aquanir.cc/guestbook',
  },
  {
    name: 'UI Startpage',
    link: 'https://aquanir.cc/ui',
  },
]

const navHome = [
  {
    name: 'Main Home',
    link: 'https://nir.land',
  },
  {
    name: 'Sub Home',
    link: 'https://aquanir.cc',
  },
  /*{
    name: 'Blog Index',
    link: 'https://blog.nir.land',
  },*/
  {
    name: 'UI Library',
    link: 'https://ui.aquanir.cc',
  },
]

/*
const isIndex = () => {
  const { asPath } = useRouter()
    if ( asPath === '/') return (
      <div className="p-2">
        <Menu as="div" className="relative text-left">
          <Menu.Button className="flex items-center text-current">
            <FiHome size={20} />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
          <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded bg-white shadow-lg grid divide-y divide-gray-400/30 dark:bg-dark-700 focus:outline-none">
            {navHome.map((n, i) => (
              <Menu.Item key={i}>
                <MenuItemLink href={n.link}>
                  <div className="p-2">{n.name}</div>
                </MenuItemLink>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
    )
  return (
    <Link href="/" passHref>
      <a className="nav-links">Home</a>
    </Link>
    )
  }
*/

const MenuItemLink = (props: { href: string; children: React.ReactNode }) => {
  const { href, children, ...rest } = props
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  )
}

const Navbar = () => {
  const { asPath } = useRouter()
  if (asPath === '/') return (
    <header className="primary-text z-10 flex items-center px-4 py-3 justify-between sticky top-0 backdrop-blur-lg bg-white/30 dark:bg-dark-900/50">
      <div className="p-2">
        <Menu as="div" className="relative text-left">
          <Menu.Button className="flex items-center text-current">
            <FiHome size={20} />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Menu.Items className="absolute left-0 mt-2 w-40 origin-top-left rounded bg-white shadow-lg grid divide-y divide-gray-400/30 dark:bg-dark-700 focus:outline-none">
              {navHome.map((n, i) => (
                <Menu.Item key={i}>
                  <MenuItemLink href={n.link}>
                    <div className="p-2">{n.name}</div>
                  </MenuItemLink>
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      <div className="flex items-center">
        <nav className="hidden items-center sm:flex">
          {navigations.map((n, i) => (
            <Link href={n.link} key={i} passHref>
              <a className="nav-links">{n.name}</a>
            </Link>
          ))}
        </nav>

        <div className="p-2 sm:hidden">
          <Menu as="div" className="relative text-left">
            <Menu.Button className="flex items-center text-current">
              <FiMenu size={20} />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded bg-white shadow-lg grid divide-y divide-gray-400/30 dark:bg-dark-700 focus:outline-none">
                {navigations.map((n, i) => (
                  <Menu.Item key={i}>
                    <MenuItemLink href={n.link}>
                      <div className="p-2">{n.name}</div>
                    </MenuItemLink>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div className="p-2">
          <Menu as="div" className="relative text-left">
            <Menu.Button className="flex items-center text-current">
              <FiPlusSquare size={20} />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded bg-white shadow-lg grid divide-y divide-gray-400/30 dark:bg-dark-700 focus:outline-none">
                {navMore.map((n, i) => (
                  <Menu.Item key={i}>
                    <MenuItemLink href={n.link}>
                      <div className="p-2">{n.name}</div>
                    </MenuItemLink>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <a
          href="https://blog.nir.land/feed"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-links"
        >
          <FiRss size={20} />
        </a>
      </div>
    </header>
  )

  return (
    <header className="primary-text z-10 flex items-center px-4 py-3 justify-between sticky top-0 backdrop-blur-lg bg-white/30 dark:bg-dark-900/50">
      <Link href="/" passHref>
        <a className="nav-links">
          <FiHome size={20} />
        </a>
      </Link>

      <div className="flex items-center">
        <nav className="hidden items-center sm:flex">
          {navigations.map((n, i) => (
            <Link href={n.link} key={i} passHref>
              <a className="nav-links">{n.name}</a>
            </Link>
          ))}
        </nav>

        <div className="p-2 sm:hidden">
          <Menu as="div" className="relative text-left">
            <Menu.Button className="flex items-center text-current">
              <FiMenu size={20} />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded bg-white shadow-lg grid divide-y divide-gray-400/30 dark:bg-dark-700 focus:outline-none">
                {navigations.map((n, i) => (
                  <Menu.Item key={i}>
                    <MenuItemLink href={n.link}>
                      <div className="p-2">{n.name}</div>
                    </MenuItemLink>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>

        <div className="p-2">
          <Menu as="div" className="relative text-left">
            <Menu.Button className="flex items-center text-current">
              <FiPlusSquare size={20} />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded bg-white shadow-lg grid divide-y divide-gray-400/30 dark:bg-dark-700 focus:outline-none">
                {navMore.map((n, i) => (
                  <Menu.Item key={i}>
                    <MenuItemLink href={n.link}>
                      <div className="p-2">{n.name}</div>
                    </MenuItemLink>
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <a
          href="https://blog.nir.land/feed"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-links"
        >
          <FiRss size={20} />
        </a>
      </div>
    </header>
  )
}

export default Navbar