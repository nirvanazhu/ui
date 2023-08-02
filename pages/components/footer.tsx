import type { NextPage } from 'next'

import Head from 'next/head'
import Link from 'next/link'
import { FiArrowLeft, FiGithub, FiThumbsUp, FiStopCircle, FiStar } from 'react-icons/fi'

const FooterExample = () => (
  <div className="primary-text p-6 text-center text-xs">
    <div className="my-2 inline-flex items-center space-x-2">
      <FiThumbsUp size={16} />
      <FiStopCircle size={16} />
      <FiStar size={16} />
    </div>
    <div>username &copy; past - future</div>
    <div>Any description here</div>
  </div>
)

const UI: NextPage<{
}> = () => (
  <>
    <Head>
      <title>Layout Footer - UI Library - 雨宫奈</title>
    </Head>

    <div className="my-4 container mx-auto max-w-3xl px-6">
      <h1 className="heading-text mt-8 font-serif text-4xl">Layout Footer</h1>
    </div>

    <div className="container border-2 border-dashed border-gray-400/60 flex flex-col mx-auto flex-1 max-w-3xl px-6 justify-center">
      <FooterExample />
    </div>

    <div className="mt-4 container flex flex-col mx-auto flex-1 max-w-3xl px-6">
      <p className="secondary-text font-mono text-sm text-center">Component Area</p>
      
      <p className="primary-text text-base mt-8">This is the footer component I use on my websites.</p>
      
      <p className="mt-8 leading-7 secondary-text inline-flex items-end">
        <Link href="/">
          <a className="group inline-flex flex-wrap items-center">
            <FiArrowLeft className="h-4 w-4 transition-all duration-150 group-hover:-translate-x-1" />
            <span className="hover-links">Back</span>
          </a>
        </Link>
        <p className="mx-2">/</p>
        <Link href="https://github.com/nirvanazhu/ui/tree/main/pages/components/footer.tsx">
          <a className="group inline-flex flex-wrap items-center space-x-1">
            <FiGithub />
            <span className="hover-links">Source</span>
          </a>
        </Link>
      </p>
    </div>
    <div className="flex-1" />
  </>
)

export default UI
