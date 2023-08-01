import type { NextPage } from 'next'
import { FiArrowRight } from 'react-icons/fi'

import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'

const UI: NextPage<{
}> = () => (
    <>
        <Head>
            <title>UI Library - 雨宫奈</title>
        </Head>

        <div className="container flex flex-col mx-auto flex-1 max-w-3xl px-6 justify-center">
            <h1 className="heading-text text-center my-8 font-serif text-4xl">📦 UI Library</h1>

            <p className="mb-2 text-xl text-center leading-7">
                Components and page templates Library
            </p>

            <p className="mb-8 secondary-text text-base text-center leading-7">
                Used by my homepage, blog, moments, etc.
            </p>

            <p className="mt-8 text-center leading-7">
                <Link href="https://ui.aquanir.cc">
                    <a className="group inline-flex flex-wrap items-center">
                        <span className="hover-links">Check UI Library Website</span>
                        <FiArrowRight className="h-4 w-4 transition-all duration-100 group-hover:translate-x-1" />
                    </a>
                </Link>
            </p>
            <p className="mt-2 secondary-text font-mono text-sm text-center">(Development version)</p>
        </div>
    </>
)

export default UI
