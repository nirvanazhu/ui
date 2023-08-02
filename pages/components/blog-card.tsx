import type { NextPage } from 'next'

import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'
import { FiArrowLeft, FiGithub } from 'react-icons/fi'

const HoverCard = ({
    href,
    isExternal,
    headingSlot,
    iconSlot,
    children,
}: {
    href: string
    isExternal: boolean
    headingSlot: React.ReactNode
    iconSlot: React.ReactNode
    children: React.ReactNode
}) => {
    const aTagAttributes = isExternal
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {}
    const AsComponent = isExternal ? 'a' : Link

    return (
        <AsComponent href={href} {...aTagAttributes}>
            <div className="mb-6 border border-gray-400/30 cursor-pointer rounded block transition-all duration-150 hover:opacity-80 hover:shadow-lg">
                <div className="relative heading-text p-4 bg-white border-b border-gray-400/30 dark:bg-dark-900">
                    {headingSlot}
                    {iconSlot}
                </div>

                <div className="bg-light-300 p-4 dark:bg-dark-700">{children}</div>
            </div>
        </AsComponent>
    )
}

const UI: NextPage<{
}> = () => (
    <>
        <Head>
            <title>Blog Hover Card - UI Library - 雨宫奈</title>
        </Head>

        <div className="my-4 container mx-auto max-w-3xl px-6">
            <h1 className="heading-text mt-8 font-serif text-4xl">Blog Hover Card</h1>
        </div>

        <div className="container border-2 border-dashed border-gray-400/60 flex flex-col mx-auto flex-1 max-w-3xl px-6 justify-center">
            <HoverCard
                key="post.id"
                href="#"
                isExternal={false}
                headingSlot={
                    <span className="font-bold text-lg">
                        Blog Title
                    </span>
                }
                iconSlot={
                    <div className="absolute right-4 -bottom-4 text-2xl">
                        {'📚'}
                    </div>
                }
            >
                <div className="primary-text text-sm truncate">
                    Preview or summary text here
                </div>

                <div className="secondary-text flex flex-wrap items-center space-x-2 text-sm">
                    <span>
                        8/2/2023
                    </span>
                    <span>·</span>
                    <span>author</span>
                    <span>·</span>
                    <span>#tag</span>
                </div>
            </HoverCard>
        </div>

        <div className="mt-4 container flex flex-col mx-auto flex-1 max-w-3xl px-6">
            <p className="secondary-text font-mono text-sm text-center">Component Area</p>

            <p className="primary-text text-base mt-8">This component is used in my blog.</p>

            <p className="mt-8 leading-7 secondary-text inline-flex items-end">
                <Link href="/">
                    <a className="group inline-flex flex-wrap items-center">
                        <FiArrowLeft className="h-4 w-4 transition-all duration-150 group-hover:-translate-x-1" />
                        <span className="hover-links">Back</span>
                    </a>
                </Link>
                <p className="mx-2">/</p>
                <Link href="https://github.com/nirvanazhu/ui/tree/main/pages/components/blog-card.tsx">
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
