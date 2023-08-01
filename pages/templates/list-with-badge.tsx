import type { NextPage } from 'next'

import Head from 'next/head'
import { FiArrowLeft } from 'react-icons/fi'

import Link from 'next/link'

const Playlist: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>ListWithBadge - UI Library - 雨宫奈</title>
      </Head>

      <div className="flex flex-col min-h-screen">
        <main className="container flex flex-col mx-auto flex-1 max-w-3xl px-6">
        <h1 className="heading-text my-8 font-serif text-4xl">ListWithBadge</h1>

        <p className="secondary-text mb-12">
        💡 You can put announcement here.
        </p>

        <a
            href="#"
            target="_self"
            rel="noopener noreferrer"
            className="border border-gray-400/30 rounded -m-2 p-2 hover:bg-light-200 dark:hover:bg-dark-700"
          >
            <div className="flex flex-wrap font-mono text-xs mb-1 gap-1 uppercase">
              <span className="rounded-full border border-purple-300 px-2">Badge1</span>
              <span className="rounded-full border border-green-300 px-2">Badge2</span>
            </div>
            <h2 className="font-bold primary-text">
            List.Name.1
            </h2>
            <div className="text-sm secondary-text">
            <span className="font-bold">ID1*</span>, desp.
            </div>
          </a>

          <div className="mb-8"></div>

          <a
            href="#"
            target="_self"
            rel="noopener noreferrer"
            className="border border-gray-400/30 rounded -m-2 p-2 hover:bg-light-200 dark:hover:bg-dark-700"
          >
            <div className="flex flex-wrap font-mono text-xs mb-1 gap-1 uppercase">
              <span className="rounded-full border border-blue-300 px-2">Badge3</span>
              <span className="rounded-full border border-red-300 px-2">Badge4</span>
            </div>
            <h2 className="font-bold primary-text">
            List.Name.2
            </h2>
            <div className="text-sm secondary-text">
            ID1, <span className="font-bold">ID2*</span>, desp.
            </div>
          </a>

          <p className="mt-8 font-mono text-xs">
            <abbr title="💡 Put text here">More to come...</abbr>
          </p>

          <Link href="/" passHref>
          <div className="group mt-8 flex cursor-pointer items-center justify-between rounded border border-gray-400/30 p-4 hover:bg-light-200 hover:opacity-80 dark:hover:bg-dark-700 md:-mx-4">
            <span>Back</span>
            <FiArrowLeft className="h-4 w-4 transition-all duration-150 group-hover:-translate-x-1" />
          </div>
        </Link>

        </main>
      </div>
    </div>
  )
}

export default Playlist