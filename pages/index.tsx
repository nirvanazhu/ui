import type { NextPage } from 'next'
// import { FiArrowLeft } from 'react-icons/fi'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'
import { FiGithub, FiMoon } from 'react-icons/fi'

import Head from 'next/head'
// import Link from 'next/link'
// import Image from 'next/image'
import { ComponentsListProps, componentslist } from '../config/componentslist'
import { TemplatesListProps, templateslist } from '../config/templateslist'

const ComponentsListShowcase = (props: ComponentsListProps) => {
  return (
    <a href={props.url} target="_self" rel="noopener noreferrer">
      <div className="primary-text flex items-center justify-between rounded border-2 border-dashed border-gray-400/60 bg-light-300 p-4 space-x-4 hover:bg-light-500 dark:hover:bg-dark-300 dark:bg-dark-700">
        <div className="truncate">
          <div className="font-bold">{props.id}</div>
          <div className="font-mono text-sm">{props.slug}</div>
        </div>
        <props.icon size={24} className="flex-shrink-0" />
      </div>
    </a>
  )
}

const TemplatesListShowcase = (props: TemplatesListProps) => {
  return (
    <div className="secondary-text text-base mb-2">
      {`• `}
      <div className="inline-flex items-center space-x-1">
        <props.icon size={16} />
      <a className="hover-links"
        href={props.url}
        target="_self"
        rel="noopener noreferrer"
      >{props.id}
      </a>
      </div>
    </div>
  )
}

const UI: NextPage<{
}> = () => (
  <>
    <Head>
      <title>UI Library - 雨宫奈</title>
    </Head>

    <div className="container mx-auto max-w-3xl px-6">
      <div className="flex inline-flex items-end">
        <h1 className="heading-text mt-8 font-serif text-4xl">UI Library</h1>
        <p className="secondary-text text-base ml-2">Ver. 2</p>
      </div>
      
      <p className="mt-4 mb-2 primary-text text-lg">
        📦 Components and page templates Library
      </p>

      <div className="secondary-text text-base">
        Based on{` `}
        <div className="my-2 inline-flex items-center space-x-1">
          <SiNextdotjs size={16} />
          <a href="https://nextjs.org/">
            <span className="hover-links ">
              Next.js
            </span>
          </a>
        </div>
        <span className="mx-2">and</span>
          <div className="my-2 inline-flex items-center space-x-1">
            <SiTailwindcss size={16} />
            <a href="https://tailwindcss.com/">
              <span className="hover-links ">
                Tailwind CSS
              </span>
            </a>
          </div>
      </div>

      <div className="heading-text font-serif text-2xl mt-6 mb-4">Components</div>

      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {componentslist.map((componentslist: ComponentsListProps) => (
          <ComponentsListShowcase key={componentslist.id} {...componentslist} />
        ))}
      </div>

      <div className="heading-text font-serif text-2xl mt-6 mb-4">Templates</div>

      <div className="secondary-text font-mono text-base mb-4">
        <div>
          {templateslist.map((templateslist: TemplatesListProps) => (
            <TemplatesListShowcase key={templateslist.id} {...templateslist} />
          ))}
        </div>
      </div>

      <p className="secondary-text font-mono text-xs mt-6">
        More to come...
      </p>

      <div className="heading-text font-serif text-2xl mt-6 mb-4">About</div>
      <p className="primary-text text-base mb-1">The consistent design resources that I use to build my websites.</p>
      <p className="primary-text text-base">
        This project is open source. Check it on{` `}
        <div className="inline-flex items-center space-x-1">
          <FiGithub size={16} />
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/nirvanazhu/ui">
            <span className="hover-links ">
              GitHub
            </span>
          </a>
        </div>
        .
      </p>

      <div className="secondary-text mb-4 text-sm">
        <div className="my-2 inline-flex items-center space-x-1">
          <FiMoon size={12} />
          <div className="mx-1"> </div>
          Dark mode included
        </div>
      </div>

    </div>
    <div className="flex-1" />
  </>
)

export default UI
