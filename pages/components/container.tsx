import type { NextPage } from 'next'

import Head from 'next/head'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

const UI: NextPage<{
}> = () => (
  <>
    <Head>
      <title>Base Container - UI Library - 雨宫奈</title>
    </Head>

    <div className="my-4 container mx-auto max-w-3xl px-6">
      <h1 className="heading-text mt-8 font-serif text-4xl">Container</h1>
    </div>

    <div className="container border border-dashed border-indigo-400/80 flex flex-col mx-auto flex-1 max-w-3xl px-6 justify-center">
        <div className="mt-20"></div>
    </div>

    <div className="mt-4 container flex flex-col mx-auto flex-1 max-w-3xl px-6">
      <p className="secondary-text font-mono test-sm text-center">Base Container</p>
      <p className="mt-8 leading-7 secondary-text">
        <Link href="/">
          <a className="group inline-flex flex-wrap items-center">
            <FiArrowLeft className="h-4 w-4 transition-all duration-150 group-hover:-translate-x-1" />
            <span className="hover-links">Back</span>
          </a>
        </Link>
      </p>
    </div>
    <div className="flex-1" />
  </>
)

export default UI
