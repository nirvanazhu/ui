import type { NextPage } from 'next'
// import { FiArrowLeft } from 'react-icons/fi'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'

import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'
import { ComponentsListProps, componentslist } from '../config/componentslist'
import { TemplatesListProps, templateslist } from '../config/templateslist'

const ComponentsListShowcase = (props: ComponentsListProps) => {
  return (
        <div className="secondary-text text-base mb-2">
          {`• `}
          <a className="hover-links"
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
          >{props.id}
          </a>
        </div>
  )
}

const TemplatesListShowcase = (props: TemplatesListProps) => {
  return (
    <div className="secondary-text text-base mb-2">
      {`• `}
      <a className="hover-links"
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
      >{props.id}
      </a>
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
      <h1 className="heading-text mt-8 font-serif text-4xl">UI Library</h1>
      <p className="mt-4 mb-2 primary-text text-lg">
        📦 Components and page templates Library
      </p>

      <div className="secondary-text mt-4 mb-8 text-base">
        Based on{` `}
        <div className="my-2 inline-flex items-center space-x-1">
          <SiNextdotjs size={16} />
          <Link href="https://nextjs.org/">
            <span className="hover-links ">
              Next.js
            </span>
          </Link>
        </div>
        <span className="mx-2">and</span>
          <div className="my-2 inline-flex items-center space-x-1">
            <SiTailwindcss size={16} />
            <Link href="https://tailwindcss.com/">
              <span className="hover-links ">
                Tailwind CSS
              </span>
            </Link>
          </div>
      </div>

      <div className="heading-text font-serif text-2xl mb-4">Components</div>

      <div className="secondary-text font-mono text-base mb-4">
        <div>
          {componentslist.map((componentslist: ComponentsListProps) => (
            <ComponentsListShowcase key={componentslist.id} {...componentslist} />
          ))}
        </div>
      </div>

      <div className="heading-text font-serif text-2xl mb-4">Templates</div>

      <div className="secondary-text font-mono text-base mb-4">
        <div>
          {templateslist.map((templateslist: TemplatesListProps) => (
            <TemplatesListShowcase key={templateslist.id} {...templateslist} />
          ))}
        </div>
      </div>

      <p className="secondary-text font-mono text-xs mt-8">
        More to come...
      </p>
      
      <div className="mt-20 mb-8 text-center leading-7">
        开发中版本，不代表最终效果。当前素材库内容不全。
      </div>

    </div>
    <div className="flex-1" />
  </>
)

export default UI
