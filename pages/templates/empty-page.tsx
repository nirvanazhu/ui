import type { NextPage } from 'next'
// import { FiArrowLeft } from 'react-icons/fi'

import Head from 'next/head'
// import Link from 'next/link'
// import Image from 'next/image'

const UI: NextPage<{
}> = () => (
    <>
        <Head>
            <title>EmptyPage - UI Library - 雨宫奈</title>
        </Head>

        <div className="container mx-auto max-w-3xl px-6">
            <h1 className="heading-text mt-8 font-serif text-4xl">Empty Page</h1>
            <p className="mt-4 mb-2 primary-text text-lg">
                Put your description here.
            </p>

            <div className="heading-text font-serif text-2xl mt-6 mb-4">Title</div>
            <p className="primary-text text-base mb-1">Put your description here.</p>

        </div>
        <div className="flex-1" />
    </>
)

export default UI
