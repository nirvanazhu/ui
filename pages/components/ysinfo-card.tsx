import type { NextPage } from 'next'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { GiChest } from 'react-icons/gi'
import { FiArrowLeft, FiGithub } from 'react-icons/fi'

const GenshinCardStat = ({
    stat,
    name,
}: {
    stat: number | string
    name: string
}) => (
    <div>
        <div className="font-bold text-xl sm:text-3xl font-mono">{stat}</div>
        <div className="opacity-80 text-xs uppercase tracking-wider">{name}</div>
    </div>
)

const UI: NextPage = () => {
    const randomGenshinBackground = () =>
        `https://quickview.aquanir.cc/assets/ys/${Math.floor(Math.random() * 28) + 1}.jpg`
    return (
    <>
        <Head>
            <title>Genshin Info Card - UI Library - 雨宫奈</title>
        </Head>

        <div className="my-4 container mx-auto max-w-3xl px-6">
            <h1 className="heading-text mt-8 font-serif text-4xl">Genshin Info Card</h1>
        </div>

        <div className="container border-2 border-dashed border-gray-400/60 flex flex-col mx-auto flex-1 max-w-3xl px-6 justify-center">
                <div className="relative shadow-lg p-4 rounded overflow-hidden text-white">
                    <div className="flex justify-between">
                        <div>
                            <div className="text-2xl font-mono font-bold">username</div>
                            <div className="font-mono text-sm opacity-80">
                                AR 60 / UID 100000000
                            </div>
                        </div>

                        <div className="text-right text-xs tracking-wider hidden sm:block">
                            <div className="opacity-60 uppercase">Server 天空岛</div>
                            <div className="font-mono mt-2 flex items-center space-x-1">
                                <GiChest className="inline text-orange-500" />
                                <span>999</span>
                                <GiChest className="inline text-orange-400" />
                                <span>999</span>
                                <GiChest className="inline text-orange-300" />
                                <span>9999</span>
                                <GiChest className="inline text-orange-200" />
                                <span>9999</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-6">
                        <GenshinCardStat
                            stat={`999`}
                            name={'Active days'}
                        />
                        <GenshinCardStat stat={`99`} name={'Characters'} />
                        <GenshinCardStat
                            stat={`999`}
                            name={'Achievements'}
                        />
                        <GenshinCardStat stat={`12-3`} name={'Spiral Abyss'} />
                        <GenshinCardStat
                            stat={`100%`}
                            name={'Exploration'}
                        />
                    </div>

                    <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full -z-10 bg-gradient-to-b from-white/20 via-white/0 to-white/40 dark:from-gray-800/20 dark:via-gray-800/40 dark:to-gray-800/40" />

                    <div className="absolute top-0 left-0 right-0 bottom-0 -z-20 bg-gray-800">
                        <Image
                            src={randomGenshinBackground()}
                            alt="Genshin Background"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="50% 60%"
                        />
                    </div>
                </div>

        </div>

        <div className="mt-4 container flex flex-col mx-auto flex-1 max-w-3xl px-6">
            <p className="secondary-text font-mono text-sm text-center">Component Area</p>

            <p className="primary-text text-base mt-8">This component is used in About page. Backgrounds are randomly displayed.</p>

            <p className="mt-8 leading-7 secondary-text inline-flex items-end">
                <Link href="/">
                    <a className="group inline-flex flex-wrap items-center">
                        <FiArrowLeft className="h-4 w-4 transition-all duration-150 group-hover:-translate-x-1" />
                        <span className="hover-links">Back</span>
                    </a>
                </Link>
                <p className="mx-2">/</p>
                <Link href="https://github.com/nirvanazhu/ui/tree/main/pages/components/ysinfo-card.tsx">
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
}

export default UI
