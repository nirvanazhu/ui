import type { NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'
import { FiArrowLeft } from 'react-icons/fi'

// import Comments from '../components/Comments'
import Link from 'next/link'
import { MomentsProps, moments } from '../config/moments'

const MsgCard = (props: MomentsProps) => {
  return (
      <div
        className="mb-6 flex items-start rounded overflow-hidden bg-light-300 p-4 transition-all duration-150 hover:shadow-lg hover:opacity-80 dark:bg-dark-700"
      >
        <div className="flex-none w-12 h-12">
          <Image
            src="https://cdn.nir.land/image/avatar.jpg"
            alt="Avatar"
            width={48}
            height={48}
            className="rounded-full flex-none w-12 h-12"
          />
        </div>
        <div className="ml-4">
          <div className="text-sm">雨宫奈
            <span className="ml-2 secondary-text text-sm">{props.date}</span>
          </div>
          <div className="text-base">{props.msg}</div>
          <div className="secondary-text text-xs mt-4">Mentioned:{` `}
          <a className="hover-links"
            href={props.link}
            target={props.linktarget}
            rel="noopener noreferrer"
          >{props.linkdisplay}
          </a>
          </div>
        </div>
      </div>
  )
}

const Moments: NextPage = () => {
  return (
    <>
      <Head>
        <title>Moments - 雨宫奈</title>
      </Head>

      <div className="container mx-auto max-w-3xl px-6">
        <h1 className="heading-text mb-8 font-serif text-4xl">Moments</h1>

        <p className="secondary-text my-8">
        🐦 Twitter is dead, I&apos;ll share my moments here instead.
        </p>

        <p className="secondary-text mb-8">
        🔔 Get notified for future updates:{` `}
        <a
            className="hover-links"
            href="https://t.me/aquanir"
            target="_blank"
            rel="noopener noreferrer"
          >
          @aquanir
          </a>
          .
        </p>

        <div className="mb-6 gap-4">
          {moments.map((moments: MomentsProps) => (
            <MsgCard key={moments.date} {...moments} />
          ))}
        </div>

        <p className="secondary-text text-center font-mono text-xs mt-4">
          - The End -
        </p>

        <p className="secondary-text my-8 text-center">
          💡 Want to leave your footprints? Go to{` `}
          <a
            className="hover-links"
            href="https://aquanir.cc/guestbook"
            target="_blank"
            rel="noopener noreferrer"
          >/guestbook
          </a>
          .
        </p>

        <Link href="/" passHref>
          <div className="group mt-4 flex cursor-pointer items-center justify-between rounded border border-gray-400/30 p-4 hover:bg-light-200 hover:opacity-80 dark:hover:bg-dark-700 md:-mx-4">
            <span>Back</span>
            <FiArrowLeft className="h-4 w-4 transition-all duration-150 group-hover:-translate-x-1" />
          </div>
        </Link>

      </div>

      <div className="flex-1" />
    </>
  )
}

export default Moments