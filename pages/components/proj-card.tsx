import type { NextPage } from 'next'

import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'
import { FiArrowLeft, FiGithub } from 'react-icons/fi'
import { VscWindow } from 'react-icons/vsc'

const UI: NextPage<{
}> = () => (
    <>
        <Head>
            <title>ProjectCard - UI Library - 雨宫奈</title>
        </Head>

        <div className="my-4 container mx-auto max-w-3xl px-6">
            <h1 className="heading-text mt-8 font-serif text-4xl">Project Card</h1>
        </div>

        <div className="container border-2 border-dashed border-gray-400/60 flex flex-col mx-auto flex-1 max-w-3xl px-6 justify-center">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <a href="#" target="_self" rel="noopener noreferrer">
                    <div className="primary-text flex items-center justify-between rounded bg-light-300 p-4 space-x-4 transition-all duration-150 hover:opacity-80 hover:shadow-lg dark:bg-dark-700">
                        <div className="truncate">
                            <div className="font-bold">Project 1</div>
                            <div className="font-mono text-sm">Project Slug</div>
                        </div>
                        <VscWindow size={24} className="flex-shrink-0" />
                    </div>
                </a>
                <a href="#" target="_self" rel="noopener noreferrer">
                    <div className="primary-text flex items-center justify-between rounded bg-light-300 p-4 space-x-4 transition-all duration-150 hover:opacity-80 hover:shadow-lg dark:bg-dark-700">
                        <div className="truncate">
                            <div className="font-bold">Project 2</div>
                            <div className="font-mono text-sm">Project Slug</div>
                        </div>
                        <VscWindow size={24} className="flex-shrink-0" />
                    </div>
                </a>
                <a href="#" target="_self" rel="noopener noreferrer">
                    <div className="primary-text flex items-center justify-between rounded bg-light-300 p-4 space-x-4 transition-all duration-150 hover:opacity-80 hover:shadow-lg dark:bg-dark-700">
                        <div className="truncate">
                            <div className="font-bold">Project 3</div>
                            <div className="font-mono text-sm">Project Slug</div>
                        </div>
                        <VscWindow size={24} className="flex-shrink-0" />
                    </div>
                </a>
            </div>
        </div>

        <div className="mt-4 container flex flex-col mx-auto flex-1 max-w-3xl px-6">
            <p className="secondary-text font-mono test-sm text-center">Component Example</p>

            <p className="primary-text text-base mt-8">This component is used in UI Library home page.</p>

            <p className="mt-8 leading-7 secondary-text inline-flex items-end">
                <Link href="/">
                    <a className="group inline-flex flex-wrap items-center">
                        <FiArrowLeft className="h-4 w-4 transition-all duration-150 group-hover:-translate-x-1" />
                        <span className="hover-links">Back</span>
                    </a>
                </Link>
                <p className="mx-2">/</p>
                <Link href="https://github.com/nirvanazhu/ui/tree/main/pages/components/proj-card.tsx">
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
