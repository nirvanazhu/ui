import type { NextPage } from 'next'

import Head from 'next/head'
import Link from 'next/link'
import { FiArrowLeft, FiGithub } from 'react-icons/fi'

const UI: NextPage<{
}> = () => (
    <>
        <Head>
            <title>Styled Fonts - UI Library - 雨宫奈</title>
        </Head>

        <div className="my-4 container mx-auto max-w-3xl px-6">
            <h1 className="heading-text mt-8 font-serif text-4xl">Styled Fonts</h1>
        </div>

        <div className="container border-2 border-dashed border-gray-400/60 flex flex-col mx-auto flex-1 max-w-3xl px-6 justify-center">
            <p className="heading-text font-serif text-4xl text-center mb-4">Heading Text</p>
            <p className="heading-text font-serif text-2xl text-center mb-4">Title Text</p>
            <p className="primary-text text-lg text-center mb-4">Primary Text</p>
            <p className="secondary-text text-base text-center mb-4">Secondary Text</p>
            <p className="secondary-text text-base font-mono text-center mb-4">Secondary Text Mono</p>
            <p className="secondary-text text-sm text-center mb-4">Captions</p>
            <p className="secondary-text text-sm font-mono text-center mb-4">Captions Mono</p>
            <p className="secondary-text text-xs text-center mb-4">Least Level Text</p>
            <p className="secondary-text text-xs font-mono text-center">Least Level Text Momo</p>
        </div>

        <div className="mt-4 container flex flex-col mx-auto flex-1 max-w-3xl px-6">
            <p className="secondary-text font-mono text-sm text-center">Component Area</p>

            <p className="primary-text text-base mt-8">Basic styled fonts for consistent design.</p>

            <p className="mt-8 leading-7 secondary-text inline-flex items-end">
                <Link href="/">
                    <a className="group inline-flex flex-wrap items-center">
                        <FiArrowLeft className="h-4 w-4 transition-all duration-150 group-hover:-translate-x-1" />
                        <span className="hover-links">Back</span>
                    </a>
                </Link>
                <p className="mx-2">/</p>
                <Link href="https://github.com/nirvanazhu/ui/tree/main/pages/components/fonts.tsx">
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
