import type { NextPage } from 'next'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { FiArrowLeft, FiGithub } from 'react-icons/fi'

const UI: NextPage<{
}> = () => (
    <>
        <Head>
            <title>Message Card - UI Library - 雨宫奈</title>
        </Head>

        <div className="my-4 container mx-auto max-w-3xl px-6">
            <h1 className="heading-text mt-8 font-serif text-4xl">Message Card</h1>
        </div>

        <div className="container border-2 border-dashed border-gray-400/60 flex flex-col mx-auto flex-1 max-w-3xl px-6 justify-center">
            <div
                className="flex items-start rounded overflow-hidden bg-light-300 p-4 transition-all duration-150 hover:shadow-lg hover:opacity-80 dark:bg-dark-700"
            >
                <div className="flex-none w-12 h-12">
                    <Image
                        src="https://cdn.nir.land/image/home.png"
                        alt="Avatar"
                        width={48}
                        height={48}
                        className="rounded-full flex-none w-12 h-12"
                    />
                </div>
                <div className="ml-4">
                    <div className="text-sm">Username
                        <span className="ml-2 secondary-text text-sm">August 2, 2023</span>
                    </div>
                    <div className="text-base">Put your message here.</div>
                    <div className="secondary-text text-xs mt-4">Mentions:{` `}
                        <a className="hover-links"
                            href="#"
                            target="_self"
                            rel="noopener noreferrer"
                        >这帖没提到啊喂(#`Д´)ﾉ
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-4 container flex flex-col mx-auto flex-1 max-w-3xl px-6">
            <p className="secondary-text font-mono text-sm text-center">Component Area</p>

            <p className="primary-text text-base mt-8">This component is used in Moments page.</p>

            <p className="mt-8 leading-7 secondary-text inline-flex items-end">
                <Link href="/">
                    <a className="group inline-flex flex-wrap items-center">
                        <FiArrowLeft className="h-4 w-4 transition-all duration-150 group-hover:-translate-x-1" />
                        <span className="hover-links">Back</span>
                    </a>
                </Link>
                <p className="mx-2">/</p>
                <Link href="https://github.com/nirvanazhu/ui/tree/main/pages/components/msg-card.tsx">
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
