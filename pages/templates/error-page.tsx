import type { NextPage } from 'next'
import { FiArrowLeft } from 'react-icons/fi'

import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'

const NotFound: NextPage<{
}> = () => (
    <>
        <Head>
            <title>Error Page - UI Library - 雨宫奈</title>
        </Head>

        <div className="container flex flex-col mx-auto flex-1 max-w-3xl px-6 justify-center">
            <h1 className="heading-text text-center my-8 font-serif text-4xl">Error Page</h1>

            <p className="mb-8 text-center leading-7">
                Error message should be placed here.
            </p>

            <p className="mt-8 text-center leading-7">
                <Link href="/">
                    <a className="group inline-flex flex-wrap items-center">
                        <FiArrowLeft className="h-4 w-4 transition-all duration-150 group-hover:-translate-x-1" />
                        <span className="hover-links">Back to homepage</span>
                    </a>
                </Link>
            </p>
        </div>
    </>
)

export default NotFound
